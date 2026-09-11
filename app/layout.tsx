import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas-do-sagrado.blubier.chatgpt.site"),
  robots: { index: true, follow: true },
  title: "Atlas do Sagrado · História das religiões",
  description: "MOOC aberto sobre história das religiões, filosofia e não religião, com certificado simbólico em PDF.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
