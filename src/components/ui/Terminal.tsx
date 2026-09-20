import { cn } from "@/lib/cn";

type TerminalData = {
  command: string;
  lines: { label: string; value: string }[];
  target: string;
};

/**
 * Terminal — the hero's signature "deploy log" panel.
 * Dark surface, traffic-light header, monospace body with aligned ✓ rows.
 */
export function Terminal({
  data,
  className,
}: {
  data: TerminalData;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[8px] border border-line-dark bg-term font-mono text-[0.82rem] leading-relaxed shadow-[0_24px_60px_-24px_rgba(10,11,16,0.45)]",
        className,
      )}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-term-line px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-2 text-[0.72rem] tracking-wide text-white/40">
          pipelin — deploy
        </span>
      </div>

      {/* body */}
      <div className="space-y-1.5 px-5 py-5 text-white/85">
        <p className="text-white/70">
          <span className="text-success">$</span> {data.command}
        </p>
        <div className="space-y-1.5 pt-1">
          {data.lines.map((line) => (
            <p key={line.label} className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-success">✓</span>
              <span className="min-w-[9.5rem] text-white/90">{line.label}</span>
              <span className="text-white/35">—</span>
              <span className="text-white/60">{line.value}</span>
            </p>
          ))}
        </div>
        <p className="pt-2 text-[#6ea8ff]">→ {data.target}</p>
      </div>
    </div>
  );
}
