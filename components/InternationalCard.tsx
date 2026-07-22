import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function InternationalCard() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-mint/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Lista de espera abierta
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">
            Obtené una tarjeta internacional
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
            Comprá y pagá en USD, EUR y más monedas en más de 200 países, sin
            comisiones ni cargos extra por compras en el exterior.
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
            Todavía no está disponible: sumate a la lista de espera y te
            avisamos apenas puedas pedir la tuya.
          </p>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-md sm:mt-20">
          <Image
            src="/img/card-zenda.png"
            alt="Tarjeta internacional Zenda"
            width={978}
            height={746}
            quality={100}
            sizes="240px"
            className="animate-floaty absolute left-1/2 top-0 z-0 w-36 -translate-x-1/2 -translate-y-[60%] sm:w-48"
          />
          <div className="relative z-10">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
