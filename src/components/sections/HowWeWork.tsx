import { Section, SectionHeading } from "@/components/ui/Section";
import { HOW_WE_WORK, type HowWeWorkIcon } from "@/lib/content";

/* ------------------------------------------------------------------ */
/* Role marks — one minimal monoline glyph per role, replacing the     */
/* plain count numerals. Each lives inside a `group` card so the tile   */
/* lights up to the lime accent and the glyph plays a small motion on   */
/* hover (transform-only effects are gated behind `motion-safe`).       */
/* ------------------------------------------------------------------ */

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-7 w-7",
};

/** Strategist — a compass whose needle swings to a new bearing on hover. */
function Compass() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9.25" />
      <g className="origin-center transform-fill transition-transform duration-700 ease-out motion-safe:group-hover:rotate-[-135deg]">
        <polygon
          points="15.9 8.1 13.6 13.6 8.1 15.9 10.4 10.4"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
}

/** Data Engineer — a branching pipeline that draws in and fills its nodes. */
function Pipeline() {
  return (
    <svg {...svgProps}>
      {/* connectors: source → three outputs, drawn in on hover via pathLength */}
      {[
        "M6 12C11 12 11 5.5 16 5.5",
        "M6 12H16",
        "M6 12C11 12 11 18.5 16 18.5",
      ].map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-500 ease-out motion-safe:group-hover:[stroke-dashoffset:0]"
          style={{ transitionDelay: `${i * 90}ms` }}
        />
      ))}
      {/* source node */}
      <circle cx="4" cy="12" r="2" fill="currentColor" stroke="none" />
      {/* output nodes: hollow → filled on hover, staggered */}
      {[5.5, 12, 18.5].map((cy, i) => (
        <circle
          key={cy}
          cx="18"
          cy={cy}
          r="2"
          className="fill-transparent transition-[fill] duration-300 group-hover:fill-current"
          style={{ transitionDelay: `${150 + i * 90}ms` }}
        />
      ))}
    </svg>
  );
}

/** Inbox Managers — a tray that catches a letter dropping in on hover. */
function Inbox() {
  return (
    <svg {...svgProps}>
      {/* incoming letter — slides down into the slot on hover */}
      <g className="transition-transform duration-500 ease-out motion-safe:group-hover:translate-y-0.75">
        <path d="M12 3.5v6" />
        <path d="M9.4 7 12 9.6 14.6 7" />
      </g>
      {/* tray */}
      <path d="M4 13.5v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      <path d="M4 13.5h4l1.4 2h5.2l1.4-2H20" />
    </svg>
  );
}

const ICONS: Record<HowWeWorkIcon, () => React.ReactElement> = {
  compass: Compass,
  pipeline: Pipeline,
  inbox: Inbox,
};

export function HowWeWork() {
  return (
    <Section id="how-we-work" tag={HOW_WE_WORK.tag} index={HOW_WE_WORK.index}>
      <SectionHeading title={HOW_WE_WORK.headline} subhead={HOW_WE_WORK.subhead} />

      <div className="mt-10 grid overflow-hidden rounded-[4px] border border-line divide-y divide-line sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        {HOW_WE_WORK.roles.map((role) => {
          const Icon = ICONS[role.icon];
          return (
            <div key={role.role} className="group bg-surface p-7 sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[6px] border border-line bg-surface-muted text-faint transition-colors duration-300 group-hover:border-accent-ink/30 group-hover:bg-accent-soft group-hover:text-accent-ink">
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-medium text-ink sm:text-xl">
                {role.role}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{role.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
