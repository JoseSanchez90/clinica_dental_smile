import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "Smile Dental | Clínica dental en Lima", template: "%s | Smile Dental" }, description: "Atención odontológica integral, cálida y moderna para toda la familia en Lima, Perú." };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="es-PE" className={geist.variable}><body>{children}</body></html>; }
