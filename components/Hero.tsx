"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { HeroDesktop } from "@/components/desktop/HeroDesktop";
import { HeroMobile } from "@/components/mobile/HeroMobile";

export function Hero() {
  const isMobile = useIsMobile(768);

  // Render both but hide with CSS to avoid hydration mismatch
  return (
    <>
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </>
  );
}
