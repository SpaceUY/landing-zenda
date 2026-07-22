import Image from "next/image";
import Header from "./Header";
import { APP_URL } from "@/lib/constants";

const logoClass = "block shrink-0 brightness-0 invert";

const allies = [
  {
    name: "Red Pagos",
    node: (
      <Image
        src="/logos/redpagos.png"
        alt="Red Pagos"
        width={117}
        height={39}
        className={`${logoClass} translate-y-[6.9px]`}
      />
    ),
  },
  {
    name: "Midinero",
    node: (
      <Image
        src="/logos/midinero.png"
        alt="Midinero"
        width={126}
        height={25}
        className={logoClass}
      />
    ),
  },
  {
    name: "Fucerep Coop.",
    node: (
      <Image
        src="/logos/fucerep.svg"
        alt="Fucerep Coop."
        width={95}
        height={34}
        className={`${logoClass} translate-y-[5.3px]`}
      />
    ),
  },
  {
    name: "Mercado Pago",
    node: (
      <Image
        src="/logos/mercadopago.png"
        alt="Mercado Pago"
        width={94}
        height={25}
        className={logoClass}
      />
    ),
  },
  {
    name: "Cambio Maiorano",
    node: (
      <Image
        src="/logos/maiorano.png"
        alt="Cambio Maiorano"
        width={153}
        height={30}
        className={`${logoClass} -translate-y-[9.5px]`}
      />
    ),
  },
  {
    name: "SpaceDev",
    node: (
      <Image
        src="/logos/spacedev.png"
        alt="SpaceDev"
        width={84}
        height={24}
        className={logoClass}
      />
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent"
        aria-hidden
      />
      <Header />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-12 pt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pb-20 lg:pt-44">
        {/* Copy */}
        <div className="min-w-0 max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            Operá con USDT, sin complicaciones
          </span>
          <h1 className="mt-6 font-display text-[34px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[40px]">
            Todo lo que necesitás para operar cripto, en un solo lugar.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            Cambiá entre pesos, dólares y cripto. Comprá, invertí y ahorrá, con
            total seguridad.
          </p>
          <div className="mt-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-white/60">
              Empezá a operar desde:
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={APP_URL}
                className="inline-flex h-[54px] w-[170px] items-center justify-center gap-2 rounded-lg border border-white/40 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Web App
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.space.zenda&hl=es_AR"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[54px] w-[170px] items-center justify-center transition-transform hover:scale-[1.02]"
              >
                <Image
                  src="/img/google-play-badge.png"
                  alt="Disponible en Google Play"
                  width={646}
                  height={192}
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Illustration — hidden below lg, the screenshot is illegible at mobile widths */}
        <div className="relative mx-auto hidden min-w-0 w-full max-w-3xl lg:-mr-10 lg:block lg:max-w-none lg:scale-110">
          <Image
            src="/img/hero-dashboard.png"
            alt="Panel de Zenda en la web y en la app"
            width={2400}
            height={1666}
            sizes="(min-width: 1024px) 700px, 0px"
            className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
            priority
          />
        </div>
      </div>

      {/* Allies strip */}
      <div className="relative border-t border-white/10 bg-brand-deep/70">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-white/60">
            Nuestros aliados
          </p>
          <div
            className="mx-auto mt-6 max-w-3xl overflow-hidden py-3"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
            }}
          >
            <div className="animate-ticker flex w-max items-center gap-12">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-12"
                  aria-hidden={i === 1}
                >
                  {allies.map((ally) => (
                    <div key={ally.name} className="flex items-center">
                      {ally.node}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
