import { useState, useRef, useEffect, useCallback, type MouseEvent, type ChangeEvent } from 'react';
import { Play, Pause, Download, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  downloadName?: string;
  preacher?: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function AudioPlayer({ src, title, downloadName, preacher }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  /* ── Handlers ── */

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPlaying]);

  const handleSeek = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const bar = progressRef.current;
    if (!audio || !bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  }, [duration]);

  const skip = useCallback((seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
  }, [duration]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleVolumeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.volume = val;
    setVolume(val);
    setIsMuted(val === 0);
  }, []);

  /* ── Audio events ── */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const onLoaded = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('durationchange', onLoaded);
    audio.addEventListener('waiting', onWaiting);
    audio.addEventListener('canplay', onCanPlay);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('durationchange', onLoaded);
      audio.removeEventListener('waiting', onWaiting);
      audio.removeEventListener('canplay', onCanPlay);
    };
  }, [isDragging]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  /* ── Keyboard shortcut: Space to play/pause ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.code === 'Space' &&
        document.activeElement?.closest('[data-audioplayer]')
      ) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [togglePlay]);

  return (
    <div
      data-audioplayer
      className="bg-slate-100 rounded-lg overflow-hidden"
    >
      {/* Hidden native audio */}
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Header strip */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-slate-200">
        {/* Animated waveform when playing */}
        <div className="flex items-end gap-[3px] h-4 shrink-0">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-[3px] bg-ibcd-blue rounded-full transition-all duration-150 ${
                isPlaying ? 'animate-bounce' : 'h-[4px]'
              }`}
              style={
                isPlaying
                  ? { animationDelay: `${i * 80}ms`, height: `${8 + i * 3}px` }
                  : { height: '4px' }
              }
            />
          ))}
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 truncate flex-1">
          {title ?? 'Audio del sermón'} {preacher && `— ${preacher}`}
        </span>

        {/* Download */}
        {src && (
          <a
            href={src}
            download={downloadName ?? 'sermon.mp3'}
            className="text-slate-400 hover:text-slate-800 transition-colors outline-none focus-visible:text-ibcd-blue"
            title="Descargar MP3"
          >
            <Download size={15} />
          </a>
        )}
      </div>

      {/* Controls */}
      <div className="px-5 py-4 flex flex-col gap-4">

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-slate-500 tabular-nums w-8 text-right shrink-0">
            {formatTime(currentTime)}
          </span>

          <div
            ref={progressRef}
            className="relative flex-1 h-1 bg-slate-300 rounded-full cursor-pointer group"
            onClick={handleSeek}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            role="slider"
            aria-label="Progreso del audio"
            aria-valuenow={Math.round(currentTime)}
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') skip(5);
              if (e.key === 'ArrowLeft') skip(-5);
            }}
          >
            {/* Filled track */}
            <div
              className="absolute inset-y-0 left-0 bg-ibcd-blue rounded-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ibcd-blue shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${progress}%` }}
            />
          </div>

          <span className="text-[11px] font-mono text-slate-500 tabular-nums w-8 shrink-0">
            {formatTime(duration)}
          </span>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between">

          {/* Playback controls */}
          <div className="flex items-center gap-1">
            {/* Skip back 10s */}
            <button
              onClick={() => skip(-10)}
              className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue"
              title="Retroceder 10 segundos"
              aria-label="Retroceder 10 segundos"
            >
              <SkipBack size={16} />
            </button>

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-ibcd-blue hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 disabled:opacity-50 disabled:cursor-wait"
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isLoading ? (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              ) : isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            {/* Skip forward 30s */}
            <button
              onClick={() => skip(30)}
              className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue"
              title="Avanzar 30 segundos"
              aria-label="Avanzar 30 segundos"
            >
              <SkipForward size={16} />
            </button>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-slate-400 hover:text-slate-900 transition-colors outline-none focus-visible:text-ibcd-blue"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 accent-ibcd-blue cursor-pointer"
              aria-label="Volumen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
