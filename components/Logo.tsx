import Image from "next/image";

export default function Logo({
  className = "",
  wordClassName = "",
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/img/logo-mark.svg"
        alt=""
        width={26}
        height={26}
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
