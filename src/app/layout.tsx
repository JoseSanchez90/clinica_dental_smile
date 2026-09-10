import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smile Dental | Clínica dental en Lima",
    template: "%s | Smile Dental",
  },
  description:
    "Atención odontológica integral, cálida y moderna para toda la familia en Lima, Perú.",
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Smile Dental",
  },
  twitter: {
    card: "summary_large_image",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-PE" className={geist.variable}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
