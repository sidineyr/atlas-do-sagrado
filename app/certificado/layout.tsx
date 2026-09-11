import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificado simbólico | Atlas do Sagrado",
  description: "Acompanhe sua trilha e emita o certificado simbólico em PDF após visitar os oito módulos.",
};

export default function CertificateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
