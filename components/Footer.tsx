import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2ce9b4] to-[#0fd79a] text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo wordClassName="text-ink" />
          <a
            href="mailto:info@zenda.cash"
            className="mt-5 block text-sm font-medium text-ink/80 transition-colors hover:text-ink"
          >
            info@zenda.cash
          </a>
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-ink/80 transition-colors hover:text-ink"
        >
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
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
