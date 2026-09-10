import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { FaqList } from "@/components/faq-list";
import { ContactFooter } from "@/components/contact-footer";

export const metadata: Metadata = { title: "Preguntas frecuentes", description: "Respuestas claras a las dudas más comunes sobre salud dental." };

export default function PreguntasPage() {
  return <><Header /><main>
    <section className="relative grid min-h-[380px] place-items-center overflow-hidden px-5 text-center text-white"><Image src="/images/cepillos.jpg" alt="Cepillos dentales" fill priority className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-slate-900/55" /><h1 className="relative text-5xl font-semibold tracking-[-.05em] sm:text-6xl lg:text-7xl">Preguntas frecuentes</h1></section>
    <section className="page-gutter grid gap-12 py-20 lg:grid-cols-[.7fr_1.3fr] lg:py-28"><div><span className="eyebrow">🦷 FAQ</span><h2 className="section-title mt-5">Lo que más nos preguntan</h2><p className="mt-5 max-w-sm leading-7 text-slate-500">Encuentra respuestas sencillas antes de tu próxima visita.</p></div><FaqList /></section>
  </main><ContactFooter /></>;
}
