import { GiTooth, GiProtectionGlasses } from "react-icons/gi";
import { FaTeeth, FaShieldHeart } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbDental } from "react-icons/tb";

const items = [
  { title: "Odontología general", Icon: GiTooth }, { title: "Implantes", Icon: TbDental }, { title: "Cirugía dental", Icon: MdOutlineHealthAndSafety },
  { title: "Brackets", Icon: FaTeeth }, { title: "Protección dental", Icon: FaShieldHeart }, { title: "Alineadores", Icon: GiProtectionGlasses },
];

export function OtherServices() {
  return <section className="page-gutter py-20 text-center lg:py-28"><h2 className="section-title">Descubre otros servicios</h2><p className="mx-auto mt-4 max-w-xl text-slate-500">Opciones pensadas para acompañar todas tus necesidades de salud bucal.</p><div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{items.map(({title, Icon}) => <article key={title}><Icon className="mx-auto text-5xl text-[#dce6fa]" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mx-auto mt-3 max-w-xs leading-6 text-slate-500">Evaluación personalizada, tecnología moderna y cuidado profesional.</p></article>)}</div></section>;
}
