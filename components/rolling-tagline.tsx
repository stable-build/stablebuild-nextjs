"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const WORDS = ["stable.", "secure.", "confident."];

export function RollingTagline() {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion) return;

    const words = Array.from(root.querySelectorAll<HTMLElement>("[data-roll-word]"));
    if (!words.length) return;

    const context = gsap.context(() => {
      gsap.set(root, { perspective: 640 });
      gsap.set(words, {
        rotationX: (index) => (index === 0 ? 0 : -90),
        transformOrigin: "50% 50% -42px",
      });

      const timeline = gsap.timeline({
        repeat: -1,
        delay: 1.4,
        defaults: { ease: "power2.inOut" },
      });

      for (let index = 0; index < words.length; index += 1) {
        const current = words[index];
        const next = words[(index + 1) % words.length];

        timeline
          .to({}, { duration: 2.1 })
          .to(current, { rotationX: 90, duration: 0.55 })
          .to(next, { rotationX: 0, duration: 0.55 }, "<")
          .set(current, { rotationX: -90 });
      }
    }, root);

    return () => context.revert();
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="text-ember">stable.</span>;
  }

  return (
    <span
      ref={rootRef}
      className="relative inline-flex h-[1.1em] min-w-[5.5ch] overflow-hidden align-bottom text-ember"
      aria-label="stable, secure, confident"
    >
      {WORDS.map((word) => (
        <span
          key={word}
          data-roll-word
          className="absolute inset-0 flex items-center justify-start will-change-transform"
        >
          {word}
        </span>
      ))}
    </span>
  );
}
