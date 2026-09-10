import { FiChevronDown } from "react-icons/fi";

export const questions = [
  { q: "¿Cada cuánto debo visitar al dentista para un control y limpieza?", a: "Recomendamos una visita cada seis meses. Los controles periódicos permiten detectar problemas a tiempo y mantener una salud bucal óptima." },
  { q: "¿Cuáles son los signos de enfermedad de las encías?", a: "Sangrado al cepillarte, inflamación, mal aliento persistente o encías retraídas. Una evaluación temprana ayuda a evitar que avance." },
  { q: "¿Qué son los implantes dentales y son adecuados para mí?", a: "Son reemplazos duraderos para piezas perdidas. La indicación depende del estado del hueso, encías y salud general, por eso realizamos una evaluación previa." },
  { q: "¿Qué puedo hacer para aliviar la sensibilidad dental?", a: "Usa una pasta para sensibilidad, evita cambios bruscos de temperatura y agenda una revisión para identificar la causa exacta." },
  { q: "¿Cómo se realiza un tratamiento de conducto?", a: "Se retira el tejido afectado, se limpia y sella el interior del diente. El procedimiento se realiza con anestesia local y busca conservar la pieza dental." },
  { q: "¿Cómo corrige la ortodoncia los dientes desalineados?", a: "Aplica fuerzas suaves y controladas con brackets o alineadores para llevar cada diente a una posición más funcional y estética." },
];

export function FaqList({ limit }: { limit?: number }) {
  return <div className="divide-y divide-slate-200 border-y border-slate-200">{questions.slice(0, limit).map((item, i) => <details key={item.q} className="group" open={i === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold marker:content-none group-open:text-blue-900"><span>{item.q}</span><FiChevronDown className="shrink-0 transition group-open:rotate-180" /></summary><p className="max-w-3xl pb-7 leading-7 text-slate-500">{item.a}</p></details>)}</div>;
}
