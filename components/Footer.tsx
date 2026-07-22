"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { submitForm } from "@/lib/web3forms";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/zenda.cash",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: "X",
    href: "https://x.com/zendacash",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <line x1="8" y1="8" x2="16" y2="16" />
        <line x1="16" y1="8" x2="8" y2="16" />
      </>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/zenda-cash/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <line x1="7.5" y1="10.5" x2="7.5" y2="16" />
        <circle cx="7.5" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
        <path d="M11.5 16v-3.6a2 2 0 0 1 4 0V16" />
        <line x1="11.5" y1="10.5" x2="11.5" y2="16" />
      </>
    ),
  },
];

export default function Footer() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await submitForm(e.currentTarget);
      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "No pudimos enviar el formulario.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <footer className="relative overflow-hidden bg-[#2df6af] text-ink">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:py-16">
        {/* Brand + newsletter */}
        <div className="grid grid-cols-1 gap-10 pb-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Logo variant="light" wordClassName="text-ink" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
              Todo lo que necesitás para operar cripto, en un solo lugar.
            </p>
            <Link
              href="/empresas"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Zenda para empresas
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">
              Sumate al newsletter
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Novedades y lanzamientos, sin spam.
            </p>
            {sent ? (
              <p className="mt-3 rounded-lg bg-white/50 px-4 py-3 text-sm font-medium text-ink">
                ¡Gracias por sumarte!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3">
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                <input type="hidden" name="subject" value="Zenda — Nuevo suscriptor al newsletter" />
                <input type="hidden" name="from_name" value="Zenda.cash" />
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    aria-label="Email"
                    className="w-full rounded-lg border border-ink/15 bg-white/60 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink/40"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="shrink-0 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {sending ? "..." : "Sumarme"}
                  </button>
                </div>
                {error && <p className="mt-2 text-xs font-medium text-red-700">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink/80">
            <a
              href="mailto:info@zenda.cash"
              className="transition-colors hover:text-ink"
            >
              info@zenda.cash
            </a>
            <Link
              href="/politica-de-privacidad"
              className="transition-colors hover:text-ink"
            >
              Política de privacidad
            </Link>
          </div>

          <div className="flex items-center gap-4 text-ink/80">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="transition-colors hover:text-ink"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
