import bahiaDeRiohachaImage from "../assets/bahia-de-riohacha.png";
import barranquillaImage from "../assets/barranquilla.png";
import caboDeLaVelaImage from "../assets/cabo-de-la-vela.png";
import castilloSanFelipeImage from "../assets/castillo-san-felipe.png";
import centroCartagenaImage from "../assets/centro-cartagena.png";
import islasDelRosarioImage from "../assets/islas-del-rosario.png";
import mincaImage from "../assets/minca.png";
import palominoImage from "../assets/palomino.png";
import puntaGallinasImage from "../assets/punta-gallinas.png";
import riohachaImage from "../assets/riohacha.png";
import santaMartaImage from "../assets/santa-marta.png";
import tayronaImage from "../assets/tayrona.png";
import type { JournalEntryData } from "../components/JournalEntry";

export const itineraryDays: JournalEntryData[] = [
  {
    dayLabel: "Día 1",
    highlight: "Vibras coloniales y trazos urbanos.",
    highlightIcon: "home_pin",
    imageAlt: "Calles coloridas de Cartagena",
    imageUrl: centroCartagenaImage,
    location: "Cartagena",
    story: [
      "Arrancamos en Cartagena bajándole el ritmo al viaje apenas lo suficiente para respirar hondo y dejar que el Caribe haga lo suyo. Entre balcones llenos de buganvilias, fachadas gastadas por el sol y callecitas que parecen pintadas a mano, la ciudad nos va metiendo en el paseo casi sin pedir permiso.",
      "Cuando cae la tarde, Getsemaní se enciende con música, voces y color. Dan ganas de caminar sin apuro, mirar cada rincón y sentir que este viaje apenas empieza, pero ya promete historias de las buenas.",
    ],
    title: "La Llegada",
    variant: "brown",
  },
  {
    dayLabel: "Día 2",
    highlight: "Cartagena se saborea mejor sin afán.",
    highlightIcon: "church",
    imageAlt: "Arquitectura histórica de Cartagena",
    imageUrl: castilloSanFelipeImage,
    location: "Cartagena",
    story: [
      "El segundo día tiene cara de descubrimiento. Cartagena se muestra más grande cuando uno sube, mira lejos y entiende que cada piedra guarda calor, historia y ese desorden sabroso que la hace inolvidable.",
      "Después, el plan se suelta otra vez entre plazas, buena comida y la brisa pegando al final del día. Es de esos momentos en los que uno siente que podría quedarse horas viendo cómo cambia la luz sobre la ciudad.",
    ],
    title: "Historias de Piedra",
    variant: "brown",
  },
  {
    dayLabel: "Día 3",
    highlight: "Sal en la piel, mar en el alma.",
    highlightIcon: "waves",
    imageAlt: "Mar turquesa en Islas del Rosario",
    imageUrl: islasDelRosarioImage,
    location: "Islas del Rosario",
    story: [
      "El azul aquí no parece real. Las Islas del Rosario se sienten como una pausa luminosa en medio del viaje, un lugar donde todo baja de volumen menos el mar, que lo llena todo con su brillo y su calma.",
      "Entre agua clara, arrecifes y ese silencio que solo rompe el movimiento del bote, el día se vuelve liviano. Uno sale con la piel salada, la cabeza despejada y la sensación de haber tocado algo inmenso.",
    ],
    title: "Azul Infinito",
    variant: "blue",
  },
  {
    dayLabel: "Día 4",
    highlight: "Río, ciudad y puro tumbao costeño.",
    highlightIcon: "music_note",
    imageAlt: "Escena urbana de Barranquilla",
    imageUrl: barranquillaImage,
    location: "Barranquilla",
    story: [
      "Barranquilla entra al viaje con otro pulso. Todo aquí se siente más amplio, más caliente, más alegre. El río le da fuerza a la ciudad y uno lo nota en el ambiente, en la comida, en la forma en que la gente ocupa la calle.",
      "Es una parada para recargar la energía del parche, caminar con música de fondo y dejarnos contagiar por esa vibra desprevenida que hace que todo parezca más fácil.",
    ],
    title: "La Puerta de Oro",
    variant: "brown",
  },
  {
    dayLabel: "Día 5",
    highlight: "Noches tibias y brisa frente al mar.",
    highlightIcon: "wb_twilight",
    imageAlt: "Vista costera de Santa Marta",
    imageUrl: santaMartaImage,
    location: "Santa Marta",
    story: [
      "Santa Marta aparece con esa mezcla rara y buenísima entre historia, mar y noche larga. Se siente más relajada que la primera salida, pero igual de viva, como una ciudad que sabe moverse al ritmo del calor.",
      "El plan acá es dejarnos llevar: caminar, sentarnos a mirar gente, comer rico y terminar la noche con esa sensación de que el viaje ya agarró vuelo de verdad.",
    ],
    title: "La Perla de América",
    variant: "brown",
  },
  {
    dayLabel: "Día 6",
    highlight: "Donde la selva termina besando el mar.",
    highlightIcon: "forest",
    imageAlt: "Paisaje verde del Tayrona",
    imageUrl: tayronaImage,
    location: "P.N. Tayrona",
    story: [
      "Luego viene el Tayrona, y el viaje cambia de tono. Caminar entre árboles densos, escuchar la selva de cerca y seguir avanzando hasta que el verde se abre de golpe para mostrar el mar tiene algo casi irreal.",
      "Aquí todo se siente más intenso: el calor, el sonido de las olas, el cansancio rico de la caminata y esa recompensa final de llegar a una playa que parece guardada aparte del resto del mundo.",
    ],
    title: "Refugio Sagrado",
    variant: "green",
  },
  {
    dayLabel: "Día 7",
    highlight: "Café, neblina y monte que abraza.",
    highlightIcon: "coffee",
    imageAlt: "Montaña exuberante de Minca",
    imageUrl: mincaImage,
    location: "Minca",
    story: [
      "Minca nos recibe con olor a café recién tostado y con ese fresquito inesperado que se agradece después de tantos días de costa. Las nubes se enredan en los árboles y todo se siente más lento, más íntimo, más respirable.",
      "Es una parada para mirar lejos, bajar un cambio y dejar que el paisaje haga su magia. Entre montaña, agua y silencio, el parche se reconecta desde otro lugar.",
    ],
    title: "Niebla y Aroma",
    variant: "green",
  },
  {
    dayLabel: "Día 8",
    highlight: "Río dulce y Caribe sin apuro.",
    highlightIcon: "kayaking",
    imageAlt: "Desembocadura de río en Palomino",
    imageUrl: palominoImage,
    location: "Palomino",
    story: [
      "Palomino tiene una energía distinta, como si todo invitara a soltar el cuerpo y dejarse llevar. El río baja tranquilo, el mar espera cerca y el tiempo parece perder la costumbre de correr.",
      "Es de esos lugares donde una tarde entera se puede volver recuerdo sin necesidad de hacer demasiado. Basta con estar, mirar alrededor y sentirse parte del paisaje.",
    ],
    title: "Río y Mar",
    variant: "blue",
  },
  {
    dayLabel: "Día 9",
    highlight: "La Guajira empieza a hablar bajito.",
    highlightIcon: "diamond",
    imageAlt: "Paisaje árido de Riohacha",
    imageUrl: riohachaImage,
    location: "Riohacha",
    story: [
      "Riohacha se siente como una puerta abierta hacia otro paisaje. El mar sigue ahí, sí, pero el aire ya trae algo distinto: más silencio, más horizonte, más tierra seca anunciando que lo que viene adelante no se parece a nada de lo anterior.",
      "Es el momento en que el viaje empieza a ponerse más salvaje y más simbólico. El Caribe sigue vivo, pero ahora se mezcla con la aridez y con esa sensación de estar entrando en territorio sagrado.",
    ],
    title: "Puerta al Desierto",
    variant: "brown",
  },
  {
    dayLabel: "Día 10",
    highlight: "Aquí el tiempo se detiene y solo queda el viento.",
    highlightIcon: "air",
    imageAlt: "Litoral de Cabo de la Vela",
    imageUrl: caboDeLaVelaImage,
    location: "Cabo de la Vela",
    story: [
      "Llegar al Cabo de la Vela es como entrar en un paisaje que vive con sus propias reglas. El color de la tierra, el viento constante y la inmensidad del mar hacen que todo se sienta desnudo y poderoso al mismo tiempo.",
      "Acá uno no piensa en correr ni en tachar planes. Solo provoca mirar, quedarse quieto un momento y dejar que el desierto haga ese trabajo raro de vaciar la cabeza y llenarla de asombro.",
    ],
    title: "Tierra Sagrada",
    variant: "brown",
  },
  {
    dayLabel: "Día 11",
    highlight: "Dunas al mar y cielo sin final.",
    highlightIcon: "explore",
    imageAlt: "Dunas y litoral en Punta Gallinas",
    imageUrl: puntaGallinasImage,
    location: "Punta Gallinas",
    story: [
      "Punta Gallinas no se parece a ningún otro tramo del viaje. Todo es más abierto, más crudo, más silencioso. Las dunas caen directo al mar y uno se queda viendo esa mezcla imposible entre desierto y agua como si el paisaje estuviera inventado.",
      "La experiencia aquí no pasa solo por lo que vemos, sino por lo que se siente: pequeñez, libertad, viento en la cara y la certeza de haber llegado a uno de esos lugares que se quedan adentro por mucho tiempo.",
    ],
    title: "Horizonte Salvaje",
    variant: "brown",
  },
  {
    dayLabel: "Día 12",
    highlight: "Volvemos distintos, con el Caribe encima.",
    highlightIcon: "flight_takeoff",
    imageAlt: "Costa Caribe al cierre del viaje",
    imageUrl: bahiaDeRiohachaImage,
    location: "Regreso",
    story: [
      "El regreso siempre tiene algo raro: uno sigue en movimiento, pero ya va recogiendo escenas, frases, canciones y momentos que se quedaron pegados durante la ruta. El paisaje se despide poco a poco, como si supiera que todavía lo vamos a seguir recordando por un buen tiempo.",
      "No es solo volver. Es cerrar el viaje con la sensación de que valió cada tramo, cada parada y cada cambio de clima. Después de tantos días, el parche no regresa igual: vuelve más unido, más liviano y con historias para rato.",
    ],
    title: "Cierre de Ruta",
    variant: "brown",
  },
];
