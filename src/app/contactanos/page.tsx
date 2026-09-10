import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiDollarSign,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSmartphone,
} from "react-icons/fi";
import { Header } from "@/components/header";
import { FaqList } from "@/components/faq-list";
import { ContactFooter } from "@/components/contact-footer";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Reserva una cita o conversa con el equipo de Smile Dental en Lima.",
};

export default function ContactanosPage() {
  const info = [
    {
      Icon: FiMail,
      t: "Servicios",
      d: "Atención odontológica integral para cada etapa de tu vida.",
      cta: "Conocer más",
      href: "/servicios",
    },
    {
      Icon: FiDollarSign,
      t: "Precios",
      d: "Alternativas accesibles y transparentes para todos.",
      cta: "Consultar precios",
      href: "#soporte",
    },
    {
      Icon: FiSmartphone,
      t: "Soporte",
      d: "Nuestro equipo está disponible para orientarte.",
      cta: "Contactar soporte",
      href: "#soporte",
    },
  ];
  return (
    <>
      <Header constrained />
      <main>
        <section className="mx-auto grid w-[calc(100%-2.5rem)] max-w-6xl border border-slate-200 bg-slate-50 lg:grid-cols-2">
          <div className="flex min-h-80 flex-col justify-center px-8 py-14 md:px-12 lg:min-h-100 lg:px-16">
            <h1 className="text-5xl font-semibold tracking-[-.055em] sm:text-6xl">
              Contáctanos
            </h1>
            <p className="mt-5 text-lg text-slate-500">
              Acompañamiento cercano y una atención excepcional.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-bl-[140px] lg:min-h-100">
            <Image
              src="/images/equipo-contacto-hero.png"
              alt="Equipo de Smile Dental"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </section>
        <section className="page-gutter grid gap-5 py-20 md:grid-cols-3 lg:py-24">
          {info.map(({ Icon, t, d, cta, href }) => (
            <article
              key={t}
              className="flex min-h-44 flex-col items-center justify-center border border-slate-200 bg-slate-50 p-6 text-center md:min-h-64 md:p-8"
            >
              <span className="grid h-12 w-12 place-items-center bg-white text-xl text-blue-900">
                <Icon />
              </span>
              <h2 className="mt-4 text-2xl font-semibold">{t}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
              <Link
                href={href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-900"
              >
                {cta} <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>
        <section id="soporte" className="page-gutter grid gap-12 border border-slate-200 bg-slate-50 py-12 lg:grid-cols-2 lg:py-16">
          <DemoForm
            className="order-2 grid gap-4 lg:order-1"
            successTitle="Consulta enviada"
            successMessage="Gracias por comunicarte con nosotros. Revisaremos tu consulta y te responderemos lo antes posible."
          >
            <label className="field">
              <input name="name" placeholder="Tu nombre" aria-label="Tu nombre" data-validation="name" required />
            </label>
            <label className="field">
              <input
                type="email"
                name="email"
                placeholder="Tu correo"
                aria-label="Tu correo"
                required
              />
            </label>
            <textarea
              placeholder="Cuéntanos cómo podemos ayudarte"
              aria-label="Mensaje"
              name="message"
              required
              className="min-h-32 resize-none overflow-y-auto border border-slate-200 bg-white p-4 outline-none focus:border-blue-900"
            />
            <button type="submit" className="button-primary">
              Enviar consulta
            </button>
          </DemoForm>
          <div className="order-1 lg:order-2">
            <h2 className="section-title">Conversa con nuestro equipo</h2>
            <p className="mt-6 leading-7 text-slate-500">
              Te orientaremos en cada paso: resolveremos tus dudas,
              coordinaremos tu cita y te ayudaremos a elegir el tratamiento
              indicado.
            </p>
            <div className="mt-7 space-y-3 text-slate-600">
              <p className="flex items-center gap-3">
                <FiMapPin className="text-blue-900" /> Av. Arequipa 2450, Lince,
                Lima
              </p>
              <p className="flex items-center gap-3">
                <FiPhone className="text-blue-900" /> (01) 555-5050
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="text-blue-900" /> hola@smiledental.pe
              </p>
            </div>
          </div>
        </section>
        <section className="page-gutter grid gap-12 py-20 lg:grid-cols-[.65fr_1.35fr] lg:py-28">
          <div>
            <h2 className="section-title">Antes de tu visita</h2>
          </div>
          <FaqList limit={4} />
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
