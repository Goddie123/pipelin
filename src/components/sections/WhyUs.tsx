import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { WHY_US, type WhyUsIcon } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Inline icons — minimal monoline set, one per feature row.          */
/* Rendered in `currentColor` so the row inherits its muted tone.     */
/* ------------------------------------------------------------------ */

const iconProps = {
  className: "h-[18px] w-[18px]",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<WhyUsIcon, React.ReactNode> = {
  sparkle: (
    <svg {...iconProps}>
      <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
  ),
  plug: (
    <svg {...iconProps}>
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
    </svg>
  ),
  tools: (
    <svg {...iconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  target: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  clock: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  tag: (
    <svg {...iconProps}>
      <path d="M12.59 2.59A2 2 0 0 0 11.17 2H4a2 2 0 0 0-2 2v7.17a2 2 0 0 0 .59 1.41l8.7 8.71a2.43 2.43 0 0 0 3.42 0l6.58-6.58a2.43 2.43 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".75" fill="currentColor" stroke="none" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Mark glyphs — yes / no                                             */
/* ------------------------------------------------------------------ */

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Cross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

/** Render a single comparison value: yes / no / qualifier text. */
function Value({
  value,
  highlight,
}: {
  value: boolean | string;
  highlight: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span className="text-xs leading-snug text-muted sm:text-[0.8125rem]">
        {value}
      </span>
    );
  }
  if (value) {
    return highlight ? (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-ink">
        <Check className="h-4 w-4" />
        <span className="sr-only">Yes</span>
      </span>
    ) : (
      <span className="text-ink/55">
        <Check className="h-[18px] w-[18px]" />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  return (
    <span className="text-faint">
      <Cross className="h-[18px] w-[18px]" />
      <span className="sr-only">No</span>
    </span>
  );
}

export function WhyUs() {
  const { columns, rows, featureLabel } = WHY_US;
  // grid column 1 is the feature column, so data columns start at 2.
  const highlightCol = columns.findIndex((c) => c.highlight) + 2;

  // cell border helper: hairline rules run across every column except the
  // highlighted card, which stays clean.
  const cellBorder = (highlight: boolean) =>
    highlight ? "border-transparent" : "border-line";

  return (
    <Section id="why-us" tag={WHY_US.tag} index={WHY_US.index}>
      <SectionHeading title={WHY_US.headline} subhead={WHY_US.subhead} />

      <div className="mt-10 sm:mt-14">
        <div className="overflow-x-auto">
          <div className="min-w-[760px] px-2 py-6">
            <div className="relative grid [grid-template-columns:minmax(180px,1.6fr)_repeat(5,minmax(104px,1fr))]">
              {/* Floating highlight column behind the cells. */}
              <div
                aria-hidden
                style={{
                  gridColumn: String(highlightCol),
                  gridRow: `1 / span ${rows.length + 1}`,
                }}
                className="pointer-events-none z-0 -mx-1.5 -my-5 rounded-[10px] border border-accent-ink/20 bg-accent-soft shadow-[0_16px_44px_-20px_rgba(95,122,0,0.5)]"
              />

              {/* Header row */}
              <div
                style={{ gridColumn: "1", gridRow: "1" }}
                className="relative z-10 flex items-center border-t border-b border-line px-4 py-4 sm:py-5"
              >
                <span className="mono-label flex items-center gap-2 text-ink">
                  <span className="h-2 w-2 bg-accent-ink" aria-hidden />
                  {featureLabel}
                </span>
              </div>

              {columns.map((col, i) => (
                <div
                  key={col.key}
                  style={{ gridColumn: String(i + 2), gridRow: "1" }}
                  className={cn(
                    "relative z-10 flex flex-col items-center justify-end gap-2 border-t border-b px-3 py-4 text-center sm:py-5",
                    cellBorder(!!col.highlight),
                  )}
                >
                  {col.badge && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[0.625rem] font-semibold tracking-[0.12em] text-ink">
                      {col.badge}
                    </span>
                  )}
                  <span
                    className={cn(
                      "flex items-center justify-center gap-2",
                      col.highlight
                        ? "font-semibold text-ink"
                        : "font-medium text-muted",
                    )}
                  >
                    {col.highlight && (
                      <span className="h-2 w-2 shrink-0 bg-accent-ink" aria-hidden />
                    )}
                    {col.label}
                  </span>
                </div>
              ))}

              {/* Feature rows */}
              {rows.map((row, r) => (
                <FeatureRow
                  key={row.feature}
                  row={row}
                  rowIndex={r}
                  columns={columns}
                  cellBorder={cellBorder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FeatureRow({
  row,
  rowIndex,
  columns,
  cellBorder,
}: {
  row: (typeof WHY_US.rows)[number];
  rowIndex: number;
  columns: typeof WHY_US.columns;
  cellBorder: (highlight: boolean) => string;
}) {
  const gridRow = String(rowIndex + 2);
  return (
    <>
      <div
        style={{ gridColumn: "1", gridRow }}
        className="relative z-10 flex items-center gap-3 border-b border-line px-4 py-4 text-left sm:py-5"
      >
        <span className="shrink-0 text-faint" aria-hidden>
          {ICONS[row.icon]}
        </span>
        <span className="font-medium leading-snug text-ink">{row.feature}</span>
      </div>

      {columns.map((col, i) => (
        <div
          key={col.key}
          style={{ gridColumn: String(i + 2), gridRow }}
          className={cn(
            "relative z-10 flex items-center justify-center border-b px-3 py-4 text-center sm:py-5",
            cellBorder(!!col.highlight),
          )}
        >
          <Value value={row.values[col.key]} highlight={!!col.highlight} />
        </div>
      ))}
    </>
  );
}
