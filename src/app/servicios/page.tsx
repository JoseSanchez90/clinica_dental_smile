import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Header } from "@/components/header";
import { ServiceCards } from "@/components/service-cards";
import { ContactFooter } from "@/components/contact-footer";

export const metadata: Metadata = { title: "Servicios dentales", description: "Tratamientos dentales integrales y personalizados en Lima." };

export default function ServiciosPage() {
  return <><Header /><main>
    <section className="bg-[#f7f8fa] px-5 py-20 text-center md:px-10 lg:py-28"><span className="eyebrow">🦷 Servicios</span><h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">Dale a tu sonrisa el cuidado que se merece</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">Soluciones integrales, personalizadas y realizadas con tecnología moderna.</p><Link href="/contactanos#cita" className="button-primary mt-8">Reservar consulta</Link></section>
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:py-28"><ServiceCards /></section>
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:pb-28">
      <div><span className="eyebrow">Nuestra forma de cuidar</span><h2 className="section-title mt-5">Alta calidad y tratamientos accesibles</h2></div>
      <div className="grid gap-5 sm:grid-cols-2"><article className="border-l-2 border-[#172a78] bg-[#f7f8fa] p-8"><h3 className="text-xl font-semibold">Atención centrada en ti</h3><p className="mt-4 leading-7 text-slate-500">Escuchamos tus necesidades y priorizamos tu comodidad, bienestar y satisfacción.</p></article><article className="border-l-2 border-[#ed3d43] bg-[#f7f8fa] p-8"><h3 className="text-xl font-semibold">Compasión y empatía</h3><p className="mt-4 leading-7 text-slate-500">Entendemos que cada paciente es único y merece una experiencia tranquila.</p></article></div>
    </section>
    <section className="mx-auto grid max-w-7xl items-center px-5 pb-20 md:px-10 lg:grid-cols-2 lg:pb-28"><div className="relative min-h-[470px]"><Image src="/images/paciente-feliz.jpg" alt="Paciente satisfecha" fill className="object-cover" sizes="50vw" /></div><div className="border border-slate-200 bg-white p-8 md:p-12 lg:-ml-10 lg:relative"><div className="flex gap-1 text-[#ffb21a]">{[1,2,3,4,5].map(i => <FaStar key={i} />)}</div><blockquote className="mt-6 text-2xl font-medium leading-9">“Un servicio excepcional. Escucharon mis dudas, me explicaron cada paso y el resultado superó mis expectativas.”</blockquote><p className="mt-6 font-semibold text-[#172a78]">Emily S. · Paciente</p></div></section>
  </main><ContactFooter /></>;
}
