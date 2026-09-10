import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFooter } from "@/components/contact-footer";
import { Header } from "@/components/header";
import { OtherServices } from "@/components/other-services";
import { dentalServices, getDentalService } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return dentalServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDentalService(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.text,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDentalService(slug);

  if (!service) notFound();

  return (
    <>
      <Header constrained />
      <main>
        <section className="page-gutter pt-6 pb-16 lg:pb-20">
          <div className="grid overflow-hidden lg:min-h-117.5 lg:grid-cols-[1.15fr_.85fr]">
            <div className="flex flex-col items-start justify-center bg-blue-900 px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
              <h1 className="max-w-xl text-5xl font-semibold leading-[.98] tracking-tighter sm:text-6xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-7 max-w-lg text-base leading-7 text-blue-100">
                {service.text}
              </p>
              <Link
                href="#cita"
                className="mt-9 inline-flex min-h-12 items-center justify-center bg-white px-7 text-sm font-bold text-blue-900 transition hover:bg-blue-50"
              >
                Reservar consulta
              </Link>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-br-[45%] lg:min-h-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </section>

        <section className="page-gutter grid gap-6 pb-20 md:grid-cols-3 lg:pb-28">
          {service.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="border border-slate-200 bg-slate-50 p-7 lg:min-h-70 lg:p-8"
            >
              <h2 className="text-2xl font-semibold leading-tight tracking-tight">
                {benefit.title}
              </h2>
              <p className="mt-6 leading-7 text-slate-500">{benefit.text}</p>
            </article>
          ))}
        </section>

        <section className="page-gutter grid items-center gap-10 pb-20 lg:grid-cols-[.72fr_1.28fr] lg:gap-16 lg:pb-28">
          <div>
            <h2 className="section-title">{service.introTitle}</h2>
            <p className="mt-7 leading-7 text-slate-500">{service.intro}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {service.gallery.map((image, index) => (
              <div
                key={image}
                className={`relative min-h-64 overflow-hidden sm:min-h-88 lg:min-h-105 ${
                  index === 0 ? "rounded-tl-[48%]" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${service.title}: atención ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 22vw"
                />
              </div>
            ))}
          </div>
        </section>

        <OtherServices />
      </main>
      <ContactFooter />
    </>
  );
}
