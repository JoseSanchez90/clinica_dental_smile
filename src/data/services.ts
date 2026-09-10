export type DentalService = {
  slug: string;
  title: string;
  text: string;
  image: string;
  benefits: { title: string; text: string }[];
  introTitle: string;
  intro: string;
  gallery: string[];
};

export const dentalServices: DentalService[] = [
  {
    slug: "odontologia-preventiva",
    title: "Odontología preventiva",
    text: "Revisiones, limpiezas y orientación para mantener dientes y encías saludables.",
    image: "/images/servicio-preventiva.jpg",
    benefits: [
      {
        title: "Detección temprana",
        text: "Las evaluaciones periódicas permiten identificar caries, desgaste o inflamación antes de que ocasionen molestias y requieran tratamientos complejos.",
      },
      {
        title: "Prevención de enfermedades",
        text: "La limpieza profesional y una correcta higiene diaria reducen la acumulación de placa y protegen las encías.",
      },
      {
        title: "Protección contra las caries",
        text: "El flúor, los sellantes y una orientación personalizada fortalecen el esmalte y disminuyen el riesgo de caries.",
      },
    ],
    introTitle: "Introducción a la odontología preventiva",
    intro:
      "La odontología preventiva protege tu salud bucal antes de que aparezcan problemas. Combinamos controles regulares, limpieza profesional y educación personalizada para conservar dientes y encías sanos durante todas las etapas de la vida.",
    gallery: [
      "/images/galeria-consulta.jpg",
      "/images/tratamiento-dental.jpg",
      "/images/paciente-feliz.jpg",
    ],
  },
  {
    slug: "odontologia-estetica",
    title: "Odontología estética",
    text: "Blanqueamiento, carillas y armonización para realzar tu sonrisa con naturalidad.",
    image: "/images/servicio-estetica.jpg",
    benefits: [
      {
        title: "Sonrisa más luminosa",
        text: "Eliminamos manchas y recuperamos un tono uniforme mediante procedimientos seguros y supervisados.",
      },
      {
        title: "Armonía y proporción",
        text: "Planificamos forma, tamaño y posición dental para obtener un resultado equilibrado con tus facciones.",
      },
      {
        title: "Resultados naturales",
        text: "Seleccionamos materiales y técnicas que respetan la apariencia, textura y translucidez de tus dientes.",
      },
    ],
    introTitle: "Una estética dental diseñada para ti",
    intro:
      "Cada sonrisa es distinta. Por eso realizamos una evaluación facial y dental completa antes de recomendar blanqueamiento, carillas o restauraciones estéticas, priorizando resultados naturales y el cuidado de tu salud bucal.",
    gallery: [
      "/images/sonrisa.jpg",
      "/images/consulta-dental.jpg",
      "/images/testimonio-inicio.jpg",
    ],
  },
  {
    slug: "odontologia-restauradora",
    title: "Odontología restauradora",
    text: "Restauraciones, coronas, puentes y prótesis para recuperar función y confianza.",
    image: "/images/servicio-restauracion.jpg",
    benefits: [
      {
        title: "Recuperación funcional",
        text: "Restablecemos la mordida y la capacidad de masticar con comodidad mediante soluciones adaptadas a cada caso.",
      },
      {
        title: "Conservación dental",
        text: "Priorizamos técnicas mínimamente invasivas para preservar la mayor cantidad posible de tejido dental sano.",
      },
      {
        title: "Estética duradera",
        text: "Utilizamos materiales resistentes que se integran con el color y la forma natural de tu sonrisa.",
      },
    ],
    introTitle: "Recupera la salud y función de tu sonrisa",
    intro:
      "La odontología restauradora repara dientes dañados o ausentes y devuelve estabilidad a la mordida. Nuestro diagnóstico define si necesitas una restauración, corona, puente o prótesis, siempre con una planificación precisa.",
    gallery: [
      "/images/galeria-clinica.jpg",
      "/images/servicio-proteccion.jpg",
      "/images/servicio-general.jpg",
    ],
  },
  {
    slug: "odontologia-general",
    title: "Odontología general",
    text: "Atención integral y seguimiento cercano para toda la familia.",
    image: "/images/servicio-general.jpg",
    benefits: [
      {
        title: "Evaluación integral",
        text: "Revisamos dientes, encías, mordida y tejidos bucales para comprender tu salud oral de manera completa.",
      },
      {
        title: "Atención para la familia",
        text: "Acompañamos a niños, jóvenes y adultos con indicaciones apropiadas para cada etapa de vida.",
      },
      {
        title: "Seguimiento continuo",
        text: "Organizamos controles y planes de cuidado que ayudan a mantener los resultados a largo plazo.",
      },
    ],
    introTitle: "Tu punto de partida para una boca saludable",
    intro:
      "La odontología general reúne el diagnóstico, la prevención y los tratamientos más frecuentes. Es la base para mantener una buena salud oral y coordinar oportunamente cualquier atención especializada que puedas necesitar.",
    gallery: [
      "/images/equipo-clinica.jpg",
      "/images/galeria-consulta.jpg",
      "/images/examinar.webp",
    ],
  },
  {
    slug: "implantes-dentales",
    title: "Implantes dentales",
    text: "Soluciones seguras y duraderas para reemplazar piezas perdidas.",
    image: "/images/servicio-implantes.jpg",
    benefits: [
      {
        title: "Estabilidad al masticar",
        text: "El implante actúa como una raíz firme y permite comer, hablar y sonreír con mayor seguridad.",
      },
      {
        title: "Conservación del hueso",
        text: "Reemplazar una pieza perdida ayuda a mantener el volumen óseo y la estructura facial.",
      },
      {
        title: "Apariencia natural",
        text: "La corona se diseña según el color y la anatomía de tus dientes para integrarse armónicamente.",
      },
    ],
    introTitle: "Una solución estable para dientes ausentes",
    intro:
      "Los implantes dentales reemplazan la raíz de una pieza perdida y sirven de soporte para una corona de apariencia natural. Evaluamos hueso, encías y mordida para crear un tratamiento seguro, predecible y personalizado.",
    gallery: [
      "/images/servicio-cirugia.jpg",
      "/images/consulta-dental.jpg",
      "/images/servicio-restauracion.jpg",
    ],
  },
  {
    slug: "cirugia-dental",
    title: "Cirugía dental",
    text: "Procedimientos precisos con protocolos modernos y recuperación acompañada.",
    image: "/images/servicio-cirugia.jpg",
    benefits: [
      {
        title: "Diagnóstico preciso",
        text: "La evaluación clínica y por imágenes permite planificar cada procedimiento con detalle.",
      },
      {
        title: "Procedimiento seguro",
        text: "Aplicamos protocolos actuales de bioseguridad, anestesia y control para cuidar tu bienestar.",
      },
      {
        title: "Recuperación acompañada",
        text: "Recibes indicaciones claras y seguimiento cercano durante todo el proceso de recuperación.",
      },
    ],
    introTitle: "Cirugía planificada con cuidado y precisión",
    intro:
      "Realizamos extracciones y otros procedimientos quirúrgicos después de estudiar cuidadosamente cada caso. Nuestro objetivo es resolver el problema con una intervención precisa, una experiencia tranquila y controles posteriores oportunos.",
    gallery: [
      "/images/equipo-contacto-hero.png",
      "/images/galeria-clinica.jpg",
      "/images/servicio-preventiva.jpg",
    ],
  },
  {
    slug: "brackets",
    title: "Brackets",
    text: "Ortodoncia personalizada para alinear tu sonrisa y mejorar tu mordida.",
    image: "/images/servicio-ortodoncia.jpg",
    benefits: [
      {
        title: "Alineación progresiva",
        text: "Movemos los dientes de forma controlada hasta alcanzar una posición más armónica y funcional.",
      },
      {
        title: "Mejora de la mordida",
        text: "Corregir la relación entre los dientes ayuda a distribuir mejor las fuerzas al masticar.",
      },
      {
        title: "Control especializado",
        text: "Las revisiones periódicas permiten ajustar el tratamiento y acompañar su evolución.",
      },
    ],
    introTitle: "Ortodoncia eficaz para transformar tu sonrisa",
    intro:
      "Los brackets permiten corregir apiñamientos, espacios y alteraciones de mordida. Diseñamos cada tratamiento a partir de registros clínicos y digitales, con controles periódicos y objetivos claros desde el inicio.",
    gallery: [
      "/images/servicio-alineacion.jpg",
      "/images/sonrisa.jpg",
      "/images/tratamiento-dental.jpg",
    ],
  },
  {
    slug: "proteccion-dental",
    title: "Protección dental",
    text: "Protectores, férulas y prevención para conservar tu salud bucal.",
    image: "/images/servicio-proteccion.jpg",
    benefits: [
      {
        title: "Prevención del desgaste",
        text: "Las férulas ayudan a proteger los dientes frente al apretamiento y rechinamiento nocturno.",
      },
      {
        title: "Seguridad deportiva",
        text: "Los protectores personalizados amortiguan impactos y se adaptan cómodamente a tu boca.",
      },
      {
        title: "Ajuste personalizado",
        text: "Cada dispositivo se confecciona según tu anatomía para ofrecer estabilidad y comodidad.",
      },
    ],
    introTitle: "Cuida tu sonrisa frente al desgaste y los impactos",
    intro:
      "La protección dental previene lesiones y desgaste mediante dispositivos hechos a medida. Evaluamos tus hábitos, actividad deportiva y mordida para recomendar una férula o protector cómodo, resistente y fácil de usar.",
    gallery: [
      "/images/servicio-ortodoncia.jpg",
      "/images/paciente-feliz.jpg",
      "/images/galeria-equipo.jpg",
    ],
  },
  {
    slug: "alineadores",
    title: "Alineadores",
    text: "Ortodoncia discreta y cómoda con planificación digital.",
    image: "/images/servicio-alineacion.jpg",
    benefits: [
      {
        title: "Tratamiento discreto",
        text: "Las placas transparentes permiten alinear los dientes con una apariencia muy natural.",
      },
      {
        title: "Mayor comodidad",
        text: "Son removibles para comer y realizar la higiene bucal con facilidad durante el tratamiento.",
      },
      {
        title: "Planificación digital",
        text: "Visualizamos los movimientos previstos y controlamos cada etapa de forma personalizada.",
      },
    ],
    introTitle: "Alinea tu sonrisa con libertad y discreción",
    intro:
      "Los alineadores transparentes corrigen la posición dental mediante una secuencia de placas removibles. La planificación digital nos permite organizar los movimientos y acompañar tu progreso con controles periódicos.",
    gallery: [
      "/images/servicio-estetica.jpg",
      "/images/testimonio-servicios.jpg",
      "/images/consulta-dental.jpg",
    ],
  },
];

export function getDentalService(slug: string) {
  return dentalServices.find((service) => service.slug === slug);
}
