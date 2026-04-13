import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowUpRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from './components/Logo';

export default function Creencias() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const beliefs = [
    {
      title: "I. De las Escrituras",
      content: "Creemos que la Santa Biblia fue escrita por hombres divinamente inspirados y que es un tesoro perfecto de instrucción divina; Dios es su autor, la salvación es su fin y es la verdad sin ningún tipo de error en todo lo que dice y sin ningún tipo de error en su contenido. La Biblia revela los principios por los cuales Dios nos juzgará y, por lo tanto, es y permanecerá siendo hasta el fin del mundo el verdadero centro de la unión cristiana, y la regla suprema por la cual toda conducta humana, credos y opiniones deben ser probados.\n\n2 Ti. 3:16, 17; 2 P. 1:21; 2 S. 23:2; Hch. 1:16; Pr. 30:5, 6; Jn 17:17; Ro. 3:4; Ap. 22:18, 19; Ro. 2:12; 1 Co. 4:3, 4; Lc. 10:10-16; 12:47, 48."
    },
    {
      title: "II. Del Dios Verdadero",
      content: "Creemos que solo existe un solo Dios, el único Dios vivo y verdadero, es un Espíritu eterno, personal, e inteligente, y su nombre es YAHWEH, el Creador, Gobernador Supremo del universo; inefablemente glorioso en santidad y digno del más elevado honor, obediencia y amor; en la unidad de Dios existen tres personas: el Padre, el Hijo y el Espíritu Santo; iguales en divina perfección y ejecutando distintos, pero armoniosos, oficios en la gran obra de redención.\n\nJn. 4:24; Sal. 147:5; He. 3:4; Ro. 1:20; Jer. 10:10; Éx. 15:11; Is. 6:3; 1 P. 1:16; Ap. 4:6-8; Mr. 12:30; Ap. 4:11; Mt. 10:37; Jer. 2:12, 13; Mt. 28:19; Jn. 15:26; 1 Co. 12:4-6."
    },
    {
      title: "III. De la Caída del Hombre",
      content: "Creemos que el hombre fue creado en santidad, sujeto a la ley de su Creador; pero, por transgresión voluntaria, el hombre cayó de tal santidad y estado de felicidad. En consecuencia, toda la humanidad es ahora pecadora, no por fuerza sino por elección. El hombre está entonces, por naturaleza, desprovisto de la santidad que requiere la ley de Dios, inclinado al mal y, por lo tanto, bajo justa condenación a la ruina eterna, sin defensa ni excusa.\n\nGn. 1:27; Gn. 1:31; Ec. 7:29; Hch. 17:26-29; Gn. 2:16-17; Gn. 3:6-24; Ro. 5:12; Ro. 5:15-19; Sal. 51:5; Ro. 8:7; Is. 53:6; Gn. 6:12; Ro. 3:9-18; Ef. 2:1-3; Ro. 1:18,32; Ro. 2:1-16; Gá. 3:10; Mt. 20:15; Ez. 18:19-20; Ro. 1:20; Ro. 3:19; Gá. 3:22."
    },
    {
      title: "IV. Del Modo de la Salvación",
      content: "Creemos que la salvación de los pecadores es totalmente por gracia a través de la obra mediadora del Hijo de Dios, el cual, por elección del Padre, voluntariamente tomó sobre Él nuestra naturaleza, aunque sin pecado; honró la ley divina con su obediencia personal, y por su muerte hizo completa expiación por nuestros pecados. Habiendo resucitado de los muertos, ahora está en el Cielo sentado en el trono y, reuniendo en su maravillosa persona las más tiernas simpatías de perfección divina, está calificado en todos los aspectos para ser un Salvador idóneo, compasivo y todo suficiente.\n\nEf. 2:3; Mt. 18:11; 1 Jn. 4:10; 1 Co. 3:5-7; Hch. 15:11; Jn. 3:16; Jn. 1:1-14; Heb. 4:14; Heb. 12:24; Fil. 2:9,14; 2 Co. 5:21; Is. 42:21; Fil. 2:8; Gá. 4:4-5; Ro. 3:21; Is. 53:4-5; Mt. 20:28; Ro. 4:25; Ro. 3:21-26; 1 Jn. 2:3; 1 Co. 15:1-3; Heb. 9:13-15; Heb. 1:8; Heb. 1:3; Col. 3:1-4; Heb. 7:25; Col. 2:18; Heb. 7:26; Sal. 89:19; Sal. 34."
    },
    {
      title: "V. De la Justificación",
      content: "Creemos que la gran bendición del Evangelio que Cristo les asegura a los que creen en Él es la Justificación; esa justificación incluye el perdón del pecado y la promesa de vida eterna en los principios de la justicia; que la misma es imputada, no en consideración de las buenas obras que pudimos haber hecho, sino únicamente a través de la fe en la sangre del Redentor; en virtud de dicha fe, Su justicia perfecta nos es imputada gratuitamente por Dios; que esta fe nos trae a un estado de bendita paz y favor con Dios, y nos asegura toda otra bendición que sea necesaria en este tiempo y por la eternidad.\n\nJn. 1:16; Ef. 3:8; Hch. 13:39; Is. 53:11-12; Ro. 5:1-2; Ro. 5:9; Zac. 13:1; Mt. 9:6; Hch. 10:43; Ro. 5:17; Tito 3:5-7; 1 P. 3:7; 1 Jn. 2:25; Ro. 5:21; Ro. 4:4-5; Ro. 6:23; Fil. 3:7-9; Ro. 5:19; Ro. 3:24-26; Ro. 4:23-25; 1 Jn. 2:12; Ro. 5:3; Ro. 5:11; 1 Co. 1:30-31; Mt. 6:33; 1 Ti. 4:8."
    },
    {
      title: "VI. Del Ofrecimiento Gratuito de la Salvación",
      content: "Creemos que las bendiciones de la salvación se encuentran disponibles para todos a través del Evangelio; que es el deber inmediato de todos aceptarlas por una fe sincera, arrepentida y obediente; y que nada impide la salvación del más grande pecador sobre la tierra, sino su propia depravación inherente y su rechazo voluntario del Evangelio; dicho rechazo lo envuelve en una condenación mayor.\n\nIs. 55:1; Ap. 22:17; Ro. 16:25-26; Mc. 1:15; Ro. 1:15-17; Jn. 5:40; Mt. 23:37; Ro. 9:32; Pr. 1:24; Hch. 13:46; Jn. 3:19; Mt. 11:20; Lc. 10:27; 2 Ts. 1:8."
    },
    {
      title: "VII. De la Gracia en la Regeneración",
      content: "Creemos que, para ser salvos, los pecadores deben ser regenerados o nacidos de nuevo; que la regeneración consiste en proveer una sana disposición de la mente, lo cual es efectuado en una manera que va más allá de nuestra comprensión, por el poder del Espíritu Santo en conexión con la verdad divina para asegurar nuestra obediencia voluntaria al evangelio; y que la evidencia apropiada aparece en los santos frutos de arrepentimiento, fe y nueva vida.\n\nJn. 3:3; Jn. 3:6-7; 1 Co. 3:14; Ap. 14:3; Ap. 21:27; 2 Co. 5:17; Ez. 36:26; Dt. 30:6; Ro. 2:28-29; Ro. 5:5; 1 Jn. 4:7; Jn. 3:8; Jn. 1:13; Stg. 1:16-18; 1 Co. 1:30; Fil. 2:13; 1 P. 1:22-25; 1 Jn. 5:1; Ef. 4:20-24; Col. 3:9-11; Ef. 5:9; Ro. 8:9; Gá. 5:16-23; Ef. 3:14-21; Mt. 3:8-10; Mt. 7:20; 1 Jn. 5:4, 18."
    },
    {
      title: "VIII. Del Arrepentimiento y la Fe",
      content: "Creemos que el arrepentimiento y la fe son deberes sagrados y también gracias inseparables, cultivadas en el alma por el Espíritu regenerador de Dios; siendo profundamente convencidos de culpa, peligro e impotencia, y del medio de salvación a través de Cristo, nos volvemos a Dios con contrición sincera, confesión y súplica por misericordia; al mismo tiempo, recibimos al Señor Jesucristo como nuestro Profeta, Sacerdote y Rey, confiando en Él como el único y suficiente Salvador.\n\nMc. 1:15; Hch. 11:18; Ef. 2:8; 1 Jn. 5:1; Jn. 16:8; Hch. 2:37-38; Hch. 16:30-31; Lc. 18:13; Lc. 15:18-21; Stg. 4:7-10; 2 Co. 7:11; 1 Ti. 6:12-13; Sal. 51; Ro. 10:9-11; Hch. 3:22-23; Heb. 4:14; Sal. 2:6; Heb. 1:8; Heb. 7:25; 2 Ti. 1:12."
    },
    {
      title: "IX. Del Propósito de la Gracia de Dios",
      content: "Creemos que la Elección es el propósito eterno de Dios, a través de la cual Él por gracia regenera, santifica y salva a los pecadores; esto es perfectamente compatible con el libre albedrío del hombre; que comprende todos los medios en relación con el fin; que es la más gloriosa muestra de la bondad soberana de Dios, siendo infinitamente libre, sabio, santo e inmutable; que excluye totalmente la jactancia y promueve la humildad, el amor, la oración, la alabanza, la confianza en Dios y la imitación activa de su misericordia gratuita; que alienta el uso de los medios del más alto nivel; que puede comprobarse por sus efectos en todos los que verdaderamente creen en el Evangelio; que es el fundamento de la seguridad cristiana y comprobarlo respecto a nosotros mismos demanda y merece nuestra mayor diligencia.\n\n2 Ti. 1:8-9; Ef. 1:3-14; 1 P. 1:1-2; Ro. 11:5-6; Jn. 15:16; 1 Jn. 4:19; 2 Ts. 2:13-14; Hch. 13:48; Jn. 10:16; Mt. 20:16; Hch. 15:14; Éx. 33:18-19; Mt. 20:15; Ef. 1:11; Ro. 9:23-24; Jer. 31:3; Ro. 11:28-29; Stg. 1:17-18; 2 Ti. 1:9; Ro. 11:32-36; 1 Co. 1:26-31; Ro. 3:27; Ro. 4:16; Col. 3:12; 1 Co. 3:5-7; 1 Co. 15:10; 1 P. 5:10; Hch. 1:24; 1 Ts. 2:13; 1 P. 2:9; Lc. 18:7; 1 Ts. 2:12; 2 Ti. 2:10; 1 Co. 9:22; Ro. 8:28-30; Jn. 6:37-40; 1 Ts. 1:4-10; Is. 42:16; 2 P. 1:10-11; Fil. 3:12; Heb. 6:11."
    },
    {
      title: "X. De la Santificación",
      content: "Creemos que la santificación es el proceso por el cual, de acuerdo a la voluntad de Dios, somos hechos partícipes de Su santidad; que es una obra progresiva que empezó en la regeneración y es llevada a cabo en el corazón de los creyentes por la presencia y el poder del Espíritu Santo, el Consolador, en uso continuo de los medios designados ―especialmente la Palabra de Dios, el auto-examen, la auto-negación, vigilancia y oración.\n\n1 Ts. 4:3; 1 Ts. 5:23; 2 Co. 7:1; 2 Co. 13:10; Fil. 3:12-16; 1 Jn. 2:29; Ro. 8:5; Ef. 1:4; Pr. 4:18; 2 Co. 3:18; Heb. 6:1; 2 P. 1:5-8; Jn. 3:6; Fil. 1:9-11; Ef. 1:13-14; Fil. 2:12-13; Ef. 4:11-12; 1 P. 2:2; 2 P. 3:18; 2 Co. 13:5; Lc. 11:35; Lc. 9:23; Mt. 26:41; Ef. 6:18; Ef. 4:30."
    },
    {
      title: "XI. De la Perseverancia de los Santos",
      content: "Creemos que sólo los creyentes verdaderos perseveran hasta el fin; que su unión perseverante a Cristo es la gran marca que los distingue de los profesantes superficiales; que una Providencia especial vela por su bienestar y que son guardados por el poder de Dios mediante la fe para salvación.\n\nJn. 8:31; 1 Jn. 2:27-28; 1 Jn. 3:9; 1 Jn. 5:18; 1 Jn. 2:19; Jn. 13:18; Mt. 13:20-21; Jn. 6:66-69; Job 17:9; Ro. 8:28; Mt. 6:30-33; Jer. 32:40; Sal. 121:3; Sal. 91:11-12; Fil. 1:6; Fil. 2:13; Jud. 24-25; Heb. 1:14; 2 Re. 6:16; Heb. 13:5; 1 Jn. 4:4."
    },
    {
      title: "XII. De la Armonía entre la Ley y el Evangelio",
      content: "Creemos que la Ley de Dios es la regla eterna e inmutable de su gobierno moral; que es santa, justa y buena; que la inhabilidad que la Escritura asigna al hombre pecador en cumplir sus preceptos se levanta enteramente de su amor por el pecado; que el librarlo de esto y restaurarlo a través del Mediador a una obediencia no fingida a la Ley santa, es uno de los grandes propósitos del Evangelio y de los Medios de la Gracia conectados con el establecimiento de la iglesia visible.\n\nRo. 3:31; Mt. 5:17; Lc. 16:17; Ro. 3:20; Ro. 4:15; Ro. 7:12; Ro. 7:7,14-22; Gá. 3:21; Sal. 119; Ro. 8:7-8; Jos. 24:19; Jer. 13:23; Jn. 6:44; Jn. 5:44; Ro. 8:2-4; Ro. 10:4; 1 Ti. 1:5; Heb. 8:10; Jud. 20-21."
    },
    {
      title: "XIII. De la Iglesia Evangélica",
      content: "Creemos que una iglesia visible de Cristo es una congregación de creyentes bautizados, asociados por un pacto en la fe y comunión en el Evangelio; observando las ordenanzas de Cristo, gobernados por Sus leyes y ejerciendo los dones, derechos y privilegios investidos en ellos por medio de su palabra; que sus únicos oficiales bíblicos son los ancianos (también llamados obispos o pastores) y diáconos, cuyas afirmaciones/demandas, calificaciones y funciones están especificadas en las Epístolas a Timoteo y Tito.\n\n1 Co. 1:1-3; Mt. 18:17; Hch. 5:11; Hch. 8:1; Hch. 11:21-23; 1 Co. 4:17; 1 Co. 14:23; 3 Jn. 9; 1 Ti. 3:5; Hch. 2:41-42; 2 Co. 8:5; Hch. 2:47; 1 Co. 5:12-13; 1 Co. 11:2; 2 Ts. 3:6; Ro. 16:17-20; 1 Co. 11:23-24; Mt. 18:15-20; 1 Co. 5:6; 2 Co. 2:17; Mt. 28:20; Jn. 14:15; Jn. 15:12; 1 Jn. 2:21; 1 Ts. 4:2; 2 Jn. 6; Gá. 6:2; Ef. 4:7; 1 Co. 14:12; Fil. 1:1; Hch. 14:23; Hch. 15:22; 1 Ti. 3; Tito 1."
    },
    {
      title: "XIV. Del Bautismo y la Cena del Señor",
      content: "Creemos que el bautismo cristiano es la inmersión de un creyente en agua, en el nombre del Padre, del Hijo y del Espíritu Santo, para mostrar así en un emblema solemne y hermoso nuestra fe en el crucificado, enterrado y resucitado Salvador, con sus efectos en nuestra muerte al pecado y resurrección a una nueva vida; que es requisito previo para los privilegios de una relación eclesiástica y para la Cena del Señor, en la cual los miembros de la iglesia, por el sagrado uso del pan y del vino, han de conmemorar juntos el amor agonizante de Cristo, precedido siempre por un solemne auto-examen.\n\nHch. 8:36-39; Mt. 3:5-6; Jn. 3:22-23; Jn. 4:12; Mt. 28:19-20; Mc. 16:16; Hch. 2:38; Hch. 8:12; Hch. 16:32-34; Hch. 18:8; Hch. 10:47-48; Gá. 3:26-28; Ro. 6:4; Col. 2:12; 1 P. 3:20-21; Hch. 22:16; Hch. 2:41-42; 1 Co. 11:26; Mt. 26:26-29; Mc. 14:22-25; Lc. 22:14-20; 1 Co. 11:28; 1 Co. 5:1-8; 1 Co. 10:3-32; 1 Co. 11:17-32; Jn. 6:26."
    },
    {
      title: "XV. Del Día del Señor",
      content: "Creemos que el primer día de la semana es el Día del Señor; que este era el día en que las iglesias del Nuevo Testamento se reunían para la adoración cristiana y para la edificación en memoria de la resurrección de nuestro Señor; por lo tanto, que el domingo está reservado para la reunión de la iglesia con esos mismos fines.\n\nHch. 20:7; Gn. 2:3; Col. 2:16-17; Mc. 2:27; Jn. 20:19; 1 Co. 16:1-2; Ex. 20:8; Ap. 1:10; Sal. 118:15,24; Is. 58:13-14; Is. 56:2-8; Heb. 10:24-25; Hch. 11:26; Hch. 13:44; Lv. 19:30; Lc. 4:16; Hch. 17:2-3; Sal. 26:8; Sal. 87:3; Heb. 4:3-11."
    },
    {
      title: "XVI. Del Gobierno Civil",
      content: "Creemos que el Gobierno Civil es divinamente designado para los intereses y el buen orden de la sociedad humana, y que los magistrados deben ser llevados en oración, diligentemente honrados y obedecidos, excepto en aquellos asuntos que se opongan a la voluntad de nuestro Señor Jesucristo, quien es el único Señor de nuestras consciencias y el Príncipe de los reyes de la tierra.\n\nRo. 13:1-7; Dt. 16:18; 2 S. 23:3; Ex. 18:23; Jer. 30:21; Mt. 22:21; Tito 3:1; 1 P. 2:13; 1 Ti. 2:1-4; Hch. 5:29; Mt. 28; Dn. 3:15-18; Dn. 6:7-10; Hch. 4:18-20; Mt. 23:10; Ro. 14:4; Ap. 19:16; Sal. 72:11; Sal. 2; Ro. 14:9-13."
    },
    {
      title: "XVII. Del Justo y el Injusto",
      content: "Creemos que hay una diferencia esencial y radical entre los justos y los injustos; que sólo aquellos que son justificados mediante la fe en el nombre del Señor Jesucristo y santificados por el Espíritu de nuestro Dios son verdaderamente justos a Sus ojos, mientras que los que continúan en la impenitencia y la incredulidad son malvados a Sus ojos; y que la distinción se mantiene entre los hombres tanto en la muerte cómo después de ella.\n\nMal. 3:18; Pr. 12:26; Is. 5:20; Gn. 18:23; Jer. 15:19; Hch. 10:34-35; Ro. 6:16; Ro. 1:17; Ro. 7:6; 1 Jn. 2:29; 1 Jn. 3:7; Ro. 6:18,22; 1 Co. 11:32; Pr. 11:31; 1 P. 4:17-18; 1 Jn. 5:19; Gá. 3:10; Jn. 3:36; Is. 57:21; Sal. 10:4; Is. 55:6-7; Pr. 14:32; Lc. 16:25; Jn. 8:21-24; Pr. 10:24; Lc. 12:4-5; Lc. 9:23-26; Ec. 3:17; Mt. 7:13-14."
    },
    {
      title: "XVIII. Del Mundo Venidero",
      content: "Creemos que el fin del mundo se acerca; que en el día postrero Cristo descenderá del cielo y resucitará a los muertos de sus tumbas para retribución final; que una solemne separación tendrá lugar; que los malvados serán sentenciados a un castigo eterno, y los justos a un gozo eterno; y que este juicio fijará para siempre el estado final de los los hombres en el cielo o en el infierno, según los principios de la justicia.\n\n1 P. 4:7; 1 Co. 7:29-31; Heb. 1:10-12; Mt. 24:35; 1 Jn. 2:17; Mt. 28:20; Mt. 13:39-40; 2 P. 3:3-13; Hch. 1:11; Ap. 1:7; Heb. 9:28; Hch. 3:21; 1 Ts. 4:13-18; 1 Ts. 5:1-11; Hch. 24:15; 1 Co. 15:12-58; Lc. 14:14; Dn. 12:2; Jn. 5:28-29; Jn. 6:40; Jn. 11:25-26; 2 Ti. 1:10; Hch. 10:42; Mt. 13:49; Mt. 13:37-43; Mt. 24:30-31; Mt. 25:31-46; Ap. 22:11; 1 Co. 6:9-10; Mc. 9:43-48; 2 P. 2:9; Jud. 7; Fil. 3:19; Ro. 6:23; 2 Co. 5:10-11; Jn. 4:36; 2 Co. 4:18; Ro. 3:5-6; 2 Ts. 1:6-12; Heb. 6:1-2; 1 Co. 4:5; Hch. 17:31; Ro. 2:2-16; Ap. 20:11-12; 1 Jn. 2:28; 1 Jn. 4:17; 2 P. 3:11-12."
    },
    {
      title: "XIX. Sobre el Complementarismo",
      content: "Creemos que el hombre y la mujer son ambos creados a la imagen de Dios, lo cual implica que ambos tienen la misma importancia y el mismo valor esencial dado por Dios. Sin embargo, los roles no son los mismos, ambos existen para complementarse uno al otro en roles, capacidades y autoridad en las diferentes esferas de la sociedad humana. De esa manera, creemos que el hombre tiene el llamado a ser cabeza y líder, ejerciendo un liderazgo amoroso y servicial, mientras que la mujer tiene el llamado a ser ayuda idónea para el hombre, apoyando gozosamente el liderazgo del hombre por medio de sus dones y capacidades en sumisión piadosa.\n\nGn.1:27; 1 Co. 11:11, 12; Gá. 3:28; Gn. 2:15-18, Ef. 5:22-24; Gn. 2:24; Ef. 5:25-30; Gn 2:18; 1 Co. 11:3; Ef. 5:22-24."
    },
    {
      title: "XX. Del Matrimonio y la Sexualidad",
      content: "Creemos que el matrimonio involucra la unión de un hombre y una mujer en una fidelidad sagrada y permanente. La intimidad sexual es solamente ejercida propiamente y perseguida dentro de los confines de la relación marital. La inmoralidad sexual, definida como cualquier actividad sexual fuera de los límites de la relación sagrada matrimonial entre un hombre y una mujer, es clara y expresamente prohibida por el Señor. Entendemos como pecaminosa la intención o el deseo de quirúrgicamente alterar el sexo biológico a un sexo distinto. El Evangelio provee redención y restauración a todo el que confiesa y abandona su pecado, buscando misericordia y perdón a través de Jesucristo.\n\nGn. 2:24; Mt. 19:1-9; Mc. 10:1-12; Mt. 15:19; 1 Co. 6:9-11; 1 Ts. 4:3; Heb. 13:4; Gn. 1:27; Ro. 1:26-32; 1 Co. 6:9-11; Ef. 2:1-10; Tito 3:3-7; Mt. 11:28-30; 1 Co. 10:13; Heb. 2:17-18; Heb. 4:14-16."
    },
    {
      title: "XXI. De la Vida dada por Dios",
      content: "Creemos que Dios es el único ser que tiene vida en sí mismo, y por medio de quien recibe vida todo ser que la posee. Afirmamos que es la prerrogativa divina el dar la vida y el quitarla, conforme sea su santa y sabia voluntad. Teniendo en cuenta el origen divino de la vida, es menester protegerla y preservarla hasta donde sea humanamente posible. El aborto, la eutanasia, el suicidio y el homicidio, son pecados condenados por las Escrituras.\n\n1 S 2:6; Jn. 14:6; Job 12:10, 34:14-15; Hch. 17:25; Gn. 2:7; Is. 57:16; Jer. 1:5; Sal. 139:13-16; Éx. 21:22-25; Gn. 9:6."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-ibcd-blue selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-500 bg-white border-b border-slate-100 py-4">
        <div className="container-custom flex justify-between items-center">
          <a href="/" className="relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
            <Logo lightText={false} className="h-10 w-auto" />
          </a>
          
          <div className="hidden md:flex gap-10 items-center">
            <a href="/" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Inicio</a>
            
            <div className="relative group">
              <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue flex items-center gap-1">
                Nosotros <ChevronDown size={12} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white border border-slate-100 shadow-lg py-2 min-w-[160px] flex flex-col">
                  <a href="/liderazgo" className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-ibcd-blue hover:bg-slate-50 transition-colors">Liderazgo</a>
                  <a href="/creencias" className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-medium text-ibcd-blue bg-slate-50 transition-colors">Creencias</a>
                </div>
              </div>
            </div>

            <a href="/eventos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a>
            <a href="/sermones" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a>
            <a href="/articulos" className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a>
            <a 
              href="/visitanos" 
              className="text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ibcd-blue outline-none bg-slate-900 text-white hover:bg-ibcd-blue"
            >
              Visítanos
            </a>
          </div>

          <button 
            className="md:hidden p-2 outline-none focus-visible:text-ibcd-blue relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="text-slate-900" /> : <Menu className="text-slate-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8"
          >
            <a href="/" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl font-serif text-ibcd-blue italic">Nosotros</span>
              <a href="/liderazgo" className="text-xl font-serif text-slate-500 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Liderazgo</a>
              <a href="/creencias" className="text-xl font-serif text-ibcd-blue italic transition-all" onClick={() => setMobileMenuOpen(false)}>Creencias</a>
            </div>

            <a href="/eventos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Eventos</a>
            <a href="/sermones" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Sermones</a>
            <a href="/articulos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Artículos</a>
            <a href="/visitanos" className="text-4xl font-serif text-slate-900 hover:text-ibcd-blue hover:italic transition-all" onClick={() => setMobileMenuOpen(false)}>Visítanos</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="pt-48 pb-32 bg-slate-50 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ibcd-orange font-bold mb-6 block">
              Nuestra Identidad
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
              Confesión de <span className="italic">Fe.</span>
            </h1>
            <div className="space-y-6 text-slate-500 text-lg md:text-xl leading-relaxed font-light max-w-3xl">
              <p className="font-medium text-slate-900">
                Confesión Bautista de Fe de New Hampshire de 1833
              </p>
              <p>
                La Confesión Bautista de Fe de New Hampshire (1833) nació en medio de un importante movimiento de renovación espiritual en Estados Unidos conocido como el Segundo Gran Despertar—un periodo a principios del siglo XIX en el que crecieron con fuerza las iglesias evangélicas, incluidas las bautistas, gracias a un énfasis en la conversión personal y la evangelización masiva.
              </p>
              <p>
                Ante este crecimiento, se vio la necesidad de una declaración de fe concisa que reflejara la herencia reformada y que, al mismo tiempo, fuera más accesible que confesiones anteriores. Por eso, nuestra iglesia la ha adoptado como un excelente resumen de nuestras convicciones fundamentales, al proveer una base sólida y clara para nuestra fe y práctica congregacional.
              </p>
              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm uppercase tracking-widest font-bold text-slate-900 mb-4">Preámbulo</p>
                <p className="text-base italic">
                  La presente confesión es una adaptación de la Confesión Bautista de Fe de New Hampshire de 1833, siendo un extracto de la más reconocida confesión bautista, la Confesión Bautista de Fe de Londres de 1689. Teniendo en cuenta la contextualización de cada iglesia local, se ha editado y agregado a la confesión puntos importantes que ponen en claro la postura de los miembros de Iglesia Bíblica de la Gracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-slate-200">
              {beliefs.map((belief, index) => (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full py-10 flex justify-between items-center text-left outline-none focus-visible:bg-slate-50 group transition-colors"
                  >
                    <h3 className={`text-3xl md:text-4xl font-serif transition-colors ${openAccordion === index ? 'text-ibcd-blue italic' : 'text-slate-900 group-hover:text-ibcd-blue'}`}>
                      {belief.title}
                    </h3>
                    <span className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-6 ${openAccordion === index ? 'border-ibcd-blue bg-ibcd-blue text-white rotate-180' : 'border-slate-200 text-slate-400 group-hover:border-ibcd-blue group-hover:text-ibcd-blue'}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {openAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-12 pr-12 md:pr-24 space-y-6">
                          {belief.content.split('\n\n').map((paragraph, pIndex) => (
                            <p 
                              key={pIndex} 
                              className={`leading-relaxed ${pIndex === 0 ? 'text-slate-600 font-light text-xl' : 'text-slate-400 text-sm italic'}`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            {/* Download Full Document CTA */}
            <div className="mt-24 text-center">
              <p className="text-sm text-slate-400 mb-8">
                Para un estudio más profundo de nuestras convicciones doctrinales.
              </p>
              <a 
                href="#" 
                className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-slate-900 hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"
              >
                <span className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center transition-all group-hover:border-ibcd-blue group-hover:bg-ibcd-blue/5">
                  <ArrowUpRight size={20} className="text-slate-400 group-hover:text-ibcd-blue transition-colors" />
                </span>
                Descargar Documento Completo (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Duplicated to avoid modifying App.tsx) */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xs">
              <a href="/" className="inline-block mb-6 group outline-none focus-visible:ring-2 focus-visible:ring-ibcd-blue rounded-sm">
                <Logo lightText={false} className="h-10 w-auto transition-all duration-500 group-hover:scale-105" />
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                Una iglesia bíblica comprometida con la sana doctrina y la gloria de Dios en Rosario.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Explorar</p>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="/#nosotros" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Nosotros</a></li>
                  <li><a href="/liderazgo" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Liderazgo</a></li>
                  <li><a href="/creencias" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Creencias</a></li>
                  <li><a href="/eventos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Eventos</a></li>
                  <li><a href="/sermones" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Sermones</a></li>
                  <li><a href="/articulos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Artículos</a></li>
                  <li><a href="/visitanos" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Visítanos</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold mb-6 text-slate-900">Social</p>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Instagram</a></li>
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">YouTube</a></li>
                  <li><a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Iglesia Bíblica Ciudad de Dios. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Instagram size={18} /></a>
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Youtube size={18} /></a>
              <a href="#" className="hover:text-ibcd-blue transition-colors outline-none focus-visible:text-ibcd-blue"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
