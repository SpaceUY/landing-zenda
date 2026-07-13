"use client";

import { useState } from "react";

const items = [
  {
    q: "¿Qué criptomonedas puedo comprar y vender en Zenda?",
    a: "Actualmente operamos con USDT, TRX y Polygon, y próximamente ampliaremos nuestra oferta de criptomonedas. Mientras tanto, estamos a su disposición para cualquier consulta o pedido especial que deseen realizar. No duden en contactarnos.",
  },
  {
    q: "¿Es seguro operar con Zenda?",
    a: "Sí. Operamos con USDT sobre las redes Tron y Polygon y contamos con el respaldo de Red Pagos para que puedas depositar y retirar con total confianza.",
  },
  {
    q: "¿Cómo realizo mi primera transacción?",
    a: "Creá tu cuenta, elegí cuánto querés cambiar y confirmá la operación. Además, recibís 10 USDT de regalo en tu primera transacción.",
  },
  {
    q: "¿Cuáles son las comisiones por operación?",
    a: "La comisión es del 2% en todas tus operaciones. La promoción aplica únicamente para transacciones menores a USD 2000.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-[40px]">
          Preguntas frecuentes
        </h2>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-xl bg-surface transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-lg text-ink/50 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
