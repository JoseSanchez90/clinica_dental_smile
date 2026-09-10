import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { OtherServices } from "@/components/other-services";
import { TeamSection } from "@/components/team-section";
import { ContactFooter } from "@/components/contact-footer";

export const metadata: Metadata = {
  title: "Acerca de nosotros",
  description:
    "Conoce la historia, principios y profesionales de Smile Dental.",
};

export default function AcercaPage() {
  return (
    <>
      <Header constrained />
      <main>
        <section className="max-w-7xl mx-auto py-20 lg:py-28">
          <h1 className="mt-7 text-center text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
            Cuidado dental de primer nivel para sonrisas sanas y radiantes
          </h1>
          <p className="mt-6 text-center text-lg leading-8 text-slate-500">
            Atención excepcional en una clínica moderna, cálida y comprometida
            con tu bienestar.
          </p>
        </section>
        <section className="bg-slate-50 py-16">
          <div className="mx-auto grid w-full grid-cols-3 gap-4 px-3 sm:px-5 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,2.1fr)] lg:gap-12 lg:px-20">
            {[
              "/images/examinar.webp",
              "/images/galeria-equipo.jpg",
              "/images/galeria-consulta.jpg",
              "/images/galeria-clinica.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className={
                  i === 3
                    ? "relative col-span-3 aspect-video overflow-hidden lg:col-span-1 lg:h-107.5 lg:aspect-auto"
                    : "relative h-40 overflow-hidden sm:h-56 lg:h-107.5"
                }
              >
                <Image
                  src={src}
                  alt="Instalaciones y atención de Smile Dental"
                  fill
                  className="object-cover"
                  sizes={
                    i === 3
                      ? "(max-width: 1024px) 100vw, 40vw"
                      : "(max-width: 1024px) 33vw, 18vw"
                  }
                />
              </div>
            ))}
          </div>
        </section>
        <section className="page-gutter py-20 text-center lg:py-28">
          <h2 className="section-title">Nuestra historia</h2>
          <article className="mx-auto mt-10 max-w-3xl border border-slate-200 p-8 text-left shadow-sm md:p-12">
            <p className="text-xl font-medium leading-8">
              Nuestra historia nació de una pasión: transformar vidas mediante
              una atención dental excepcional.
            </p>
            <p className="mt-5 leading-7 text-slate-500">
              Nuestra fundadora, la Dra. María Lubin, imaginó una clínica que
              combinara odontología avanzada con un trato verdaderamente humano.
              Desde entonces construimos relaciones duraderas con nuestros
              pacientes y sus familias.
            </p>
            <p className="mt-5 leading-7 text-slate-500">
              Cada visita es una oportunidad para cuidar tu salud, escuchar tus
              inquietudes y ofrecerte soluciones claras y personalizadas.
            </p>
            <div className="mt-8 border-t border-slate-200 pt-6 font-semibold text-blue-900">
              Dra. María Lubin · Fundadora
            </div>
          </article>
        </section>
        <section className="page-gutter grid items-center gap-10 pb-20 lg:grid-cols-7 lg:pb-28">
          <div className="lg:col-span-4">
            <h2 className="section-title">
              Nuestros principios fundamentales: moldean nuestro enfoque y
              definen nuestra identidad.
            </h2>
            {[
              [
                "Atención centrada en el paciente",
                "Nuestros pacientes son el centro de todo lo que hacemos. Priorizamos su comodidad, bienestar y satisfacción.",
              ],
              [
                "Excelencia y experiencia",
                "Nos esforzamos por alcanzar la excelencia en cada aspecto de nuestra práctica.",
              ],
              [
                "Compasión y empatía",
                "Abordamos la odontología con empatía, comprendiendo que cada paciente es único y puede tener diferentes temores o preocupaciones.",
              ],
            ].map(([t, d]) => (
              <div key={t} className="mt-6 border-l-2 border-blue-900 pl-5">
                <h3 className="font-semibold text-xl">{t}</h3>
                <p className="mt-2 text-slate-500 text-md">{d}</p>
              </div>
            ))}
          </div>
          <div className="relative aspect-4/5 w-full overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-140">
            <Image
              src="/images/doctora.jpg"
              alt="Doctora de Smile Dental"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="page-gutter">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="section-title max-w-2xl">
                  Juntos impulsamos sonrisas y bienestar
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-500">
                  Nuestro equipo de profesionales dentales altamente
                  cualificados y con gran experiencia se dedica a mantenerse a
                  la vanguardia de los avances en odontología.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto lg:min-h-72">
                <Image
                  src="/images/doctora2.webp"
                  alt="Doctora de Smile Dental"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["230", "pacientes atendidos esta semana"],
                ["4", "consultorios modernos"],
                ["23+", "años de experiencia conjunta"],
              ].map(([n, l], i) => (
                <article
                  key={l}
                  className="border border-slate-200 bg-white p-8"
                >
                  <span className="block w-full border-b border-slate-200 pb-6 text-sm font-bold text-red-500">
                    0{i + 1}
                  </span>
                  <strong className="mt-6 block text-7xl font-bold text-red-500">
                    {n}
                  </strong>
                  <p className="mt-3 text-slate-500">{l}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <OtherServices />
        <TeamSection />
      </main>
      <ContactFooter />
    </>
  );
}
