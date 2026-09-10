import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Header } from "@/components/header";
import { ServiceCards } from "@/components/service-cards";
import { ContactFooter } from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Servicios dentales",
  description: "Tratamientos dentales integrales y personalizados en Lima.",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-slate-50 py-20 text-center lg:py-28">
          <div className="page-gutter relative z-10">
            <div className="absolute left-[25%] top-0 hidden h-16 w-16 overflow-hidden rounded-full lg:block">
              <Image
                src="/images/doctor.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="absolute left-[32%] bottom-0 hidden h-12 w-12 overflow-hidden rounded-full lg:block">
              <Image
                src="/images/doctora.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="absolute right-[24%] -top-14 hidden h-16 w-16 overflow-hidden rounded-full lg:block">
              <Image
                src="/images/doctora.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="absolute right-[12%] bottom-14 hidden h-20 w-20 overflow-hidden rounded-full lg:block">
              <Image
                src="/images/paciente-feliz.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="w-fit mx-auto bg-blue-100 flex items-center gap-2 px-4 py-2 text-md font-bold text-blue-900">
              🦷 Servicios
            </div>
            <h1 className="relative mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Dale a tu sonrisa el cuidado que se merece
            </h1>
            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Soluciones integrales, personalizadas y realizadas con tecnología
              moderna.
            </p>
            <Link
              href="/contactanos#cita"
              className="button-primary relative mt-8"
            >
              Reservar consulta
            </Link>
          </div>
        </section>
        <section className="page-gutter py-20 lg:py-28">
          <ServiceCards />
        </section>
        <section className="page-gutter grid gap-8 pb-20 lg:grid-cols-[.9fr_1.1fr] lg:pb-28">
          <div>
            <span className="eyebrow">Nuestra forma de cuidar</span>
            <h2 className="section-title mt-5">
              Alta calidad y tratamientos accesibles
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <article className="border-l-2 border-blue-900 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold">Atención centrada en ti</h3>
              <p className="mt-4 leading-7 text-slate-500">
                Escuchamos tus necesidades y priorizamos tu comodidad, bienestar
                y satisfacción.
              </p>
            </article>
            <article className="border-l-2 border-red-500 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold">Compasión y empatía</h3>
              <p className="mt-4 leading-7 text-slate-500">
                Entendemos que cada paciente es único y merece una experiencia
                tranquila.
              </p>
            </article>
          </div>
        </section>
        <section className="page-gutter grid items-center pb-20 lg:grid-cols-2 lg:pb-28">
          <div className="relative min-h-117.5">
            <Image
              src="/images/paciente-feliz.jpg"
              alt="Paciente satisfecha"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="border border-slate-200 bg-white p-8 md:p-12 lg:-ml-10 lg:relative">
            <div className="flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar key={i} />
              ))}
            </div>
            <blockquote className="mt-6 text-2xl font-medium leading-9">
              “Un servicio excepcional. Escucharon mis dudas, me explicaron cada
              paso y el resultado superó mis expectativas.”
            </blockquote>
            <p className="mt-6 font-semibold text-blue-900">
              Emily S. · Paciente
            </p>
          </div>
        </section>
      </main>
      <ContactFooter />
    </>
  );
}
