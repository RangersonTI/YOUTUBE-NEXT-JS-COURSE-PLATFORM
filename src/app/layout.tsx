import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos!",
  description: "Os melhores curso de programação gratuitos com melhor experiência e aprendizado e foco.",
};

type IRootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="pt-Br">
      <body className={`${nunito.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
