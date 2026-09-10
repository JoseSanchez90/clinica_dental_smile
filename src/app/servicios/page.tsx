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
      <Header constrained />
      <main>
        <section className="relative overflow-hidden bg-slate-50 py-20 text-center lg:py-28">
          <div className="page-gutter relative z-10">
            <div className="absolute left-[8%] -top-14 h-12 w-12 overflow-hidden rounded-full lg:left-[25%] lg:-top-18 lg:h-16 lg:w-16">
              <Image
                src="/images/dr-diego-salazar.png"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="absolute left-8 bottom-4 h-12 w-12 overflow-hidden rounded-full lg:bottom-0 lg:left-[32%] lg:top-62">
              <Image
                src="/images/dra-valeria-mendoza.png"
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="absolute right-18 -top-18 h-12 w-12 overflow-hidden rounded-full lg:right-[24%] lg:-top-24 lg:h-16 lg:w-16">
              <Image
                src="/images/dr-andres-rivas.png"
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="absolute -bottom-12 right-4 h-14 w-14 overflow-hidden rounded-full lg:bottom-0 lg:right-[12%] lg:h-20 lg:w-20">
              <Image
                src="/images/dra-camila-torres.png"
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <h1 className="relative mx-auto max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
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
            <h2 className="section-title">
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
              src="/images/testimonio-servicios.jpg"
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
