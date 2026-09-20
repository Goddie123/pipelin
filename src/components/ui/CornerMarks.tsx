import { cn } from "@/lib/cn";

/**
 * CornerMarks — the small square "selection handles" at the four corners of a
 * block, a signature supermemory detail. Wrap any relatively-positioned block.
 */
export function CornerMarks({
  className,
  color = "accent",
}: {
  className?: string;
  color?: "accent" | "ink";
}) {
  const dot =
    color === "accent" ? "bg-accent-ink" : "bg-ink";
  const pos = [
    "-top-1 -left-1",
    "-top-1 -right-1",
    "-bottom-1 -left-1",
    "-bottom-1 -right-1",
  ];
  return (
    <span aria-hidden className={cn("pointer-events-none", className)}>
      {pos.map((p) => (
        <span
          key={p}
          className={cn("absolute h-2 w-2", dot, p)}
        />
      ))}
    </span>
  );
}
