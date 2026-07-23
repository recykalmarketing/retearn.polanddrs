"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale, SiteContent } from "@/lib/content";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar({ locale, copy }: { locale: Locale; copy: SiteContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <a href="#home" className="brand" aria-label="Retearn home" onClick={close}>
          <Image src="/retearn-logo.svg" alt="Retearn, part of Recykal" width={174} height={52} priority />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-dropdown">
            <button className="nav-link" type="button">{copy.rvm}<ChevronDown size={15} /></button>
            <div className="dropdown-panel">
              <a href="#small-retail">{copy.smallStore}</a>
              <a href="#rvm">{copy.features}</a>
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="nav-link" type="button">{copy.retailers}<ChevronDown size={15} /></button>
            <div className="dropdown-panel">
              <a href="#retailers">{copy.benefits}</a>
              <a href="#journey">{copy.howItWorks}</a>
            </div>
          </div>
          <a className="nav-link" href="#about">{copy.about}</a>
          <a className="nav-link" href="#faq">{copy.faq}</a>
        </nav>

        <div className="nav-actions">
          <LanguageToggle locale={locale} />
          <a className="button button-primary nav-cta" href="#meeting">{copy.meeting}</a>
          <button className="mobile-menu-button" type="button" aria-label={copy.menu} aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-language"><LanguageToggle locale={locale} /></div>
        <a href="#small-retail" onClick={close}>{copy.smallStore}</a>
        <a href="#rvm" onClick={close}>{copy.features}</a>
        <a href="#retailers" onClick={close}>{copy.benefits}</a>
        <a href="#journey" onClick={close}>{copy.howItWorks}</a>
        <a href="#about" onClick={close}>{copy.about}</a>
        <a href="#faq" onClick={close}>{copy.faq}</a>
        <a className="button button-primary" href="#meeting" onClick={close}>{copy.meeting}</a>
      </div>
    </header>
  );
}
