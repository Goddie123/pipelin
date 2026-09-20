import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { ToolMark } from "@/components/ui/ToolMark";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { APPROACH } from "@/lib/content";

/**
 * WorkflowDiagram — the signals-based GTM engine drawn as a top-to-bottom flow
 * "canvas" (the n8n / Clay style from the reference, re-skinned to the site's
 * light palette). Single nodes are linked by a flowing spine; `branch` rows fan
 * out into N parallel tracks and converge back into the next node.
 *
 * Pure CSS + SVG, no client JS. Branch chips sit in an equal-column grid (no
 * gap, margins for spacing) so each chip center lands at (i+0.5)/N of the width
 * — which is exactly where the fan connector's curve endpoints are drawn, so
 * the curves meet the chips regardless of column width.
 */

type FlowNode = {
  kind: "node";
  label: string;
  tools?: string[];
  accent?: boolean;
  win?: boolean;
};
type FlowBranch = {
  kind: "branch";
  items: { label: string; tools?: string[] }[];
};
type FlowRow = FlowNode | FlowBranch;

const rowWidth = (r: FlowRow) => (r.kind === "branch" ? r.items.length : 1);

function Tools({ tools, className }: { tools?: string[]; className?: string }) {
  if (!tools?.length) return null;
  return (
    <span className={cn("flex items-center justify-center gap-1.5", className)}>
      {tools.map((t) => (
        <ToolMark key={t} name={t} />
      ))}
    </span>
  );
}

function Node({ node }: { node: FlowNode }) {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "relative w-full max-w-[15rem] rounded-[7px] border px-4 py-3 text-center shadow-[0_1px_2px_rgba(10,11,16,0.05)] transition-colors",
          node.win
            ? "border-[color:var(--color-accent)] bg-accent text-ink"
            : node.accent
              ? "border-[color:var(--color-accent)] bg-accent-soft text-accent-ink"
              : "border-line bg-surface text-ink",
        )}
      >
        <span className="flex items-center justify-center gap-2 text-sm font-medium tracking-tight">
          {node.accent && (
            <span
              aria-hidden
              className="size-2 shrink-0 bg-accent-ink"
            />
          )}
          {node.win && (
            <span aria-hidden className="text-base leading-none">
              ✓
            </span>
          )}
          {node.label}
        </span>
        <Tools tools={node.tools} className="mt-2" />
      </div>
    </div>
  );
}

function Branch({ items }: { items: FlowBranch["items"] }) {
  return (
    <div
      className="grid w-full"
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      {items.map((item) => (
        <div key={item.label} className="mx-1 flex sm:mx-1.5">
          <div className="flex w-full flex-col items-center rounded-[6px] border border-line bg-surface px-2 py-2 text-center shadow-[0_1px_2px_rgba(10,11,16,0.04)]">
            <span className="text-[11px] font-medium leading-tight tracking-tight text-ink sm:text-xs">
              {item.label}
            </span>
            <Tools tools={item.tools} className="mt-1.5" />
          </div>
        </div>
      ))}
    </div>
  );
}

/** A single curved stroke: a soft hairline base with a faint lime highlight. */
function FanPath({ d }: { d: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke="var(--color-line-strong)"
        strokeWidth="1.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={d}
        fill="none"
        stroke="var(--color-accent-ink)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeOpacity="0.45"
        vectorEffect="non-scaling-stroke"
      />
    </>
  );
}

/** Fan connector: 1 → N (dir "out") or N → 1 (dir "in"). */
function Fan({ count, dir }: { count: number; dir: "out" | "in" }) {
  const centers = Array.from(
    { length: count },
    (_, i) => ((i + 0.5) / count) * 100,
  );
  return (
    <div className="relative h-12 w-full" aria-hidden>
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {centers.map((cx, i) => (
          <FanPath
            key={i}
            d={
              dir === "out"
                ? `M50 0 C 50 56, ${cx} 44, ${cx} 100`
                : `M${cx} 0 C ${cx} 56, 50 44, 50 100`
            }
          />
        ))}
      </svg>
    </div>
  );
}

/** Straight connector between two single nodes, with a flowing lime pulse. */
function Spine() {
  return (
    <div className="flex h-10 w-full justify-center" aria-hidden>
      <span className="oo-spine block h-full w-[2px]" />
    </div>
  );
}

function Connector({ from, to }: { from: number; to: number }) {
  if (from === 1 && to > 1) return <Fan count={to} dir="out" />;
  if (from > 1 && to === 1) return <Fan count={from} dir="in" />;
  return <Spine />;
}

export function WorkflowDiagram({ className }: { className?: string }) {
  const rows = APPROACH.flow as unknown as FlowRow[];

  return (
    <div
      className={cn(
        "dot-grid relative rounded-[10px] border border-line bg-surface-muted px-4 py-6 sm:px-7 sm:py-8",
        className,
      )}
    >
      <CornerMarks color="ink" />

      <p className="mono-label mb-6 flex items-center justify-center gap-2 text-faint">
        <span className="text-accent-ink">〉</span>
        {APPROACH.flowCaption}
      </p>

      <div className="flex flex-col">
        {rows.map((row, i) => {
          const next = rows[i + 1];
          return (
            <Fragment key={i}>
              {row.kind === "node" ? (
                <Node node={row} />
              ) : (
                <Branch items={row.items} />
              )}
              {next && (
                <Connector from={rowWidth(row)} to={rowWidth(next)} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
