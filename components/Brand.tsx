"use client";

import Image from "next/image";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface BrandProps {
  className?: string;
  priority?: boolean;
}

export function Brand({ className = "", priority = false }: BrandProps) {
  return (
    <Image
      src="/brand-logo.svg"
      alt="Medeniyet Kasap & Izgara"
      width={181}
      height={100}
      priority={priority}
      sizes="(min-width: 768px) 220px, 170px"
      className={cn(
        "h-10 w-auto drop-shadow-[0_14px_28px_rgba(0,0,0,0.70)]",
        className
      )}
    />
  );
}
