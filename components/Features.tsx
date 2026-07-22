import Image from "next/image";
import Reveal from "./Reveal";

const cards = [
  {
    img: "/img/feature-usdt.png",
    title: "Operá en USDT, con POL y TRON",
    body: "Comprá las principales criptomonedas en simples pasos y con total seguridad.",
  },
  {
    img: "/img/feature-retiro.png",
    title: "Retirá cuando quieras",
    body: "Accedé a tu saldo en cualquier momento y retiralo en efectivo o por transferencia.",
  },
  {
    img: "/img/feature-metodos-v2.png",
    title: "Múltiples métodos de pago",
    body: "Depositá o retirá tu dinero con el respaldo de Red Pagos y Mercado Pago.",
  },
];

export default function Features() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-[40px]">
          Comprá, vendé o invertí
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted">
          Cambiá entre pesos, dólares y criptomonedas. Todo desde un solo lugar.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-white">
                <div className="relative aspect-[9/5] w-full overflow-hidden border-b border-black/5">
                  <Image
                    src={card.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
