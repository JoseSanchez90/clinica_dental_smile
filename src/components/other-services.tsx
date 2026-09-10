import Braces from "@/../public/svg/braces.svg";
import Shield from "@/../public/svg/shield.svg";
import BracesRubber from "@/../public/svg/braces-rubber-bands.svg";
import Tools from "@/../public/svg/tools.svg";
import Implant from "@/../public/svg/implant.svg";
import Tooth from "@/../public/svg/tooth.svg";
import Image from "next/image";

const items = [
  {
    title: "Odontología general",
    Icon: <Image src={Tooth} width={64} height={64} alt="Tooth" />,
  },
  {
    title: "Implantes",
    Icon: <Image src={Implant} width={64} height={64} alt="Implant" />,
  },
  {
    title: "Cirugía dental",
    Icon: <Image src={Tools} width={64} height={64} alt="Tools" />,
  },
  {
    title: "Brackets",
    Icon: <Image src={Braces} width={64} height={64} alt="Braces" />,
  },
  {
    title: "Protección dental",
    Icon: <Image src={Shield} width={64} height={64} alt="Shield" />,
  },
  {
    title: "Alineadores",
    Icon: (
      <Image src={BracesRubber} width={64} height={64} alt="BracesRubber" />
    ),
  },
];

export function OtherServices() {
  return (
    <section className="page-gutter py-20 text-center lg:py-28">
      <h2 className="section-title">Descubre otros servicios</h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-500">
        Opciones pensadas para acompañar todas tus necesidades de salud bucal.
      </p>
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, Icon }) => (
          <article key={title}>
            <span className="flex w-fit mx-auto p-2 hover:bg-blue-950 rounded-xl transition duration-300 ease-in-out">
              {Icon}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mx-auto mt-3 max-w-xs leading-6 text-slate-500">
              Evaluación personalizada, tecnología moderna y cuidado
              profesional.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
