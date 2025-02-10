import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const antiqueOlive = localFont({
  src: [

    {
      path: "../fonts/AntiqueOliveBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-antique-olive",
})

const antiqueOliveRegular = localFont({
  src: [

    {
      path: "../fonts/AntiqueOliveRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-antique-olive-regular",

})



export const metadata: Metadata = {
  title: "Pamoja | Plateforme de Collecte de Fonds",
  description: "Plateforme de Collecte de Fonds  pour les Victimes des Guerres en RDC",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={` ${antiqueOlive.variable} ${antiqueOliveRegular.variable} antialiased`}
      >

        <main className="min-h-screen">
          {children}

        </main>
      </body>
    </html>
  );
}
