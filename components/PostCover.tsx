import type { BlogPost } from "@/lib/blog-posts";

const styles: Record<BlogPost["cover"], string> = {
  brand: "bg-gradient-to-br from-accent via-brand to-brand-deep",
  deep: "bg-gradient-to-br from-brand-deep via-brand to-ink",
  mint: "bg-gradient-to-br from-[#01f59e] via-mint to-brand-deep",
};

const icons: Record<BlogPost["cover"], React.ReactNode> = {
  brand: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 8.3v7.4M14.3 10c-.3-.7-1-1.1-2-1.1-1.2 0-2.1.6-2.1 1.6 0 1 .9 1.4 2.1 1.5 1.2.1 2.1.5 2.1 1.5 0 1-.9 1.6-2.1 1.6-1 0-1.7-.4-2-1.1" />
    </>
  ),
  deep: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.2 2.3 3.4 5.2 3.4 8s-1.2 5.7-3.4 8c-2.2-2.3-3.4-5.2-3.4-8s1.2-5.7 3.4-8Z" />
    </>
  ),
  mint: (
    <path d="M13 3 5 14h5.5L11 21l8-11h-5.5L13 3Z" strokeLinejoin="round" />
  ),
};

export default function PostCover({
  cover,
  className = "",
}: {
  cover: BlogPost["cover"];
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${styles[cover]} ${className}`}
    >
      <div className="absolute inset-0 bg-grid-light opacity-25" aria-hidden />
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="relative"
      >
        {icons[cover]}
      </svg>
    </div>
  );
}
