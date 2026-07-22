import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import { parseMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Política de Privacidad | Zenda",
  description: "Cómo Zenda recopila, utiliza y protege tus datos personales.",
};

export default function PrivacyPolicyPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "Zenda_Politica_de_Privacidad.md"),
    "utf-8",
  );

  return (
    <div className="bg-white">
      <header className="border-b border-black/5">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <Link href="/" aria-label="Zenda" className="text-ink">
            <Logo variant="light" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <article className="space-y-4 text-[15px] text-ink-muted">
          {parseMarkdown(raw)}
        </article>
      </main>

      <Footer />
    </div>
  );
}
