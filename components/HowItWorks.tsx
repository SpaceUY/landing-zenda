import Image from "next/image";
import Reveal from "./Reveal";
import { APP_URL } from "@/lib/constants";

const steps = [
  {
    n: 1,
    title: "Abrí una cuenta",
    body: "Registrate y verificá tu identidad en minutos.",
    img: "/img/step-1-cuenta.png",
  },
  {
    n: 2,
    title: "Realizá un depósito",
    body: "Usá Red Pagos, Mercado Pago o transferencia bancaria para empezar a operar.",
    img: "/img/step-2-deposito.png",
  },
  {
    n: 3,
    title: "Comenzá a operar",
    body: "Comprá, vendé o convertí entre pesos, dólares y cripto cuando quieras.",
    img: "/img/step-3-operar.png",
  },
];

function StepCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
      <Image src={img} alt={title} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
    </div>
  );
}

function FlowArrow({ mirror = false }: { mirror?: boolean }) {
  return (
    <div
      className={`mx-auto hidden h-16 w-40 lg:block ${mirror ? "scale-x-[-1]" : ""}`}
      aria-hidden
    >
      <svg viewBox="0 0 200 70" fill="none" className="h-full w-full text-brand/60">
        <path
          d="M15 8 C 90 8, 60 62, 185 62"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
        />
        <path
          d="M172 52 L188 62 L176 70"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            Cómo empezar
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[36px]">
            Iniciar en el mundo cripto es muy fácil
          </h2>
          <p className="mt-4 text-ink-muted">
            Cambiá tus pesos por cripto en minutos y hacé rendir tu dinero
          </p>
        </div>

        <div className="mt-16">
          {steps.map((s, i) => {
            const cardFirst = i % 2 === 0;
            return (
              <div key={s.n}>
                <Reveal delay={i * 100}>
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className={`order-2 min-w-0 ${cardFirst ? "lg:order-1" : "lg:order-2"}`}>
                      <StepCard img={s.img} title={s.title} />
                    </div>
                    <div
                      className={`order-1 min-w-0 text-center lg:text-left ${cardFirst ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                        Paso {s.n}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                        {s.title}
                      </h3>
                      <p className="mx-auto mt-3 max-w-sm text-ink-muted lg:mx-0 lg:max-w-sm">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <FlowArrow mirror={i % 2 === 1} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={APP_URL}
            data-track="app_cta_click"
            data-placement="how_it_works"
            className="inline-flex rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Empezá a operar
          </a>
        </div>
      </div>
    </section>
  );
}
