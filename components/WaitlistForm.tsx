"use client";

import { useState } from "react";

const fields = [
  { name: "nombre", label: "Nombre y apellido", type: "text", ph: "Lionel Messi" },
  { name: "email", label: "Email", type: "email", ph: "lionel@gmail.com" },
  { name: "telefono", label: "Teléfono", type: "tel", ph: "+598 1234 5678" },
] as const;

export default function WaitlistForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: original site posts to a Framer form endpoint.
    setSent(true);
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
                placeholder={f.ph}
                className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full rounded-[10px] bg-accent py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
