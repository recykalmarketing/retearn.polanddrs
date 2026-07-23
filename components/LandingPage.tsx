"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Boxes, CheckCircle2, CircleDot, CloudCog, Eye, LayoutGrid,
  MonitorSmartphone, Puzzle, QrCode, Receipt, RotateCw, ScanLine, ShoppingBasket, Smartphone,
  Store, Touchpad, UserRoundCheck, Workflow
} from "lucide-react";
import type { Locale, SiteContent } from "@/lib/content";
import { Navbar } from "./Navbar";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";
import { RvmScrollFrames } from "./RvmScrollFrames";

const iconMap = {
  layout: LayoutGrid,
  checkout: ShoppingBasket,
  capacity: Boxes,
  monitor: MonitorSmartphone,
  scan: ScanLine,
  inlet: CircleDot,
  screen: Touchpad,
  voucher: Receipt,
  return: RotateCw,
  automation: Workflow,
  control: Smartphone
};

// Fixed order matching content.ts rvm.specs / journey.steps arrays (same
// length and order in every locale), so icons don't need to live in the
// translated content data.
const specIcons = [Store, Boxes, ScanLine, Touchpad, Eye, Puzzle];
const journeyIcons = [ScanLine, CircleDot, CheckCircle2];
const featureVisuals = [
  { src: "/images/qr-scanner.png", alt: "Close-up of the Retearn RVM's 360-degree QR scanner array", width: 1254, height: 1254 },
  { src: "/images/return-inlet.png", alt: "Top-down view of the illuminated return inlet", width: 1254, height: 1254 },
  { src: "/images/on-screen-guidance.png", alt: "RVM touchscreen showing return guidance", width: 1254, height: 1254 },
  { src: "/images/reward-voucher.png", alt: "Printed reward voucher dispensing from the RVM", width: 1254, height: 1254 },
  { src: "/images/dashboard-placeholder.svg", alt: "Connected monitoring dashboard placeholder", width: 1200, height: 900 }
];

export function LandingPage({ locale, content }: { locale: Locale; content: SiteContent }) {
  const reduce = useReducedMotion();
  const productFeaturesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar locale={locale} copy={content.nav} />
      <main>
        <section id="home" className="hero">
          <Image
            className="hero-photo"
            src="/images/hero-store.png"
            alt="Customer returning a container at a Retearn reverse vending machine inside a Polish convenience store"
            fill
            sizes="100vw"
            priority
          />
          <div className="hero-scrim" aria-hidden="true" />
          <motion.div
            className="status-card"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={reduce ? undefined : { opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { duration: .6, delay: .4 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: .4 } }}
          >
            <span className="online-dot" />Online<strong>42%</strong><small>{locale === "pl" ? "zapełnienia" : "capacity"}</small>
          </motion.div>
          <div className="container hero-content">
            <div className="hero-copy">
              <motion.p className="eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .5 }}>{content.hero.eyebrow}</motion.p>
              <motion.h1 initial={reduce ? false : { opacity: 0, y: 28 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}>{content.hero.title}</motion.h1>
              <motion.p className="hero-description" initial={reduce ? false : { opacity: 0, y: 20 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }}>{content.hero.description}</motion.p>
              <motion.div className="hero-actions" initial={reduce ? false : { opacity: 0, y: 16 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .6, delay: .28 }}>
                <a className="button button-primary" href="#meeting">{content.hero.primary}<ArrowRight size={18} /></a>
                <a className="button button-secondary" href="#rvm">{content.hero.secondary}</a>
              </motion.div>
              <motion.p className="microcopy" initial={reduce ? false : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ delay: .5 }}>{content.hero.note}</motion.p>
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="container proof-grid">
            {content.hero.proof.map((item, index) => (
              <Reveal key={item.value} delay={index * .07} className="proof-item"><strong>{item.value}</strong><span>{item.label}</span></Reveal>
            ))}
          </div>
        </section>

        <section id="small-retail" className="section-pad light-section">
          <div className="container">
            <Reveal className="section-heading narrow">
              <p className="eyebrow">{content.smallRetail.label}</p>
              <h2>{content.smallRetail.title}</h2>
              <p>{content.smallRetail.description}</p>
            </Reveal>
            <div className="retail-fit-grid">
              <Reveal className="floor-plan-card">
                <Image
                  src="/images/small-retail-store.png"
                  alt="Customer returning a container at a Retearn RVM inside a small convenience store"
                  fill
                  sizes="(max-width: 1080px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
              </Reveal>
              <div className="feature-list">
                {content.smallRetail.items.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return <Reveal key={item.title} delay={index * .06} className="feature-row"><span className="icon-box"><Icon /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>;
                })}
                <Reveal><a className="text-link" href="#meeting">{content.smallRetail.cta}<ArrowRight size={17} /></a></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="rvm" className="section-pad product-section">
          <div className="container">
            <Reveal className="section-heading product-heading">
              <p className="eyebrow light">{content.rvm.label}</p>
              <h2>{content.rvm.title}</h2>
              <p>{content.rvm.description}</p>
            </Reveal>
            <div className="product-explorer">
              <div className="sticky-product">
                <RvmScrollFrames containerRef={productFeaturesRef} />
                <div className="product-halo" aria-hidden="true" />
              </div>
              <div className="product-features" ref={productFeaturesRef}>
                {content.rvm.features.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  const visual = featureVisuals[index];
                  return (
                    <Reveal key={feature.number} className="product-feature-card">
                      <div className="feature-text">
                        <div className="feature-number">{feature.number}</div>
                        <Icon size={20} />
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                      </div>
                      {visual && (
                        <div className="feature-visual">
                          <Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} />
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>

            <Reveal className="spec-panel">
              <div><p className="eyebrow light">SPEC</p><h3>{content.rvm.specsTitle}</h3></div>
              <div className="spec-grid">
                {content.rvm.specs.map((spec, index) => {
                  const Icon = specIcons[index];
                  return (
                    <div key={spec.label}>
                      <Icon size={22} />
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  );
                })}
              </div>
              <p className="spec-disclaimer">{content.rvm.disclaimer}</p>
              <a className="button button-light" href="#meeting">{content.rvm.cta}<ArrowRight size={18} /></a>
            </Reveal>
          </div>
        </section>

        <section id="retailers" className="section-pad warm-section">
          <div className="container">
            <Reveal className="section-heading narrow">
              <p className="eyebrow">{content.retailers.label}</p>
              <h2>{content.retailers.title}</h2>
              <p>{content.retailers.description}</p>
            </Reveal>
            <div className="benefit-stack">
              {content.retailers.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <Reveal key={benefit.title} className="benefit-panel">
                    <span className="benefit-index">0{index + 1}</span>
                    <span className="icon-box"><Icon /></span>
                    <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="retailer-visual"><Image src="/images/retailer-story-placeholder.svg" alt="Retailer before and after RVM visual placeholder" width={1400} height={900} /></Reveal>
            <div className="support-strip">{content.retailers.strip.map(item => <span key={item}><CheckCircle2 size={17} />{item}</span>)}</div>
            <Reveal><a className="button button-primary" href="#meeting">{content.retailers.cta}<ArrowRight size={18} /></a></Reveal>
          </div>
        </section>

        <section id="journey" className="section-pad journey-section">
          <div className="container">
            <Reveal className="section-heading narrow"><h2>{content.journey.title}</h2></Reveal>
            <div className="journey-grid">
              {content.journey.steps.map((step, index) => {
                const Icon = journeyIcons[index];
                return (
                  <Reveal key={step.number} delay={index * .08} className="journey-card">
                    <Icon size={30} className="journey-icon" />
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="container about-grid">
            <Reveal>
              <p className="eyebrow">{content.about.label}</p>
              <h2>{content.about.title}</h2>
              {content.about.paragraphs.map(p => <p key={p}>{p}</p>)}
              <a className="text-link" href="#meeting">{content.about.cta}<ArrowRight size={17} /></a>
            </Reveal>
            <Reveal className="about-visual">
              <Image src="/images/rvm-product.png" alt="Retearn product and technology composition" width={1086} height={1448} />
              <div className="tech-badge badge-scan"><QrCode />360°</div>
              <div className="tech-badge badge-cloud"><CloudCog />Cloud</div>
              <div className="tech-badge badge-monitor"><Eye />Live</div>
            </Reveal>
          </div>
          <div className="container proof-cards">{content.about.proof.map((item, index) => <Reveal key={item.title} delay={index * .06} className="proof-card"><Store /><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>
        </section>

        <section id="faq" className="section-pad conversion-section">
          <div className="container conversion-grid">
            <div className="faq-side">
              <Reveal><p className="eyebrow">{content.faq.label}</p><h2>{content.faq.title}</h2></Reveal>
              <div className="faq-list">
                {content.faq.items.map((item, index) => (
                  <Reveal key={item.q} delay={index * .04}>
                    <details><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className="meeting-card" >
              <div id="meeting" className="meeting-anchor" />
              <p className="eyebrow light">{content.form.label}</p>
              <h2>{content.form.title}</h2>
              <p>{content.form.description}</p>
              <LeadForm locale={locale} copy={content.form} />
              <p className="reassurance"><UserRoundCheck size={18} />{content.form.reassurance}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><Image className="footer-logo" src="/retearn-logo.svg" alt="Retearn, part of Recykal" width={190} height={60} /><p>{content.footer.statement}</p></div>
          <div><strong>{content.nav.rvm}</strong><a href="#small-retail">{content.nav.smallStore}</a><a href="#rvm">{content.nav.features}</a></div>
          <div><strong>{content.nav.retailers}</strong><a href="#retailers">{content.nav.benefits}</a><a href="#journey">{content.nav.howItWorks}</a></div>
          <div><strong>{content.nav.about}</strong><a href="#about">{content.nav.about}</a><a href="#faq">{content.nav.faq}</a></div>
        </div>
        <div className="container footer-bottom"><span>{content.footer.copyright}</span><span><a href="#">{content.footer.privacy}</a><a href="#">{content.footer.cookies}</a></span></div>
      </footer>
      <a href="#meeting" className="mobile-sticky-cta">{content.nav.meeting}</a>
    </>
  );
}
