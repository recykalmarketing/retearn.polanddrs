import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { content, type Locale } from "@/lib/content";

const locales: Locale[] = ["pl", "en"];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) return {};

  const isPolish = locale === "pl";
  return {
    title: isPolish
      ? "Kompaktowy automat kaucyjny dla małych sklepów | Retearn"
      : "Compact RVM for Small Retail Stores in Poland | Retearn",
    description: isPolish
      ? "Kompaktowy automat RVM dla małych sklepów w Polsce. Pojemność do 200 opakowań, skaner QR 360° i monitoring urządzenia. Umów rozmowę."
      : "A compact RVM for small Polish retailers, with capacity for up to 200 containers, 360° QR scanning and connected monitoring. Book a meeting.",
    alternates: {
      canonical: `/${locale}`,
      languages: { "pl-PL": "/pl", "en-GB": "/en", "x-default": "/pl" }
    },
    openGraph: {
      title: isPolish ? "RVM dla małych sklepów | Retearn" : "RVM for Small Retail Stores | Retearn",
      description: isPolish ? "Do 200 opakowań. Skaner QR 360°. Monitoring online." : "Up to 200 containers. 360° QR scanner. Connected monitoring.",
      locale: isPolish ? "pl_PL" : "en_GB",
      type: "website"
    }
  };
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) notFound();
  return <LandingPage locale={locale} content={content[locale]} />;
}
