import Image from "next/image";
import Link from "next/link";

export const services = [
  {
    title: "Odontología preventiva",
    text: "Revisiones, limpiezas y orientación para mantener dientes y encías saludables.",
    image: "/images/paciente-feliz.jpg",
  },
  {
    title: "Odontología estética",
    text: "Blanqueamiento, carillas y armonización para realzar tu sonrisa con naturalidad.",
    image: "/images/consulta-dental.jpg",
  },
  {
    title: "Odontología restauradora",
    text: "Restauraciones, coronas, puentes y prótesis para recuperar función y confianza.",
    image: "/images/tratamiento-dental.jpg",
  },
  {
    title: "Odontología general",
    text: "Atención integral y seguimiento cercano para toda la familia.",
    image: "/images/consulta-dental.jpg",
  },
  {
    title: "Implantes dentales",
    text: "Soluciones seguras y duraderas para reemplazar piezas perdidas.",
    image: "/images/paciente-feliz.jpg",
  },
  {
    title: "Cirugía dental",
    text: "Procedimientos precisos con protocolos modernos y recuperación acompañada.",
    image: "/images/tratamiento-dental.jpg",
  },
  {
    title: "Brackets",
    text: "Ortodoncia personalizada para alinear tu sonrisa y mejorar tu mordida.",
    image: "/images/sonrisa.jpg",
  },
  {
    title: "Protección dental",
    text: "Protectores, férulas y prevención para conservar tu salud bucal.",
    image: "/images/cepillos.jpg",
  },
  {
    title: "Alineadores",
    text: "Ortodoncia discreta y cómoda con planificación digital.",
    image: "/images/sonrisa.jpg",
  },
];

export function ServiceCards({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, limit).map((service, index) => (
        <article
          key={service.title}
          className="group border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="border-b border-slate-100 pb-4 text-xs font-bold text-red-500">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-6 text-xl font-semibold tracking-tight">
            {service.title}
          </h3>
          <p className="mt-3 min-h-14 leading-6 text-slate-500">
            {service.text}
          </p>
          <Link
            href="/contactanos#cita"
            className="mt-7 flex h-12 items-center justify-center border border-blue-900 text-sm font-bold transition-all duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-white"
          >
            Conocer más
          </Link>
          <div className="relative mt-5 aspect-video overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
