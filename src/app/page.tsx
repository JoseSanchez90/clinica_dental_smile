import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Header } from "@/components/header";
import { AppointmentCard } from "@/components/appointment-card";
import { ServiceCards } from "@/components/service-cards";
import { TeamSection } from "@/components/team-section";
import { OtherServices } from "@/components/other-services";
import { ContactFooter } from "@/components/contact-footer";
import Cup from "@/../public/svg/cup.svg";

export default function Home() {
  return (
    <>
      <Header constrained />
      <main>
        <section className="page-gutter grid min-h-167.5 items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="max-w-2xl">
            <div className="w-fit bg-slate-100 flex items-center gap-2 px-4 py-3 text-md font-bold text-blue-900">
              {" "}
              <Image src={Cup} alt="" width={24} height={24} /> Clínica dental
              de confianza
            </div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.96] tracking-[-.055em] text-slate-950 sm:text-6xl 2xl:text-7xl">
              Odontología amable, completa y pensada para ti
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Nuestro equipo de dentistas con experiencia crea una atención
              cálida y tranquila para cada paciente, desde la primera consulta
              hasta tu mejor sonrisa.
            </p>
            <Link className="button-primary mt-9" href="/contactanos#cita">
              Reservar una cita
            </Link>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-300">
              <span>✦ Atención cálida</span>
              <span>◇ Tecnología moderna</span>
              <span>≋ Resultados naturales</span>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-140">
            <div className="absolute inset-[5%] rounded-[34%_12%_34%_12%] bg-slate-100" />
            <div className="absolute left-[2%] top-[1%] h-[42%] w-[42%] overflow-hidden rounded-full border-12 border-white">
              <Image
                src="/images/sonrisa.jpg"
                alt="Sonrisa saludable"
                fill
                className="object-cover"
                priority
                sizes="240px"
              />
            </div>
            <div className="absolute right-0 top-[18%] h-[57%] w-[57%] overflow-hidden rounded-full border-12 border-white">
              <Image
                src="/images/paciente-feliz.jpg"
                alt="Paciente satisfecha en consulta"
                fill
                className="object-cover"
                priority
                sizes="330px"
              />
            </div>
            <div className="absolute bottom-[2%] left-[8%] h-[38%] w-[38%] overflow-hidden rounded-[50%_50%_18%_50%] border-12 border-white">
              <Image
                src="/images/tratamiento-dental.jpg"
                alt="Atención odontológica"
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
        </section>
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
          <div className="absolute inset-x-0 top-1/2 h-20 -rotate-3 bg-slate-50" />
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
