"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import type { Locale, SiteContent } from "@/lib/content";

export function LeadForm({ locale, copy }: { locale: Locale; copy: SiteContent["form"] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale })
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const calendarLink = process.env.NEXT_PUBLIC_CAL_LINK;
    return (
      <div className="form-success" aria-live="polite">
        <CheckCircle2 size={42} />
        <h3>{copy.successTitle}</h3>
        <p>{copy.successText}</p>
        {calendarLink ? (
          <iframe title="Meeting scheduler" src={calendarLink} className="calendar-frame" />
        ) : (
          <div className="calendar-placeholder">
            <CalendarDays size={34} />
            <strong>Calendar embed placeholder</strong>
            <span>Add NEXT_PUBLIC_CAL_LINK in .env.local.</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>{copy.fields.fullName}<input required name="fullName" autoComplete="name" /></label>
        <label>{copy.fields.company}<input required name="company" autoComplete="organization" /></label>
        <label>{copy.fields.email}<input required type="email" name="email" autoComplete="email" /></label>
        <label>{copy.fields.phone}<input required type="tel" name="phone" autoComplete="tel" /></label>
        <label>{copy.fields.location}<input required name="location" autoComplete="postal-code" /></label>
        <label>{copy.fields.storeSize}
          <select required name="storeSize" defaultValue=""><option value="" disabled>—</option>{copy.options.size.map(option => <option key={option}>{option}</option>)}</select>
        </label>
        <label>{copy.fields.storeCount}
          <select required name="storeCount" defaultValue=""><option value="" disabled>—</option>{copy.options.count.map(option => <option key={option}>{option}</option>)}</select>
        </label>
        <label className="full-span">{copy.fields.message}<textarea name="message" rows={4} /></label>
      </div>
      <label className="consent"><input required type="checkbox" name="consent" value="yes" /><span>{copy.fields.consent}</span></label>
      {status === "error" && <p className="form-error" role="alert">{copy.error}</p>}
      <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? copy.submitting : copy.submit}<ArrowRight size={18} />
      </button>
    </form>
  );
}
