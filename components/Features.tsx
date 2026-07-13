import Image from "next/image";

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-[var(--radius-card)] border-b border-black/5 bg-grid bg-white">
      {children}
    </div>
  );
}

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

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <article className="overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-white">
            <CardShell>
              <Image
                src="/img/piggy.png"
                alt=""
                width={140}
                height={140}
                className="relative z-0 h-28 w-auto"
              />
              <Image
                src="/img/badge-usdt.svg"
                alt=""
                width={110}
                height={40}
                className="absolute left-5 top-6 z-10 w-24 drop-shadow"
              />
              <Image
                src="/img/badge-eth.svg"
                alt=""
                width={90}
                height={36}
                className="absolute right-4 top-10 z-10 w-20 drop-shadow"
              />
              <Image
                src="/img/badge-btc.svg"
                alt=""
                width={90}
                height={36}
                className="absolute bottom-6 right-8 z-10 w-20 drop-shadow"
              />
            </CardShell>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Operá en USDT, con POL y TRON
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Comprá las principales criptomonedas en simples pasos y con total
                seguridad.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-white">
            <CardShell>
              <Image
                src="/img/cash.png"
                alt=""
                width={200}
                height={140}
                className="relative z-0 h-24 w-auto"
              />
              <Image
                src="/img/toast-transfer.svg"
                alt=""
                width={220}
                height={44}
                className="absolute bottom-5 left-1/2 z-10 w-48 -translate-x-1/2 drop-shadow"
              />
            </CardShell>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Retirá cuando quieras
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Accedé a tu saldo en cualquier momento y retiralo en efectivo o
                por transferencia.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-white">
            <CardShell>
              <Image
                src="/img/redpagos-card.png"
                alt=""
                width={240}
                height={150}
                className="h-28 w-auto"
              />
            </CardShell>
            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Partners oficiales de Red Pagos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Depositá o retirá tu dinero, con el respaldo y la confianza de Red
                Pagos.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
