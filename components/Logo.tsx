import Image from "next/image";

const MARK = {
  dark: { src: "/img/logo-mark.svg", width: 15, height: 26 },
  light: { src: "/icon-light.svg", width: 26, height: 26 },
} as const;

export default function Logo({
  className = "",
  wordClassName = "",
  variant = "dark",
}: {
  className?: string;
  wordClassName?: string;
  /** "dark" mark (white/lilac) for dark backgrounds, "light" mark (solid purple) for light backgrounds */
  variant?: keyof typeof MARK;
}) {
  const mark = MARK[variant];
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={mark.src}
        alt=""
        width={mark.width}
        height={mark.height}
        className="h-6 w-auto"
        priority
      />
      <span
        className={`font-display text-[22px] font-semibold tracking-tight ${wordClassName}`}
      >
        zenda
      </span>
    </span>
  );
}
