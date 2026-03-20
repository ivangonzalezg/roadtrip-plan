import bahiaDeRiohachaImage from "../assets/images/bahia-de-riohacha.png";
import barranquillaImage from "../assets/images/barranquilla.png";
import caboDeLaVelaImage from "../assets/images/cabo-de-la-vela.png";
import castilloSanFelipeImage from "../assets/images/castillo-san-felipe.png";
import centroCartagenaImage from "../assets/images/centro-cartagena.png";
import islasDelRosarioImage from "../assets/images/islas-del-rosario.png";
import mincaImage from "../assets/images/minca.png";
import palominoImage from "../assets/images/palomino.png";
import puntaGallinasImage from "../assets/images/punta-gallinas.png";
import riohachaImage from "../assets/images/riohacha.png";
import santaMartaImage from "../assets/images/santa-marta.png";
import tayronaImage from "../assets/images/tayrona.png";
import type { JournalEntryData } from "../components/JournalEntry";

export const itineraryDays: JournalEntryData[] = [
  {
    audioRegion: "cartagena",
    dayLabel: "Día 1",
    details: [
      { label: "Ruta", value: "Llegada a Cartagena y primera tarde caminando por el centro histórico." },
      { label: "Plan clave", value: "Check-in, Ciudad Amurallada, plazas coloniales y noche en Getsemaní." },
    ],
    highlight: "Vibras coloniales y trazos urbanos.",
    highlightIcon: "home_pin",
    imageAlt: "Calles coloridas de Cartagena",
    imageUrl: centroCartagenaImage,
    location: "Cartagena",
    story: [
      "Arrancamos en Cartagena con una llegada tranquila: check-in, pausa corta y la primera salida a pie para entrarle al viaje con calma. Entre la Torre del Reloj, la Plaza de los Coches, la Plaza de Bolívar y las murallas, la ciudad se encarga sola de marcar el tono.",
      "Cuando cae la tarde, Getsemaní hace el resto. Murales, plazas, bares y ese ruido sabroso de barrio vivo convierten el arranque en una mezcla perfecta entre paseo relajado y primeras ganas de que esto no se acabe tan rápido.",
    ],
    title: "La Llegada",
    variant: "brown",
  },
  {
    audioRegion: "cartagena",
    dayLabel: "Día 2",
    details: [
      { label: "Ruta", value: "Segundo día completo en Cartagena, entre historia y costa urbana." },
      { label: "Plan clave", value: "Castillo de San Felipe, almuerzo sin afán y atardecer por Bocagrande o las murallas." },
    ],
    highlight: "Cartagena se saborea mejor sin afán.",
    highlightIcon: "church",
    imageAlt: "Arquitectura histórica de Cartagena",
    imageUrl: castilloSanFelipeImage,
    location: "Cartagena",
    story: [
      "El segundo día tiene cara de descubrimiento bien hecho. Subir al Castillo de San Felipe le da otra dimensión a Cartagena: desde arriba todo se entiende mejor, la historia pesa distinto y el calor parece venir pegado a cada piedra.",
      "Luego el plan baja el ritmo entre almuerzo, descanso y una tarde que puede irse hacia Bocagrande, Castillogrande o simplemente al borde de las murallas para ver caer la luz. Cartagena aquí ya no solo deslumbra: también se disfruta con método.",
    ],
    title: "Historias de Piedra",
    variant: "brown",
  },
  {
    audioRegion: "cartagena",
    dayLabel: "Día 3",
    details: [
      { label: "Ruta", value: "Excursión en lancha desde La Bodeguita hacia Islas del Rosario y regreso a Cartagena." },
      { label: "Plan clave", value: "Salida temprano, playa, snorkel y almuerzo en Isla Grande." },
      { label: "Extra", value: "La tarde termina de vuelta en Cartagena, ideal para una cena suave y descanso." },
    ],
    highlight: "Sal en la piel, mar en el alma.",
    highlightIcon: "waves",
    imageAlt: "Mar turquesa en Islas del Rosario",
    imageUrl: islasDelRosarioImage,
    location: "Islas del Rosario",
    story: [
      "El tercer día arranca con sabor a excursión completa: muelle temprano, lancha rápida y esa transición deliciosa en la que Cartagena se va quedando atrás mientras el agua empieza a tomar todos los azules posibles.",
      "En Rosario el plan sí tiene forma concreta, aunque se sienta libre: playa, snorkel, almuerzo en Isla Grande y regreso en la tarde. Uno vuelve con sal en la piel, sí, pero también con la sensación de haberle regalado al viaje una pausa bien merecida.",
    ],
    title: "Azul Infinito",
    variant: "blue",
  },
  {
    audioRegion: "barranquilla",
    dayLabel: "Día 4",
    details: [
      { label: "Ruta", value: "Cartagena → Barranquilla por carretera, con llegada al mediodía." },
      { label: "Plan clave", value: "Salida en la mañana, check-in, almuerzo y tarde de paseo por el Gran Malecón del Río." },
    ],
    highlight: "Río, ciudad y puro tumbao costeño.",
    highlightIcon: "music_note",
    imageAlt: "Escena urbana de Barranquilla",
    imageUrl: barranquillaImage,
    location: "Barranquilla",
    story: [
      "Barranquilla entra después de un tramo corto por carretera y cambia el pulso del viaje casi de inmediato. La llegada tiene algo práctico, claro, pero apenas uno se instala la ciudad empieza a mostrar su carácter amplio, caliente y descomplicado.",
      "La tarde en el Gran Malecón del Río, con paradas como la Aleta del Tiburón o los miradores junto al agua, le da sentido completo a esta escala. No es solo un paso intermedio: es una parada con identidad propia y con mucho tumbao costeño.",
    ],
    title: "La Puerta de Oro",
    variant: "brown",
  },
  {
    audioRegion: "santa-marta",
    dayLabel: "Día 5",
    details: [
      { label: "Ruta", value: "Barranquilla → Santa Marta, con llegada para instalarse y descansar." },
      { label: "Plan clave", value: "Centro histórico, Parque de los Novios, malecón y noche con bares tranquilos." },
    ],
    highlight: "Noches tibias y brisa frente al mar.",
    highlightIcon: "wb_twilight",
    imageAlt: "Vista costera de Santa Marta",
    imageUrl: santaMartaImage,
    location: "Santa Marta",
    story: [
      "Santa Marta aparece después de otro traslado corto, pero el ambiente cambia otra vez. Hay algo más relajado en su ritmo, aunque siga viva, cálida y llena de gente saliendo a caminar cuando el sol ya baja.",
      "La tarde aquí tiene una estructura sencilla y muy efectiva: centro histórico, catedral, calles coloniales, malecón y cierre en el Parque de los Novios. Es de esos días en los que el viaje ya deja de sentirse arranque y empieza a volverse costumbre feliz.",
    ],
    title: "La Perla de América",
    variant: "brown",
  },
  {
    audioRegion: "santa-marta",
    dayLabel: "Día 6",
    details: [
      { label: "Ruta", value: "Santa Marta → entrada El Zaino → senderos del Tayrona → regreso a Santa Marta." },
      { label: "Plan clave", value: "Cañaveral, Arrecifes, La Piscina y Cabo San Juan en una jornada de caminata y playa." },
    ],
    highlight: "Donde la selva termina besando el mar.",
    highlightIcon: "forest",
    imageAlt: "Paisaje verde del Tayrona",
    imageUrl: tayronaImage,
    location: "P.N. Tayrona",
    story: [
      "Luego viene el Tayrona, y el viaje cambia de tono con toda intención. Desde temprano la ruta se vuelve caminata: entrar por El Zaino, avanzar entre árboles, cruzarse con Cañaveral, Arrecifes y La Piscina hasta sentir que el cuerpo ya está totalmente metido en el plan.",
      "La recompensa llega en forma de playa abierta y cansancio del bueno. Cabo San Juan no se siente solo bonito: se siente ganado. Y cuando toca volver a Santa Marta, uno regresa con la sensación de haber vivido un día entero, de verdad.",
    ],
    title: "Refugio Sagrado",
    variant: "green",
  },
  {
    audioRegion: "santa-marta",
    dayLabel: "Día 7",
    details: [
      { label: "Ruta", value: "Santa Marta ↔ Minca, con subida en la mañana y regreso al final de la tarde." },
      { label: "Plan clave", value: "Finca cafetera, cascadas, almuerzo con vista y mirador sobre la bahía." },
    ],
    highlight: "Café, neblina y monte que abraza.",
    highlightIcon: "coffee",
    imageAlt: "Montaña exuberante de Minca",
    imageUrl: mincaImage,
    location: "Minca",
    story: [
      "Minca nos recibe con olor a café recién tostado y con un cambio de clima que se agradece de inmediato. Después de tantos días de costa, subir hacia la Sierra y encontrarse con fincas, vegetación cerrada y cascadas se siente como abrir otra capa del Caribe.",
      "El día tiene un orden muy agradecido: mañana de finca cafetera y agua, almuerzo con vista y cierre en miradores antes de volver a Santa Marta. La magia sigue ahí, pero ya no es abstracta: se vuelve una experiencia bien armada y fácil de recordar.",
    ],
    title: "Niebla y Aroma",
    variant: "green",
  },
  {
    audioRegion: "guajira",
    dayLabel: "Día 8",
    details: [
      { label: "Ruta", value: "Santa Marta → Palomino por la Troncal del Caribe, con llegada en la mañana." },
      { label: "Plan clave", value: "Check-in, playa y tubing por el río hasta encontrarse con el mar." },
    ],
    highlight: "Río dulce y Caribe sin apuro.",
    highlightIcon: "kayaking",
    imageAlt: "Desembocadura de río en Palomino",
    imageUrl: palominoImage,
    location: "Palomino",
    story: [
      "Palomino tiene una energía distinta, como si el viaje decidiera aflojar todavía más los hombros. La llegada es corta, amable, y deja tiempo para instalarse sin correr antes de salir a buscar la playa.",
      "Lo mejor del día está en esa combinación que lo volvió parada obligada: tubing por el río, corriente tranquila, árboles encima y el momento exacto en que el agua dulce termina encontrándose con el Caribe. No hace falta adornarlo mucho porque el plan ya habla solo.",
    ],
    title: "Río y Mar",
    variant: "blue",
  },
  {
    audioRegion: "guajira",
    dayLabel: "Día 9",
    details: [
      { label: "Ruta", value: "Palomino → Riohacha, después de una mañana suave y salida por carretera." },
      { label: "Plan clave", value: "Check-in, malecón, artesanías y preparación del equipaje para el tour al desierto." },
    ],
    highlight: "La Guajira empieza a hablar bajito.",
    highlightIcon: "diamond",
    imageAlt: "Paisaje árido de Riohacha",
    imageUrl: riohachaImage,
    location: "Riohacha",
    story: [
      "Riohacha se siente como una puerta real hacia lo que viene. Después de una mañana tranquila en Palomino, la carretera empieza a secarse en el paisaje y el viaje deja claro que está entrando en otra geografía, más árida y más abierta.",
      "Aquí la tarde tiene un propósito concreto: instalarse, caminar el malecón, mirar artesanías, ver caer el sol y dejar listo el equipaje ligero para los próximos días de tour. Esa preparación le da a la etapa un peso especial: ya no es solo viajar, es disponerse a cruzar hacia algo mucho más salvaje.",
    ],
    title: "Puerta al Desierto",
    variant: "brown",
  },
  {
    audioRegion: "guajira",
    dayLabel: "Día 10",
    details: [
      { label: "Ruta", value: "Riohacha → Mayapo → Manaure → Uribia → Cabo de la Vela en tour 4x4." },
      { label: "Plan clave", value: "Salinas, desierto, playas del Cabo, Pilón de Azúcar y atardecer en el faro." },
      { label: "Extra", value: "La noche se vive en ranchería, ya dentro del ritmo de La Guajira profunda." },
    ],
    highlight: "Aquí el tiempo se detiene y solo queda el viento.",
    highlightIcon: "air",
    imageAlt: "Litoral de Cabo de la Vela",
    imageUrl: caboDeLaVelaImage,
    location: "Cabo de la Vela",
    story: [
      "Llegar al Cabo de la Vela no es solo llegar a un destino: es atravesar una ruta completa en 4x4 por Mayapo, Manaure, Uribia y el desierto que poco a poco va borrando cualquier referencia urbana. El paisaje cambia tanto que uno siente que cruzó una frontera invisible.",
      "Ya en el Cabo, el día tiene hitos clarísimos: almuerzo típico, playas abiertas, Pilón de Azúcar, Faro y ese atardecer que parece ponerle pausa al tiempo. La experiencia sigue siendo poderosa y casi mística, pero ahora también se entiende mejor por todo lo que realmente sucede en el camino.",
    ],
    title: "Tierra Sagrada",
    variant: "brown",
  },
  {
    audioRegion: "guajira",
    dayLabel: "Día 11",
    details: [
      { label: "Ruta", value: "Cabo de la Vela → Bahía Portete → Punta Gallinas en 4x4." },
      { label: "Plan clave", value: "Dunas de Taroa, faro, playas abiertas y noche en ranchería wayuu." },
    ],
    highlight: "Dunas al mar y cielo sin final.",
    highlightIcon: "explore",
    imageAlt: "Dunas y litoral en Punta Gallinas",
    imageUrl: puntaGallinasImage,
    location: "Punta Gallinas",
    story: [
      "Punta Gallinas no se parece a ningún otro tramo del viaje, pero esta vez el camino también importa. El trayecto desde Cabo de la Vela, pasando por zonas desérticas y Bahía Portete, hace que la llegada se sienta todavía más remota y más grande.",
      "Cuando aparecen las Dunas de Taroa cayendo directo al mar, ya no hace falta mucha explicación. Luego vienen el faro, las playas y la noche en ranchería wayuu, y todo termina de armar una etapa que se queda adentro no solo por cómo se ve, sino por cómo se vive de principio a fin.",
    ],
    title: "Horizonte Salvaje",
    variant: "brown",
  },
  {
    audioRegion: "guajira",
    dayLabel: "Día 12",
    details: [
      { label: "Ruta", value: "Punta Gallinas → Riohacha en regreso 4x4, con tarde libre al volver." },
      { label: "Plan clave", value: "Retorno al hotel, descanso o salida opcional a Camarones y Santuario Los Flamencos." },
    ],
    highlight: "Volvemos distintos, con el Caribe encima.",
    highlightIcon: "flight_takeoff",
    imageAlt: "Costa Caribe al cierre del viaje",
    imageUrl: bahiaDeRiohachaImage,
    location: "Riohacha",
    story: [
      "El regreso a Riohacha tiene esa mezcla rara entre cansancio, satisfacción y cabeza todavía llena de desierto. El 4x4 vuelve a conectar todos los paisajes recorridos, pero ahora uno ya los mira desde otro lugar, como quien va recogiendo mentalmente todo lo vivido.",
      "Al llegar, el cierre queda abierto a dos formas buenas de terminar: descansar sin culpa o estirar el viaje hacia Camarones y el Santuario Los Flamencos si todavía queda energía. En cualquiera de las dos, el final se siente completo y mucho más aterrizado a la ruta real.",
    ],
    title: "Cierre de Ruta",
    variant: "brown",
  },
];
