import { cn } from "@/lib/cn";
import { TOTAL_SECTIONS } from "@/lib/content";

/**
 * SectionTag — the monospace header bar that opens every numbered section.
 * Renders:  〉 THE PROBLEM ............................. [ 01 / 09 ]
 * Bordered top + bottom, exactly like supermemory's "〉 PRODUCT CATALOG [1/9]".
 */
export function SectionTag({ tag, index }: { tag: string; index: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line pad-x py-3.5 text-faint">
      <span className="mono-label flex items-center gap-2 text-ink">
        <span className="text-accent-ink">〉</span>
        {tag}
      </span>
      <span className="mono-label tabular-nums">
        [ {index} / {TOTAL_SECTIONS} ]
      </span>
    </div>
  );
}

type SectionProps = {
  id?: string;
  tag: string;
  index: string;
  children: React.ReactNode;
  /** Extra classes on the content wrapper (e.g. padding overrides). */
  className?: string;
  /** When true, content area gets no horizontal padding (full-bleed grids). */
  bleed?: boolean;
};

/**
 * Section — full numbered section: tag bar + content body.
 * The outer <section> carries the id (for nav anchors) and bottom rail.
 */
export function Section({
  id,
  tag,
  index,
  children,
  className,
  bleed = false,
}: SectionProps) {
  return (
    <section id={id} className="border-b border-line scroll-mt-20">
      <SectionTag tag={tag} index={index} />
      <div className={cn(!bleed && "pad-x", "py-14 sm:py-20", className)}>
        {children}
      </div>
    </section>
  );
}

/**
 * SectionHeading — the large black headline + muted subhead block that
 * opens most sections. Use <Accent> inside `title` to color emphasis words.
 */
export function SectionHeading({
  title,
  subhead,
  className,
  align = "left",
  max = "max-w-3xl",
}: {
  title: React.ReactNode;
  subhead?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  max?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-h2 font-semibold text-ink text-balance">{title}</h2>
      {subhead && (
        <p className={cn("mt-5 text-lg leading-relaxed text-muted text-pretty", max)}>
          {subhead}
        </p>
      )}
    </div>
  );
}

/** Inline lime emphasis span for headlines (darker chartreuse for contrast on the light canvas). */
export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-accent-ink">{children}</span>;
}
