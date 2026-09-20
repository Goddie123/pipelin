import { cn } from "@/lib/cn";

/**
 * Pipelin logo — neon brand mark + wordmark.
 *
 * Mark: a "tracking ring with an arrow breaking out to the north-east" glyph,
 * drawn in dark ink on a rounded neon-lime tile (.oo-logo-tile). This follows
 * the design-system rule that the lime accent is a FILL that carries ink on
 * top — so the mark stays legible on both the light canvas and dark panels.
 * Wordmark: "Pipelin" in ink + "Pipelin" in the chartreuse accent-ink sibling
 * (pure lime is invisible as fine text on the light canvas).
 */
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[1.15rem] font-semibold tracking-tight",
        invert ? "text-invert" : "text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className="oo-logo-tile grid h-7 w-7 shrink-0 place-items-center rounded-[9px]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[18px] w-[18px]"
        >
          {/* tracking ring — open across the NE quadrant, held clear of the arrow */}
          <path d="M19.5 11.7A7.5 7.5 0 1 1 12.3 4.5" />
          {/* arrow breaking out to the north-east, with a gap to the ring ends */}
          <path d="M10 14 16 8" />
          <path d="M13 8H16V11" />
        </svg>
      </span>
      <span>
        Pipelin
      </span>
    </span>
  );
}
