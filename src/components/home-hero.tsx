"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const facts = [
  "Realizamos revisiones, limpiezas y educación en higiene bucal para mantener tus dientes y encías saludables.",
  "Nuestro equipo combina experiencia, tecnología moderna y una atención cercana para que cada visita sea cómoda.",
  "Diseñamos tratamientos personalizados que cuidan tu salud bucal y resaltan la belleza natural de tu sonrisa.",
];

const patients = [
  "/images/dra-valeria-mendoza.png",
  "/images/dr-diego-salazar.png",
  "/images/dra-camila-torres.png",
  "/images/dr-andres-rivas.png",
];

export function HomeHero() {
  const [activeFact, setActiveFact] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFact((current) => (current + 1) % facts.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveFact((current) => (current - 1 + facts.length) % facts.length);
  };

  const showNext = () => {
    setActiveFact((current) => (current + 1) % facts.length);
  };

  return (
    <section className="home-hero relative min-h-184 overflow-hidden bg-slate-500 text-white md:min-h-screen">
      <Image
        src="/images/inicio-hero-sonrisa.png"
        alt="Mujer mostrando una sonrisa saludable"
        fill
        priority
        className="object-cover object-[68%_center] sm:object-[64%_center] lg:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-slate-900/20 lg:bg-slate-900/10" />

      <div className="page-gutter relative flex min-h-184 flex-col pt-28 pb-8 md:min-h-screen md:pt-36 lg:max-w-none lg:px-0 lg:py-0">
        <h1 className="home-hero-title max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-.045em] sm:text-5xl md:text-6xl lg:absolute lg:top-[31%] lg:left-[19.3%] lg:max-w-[47%] lg:text-7xl">
          Transforma tu sonrisa con atención dental de vanguardia en nuestra
          clínica
        </h1>

        <div className="home-hero-patients mt-7 md:mt-9 lg:absolute lg:top-[31%] lg:left-[70.5%] lg:mt-0">
          <div className="patient-avatar-group flex -space-x-2">
            {patients.map((patient, index) => (
              <div
                key={patient}
                className="relative size-11 overflow-hidden rounded-full border border-white md:size-14"
              >
                <Image
                  src={patient}
                  alt={`Paciente satisfecha ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-lg font-semibold">100 mil+</p>
          <p className="text-sm font-medium">Pacientes satisfechos</p>
        </div>

        <div className="home-hero-facts mt-auto grid items-center gap-4 lg:absolute lg:right-[19%] lg:bottom-[14.5%] lg:left-[19.3%] lg:grid-cols-[10rem_minmax(0,24rem)_1fr] lg:gap-14">
          <p className="text-lg font-semibold">Datos</p>
          <p
            key={activeFact}
            className="animate-[fade-in_.45s_ease-out] text-base font-medium leading-6 text-white md:text-lg md:leading-7"
            aria-live="polite"
          >
            {facts[activeFact]}
          </p>
          <div className="mt-3 flex justify-end gap-4 lg:mt-0 lg:justify-self-end">
            <button
              type="button"
              onClick={showPrevious}
              className="grid size-12 cursor-pointer place-items-center rounded-full border border-white text-xl transition hover:bg-white hover:text-slate-900 md:size-14"
              aria-label="Mostrar dato anterior"
            >
              <FiArrowLeft />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="grid size-12 cursor-pointer place-items-center rounded-full border border-white text-xl transition hover:bg-white hover:text-slate-900 md:size-14"
              aria-label="Mostrar siguiente dato"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
