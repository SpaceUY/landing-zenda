import WaitlistForm from "./WaitlistForm";

export default function InternationalCard() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-brand-deep">
            Próximamente
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">
            Obtené una tarjeta internacional
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Comprá y pagá en USD, EUR y más monedas en más de 200 países, sin
            comisiones ni cargos extra por compras en el exterior.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
