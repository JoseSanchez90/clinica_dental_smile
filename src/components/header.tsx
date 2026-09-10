/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowRight, FiMenu, FiPhone, FiX } from "react-icons/fi";

const nav = [
  ["Inicio", "/"],
  ["Acerca", "/acerca"],
  ["Servicios", "/servicios"],
  ["Preguntas frecuentes", "/preguntas-frecuentes"],
];

export function Header({
  constrained = false,
  overlay = false,
}: {
  constrained?: boolean;
  overlay?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const transparent = overlay && !scrolled;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!overlay) return;

    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [overlay]);

  return (
    <header
      className={`${
        overlay
          ? `fixed inset-x-0 top-0 transition-[background-color,color] duration-500 ${
              transparent
                ? "bg-transparent text-white"
                : "bg-white/90 text-slate-700 backdrop-blur-md"
            }`
          : "sticky top-0 bg-white/90 backdrop-blur-md"
      } z-50`}
    >
      <div
        className={`${
          constrained
            ? "mx-auto max-w-7xl px-5 md:px-8 lg:px-0"
            : "px-5 md:px-8 lg:px-12"
        } flex h-20 items-center justify-between transition-[height] duration-500 ${
          overlay && scrolled ? "lg:h-20" : "lg:h-24"
        }`}
      >
        <Link
          href="/"
          className={`text-2xl font-extrabold tracking-[-.04em] sm:text-3xl ${
            transparent ? "text-white" : "text-blue-900"
          }`}
          aria-label="Smile Dental, inicio"
        >
          Smile<span className="text-red-500">.</span>Dental
          <sup className="text-md">®</sup>
        </Link>
        <nav
          className={`hidden items-center gap-8 text-md font-semibold lg:flex ${
            transparent ? "text-white" : "text-slate-600"
          }`}
          aria-label="Navegación principal"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`transition ${
                transparent ? "hover:text-white/70" : "hover:text-blue-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+5115555050"
            className={`flex items-center gap-2 text-sm font-semibold ${
              transparent ? "text-white" : "text-slate-500"
            }`}
          >
            <FiPhone className="text-red-500" /> (01) 555-5050
          </a>
          <Link
            href="/contactanos"
            className={
              transparent
                ? "button-primary border border-white bg-white/10 hover:bg-blue-900 hover:border-blue-900 hover:text-white"
                : "button-primary"
            }
          >
            Contáctanos
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className={`grid size-12 cursor-pointer place-items-center border p-3 text-2xl transition-colors lg:hidden ${
            transparent
              ? "border-white/60 text-white hover:border-white"
              : "border-slate-300 text-slate-950 hover:border-blue-900 hover:text-blue-900"
          }`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <FiMenu />
        </button>
        <div
          className={`fixed inset-0 z-60 lg:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 cursor-default bg-slate-950/25 transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          <aside
            id="mobile-navigation"
            className={`absolute inset-y-0 left-0 flex h-dvh w-64 max-w-[78vw] flex-col bg-white px-6 py-7 shadow-2xl transition-transform duration-500 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Menú móvil"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-extrabold tracking-[-.04em] text-blue-900"
                aria-label="Smile Dental, inicio"
              >
                Smile<span className="text-red-500">.</span>Dental
                <sup className="text-sm">®</sup>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="grid h-10 w-10 cursor-pointer place-items-center text-2xl text-slate-950"
                aria-label="Cerrar menú"
              >
                <FiX />
              </button>
            </div>
            <nav className="mt-7" aria-label="Navegación móvil">
              {nav.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-900"
                >
                  {label}
                  <FiArrowRight
                    className="text-base text-blue-900 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
              <Link
                href="/contactanos"
                onClick={() => setMenuOpen(false)}
                className="button-primary mt-7"
              >
                Contáctanos
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </header>
  );
}
