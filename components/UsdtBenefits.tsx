import Image from "next/image";
import Reveal from "./Reveal";

const benefits = [
  {
    icon: "/img/icon-shield.png",
    title: "Preservá el valor de tu dinero",
    body: "USDT mantiene su paridad con el dólar. Evitás la volatilidad y protegés tus ahorros en todo momento.",
  },
  {
    icon: "/img/icon-lightning.png",
    title: "Operá en redes rápidas y económicas",
    body: "Usá Tron o Polygon para mover tu dinero. Tron es la red con mayor volumen y menores comisiones.",
  },
  {
    icon: "/img/icon-contactless.png",
    title: "Usalo para ahorrar, pagar o invertir",
    body: "Tu saldo siempre disponible. Sin bancos, límites, ni procesos innecesarios.",
  },
];

function Coin({ className }: { className: string }) {
  return (
    <Image
      src="/img/coin-usdt.png"
      alt=""
      width={740}
      height={740}
      aria-hidden
      className={`pointer-events-none absolute drop-shadow-xl ${className}`}
    />
  );
}

export default function UsdtBenefits() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <Coin className="animate-floaty -left-10 top-6 w-20 opacity-95 sm:w-28" />
      <Coin className="-right-8 top-16 w-16 rotate-12 opacity-70 sm:w-24" />
      <Coin className="animate-floaty bottom-10 left-[6%] w-14 -rotate-6 opacity-55 sm:w-20" />
      <Coin className="-right-10 bottom-0 w-28 rotate-6 opacity-90 sm:w-40" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-[40px]">
          Conocé los beneficios de USDT
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
          El USDT mantiene paridad con el dólar. Es fácil de usar, accesible y se
          transfiere con comisiones mínimas en redes como Tron y Polygon.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <article className="rounded-[var(--radius-card)] border border-white/15 bg-brand-deep/60 p-8 backdrop-blur-sm">
                <Image
                  src={b.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                />
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
