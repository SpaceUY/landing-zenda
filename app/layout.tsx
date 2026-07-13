import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenda | La primera tarjeta crypto de Uruguay.",
  description: "Todo lo que necesitás para operar crypto, en un solo lugar.",
  openGraph: {
    title: "Zenda | La primera tarjeta crypto de Uruguay.",
    description: "Todo lo que necesitás para operar crypto, en un solo lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
