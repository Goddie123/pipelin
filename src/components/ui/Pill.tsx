import { cn } from "@/lib/cn";

type PillProps = {
  badge?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Hero pill — supermemory's segmented announcement chip: a light-blue
 * "[▪ New]" tag butted against a white message segment with a trailing arrow
 * ("Dynamic dreaming is now default →"). Uses the site's standard 4px corner
 * and pure-square accent marker — no extra rounding.
 */
export function Pill({ badge, children, className }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-[4px] border border-line-strong bg-surface text-sm shadow-[0_1px_2px_rgba(10,11,16,0.04)]",
        className,
      )}
    >
      {badge && (
        <span className="flex items-center gap-1.5 border-r border-line-strong bg-accent-soft px-2.5 font-medium tracking-tight text-accent-ink">
          <span className="h-2.5 w-2.5 bg-accent-ink" aria-hidden />
          {badge}
        </span>
      )}
      <span className="flex items-center gap-2.5 px-3 py-1.5 tracking-tight text-ink">
        <span>{children}</span>
        <span aria-hidden className="text-faint">
          →
        </span>
      </span>
    </div>
  );
}
