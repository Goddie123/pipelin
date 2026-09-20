import { cn } from "@/lib/cn";

type CardVariant = "default" | "blue" | "muted";

const variants: Record<CardVariant, string> = {
  // plain bordered card on the canvas
  default: "bg-surface border border-line text-ink",
  // filled electric-lime panel with dark ink text
  blue: "bg-accent border border-accent text-ink",
  // subtle filled card
  muted: "bg-surface-muted border border-line text-ink",
};

/**
 * Card — the bordered container used across feature/role/case grids.
 * Sharp-cornered with hairline borders to match the framed aesthetic.
 */
export function Card({
  variant = "default",
  className,
  children,
}: {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-[4px]", variants[variant], className)}>
      {children}
    </div>
  );
}
