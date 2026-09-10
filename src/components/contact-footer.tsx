import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { DemoForm } from "@/components/demo-form";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { name: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
];

export function ContactFooter() {
  return (
    <footer className="page-gutter pb-8 pt-20 lg:pt-28">
      <div className="grid w-full gap-4 lg:gap-6 lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative min-h-107.5 overflow-hidden border border-slate-200 bg-slate-50 p-8">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-blue-900"
          >
            Smile<span className="text-red-500">.</span>Dental®
          </Link>
          <div
            aria-hidden
            className="absolute left-[42%] top-[22%] h-107.5 w-107.5 rounded-full border border-blue-900/25 before:absolute before:inset-12 before:rounded-full before:border before:border-blue-900/25 after:absolute after:inset-24 after:rounded-full after:border after:border-blue-900/25"
          >
            <span className="absolute left-8 top-28 h-8 w-8 rounded-full bg-[url('/images/doctor.jpg')] bg-cover" />
            <span className="absolute left-36 top-8 h-7 w-7 rounded-full bg-[url('/images/doctora.jpg')] bg-cover" />
            <span className="absolute left-32 top-60 h-9 w-9 rounded-full bg-[url('/images/doctora2.webp')] bg-cover" />
          </div>
          <div className="absolute bottom-8 left-8 flex gap-3 text-blue-900">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-blue-900 bg-white transition hover:bg-blue-900 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div
          id="cita"
          className="border border-slate-200 bg-slate-50 p-6 sm:p-10 lg:p-16"
        >
          <h2 className="section-title text-center">Nos encantará ayudarte</h2>
          <p className="mt-4 text-center text-slate-500">
            Nuestro equipo está listo para escuchar tus consultas.
          </p>
          <DemoForm
            className="mt-9 grid gap-4 sm:grid-cols-2"
            successTitle="Mensaje enviado"
            successMessage="Gracias por escribirnos. El equipo de Smile Dental se pondrá en contacto contigo muy pronto."
          >
            <label className="field">
              <input name="firstName" placeholder="Nombres" aria-label="Nombres" data-validation="name" required />
              <FiMail />
            </label>
            <label className="field">
              <input name="lastName" placeholder="Apellidos" aria-label="Apellidos" data-validation="name" required />
              <FiMail />
            </label>
            <label className="field sm:col-span-2">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico*"
                aria-label="Correo electrónico"
                required
              />
              <FiMail />
            </label>
            <label className="field sm:col-span-2">
              <select name="dentist" defaultValue="" aria-label="Selecciona tu dentista" required>
                <option value="" disabled>
                  Selecciona tu dentista
                </option>
                <option>Dra. María Lubin</option>
                <option>Dr. Corey Dodkis</option>
                <option>Dra. Milagros Culhane</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <textarea
                className="min-h-32 w-full resize-none overflow-y-auto border border-slate-200 bg-white p-4 text-sm outline-none focus:border-blue-900"
                placeholder="Mensaje"
                aria-label="Mensaje"
                name="message"
                required
              />
            </label>
            <label className="flex items-center gap-3 text-sm text-slate-500 sm:col-span-2">
              <input type="checkbox" name="terms" data-required-terms="true" className="h-5 w-5 accent-blue-900" />{" "}
              Acepto los términos y la política de privacidad
            </label>
            <button type="submit" className="button-primary sm:col-span-2">
              Enviar mensaje
            </button>
          </DemoForm>
        </div>
      </div>
      <div className="mt-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Smile Dental. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
