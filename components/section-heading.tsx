import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
      data-reveal
    >
      <p
        className={cn(
          "font-mono text-xs uppercase tracking-[0.35em]",
          isDark ? "text-white/58" : "text-zinc-500",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl",
          isDark ? "text-white" : "text-zinc-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "max-w-2xl text-base leading-7 sm:text-lg",
            isDark ? "text-white/78" : "text-zinc-600",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
