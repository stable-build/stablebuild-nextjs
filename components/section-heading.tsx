import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
      )}
      data-reveal
    >
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[0.96] tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
