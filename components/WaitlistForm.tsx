"use client";

import { useState } from "react";
import { useOpenPanel } from "@openpanel/nextjs";
import { formToPayload, submitLanding } from "@/lib/landing-api";

const fields = [
  { name: "name", label: "Nombre y apellido", type: "text", ph: "Lionel Messi", maxLength: 255 },
  { name: "email", label: "Email", type: "email", ph: "lionel@gmail.com", maxLength: 255 },
  { name: "phone", label: "Teléfono", type: "tel", ph: "+598 1234 5678", maxLength: 30 },
] as const;

export default function WaitlistForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { track } = useOpenPanel();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      await submitLanding("waitlist-card", formToPayload(e.currentTarget));
      track("waitlist_submit");
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
    <div className="rounded-[var(--radius-card)] border border-black/5 bg-surface p-7 shadow-sm">
      <h3 className="font-display text-lg font-semibold leading-snug text-ink">
        Unite a la lista de espera para obtener acceso prioritario
      </h3>

      {sent ? (
        <p className="mt-6 rounded-lg bg-mint-soft px-4 py-6 text-center text-sm font-medium text-brand-deep">
          ¡Gracias! Te avisaremos apenas esté disponible.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {fields.map((f) => (
            <div key={f.name}>
              <label
                htmlFor={f.name}
                className="mb-1.5 block text-xs font-medium text-ink"
              >
                {f.label} <span className="text-accent">*</span>
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                maxLength={f.maxLength}
                placeholder={f.ph}
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
              />
            </div>
          ))}
          {error && <p className="text-xs font-medium text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-[10px] bg-accent py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
          >
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      )}
    </div>
  );
}
