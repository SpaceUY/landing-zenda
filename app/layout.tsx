import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Script from "next/script";
import { OpenPanelComponent } from "@openpanel/nextjs";
import { OPENPANEL_API_URL, SITE_URL } from "@/lib/constants";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-0ZYLHML5PY";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zenda | La primera tarjeta cripto de Uruguay.",
    template: "%s | Zenda",
  },
  description: "Todo lo que necesitás para operar cripto, en un solo lugar.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zenda | La primera tarjeta cripto de Uruguay.",
    description: "Todo lo que necesitás para operar cripto, en un solo lugar.",
    url: SITE_URL,
    siteName: "Zenda",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenda | La primera tarjeta cripto de Uruguay.",
    description: "Todo lo que necesitás para operar cripto, en un solo lugar.",
  },
  icons: {
    icon: [
      { url: "/icon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Zenda",
      url: SITE_URL,
      logo: `${SITE_URL}/icon-light.svg`,
      sameAs: [
        "https://www.instagram.com/zenda.cash",
        "https://x.com/zendacash",
        "https://www.linkedin.com/company/zenda-cash/",
      ],
    },
    {
      "@type": "WebSite",
      name: "Zenda",
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <OpenPanelComponent
        clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID!}
        apiUrl={OPENPANEL_API_URL}
        trackScreenViews
        trackOutgoingLinks
        trackAttributes
      />
    </html>
  );
}
