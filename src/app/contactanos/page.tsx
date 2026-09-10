import type { Metadata } from "next";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from "react-icons/fi";
import { Header } from "@/components/header";
import { FaqList } from "@/components/faq-list";
import { ContactFooter } from "@/components/contact-footer";

export const metadata: Metadata = { title: "Contáctanos", description: "Reserva una cita o conversa con el equipo de Smile Dental en Lima." };

export default function ContactanosPage() {
  const info = [{Icon:FiMail,t:"Escríbenos",d:"hola@smiledental.pe"},{Icon:FiPhone,t:"Llámanos",d:"(01) 555-5050"},{Icon:FiMessageSquare,t:"WhatsApp",d:"+51 987 654 321"}];
  return <><Header /><main>
    <section className="page-gutter grid bg-slate-50 lg:grid-cols-2"><div className="flex min-h-[420px] flex-col justify-center py-16 lg:pr-16"><h1 className="text-5xl font-semibold tracking-[-.055em] sm:text-6xl">Contáctanos</h1><p className="mt-5 text-lg text-slate-500">Acompañamiento cercano y una atención excepcional.</p></div><div className="relative min-h-[420px] overflow-hidden rounded-bl-[140px]"><Image src="/images/consulta-dental.jpg" alt="Equipo de Smile Dental" fill priority className="object-cover" sizes="50vw" /></div></section>
    <section className="page-gutter grid gap-5 py-20 md:grid-cols-3 lg:py-24">{info.map(({Icon,t,d})=><article key={t} className="border border-slate-200 bg-slate-50 p-8"><span className="grid h-12 w-12 place-items-center bg-white text-xl text-blue-900"><Icon /></span><h2 className="mt-6 text-xl font-semibold">{t}</h2><p className="mt-3 text-slate-500">{d}</p></article>)}</section>
    <section className="page-gutter grid gap-12 bg-slate-50 py-12 lg:grid-cols-2 lg:py-16"><form className="grid gap-4"><label className="field"><input placeholder="Tu nombre" aria-label="Tu nombre" /></label><label className="field"><input type="email" placeholder="Tu correo" aria-label="Tu correo" /></label><textarea placeholder="Cuéntanos cómo podemos ayudarte" aria-label="Mensaje" className="min-h-44 border border-slate-200 bg-white p-4 outline-none focus:border-blue-900"/><button type="submit" className="button-primary">Enviar consulta</button></form><div><span className="eyebrow">Estamos para ayudarte</span><h2 className="section-title mt-5">Conversa con nuestro equipo</h2><p className="mt-6 leading-7 text-slate-500">Te orientaremos en cada paso: resolveremos tus dudas, coordinaremos tu cita y te ayudaremos a elegir el tratamiento indicado.</p><div className="mt-7 space-y-3 text-slate-600"><p className="flex items-center gap-3"><FiMapPin className="text-blue-900"/> Av. Arequipa 2450, Lince, Lima</p><p className="flex items-center gap-3"><FiPhone className="text-blue-900"/> (01) 555-5050</p><p className="flex items-center gap-3"><FiMail className="text-blue-900"/> hola@smiledental.pe</p></div></div></section>
    <section className="page-gutter grid gap-12 py-20 lg:grid-cols-[.65fr_1.35fr] lg:py-28"><div><span className="eyebrow">Dudas comunes</span><h2 className="section-title mt-5">Antes de tu visita</h2></div><FaqList limit={4}/></section>
  </main><ContactFooter /></>;
}
