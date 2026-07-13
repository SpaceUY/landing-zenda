import Image from "next/image";
import Header from "./Header";
import { APP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden />
      <Header />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-2 lg:pb-24 lg:pt-40">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-brand-deep">
            Operá con USDT, sin complicaciones
          </span>
          <h1 className="mt-6 font-display text-[34px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[44px]">
            Todo lo que necesitás para operar crypto, en un solo lugar.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            Cambiá entre pesos, dólares y crypto. Comprá, invertí y ahorrá, con
            total seguridad.
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-brand transition-transform hover:scale-[1.02]"
          >
            Empezá a operar
          </a>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-lg">
          <Image
            src="/img/converter.svg"
            alt="Convertí entre monedas y recibí el dinero donde elijas"
            width={541}
            height={470}
            className="w-full drop-shadow-2xl"
            priority
          />
          <Image
            src="/img/card-request.svg"
            alt="Pedí tu tarjeta y pagá donde quieras"
            width={393}
            height={220}
            className="animate-floaty absolute -bottom-6 left-0 w-[62%] drop-shadow-xl"
          />
        </div>
      </div>

      {/* Allies strip */}
      <div className="relative mx-auto max-w-6xl px-6 pb-14">
        <p className="text-xs font-medium uppercase tracking-wide text-white/60">
          Nuestros aliados
        </p>
        <div className="mt-5 flex items-center gap-10 opacity-90">
          <Image
            src="/img/redpagos-logo.png"
            alt="Red Pagos"
            width={140}
            height={51}
            className="h-8 w-auto object-contain brightness-0 invert"
          />
          <span className="font-display text-2xl font-semibold text-white">
            Fucerep
          </span>
        </div>
      </div>
    </section>
  );
}
