"use client";

import Image from "next/image";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface BrandProps {
  className?: string;
  priority?: boolean;
}

export function Brand({ className = "", priority = true }: BrandProps) {
  return (
    <div className="flex items-center">
      <Image
        src="/brand-2.svg"
        alt="Medeniyet Kasap & Izgara"
        width={560}
        height={96}
        priority={priority}
        className={cn(
          "object-cover object-left opacity-100 drop-shadow-[0_14px_28px_rgba(0,0,0,0.70)]",
          className
        )}
      />
    </div>
  );
}
