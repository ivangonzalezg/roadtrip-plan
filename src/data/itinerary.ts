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
    imageAlt: "Calles coloridas de Cartagena",
    imageUrl: centroCartagenaImage,
    location: "Cartagena",
    schedule: [
      {
        description: "Llegada, check-in y descanso tras el viaje.",
        label: "Mañana",
      },
      {
        description:
          "Recorrido a pie por la Ciudad Amurallada: Torre del Reloj, Plaza de los Coches y murallas al atardecer.",
        label: "Tarde",
      },
      {
        description:
          "Cena y paseo por Getsemaní entre murales y plazas vibrantes.",
        label: "Noche",
      },
    ],
    title: "La Llegada",
    transport: "Transporte: Carro particular / traslados cortos",
    transportIcon: "directions_car",
    variant: "brown",
  },
  {
    dayLabel: "Día 2",
    imageAlt: "Arquitectura histórica de Cartagena",
    imageUrl: castilloSanFelipeImage,
    location: "Cartagena",
    schedule: [
      {
        description:
          "Exploración del Castillo de San Felipe de Barajas, la fortaleza más grande.",
        label: "Mañana",
      },
      {
        description: "Almuerzo en San Diego y descanso del calor caribeño.",
        label: "Tarde",
      },
      {
        description:
          "Paseo por Bocagrande y despedida del sol desde las murallas antiguas.",
        label: "Noche",
      },
    ],
    title: "Historias de Piedra",
    transport: "Transporte: Carro particular o taxi",
    transportIcon: "local_taxi",
    variant: "brown",
  },
  {
    dayLabel: "Día 3",
    imageAlt: "Mar turquesa en Islas del Rosario",
    imageUrl: islasDelRosarioImage,
    location: "Islas del Rosario",
    schedule: [
      {
        description:
          "Salida temprana en lancha rápida desde el Muelle de La Bodeguita.",
        label: "Mañana",
      },
      {
        description:
          "Snorkel y almuerzo típico en Isla Grande. Regreso al puerto por la tarde.",
        label: "Tarde",
      },
      {
        description:
          "Cena ligera y paseo nocturno por las calles iluminadas de Cartagena.",
        label: "Noche",
      },
    ],
    title: "Azul Infinito",
    transport: "Transporte: Lancha rápida (no carro)",
    transportIcon: "directions_boat",
    variant: "blue",
  },
  {
    dayLabel: "Día 4",
    imageAlt: "Escena urbana de Barranquilla",
    imageUrl: barranquillaImage,
    location: "Barranquilla",
    schedule: [
      {
        description:
          'Rumbo al norte. Salida de Cartagena hacia "Curramba la Bella".',
        label: "Mañana",
      },
      {
        description:
          "Check-in y almuerzo local para probar la sazón barranquillera.",
        label: "Tarde",
      },
      {
        description:
          "Gran Malecón del Río: visita a la Aleta del Tiburón y la estatua de Shakira.",
        label: "Noche",
      },
    ],
    title: "La Puerta de Oro",
    transport: "Transporte: Carro particular (130 km)",
    transportIcon: "minor_crash",
    variant: "brown",
  },
  {
    dayLabel: "Día 5",
    imageAlt: "Vista costera de Santa Marta",
    imageUrl: santaMartaImage,
    location: "Santa Marta",
    schedule: [
      {
        description: "Trayecto corto hacia Santa Marta bordeando la Ciénaga.",
        label: "Mañana",
      },
      {
        description:
          "Caminata por el Centro Histórico, Parque de los Novios y la Catedral.",
        label: "Tarde",
      },
      {
        description:
          "Cena y ambiente festivo en los bares del Parque de los Novios.",
        label: "Noche",
      },
    ],
    title: "La Perla de América",
    transport: "Transporte: Carro particular (70 km)",
    transportIcon: "directions_car",
    variant: "brown",
  },
  {
    dayLabel: "Día 6",
    imageAlt: "Paisaje verde del Tayrona",
    imageUrl: tayronaImage,
    location: "P.N. Tayrona",
    schedule: [
      {
        description:
          "Entrada por El Zaino. Caminata entre selva y mar hacia Cabo San Juan.",
        label: "Mañana",
      },
      {
        description:
          "Disfrute de las playas vírgenes y La Piscina natural antes del regreso.",
        label: "Tarde",
      },
      {
        description:
          "Vuelta a Santa Marta para una cena tranquila y reparadora.",
        label: "Noche",
      },
    ],
    title: "Refugio Sagrado",
    transport: "Transporte: Caminata y bus interno",
    transportIcon: "hiking",
    variant: "green",
  },
  {
    dayLabel: "Día 7",
    imageAlt: "Montaña exuberante de Minca",
    imageUrl: mincaImage,
    location: "Minca",
    schedule: [
      {
        description:
          "Ascenso a la Sierra Nevada. Visita a finca cafetera y cascadas Marinka.",
        label: "Mañana",
      },
      {
        description:
          "Almuerzo con vistas panorámicas y miradores sobre la bahía.",
        label: "Tarde",
      },
      {
        description:
          "Tiempo libre en Santa Marta para compras o relax en El Rodadero.",
        label: "Noche",
      },
    ],
    title: "Niebla y Aroma",
    transport: "Transporte: Jeep local para zonas altas",
    transportIcon: "mountain_flag",
    variant: "green",
  },
  {
    dayLabel: "Día 8",
    imageAlt: "Desembocadura de río en Palomino",
    imageUrl: palominoImage,
    location: "Palomino",
    schedule: [
      {
        description:
          "Salida hacia La Guajira. Llegada al pueblo bohemio de Palomino.",
        label: "Mañana",
      },
      {
        description:
          "Aventura de Tubing: dejarse llevar por el río hasta desembocar en el Caribe.",
        label: "Tarde",
      },
      {
        description:
          "Cena bajo las estrellas con el ambiente relajado del pueblo.",
        label: "Noche",
      },
    ],
    title: "Río y Mar",
    transport: "Transporte: Carro particular (1.5 h)",
    transportIcon: "kayaking",
    variant: "blue",
  },
  {
    dayLabel: "Día 9",
    imageAlt: "Paisaje árido de Riohacha",
    imageUrl: riohachaImage,
    location: "Riohacha",
    schedule: [
      {
        description:
          "Despedida de Palomino y rumbo a la capital de La Guajira.",
        label: "Mañana",
      },
      {
        description:
          "Paseo por el Malecón, compra de artesanías Wayuu y atardecer guajiro.",
        label: "Tarde",
      },
      {
        description:
          "Preparación de equipaje ligero para la expedición al desierto profundo.",
        label: "Noche",
      },
    ],
    title: "Puerta al Desierto",
    transport: "Transporte: Carro particular (110 km)",
    transportIcon: "shopping_bag",
    variant: "brown",
  },
  {
    dayLabel: "Día 10",
    imageAlt: "Litoral de Cabo de la Vela",
    imageUrl: caboDeLaVelaImage,
    location: "Cabo de la Vela",
    schedule: [
      {
        description:
          "Travesía en 4x4 por Manaure (salinas) y Uribia hacia el Cabo.",
        label: "Mañana",
      },
      {
        description:
          "Baño en Playa Ojo de Agua y ascenso al místico Pilón de Azúcar.",
        label: "Tarde",
      },
      {
        description:
          "Atardecer en el Faro. Dormir en chinchorro bajo el cielo más puro.",
        label: "Noche",
      },
    ],
    title: "Tierra Sagrada",
    transport: "Transporte: 4x4 Turístico (Obligatorio)",
    transportIcon: "tire_repair",
    variant: "brown",
  },
  {
    dayLabel: "Día 11",
    imageAlt: "Dunas y litoral en Punta Gallinas",
    imageUrl: puntaGallinasImage,
    location: "Punta Gallinas",
    schedule: [
      {
        description:
          "Cruce por Bahía Portete hacia el punto más septentrional.",
        label: "Mañana",
      },
      {
        description:
          "Las dunas de Taroa cayendo al mar y visita al icónico faro.",
        label: "Tarde",
      },
      {
        description:
          "Última noche en ranchería Wayuu compartiendo historias locales.",
        label: "Noche",
      },
    ],
    title: "El Fin del Mundo",
    transport: "Transporte: 4x4 Todo Terreno",
    transportIcon: "explore",
    variant: "brown",
  },
  {
    dayLabel: "Día 12",
    imageAlt: "Costa Caribe al cierre del viaje",
    imageUrl: bahiaDeRiohachaImage,
    location: "Regreso",
    schedule: [
      {
        description:
          "Largo viaje de retorno desde Punta Gallinas hacia Riohacha.",
        label: "Mañana",
      },
      {
        description:
          "Opcional: Santuario Los Flamencos en Camarones para avistamiento en canoa.",
        label: "Tarde",
      },
      {
        description:
          "Descanso final y recuento de los 1.200 leguas recorridas.",
        label: "Noche",
      },
    ],
    title: "Cierre de Ruta",
    transport: "Transporte: 4x4 de regreso + propio",
    transportIcon: "assignment_return",
    variant: "brown",
  },
];
