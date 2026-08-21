"use client";

import { useEffect, useState } from "react";
import { APP_URL } from "@/lib/constants";

const DISMISS_KEY = "zenda-promo-10usdt-dismissed";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") {
        setVisible(false);
      }
    } catch {
      // localStorage unavailable — leave the banner visible
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore — worst case it reappears next visit
    }
    setVisible(false);
  }

  return (
    <div className="relative flex items-center justify-center gap-2 bg-mint px-9 py-2.5 text-center text-xs font-medium text-ink sm:px-10 sm:text-sm">
      <p>
        Recibí <strong className="font-semibold">10 USDT de regalo</strong> en
        tu primera transacción mayor a 500 USDT.{" "}
        <a
          href={APP_URL}
          data-track="app_cta_click"
          data-placement="promo_banner"
          className="font-semibold underline underline-offset-2"
        >
          Empezá a operar
        </a>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Cerrar aviso"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-ink/60 transition-colors hover:bg-ink/10 hover:text-ink sm:right-3"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="20" y1="4" x2="4" y2="20" />
        </svg>
      </button>
    </div>
  );
}
