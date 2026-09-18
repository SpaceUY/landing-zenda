const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=59898143353&text=Hola%2C+necesito+ayuda&type=phone_number&app_absent=0";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactanos por WhatsApp"
      data-track="whatsapp_cta_click"
      data-placement="floating_button"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 5.02L2 22l5.25-1.38c1.44.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.83 14.06c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.15-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.11.32.02.51-.09.2-.14.32-.27.49-.13.17-.28.38-.4.51-.13.14-.27.29-.12.57.15.28.68 1.12 1.46 1.82 1 .9 1.85 1.18 2.13 1.31.28.13.44.11.6-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.52.72 1.78.85.26.13.43.2.5.31.07.11.07.63-.17 1.31z" />
      </svg>
    </a>
  );
}
