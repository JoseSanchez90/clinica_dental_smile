import Link from "next/link";
import { FiPhone, FiMenu } from "react-icons/fi";

const nav = [
  ["Inicio", "/"],
  ["Acerca", "/acerca"],
  ["Servicios", "/servicios"],
  ["Preguntas frecuentes", "/preguntas-frecuentes"],
];

export function Header({ constrained = false }: { constrained?: boolean }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div
        className={`${constrained ? "mx-auto max-w-7xl px-5 md:px-8" : ""} flex h-20 items-center justify-between lg:px-0 lg:h-24`}
      >
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-[-.04em] text-blue-900 sm:text-3xl"
          aria-label="Smile Dental, inicio"
        >
          Smile<span className="text-red-500">.</span>Dental
          <sup className="text-md">®</sup>
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
          aria-label="Navegación principal"
        >
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-blue-900"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+5115555050"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500"
          >
            <FiPhone className="text-red-500" /> (01) 555-5050
          </a>
          <Link href="/contactanos" className="button-primary">
            Contáctanos
          </Link>
        </div>
        <details className="group relative lg:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer place-items-center border border-slate-200 text-xl text-blue-900 marker:content-none"
            aria-label="Abrir menú"
          >
            <FiMenu />
          </summary>
          <nav
            className="absolute right-0 top-14 w-72 border border-slate-200 bg-white p-4 shadow-2xl"
            aria-label="Navegación móvil"
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block border-b border-slate-100 px-3 py-3 font-semibold"
              >
                {label}
              </Link>
            ))}
            <Link href="/contactanos" className="button-primary mt-4 w-full">
              Contáctanos
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
