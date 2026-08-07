import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCover from "@/components/PostCover";
import { blogPosts, getPostBySlug, formatPostDate } from "@/lib/blog-posts";
import { parseMarkdown } from "@/lib/markdown";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Zenda`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Zenda" },
    publisher: { "@type": "Organization", name: "Zenda" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 bg-hero-glow opacity-40" aria-hidden />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand to-transparent"
          aria-hidden
        />
        <Header />
        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-32 lg:pb-20 lg:pt-40">
          <Link
            href="/blog"
            className="block text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            ← Volver al blog
          </Link>
          <span className="mt-6 inline-flex items-center rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-ink">
            {post.category}
          </span>
          <h1 className="mt-5 font-display text-[28px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[38px]">
            {post.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-white/70">
            {formatPostDate(post.date)} · {post.readTime} de lectura
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <PostCover
            cover={post.cover}
            coverImage={post.coverImage}
            title={post.title}
            className="-mt-10 aspect-[16/9] rounded-[var(--radius-card)] shadow-xl"
          />
        </div>

        <article className="mx-auto max-w-2xl space-y-4 px-6 py-16 text-[15px] text-ink-muted lg:py-20">
          {parseMarkdown(post.content)}
        </article>
      </section>

      <Footer />
    </>
  );
}
