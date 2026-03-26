import type { Metadata } from "next";
import LoadingScreen from "@/components/LoadingScreen";
import { Afacad_Flux } from "next/font/google";

import "./globals.css";

const afacadFlux = Afacad_Flux({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Jethings - Development Agency",
  description: "Jethings Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          #initial-loader {
            position: fixed !important;
            inset: 0 !important;
            background-color: #0d0c10 !important;
            z-index: 99999 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        `}</style>
      </head>
      <body className={`${afacadFlux.className} antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
