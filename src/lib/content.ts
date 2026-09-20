/**
 * Pipelin — site content
 * Single source of truth for all copy. Section components import from here.
 */

// Scheduling link — every "talk to us" / booking CTA points here.
export const CALENDLY_URL = "https://calendly.com/amartyabhargava/30min/";

export const BRAND = {
  name: "Pipelin",
  tagline: "The GTM engineering team for AI startups.",
  cta: "Book a scoping call",
  ctaSecondary: "Talk to founder",
};

export const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Clients", href: "#clients" },
  { label: "Why us", href: "#why-us" },
];

export const HERO = {
  pillBadge: "PROOF",
  pillText: "20+ demos / week, consistently delivered",
  headline: "The GTM engineering team for AI startups.",
  subhead:
    "We build signals-based GTM engines — so one GTM engineer with Claude and Clay outperforms an SDR team of ten.",
  ctaPrimary: "Book a scoping call",
  ctaSecondary: "See how it works",
  terminal: {
    command: "pipelin deploy --signals",
    lines: [
      { label: "TAM mapped", value: "12,480 accounts" },
      { label: "Signals captured", value: "intent · hiring · tech" },
      { label: "Enriched & scored", value: "Clay" },
      { label: "Infra warmed", value: "domains · inboxes" },
      { label: "Outbound live", value: "Claude · HeyReach · Instantly" },
    ],
    target: "target: 25 demos / week",
  },
};

/** Brand-mark keys — resolved to inline graphical marks by the BrandMark component. */
export type BrandMarkId =
  | "coworker"
  | "crewai"
  | "futurepath"
  | "messageworks"
  | "skipdial";

export const MARQUEE: {
  label: string;
  logos: { name: string; note?: string; mark?: BrandMarkId }[];
} = {
  label: "Powering hyper-growth AI startups",
  logos: [
    { name: "Coworker.ai", note: "$13M Seed", mark: "coworker" },
    { name: "CrewAI", note: "Series B", mark: "crewai" },
    { name: "Future Path AI", note: "Series A", mark: "futurepath" },
    { name: "Messageworks", mark: "messageworks" },
    { name: "SkipdialAI", mark: "skipdial" },
    { name: "BugRaid.ai" },
    { name: "PrimaLabs.ai" },
    { name: "Otaru.ai" },
  ],
};

export const PROBLEM = {
  index: "01",
  tag: "The problem",
  headline: "Traditional outbound is breaking.",
  subhead:
    "The old GTM model — AEs and SDRs spraying and praying to manufacture pipeline — no longer works. Adding more reps just adds more volume to a channel that's already saturated.",
  cards: [
    {
      title: "Open rates are collapsing",
      body: "Mass outbound has driven inbox engagement to all-time lows. Volume no longer buys attention.",
    },
    {
      title: "Drowning in AI slop",
      body: "Buyers are flooded with generated noise. Generic, untargeted outreach gets ignored or marked spam.",
    },
    {
      title: "Reps stuck on grunt work",
      body: "SDRs burn hours on manual list-building and messy data instead of high-value conversations.",
    },
  ],
};

export const APPROACH = {
  index: "02",
  tag: "The new approach",
  headline: "Signals-based GTM.",
  subhead:
    "Instead of scaling headcount and blasting volume, you scale systems: capture the intent signals you already have, enrich and score them automatically, and trigger warm, relevant outbound programmatically.",
  stat: "1 > 10",
  statCaption:
    "One GTM engineer with Claude + Clay outperforms an SDR team of ten.",
  // The signals-based GTM engine, stage by stage — rendered beside the stat as a
  // top-to-bottom flow "canvas". A `branch` row fans out into N parallel tracks
  // that converge back into the next single node. `tools` reference brand marks
  // in <BrandMark>; `accent` marks the source trigger, `win` the outcome.
  flowCaption: "One engine, end to end",
  flow: [
    { kind: "node", label: "Pipelin", accent: true },
    { kind: "node", label: "ICP Model", tools: ["hubspot", "clay"] },
    {
      kind: "node",
      label: "AI Account Research",
      tools: ["clay", "claude", "google"],
    },
    {
      kind: "branch",
      items: [{ label: "Tier 1" }, { label: "Tier 2" }, { label: "Tier 3" }],
    },
    { kind: "node", label: "Awareness Scoring" },
    {
      kind: "branch",
      items: [
        { label: "Identified" },
        { label: "Aware" },
        { label: "Interested" },
        { label: "Considering" },
        { label: "Selecting" },
      ],
    },
    { kind: "node", label: "Contact Sourcing" },
    { kind: "node", label: "Demand Generation" },
    {
      kind: "branch",
      items: [
        { label: "Ads", tools: ["google", "linkedin"] },
        { label: "Outbound", tools: ["gmail", "linkedin"] },
        { label: "Content", tools: ["linkedin"] },
      ],
    },
    { kind: "node", label: "Meeting booked", tools: ["calendly"] },
    {
      kind: "node",
      label: "Sales Process",
      tools: ["hubspot", "salesforce", "clay"],
    },
    { kind: "node", label: "Closed Won", win: true },
  ],
};

export const WHAT_WE_DO = {
  index: "03",
  tag: "What we do",
  headline: "We build and run your signals-based GTM engine.",
  subhead:
    "Pipelin is the fractional GTM engineering team behind three things.",
  services: [
    {
      no: "01",
      title: "Build your GTM data intelligence layer",
      body: "TAM mapping, signal capture, enrichment, scoring, and qualification in Clay — a trusted source of truth that sits above your CRM.",
    },
    {
      no: "02",
      title: "Build your GTM outbound infrastructure",
      body: "Domains, inboxes, warmups, and LinkedIn profiles — the deliverability backbone for sending at volume without burning your primary domain.",
    },
    {
      no: "03",
      title: "Run programmatic outbound at scale",
      body: "Signal-triggered campaigns orchestrated across Claude, HeyReach, and Instantly — with the goal of booking 25 new demos every week.",
    },
  ],
};

/** Icon keys for the team roles — resolved to animated inline SVGs in HowWeWork. */
export type HowWeWorkIcon = "compass" | "pipeline" | "inbox";

export const HOW_WE_WORK = {
  index: "04",
  tag: "How we work",
  headline: "A fractional GTM engineering team, embedded.",
  subhead:
    "We embed a complete team to build and maintain your outbound engine — not a single freelancer, not rented SDRs.",
  roles: [
    {
      icon: "compass" as HowWeWorkIcon,
      role: "GTM Strategist",
      body: "Owns strategy, tech-stack decisions, ICP, messaging, and campaign design.",
    },
    {
      icon: "pipeline" as HowWeWorkIcon,
      role: "GTM Data Engineer",
      body: "Builds the data pipelines, enrichment, scoring, and Clay orchestration.",
    },
    {
      icon: "inbox" as HowWeWorkIcon,
      role: "Inbox Managers",
      body: "Handle responses, FAQs, and quality — keeping outbound human where it counts.",
    },
  ],
};

export const STACK = {
  index: "05",
  tag: "The stack",
  headline: "A modern, AI-native tech stack.",
  subhead: "Built for AI startups, with CRM support for the systems you already run.",
  coreLabel: "Core stack",
  core: ["Clay", "Claude", "HeyReach", "Instantly", "Supabase"],
  crmLabel: "CRM support",
  crm: ["HubSpot", "Salesforce"],
};

export const OUTCOMES = {
  index: "06",
  tag: "Outcomes",
  headline: "What you get.",
  stats: [
    {
      value: "20+",
      unit: "additional demos booked / week",
      caption: "through automated, high-intent campaigns",
      highlight: true,
    },
    {
      value: "10–15",
      unit: "hours/week freed per SDR",
      caption: "by removing manual data work",
      highlight: false,
    },
    {
      value: "1",
      unit: "trusted source of truth",
      caption: "clean data that prevents duplicates and junk",
      highlight: false,
    },
    {
      value: "↑",
      unit: "show & conversion rates",
      caption: "systems that scale with aggressive growth",
      highlight: false,
    },
  ],
};

export const ENGAGEMENT = {
  index: "07",
  tag: "Engagement model",
  headline: "A three-month build · run · scale engagement.",
  subhead:
    "We build the engine, run it, and scale it — with a goal of 50+ demos booked over the engagement.",
  phases: [
    {
      no: "Phase 1",
      title: "Build",
      body: "Data intelligence layer, scoring models, and outbound infrastructure stood up and warmed.",
    },
    {
      no: "Phase 2",
      title: "Run",
      body: "Signal-triggered campaigns launched. Inbox managed. First demos booked with human-in-the-loop checks.",
    },
    {
      no: "Phase 3",
      title: "Scale",
      body: "Optimize, expand campaigns, and push toward 25 demos/week at steady state.",
    },
  ],
  goalBanner:
    "GOAL: 50+ demos booked over three months, building toward 25 demos/week at steady state.",
};

export const CLIENTS: {
  index: string;
  tag: string;
  headline: string;
  subhead: string;
  cases: { name: string; stage: string; result: string; mark?: BrandMarkId }[];
} = {
  index: "08",
  tag: "Our clients",
  headline: "We help the world's best AI startups grow.",
  subhead:
    "Pipelin is the GTM engineering brain and muscle behind hyper-growth AI startups.",
  cases: [
    {
      name: "Coworker.ai",
      stage: "$13M Seed",
      result: "Booked 300+ demos over 6 months",
      mark: "coworker",
    },
    {
      name: "CrewAI",
      stage: "Series B",
      result: "Booked 400+ demos in the first 8 weeks",
      mark: "crewai",
    },
    {
      name: "Future Path AI",
      stage: "Series A",
      result:
        "Booked 200+ demos in the first 2 months with F100 & F500 companies",
      mark: "futurepath",
    },
  ],
};

/** Icon keys for the comparison matrix — resolved to inline SVGs in the WhyUs section. */
export type WhyUsIcon = "sparkle" | "plug" | "tools" | "target" | "clock" | "tag";

/** A comparison column. The first column (`highlight: true`) is the "us" column. */
export type WhyUsColumn = {
  key: string;
  label: string;
  highlight?: boolean;
  badge?: string;
};

/** A feature row. Each value is `true` (yes), `false` (no), or a qualifier string. */
export type WhyUsRow = {
  feature: string;
  icon: WhyUsIcon;
  values: Record<string, boolean | string>;
};

export const WHY_US: {
  index: string;
  tag: string;
  headline: string;
  subhead: string;
  featureLabel: string;
  columns: WhyUsColumn[];
  rows: WhyUsRow[];
} = {
  index: "09",
  tag: "Why Pipelin",
  headline: "Not another software. Not another traditional agency.",
  subhead:
    "Pipelin is an AI-native GTM services company that delivers outcomes.",
  featureLabel: "Feature",
  columns: [
    { key: "pipelin", label: "Pipelin", highlight: true, badge: "BEST" },
    { key: "saas", label: "SaaS Tool" },
    { key: "hire", label: "Full-time Hire" },
    { key: "agency", label: "Traditional Agency" },
    { key: "advisor", label: "Advisor" },
  ],
  rows: [
    {
      feature: "AI Workflows with Human Expertise",
      icon: "sparkle",
      values: {
        pipelin: true,
        saas: false,
        hire: false,
        agency: false,
        advisor: false,
      },
    },
    {
      feature: "Built into Your Systems",
      icon: "plug",
      values: {
        pipelin: true,
        saas: true,
        hire: true,
        agency: false,
        advisor: true,
      },
    },
    {
      feature: "Tooling Expertise",
      icon: "tools",
      values: {
        pipelin: true,
        saas: "Digital adoption",
        hire: "Not always",
        agency: "Limited",
        advisor: false,
      },
    },
    {
      feature: "Strategy, Execution, Distribution",
      icon: "target",
      values: {
        pipelin: true,
        saas: false,
        hire: true,
        agency: "Lacking strategy",
        advisor: "Only strategy",
      },
    },
    {
      feature: "Time-to-Value",
      icon: "clock",
      values: {
        pipelin: true,
        saas: "Setup time varies",
        hire: "Ramp-up",
        agency: true,
        advisor: true,
      },
    },
    {
      feature: "Priced on Outcomes",
      icon: "tag",
      values: {
        pipelin: true,
        saas: false,
        hire: false,
        agency: false,
        advisor: false,
      },
    },
  ],
};

export const CLOSING = {
  headline: "20+ additional demos a week, consistently delivered.",
  subhead: "Let's map your signals and design your GTM engine.",
  ctaEyebrow: "Ready to start",
  cta: "Book a scoping call",
  secondaryCta: "Talk to the founder",
  secondaryNote: "Prefer a quick chat first? Reach the founder directly.",
  counterLabel: "Demos booked for AI-company clients",
  counterValue: "900+",
};

export const FOOTER = {
  brand: "Pipelin",
  tagline:
    "The GTM engineering team for AI startups. We build signals-based GTM engines that book demos in weeks, not quarters.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Problem", href: "#problem" },
        { label: "What we do", href: "#what-we-do" },
        { label: "Why us", href: "#why-us" },
      ],
    },
    {
      title: "Engine",
      links: [
        { label: "Outcomes", href: "#outcomes" },
        { label: "Clients", href: "#clients" },
        { label: "Engagement", href: "#engagement" },
      ],
    },
    {
      title: "Get started",
      links: [
        { label: "Book a scoping call", href: CALENDLY_URL },
        { label: "Talk to founder", href: CALENDLY_URL },
      ],
    },
  ],
  legal: {
    copyright: "© 2026 · PIPELIN · ALL RIGHTS RESERVED",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
};

export const TOTAL_SECTIONS = "09";
