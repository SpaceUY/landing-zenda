"use client";

import { useState } from "react";
import { submitForm } from "@/lib/web3forms";

const fields = [
  { name: "nombre", label: "Nombre y apellido", type: "text", ph: "Lionel Messi" },
  { name: "empresa", label: "Empresa", type: "text", ph: "Mi Empresa S.A." },
  { name: "email", label: "Email", type: "email", ph: "lionel@miempresa.com" },
  { name: "telefono", label: "Teléfono", type: "tel", ph: "+598 1234 5678" },
] as const;

export default function EmpresasForm() {
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
    <div
      id="contacto"
      className="scroll-mt-24 rounded-[var(--radius-card)] border border-black/5 bg-surface p-7 shadow-sm"
    >
      <h3 className="font-display text-lg font-semibold leading-snug text-ink">
        Hablá con nuestro equipo
      </h3>
      <p className="mt-1.5 text-sm text-ink-muted">
        Contanos sobre tu operativa y te contactamos a la brevedad.
      </p>

      {sent ? (
        <p className="mt-6 rounded-lg bg-mint-soft px-4 py-6 text-center text-sm font-medium text-ink">
          ¡Gracias! Un especialista se va a poner en contacto a la brevedad.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="Zenda — Contacto Empresas" />
          <input type="hidden" name="from_name" value="Zenda.cash" />
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
                placeholder={f.ph}
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="mensaje"
              className="mb-1.5 block text-xs font-medium text-ink"
            >
              Contanos sobre tu operativa
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={3}
              placeholder="Importación, exportación, remesas, volumen mensual estimado..."
              className="w-full resize-none rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
            />
          </div>
          {error && <p className="text-xs font-medium text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-[10px] bg-accent py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
          >
            {sending ? "Enviando..." : "Solicitar contacto"}
          </button>
        </form>
      )}
    </div>
  );
}
