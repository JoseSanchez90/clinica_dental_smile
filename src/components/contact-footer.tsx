import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export function ContactFooter() {
  return (
    <footer className="px-5 pb-8 pt-20 md:px-10 lg:pt-28">
      <div className="mx-auto grid max-w-7xl border border-slate-200 bg-[#f7f8fa] lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative min-h-[430px] overflow-hidden border-b border-slate-200 p-8 lg:border-b-0 lg:border-r">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[#172a78]">Smile<span className="text-[#ed3d43]">.</span>Dental®</Link>
          <div aria-hidden className="absolute left-[42%] top-[22%] h-[430px] w-[430px] rounded-full border border-[#172a78]/25 before:absolute before:inset-12 before:rounded-full before:border before:border-[#172a78]/25 after:absolute after:inset-24 after:rounded-full after:border after:border-[#172a78]/25">
            <span className="absolute left-8 top-28 h-8 w-8 rounded-full bg-[url('/images/doctor.jpg')] bg-cover" />
            <span className="absolute left-36 top-8 h-7 w-7 rounded-full bg-[url('/images/doctora.jpg')] bg-cover" />
            <span className="absolute left-32 top-60 h-9 w-9 rounded-full bg-[url('/images/paciente-feliz.jpg')] bg-cover" />
          </div>
          <div className="absolute bottom-8 left-8 flex gap-3 text-[#172a78]">
            {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => <a key={i} href="#" aria-label={["Instagram","LinkedIn","Facebook"][i]} className="grid h-10 w-10 place-items-center border border-slate-200 bg-white transition hover:bg-[#172a78] hover:text-white"><Icon /></a>)}
          </div>
        </div>
        <div id="cita" className="p-6 sm:p-10 lg:p-16">
          <h2 className="section-title text-center">Nos encantará ayudarte</h2>
          <p className="mt-4 text-center text-slate-500">Nuestro equipo está listo para escuchar tus consultas.</p>
          <form className="mt-9 grid gap-4 sm:grid-cols-2">
            <label className="field"><input placeholder="Nombres" aria-label="Nombres" /><FiMail /></label>
            <label className="field"><input placeholder="Apellidos" aria-label="Apellidos" /><FiMail /></label>
            <label className="field sm:col-span-2"><input type="email" placeholder="Correo electrónico*" aria-label="Correo electrónico" required /><FiMail /></label>
            <label className="field sm:col-span-2"><select defaultValue="" aria-label="Selecciona tu dentista"><option value="" disabled>Selecciona tu dentista</option><option>Dra. María Lubin</option><option>Dr. Corey Dodkis</option><option>Dra. Milagros Culhane</option></select></label>
            <label className="sm:col-span-2"><textarea className="min-h-32 w-full resize-y border border-slate-200 bg-white p-4 text-sm outline-none focus:border-[#172a78]" placeholder="Mensaje" aria-label="Mensaje" /></label>
            <label className="flex items-center gap-3 text-sm text-slate-500 sm:col-span-2"><input type="checkbox" className="h-5 w-5 accent-[#172a78]" /> Acepto los términos y la política de privacidad</label>
            <button type="submit" className="button-primary sm:col-span-2">Enviar mensaje</button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-sm text-slate-500">© {new Date().getFullYear()} Smile Dental. Todos los derechos reservados.</div>
    </footer>
  );
}
