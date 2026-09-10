import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Header } from "@/components/header";
import { HomeHero } from "@/components/home-hero";
import { AppointmentCard } from "@/components/appointment-card";
import { ServiceCards } from "@/components/service-cards";
import { TeamSection } from "@/components/team-section";
import { OtherServices } from "@/components/other-services";
import { ContactFooter } from "@/components/contact-footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header constrained overlay />
      <main>
        <HomeHero />
        <section className="bg-slate-50">
          <div className="grid w-full lg:grid-cols-2">
            <div className="relative min-h-140 overflow-hidden">
              <Image
                src="/images/paciente-feliz.jpg"
                alt="Paciente sonriendo durante su visita"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-8 left-5 right-5 max-w-md bg-slate-900/70 p-7 text-white backdrop-blur-sm md:bottom-12 md:left-auto md:right-10">
                <strong className="text-sm">Emily S.</strong>
                <p className="mt-3 leading-7">
                  “Soy paciente desde hace varios años y puedo decir con
                  confianza que esta es la mejor clínica dental que he visitado.
                  Todo el equipo es amable y profesional.”
                </p>
                <div
                  className="mt-4 flex gap-1 text-amber-400"
                  aria-label="5 de 5 estrellas"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center px-5 py-16 md:px-16 lg:py-24">
              <AppointmentCard />
            </div>
          </div>
        </section>
        <section className="page-gutter py-20 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="section-title">Servicios dentales integrales</h2>
              <p className="mt-4 text-slate-500">
                Cuidamos tu salud bucal con soluciones para cada etapa de tu
                vida.
              </p>
            </div>
            <Link href="/servicios" className="button-primary">
              Ver todos los servicios
            </Link>
          </div>
          <ServiceCards limit={3} />
        </section>
        <TeamSection />
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute -inset-x-1 top-1/2 h-8 -rotate-3 bg-red-600" />
          <div className="relative mx-auto max-w-5xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm md:px-12">
            <h2 className="section-title">Reserva tu próxima cita</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Da el primer paso hacia una sonrisa sana y segura.
            </p>
            <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                aria-label="Correo electrónico"
                placeholder="Correo electrónico"
                className="min-h-12 flex-1 border border-slate-200 px-4 outline-none focus:border-blue-900"
              />
              <button className="button-primary" type="submit">
                Reservar consulta
              </button>
            </form>
          </div>
        </section>
        <OtherServices />
      </main>
      <ContactFooter />
    </>
  );
}
