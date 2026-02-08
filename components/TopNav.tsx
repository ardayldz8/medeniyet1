"use client";

import { useState, useEffect } from "react";
import { TopNavDesktop } from "@/components/desktop/TopNavDesktop";
import { TopNavMobile } from "@/components/mobile/TopNavMobile";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop nav - hidden on mobile */}
      <div className="hidden md:block">
        <TopNavDesktop scrolled={scrolled} />
      </div>

      {/* Mobile nav - hidden on desktop */}
      <div className="block md:hidden">
        <TopNavMobile scrolled={scrolled} />
      </div>
    </>
  );
}
