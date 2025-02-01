import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export const antiqueOlive = localFont({
  src: [
    // {
    //   path: "../fonts/AntiqueOliveRegular.ttf",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: "../fonts/AntiqueOliveBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-antique-olive",
})



export const metadata: Metadata = {
  title: "PAMOJA CONGO",
  description: "Plateforme de Collecte de Fonds  pour les Victimes des Guerres en RDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={` ${antiqueOlive.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">

          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
