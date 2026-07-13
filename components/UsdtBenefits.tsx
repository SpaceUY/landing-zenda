import Image from "next/image";

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

export default function UsdtBenefits() {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight sm:text-[40px]">
          Conocé los beneficios de USDT
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
          El USDT mantiene paridad con el dólar. Es fácil de usar, accesible y se
          transfiere con comisiones mínimas en redes como Tron y Polygon.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-[var(--radius-card)] border border-white/15 p-8"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
