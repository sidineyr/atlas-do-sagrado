import type { Metadata } from "next";
import "./globals.css";
import { LanguageSelector } from "./components/language-selector";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas-do-sagrado.blubier.chatgpt.site"),
  robots: { index: true, follow: true },
  verification: {
    google: "PC5Jb-nRbCO9IwJ_YQNDpJFpqOldwyEjN_pBfv0OKkw",
  },
  title: "Atlas do Sagrado · Curso gratuito de história das religiões",
  description: "Curso online gratuito sobre história das religiões, filosofia da religião, ateísmo e não religião, com oito módulos e certificado simbólico em PDF.",
  keywords: ["história das religiões", "curso gratuito de religião", "filosofia da religião", "religiões do mundo", "world religions course", "history of religions", "religious literacy", "philosophy of religion"],
  authors: [{ name: "Sidiney Rodrigues", url: "https://github.com/sidineyr" }],
  creator: "Sidiney Rodrigues",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Atlas do Sagrado · História das religiões",
    description: "Percurso gratuito por religiões do mundo, filosofia da religião e não religião.",
    url: "/",
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    siteName: "Atlas do Sagrado",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased"><LanguageSelector />{children}</body>
    </html>
  );
}
