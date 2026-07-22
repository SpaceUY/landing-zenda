import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import Reveal from "@/components/Reveal";
import { blogPosts, formatPostDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Zenda",
  description:
    "Novedades, guías y educación sobre cripto, USDT y pagos internacionales.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 bg-hero-glow opacity-40" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent"
          aria-hidden
        />
        <Header />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-32 text-center lg:pb-20 lg:pt-40">
          <span className="inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            Blog
          </span>
          <h1 className="mt-6 font-display text-[34px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[44px]">
            Novedades, guías y educación cripto
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80">
            Todo lo que necesitás saber para operar con confianza, en un solo
            lugar.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-white transition-shadow hover:shadow-lg"
                >
                  <PostCover cover={post.cover} className="h-40" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-ink-muted">
                      <span className="text-brand">{post.category}</span>
                      <span aria-hidden>·</span>
                      <span>{formatPostDate(post.date)}</span>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs font-medium text-ink-muted">
                      {post.readTime} de lectura
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
