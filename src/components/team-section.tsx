import Image from "next/image";
import Link from "next/link";

const team = [
  { name: "Tom Johnson", role: "Cirujano dentista", image: "/images/doctor.jpg" },
  { name: "María Lubin", role: "Fundadora y directora", image: "/images/doctora.jpg" },
  { name: "Corey Dodkis", role: "Odontólogo integral", image: "/images/doctor.jpg" },
  { name: "Milagros Culhane", role: "Especialista en estética", image: "/images/doctora.jpg" },
];

export function TeamSection() {
  return (
    <section className="bg-[#f5f7f8] py-20 lg:py-28">
      <div className="page-gutter grid gap-10 lg:grid-cols-[.68fr_1.32fr]">
        <div>
          <span className="eyebrow">Nuestro equipo</span><h2 className="section-title mt-5">Conoce a nuestros profesionales</h2>
          <p className="mt-5 max-w-sm leading-7 text-slate-500">Un equipo comprometido con una atención cercana, procedimientos precisos y una experiencia cómoda para cada paciente.</p>
          <Link href="/acerca" className="button-primary mt-8">Conócenos</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {team.map((person) => <article key={person.name} className="group relative min-h-[360px] overflow-hidden bg-slate-200">
            <Image src={person.image} alt={person.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827]/90 to-transparent p-6 pt-24 text-white"><h3 className="text-xl font-semibold">{person.name}</h3><p className="mt-1 text-sm text-white/75">{person.role}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
