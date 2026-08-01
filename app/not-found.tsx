import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada | Zenda",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 bg-hero-glow opacity-40" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent"
          aria-hidden
        />
        <Header />
        <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-32 text-center lg:pb-32 lg:pt-44">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            Error 404
          </span>
          <h1 className="mt-6 font-display text-[34px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[40px]">
            Esta página no existe.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/80">
            Puede que el link esté roto o que la página se haya movido. Volvé
            al inicio o mirá las últimas novedades en el blog.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              Volver al inicio
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-white/40 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Ir al blog
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
