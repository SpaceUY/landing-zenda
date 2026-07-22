import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmpresasForm from "@/components/EmpresasForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Zenda para Empresas | Pagos internacionales con blockchain",
  description:
    "Soluciones de pagos internacionales basadas en blockchain para importadores, exportadores y operadores de remesas.",
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const benefits = [
  {
    title: "Pagos internacionales en minutos",
    body: "Realizá pagos a proveedores y recibí fondos de clientes del exterior en minutos, reduciendo significativamente los tiempos de espera frente a las transferencias bancarias tradicionales.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </Icon>
    ),
  },
  {
    title: "Reducción de costos",
    body: "Disminuí los costos asociados a pagos internacionales, evitando múltiples intermediarios y reduciendo las comisiones de las transferencias transfronterizas.",
    icon: (
      <Icon>
        <circle cx="8" cy="8" r="3.2" />
        <path d="M13 16.5 16.5 13" />
        <circle cx="16" cy="16" r="3.2" />
      </Icon>
    ),
  },
  {
    title: "Mayor disponibilidad de liquidez",
    body: "Convertí fondos entre moneda fiduciaria y activos digitales de manera ágil para optimizar el capital de trabajo y responder rápidamente a las necesidades de tu negocio.",
    icon: (
      <Icon>
        <path d="M12 3c3 4 5.5 7.2 5.5 10.2A5.5 5.5 0 0 1 6.5 13.2C6.5 10.2 9 7 12 3Z" />
      </Icon>
    ),
  },
  {
    title: "Cobros internacionales simplificados",
    body: "Recibí pagos de clientes de distintos países mediante una solución eficiente, con mayor previsibilidad en los tiempos de acreditación.",
    icon: (
      <Icon>
        <path d="M4 12V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6" />
        <path d="M4 12l2.5 6.2a1 1 0 0 0 .93.8h9.14a1 1 0 0 0 .93-.8L20 12" />
        <path d="M4 12h4.5l1 1.8h5l1-1.8H20" />
      </Icon>
    ),
  },
  {
    title: "Operativa global",
    body: "Accedé a una red de pagos internacionales que facilita operaciones con proveedores, clientes y socios comerciales en múltiples jurisdicciones.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.8-3.8-9s1.3-6.5 3.8-9Z" />
      </Icon>
    ),
  },
  {
    title: "Seguridad y cumplimiento",
    body: "Todas las operaciones se realizan bajo procedimientos de identificación de clientes (KYC), monitoreo de transacciones y políticas de cumplimiento, brindando mayor seguridad y transparencia.",
    icon: (
      <Icon>
        <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </Icon>
    ),
  },
  {
    title: "Trazabilidad",
    body: "Cada operación cuenta con un registro verificable que facilita el seguimiento de los fondos y mejora los procesos de conciliación y auditoría.",
    icon: (
      <Icon>
        <circle cx="5.5" cy="6" r="1.8" />
        <circle cx="18.5" cy="18" r="1.8" />
        <path d="M7.3 6h6.7a4 4 0 0 1 4 4v.5a4 4 0 0 1-4 4H8a2.5 2.5 0 0 0 0 5h8.7" />
      </Icon>
    ),
  },
  {
    title: "Atención especializada",
    body: "Un equipo de profesionales acompaña a cada empresa en la implementación de soluciones adaptadas a su operatoria internacional.",
    icon: (
      <Icon>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="3" y="13" width="4" height="5" rx="1.5" />
        <rect x="17" y="13" width="4" height="5" rx="1.5" />
        <path d="M19 18v1a3 3 0 0 1-3 3h-3" />
      </Icon>
    ),
  },
];

const segments = [
  "Importadores",
  "Exportadores",
  "Comercio internacional",
  "Operadores de remesas",
];

export default function EmpresasPage() {
  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-brand text-white"
      >
        <div className="absolute inset-0 bg-hero-glow opacity-40" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent"
          aria-hidden
        />
        <Header />

        <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-32 text-center lg:pb-28 lg:pt-40">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            Zenda para empresas
          </span>
          <h1 className="mt-6 font-display text-[34px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[44px]">
            Beneficios de operar con Zenda
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Zenda ofrece soluciones de pagos internacionales basadas en
            tecnología blockchain que permiten a empresas importar, exportar
            y realizar transferencias internacionales de forma más rápida,
            eficiente y transparente.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Hablar con un especialista
          </a>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-ink sm:text-[40px]">
            Todo lo que necesita tu empresa
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink-muted">
            Una plataforma pensada para la operativa internacional de tu
            negocio.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 100} className="h-full">
                <article className="flex h-full min-h-[260px] flex-col rounded-[var(--radius-card)] border border-black/5 bg-white p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint-soft text-ink">
                    {b.icon}
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Soluciones para empresas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Zenda desarrolla servicios orientados a importadores,
            exportadores, empresas de comercio internacional y operadores de
            remesas, adaptándose a los distintos volúmenes y necesidades de
            cada cliente.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">
              Empecemos a hablar de tu operativa
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Dejanos tus datos y un especialista de Zenda se pone en
              contacto para entender tu operatoria y proponerte la mejor
              solución.
            </p>
          </div>
          <EmpresasForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
