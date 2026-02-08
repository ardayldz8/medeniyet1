"use client";

import * as React from "react";
import { AnimatePresence, motion, type HTMLMotionProps, type Transition } from "motion/react";

type RotatingTextProps = {
  words: string[];
  /**
   * Interval between rotations (ms). Premium pacing default: 2200ms.
   */
  intervalMs?: number;
  /**
   * Animation duration (seconds). Premium pacing default: 0.5s.
   */
  durationSeconds?: number;
  /**
   * Vertical slide distance (px). Small + calm by default.
   * Positive value means "enter from top, exit to bottom".
   */
  yPx?: number;
  className?: string;
  containerClassName?: string;
} & Omit<HTMLMotionProps<"span">, "children">;

function cx(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * RotatingText (ReactBits-style)
 * Calm fade + vertical slide with ease-in-out. No spring/bounce.
 */
export function RotatingText({
  words,
  intervalMs = 2200, // requested: 2000-2300ms
  durationSeconds = 0.5, // requested: ~400-600ms
  yPx = 14, // slight vertical movement
  className,
  containerClassName,
  ...props
}: RotatingTextProps) {
  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    if (!Array.isArray(words) || words.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs, prefersReducedMotion]);

  const current = words[index] ?? words[0] ?? "";

  return (
    <span
      className={cx(
        // Keep it inline and baseline-aligned with the static text.
        "relative inline-block align-baseline overflow-hidden",
        containerClassName
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          // Smooth, premium transition (no bounce/spring).
          transition={{ duration: durationSeconds, ease: "easeInOut" } satisfies Transition}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -yPx }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yPx }}
          className={cx("inline-block whitespace-nowrap", className)}
          {...props}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export type { RotatingTextProps };

