import Logo from "./Logo";
import { APP_URL } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" aria-label="Zenda" className="text-white">
          <Logo />
        </a>
        <a
          href={APP_URL}
          className="rounded-lg border border-white/40 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
        >
          Empezá a operar
        </a>
      </div>
    </header>
  );
}
