"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/content";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    const nextPath = pathname.replace(/^\/(pl|en)/, `/${nextLocale}`);
    const hash = window.location.hash;
    window.localStorage.setItem("retearn-locale", nextLocale);
    router.push(`${nextPath}${hash}`);
  };

  return (
    <div className="language-toggle" role="group" aria-label="Language selector">
      <button className={locale === "pl" ? "active" : ""} onClick={() => changeLanguage("pl")} aria-pressed={locale === "pl"}>PL</button>
      <span aria-hidden="true">|</span>
      <button className={locale === "en" ? "active" : ""} onClick={() => changeLanguage("en")} aria-pressed={locale === "en"}>EN</button>
    </div>
  );
}
