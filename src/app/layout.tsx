import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { StoreProvider } from "../redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Château Dutruch Grand Poujeaux, Vin de Bordeaux, A.O.C Moulis-en-Médoc",
  description: "Grands vins et histoire du Château Dutruch Grand Poujeaux, ancien Cru Bourgeois Exceptionnel à Moulis-en-Médoc, vignoble certifié HVE et en partie bio sur un terroir d’exception et confidentiel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="fr">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon/favicon.png" sizes="any" />
        </head>
          <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
