import Link from "next/link";
import Logo from "./Logo";
import { APP_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" aria-label="Zenda" className="text-white">
          <Logo />
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/blog"
            className="hidden rounded-lg px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:inline-block"
          >
            Blog
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={APP_URL}
              data-track="app_cta_click"
              data-placement="header_login"
              className="hidden rounded-lg border border-white/40 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex"
            >
              Iniciar sesión
            </a>
            <a
              href={APP_URL}
              data-track="app_cta_click"
              data-placement="header_cta"
              className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Empezá a operar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
