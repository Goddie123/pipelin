import { cn } from "@/lib/cn";

/**
 * ToolMark — small inline logo glyphs for the SaaS tools shown inside the
 * WorkflowDiagram nodes. Each is a self-contained SVG drawn in the tool's
 * brand color so the marks read on the light canvas without needing tiles.
 *
 * Distinct from <BrandMark>, which renders client-company logos. These are the
 * tools in the GTM stack (Claude, Clay, HubSpot, …). Decorative only — every
 * node carries its meaning in its text label, so each mark is aria-hidden.
 */

type GlyphProps = { className?: string };

function LinkedIn({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="4.5" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M8.34 18.5H5.67V9.96h2.67V18.5ZM7 8.77a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.5 9.73h-2.66v-4.15c0-.99-.02-2.27-1.39-2.27-1.38 0-1.59 1.08-1.59 2.2v4.22h-2.67V9.96h2.56v1.17h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.67Z"
      />
    </svg>
  );
}

function Google({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M21 12.2c0-.64-.06-1.25-.16-1.84H12v3.49h5.05a4.32 4.32 0 0 1-1.87 2.83v2.35h3.02C20.96 17.3 21 14.99 21 12.2Z"
      />
      <path
        fill="#34A853"
        d="M12 21.5c2.43 0 4.47-.8 5.96-2.17l-2.92-2.27a5.4 5.4 0 0 1-3.04.85 5.34 5.34 0 0 1-5.02-3.69H3.96v2.32A9 9 0 0 0 12 21.5Z"
      />
      <path
        fill="#FBBC05"
        d="M6.98 14.22a5.4 5.4 0 0 1 0-3.44V8.46H3.96a9 9 0 0 0 0 8.08l3.02-2.32Z"
      />
      <path
        fill="#EA4335"
        d="M12 7.65c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 0 0 12 3.5a9 9 0 0 0-8.04 4.96l3.02 2.32A5.34 5.34 0 0 1 12 7.65Z"
      />
    </svg>
  );
}

function Gmail({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect
        x="3"
        y="5.75"
        width="18"
        height="12.5"
        rx="1.6"
        fill="#fff"
        stroke="#E4E7EE"
        strokeWidth="0.6"
      />
      <path
        fill="none"
        stroke="#EA4335"
        strokeWidth="2.1"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M4.6 7.6 12 13l7.4-5.4"
      />
    </svg>
  );
}

function Claude({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#D97757"
      strokeWidth="1.9"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M12 3.8v6.1M12 14.1v6.1M3.8 12h6.1M14.1 12h6.1M6.2 6.2l4.3 4.3M13.5 13.5l4.3 4.3M17.8 6.2l-4.3 4.3M10.5 13.5l-4.3 4.3" />
    </svg>
  );
}

function HubSpot({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle
        cx="10.3"
        cy="14"
        r="4.4"
        fill="none"
        stroke="#FF7A59"
        strokeWidth="1.7"
      />
      <circle cx="10.3" cy="14" r="1.25" fill="#FF7A59" />
      <path
        d="M13.4 10.9 15.7 8.4"
        stroke="#FF7A59"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle
        cx="16.6"
        cy="7"
        r="1.85"
        fill="none"
        stroke="#FF7A59"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function Salesforce({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#00A1E0"
        d="M10.1 7.3a3.6 3.6 0 0 1 2.86 1.43 4.3 4.3 0 0 1 1.74-.37 4.06 4.06 0 0 1 4 3.34 3.18 3.18 0 0 1-1.3 6.08H7.3a3.86 3.86 0 0 1-.8-7.64A3.6 3.6 0 0 1 10.1 7.3Z"
      />
    </svg>
  );
}

function Calendly({ className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#006BFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M16.5 7.6a6 6 0 1 0 0 8.8" />
    </svg>
  );
}

function Clay({ className }: GlyphProps) {
  // Clay has no simple reproducible glyph; render a tidy dark chip with a lime
  // accent that nods to its playful brand and ties into the site's accent.
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect width="24" height="24" rx="5" fill="#16181D" />
      <circle cx="9.4" cy="14.6" r="3" fill="#ccff00" />
      <circle cx="14.8" cy="9.6" r="2.2" fill="#fff" opacity="0.9" />
    </svg>
  );
}

const GLYPHS: Record<string, (p: GlyphProps) => React.ReactElement> = {
  linkedin: LinkedIn,
  google: Google,
  gmail: Gmail,
  claude: Claude,
  hubspot: HubSpot,
  salesforce: Salesforce,
  calendly: Calendly,
  clay: Clay,
};

/** Friendly names for the accessible title / tooltip on the mark wrapper. */
const LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  google: "Google",
  gmail: "Gmail",
  claude: "Claude",
  hubspot: "HubSpot",
  salesforce: "Salesforce",
  calendly: "Calendly",
  clay: "Clay",
};

export function ToolMark({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Glyph = GLYPHS[name];
  if (!Glyph) {
    // Unknown tool — neutral dot so the layout never breaks.
    return (
      <span
        aria-hidden
        className={cn("inline-block size-2 rounded-full bg-faint", className)}
      />
    );
  }
  return (
    <span title={LABELS[name]} className="inline-flex">
      <Glyph className={cn("size-[18px] shrink-0", className)} />
    </span>
  );
}
