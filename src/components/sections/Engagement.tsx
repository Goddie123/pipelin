import { Section, SectionHeading } from "@/components/ui/Section";
import { ENGAGEMENT } from "@/lib/content";

export function Engagement() {
  return (
    <Section id="engagement" tag={ENGAGEMENT.tag} index={ENGAGEMENT.index}>
      <SectionHeading title={ENGAGEMENT.headline} subhead={ENGAGEMENT.subhead} />

      <div className="mt-10 grid overflow-hidden rounded-[4px] border border-line divide-y divide-line sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        {ENGAGEMENT.phases.map((phase) => (
          <div key={phase.no} className="bg-surface p-7 sm:p-9">
            <span className="mono-label text-accent-ink">{phase.no}</span>
            <h3 className="mt-5 text-xl font-medium text-ink sm:text-2xl">
              {phase.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{phase.body}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[4px] bg-accent-deep p-7 text-invert sm:p-9">
        <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden />
        <p className="relative text-lg font-medium leading-snug text-balance sm:text-xl">
          {ENGAGEMENT.goalBanner}
        </p>
      </div>
    </Section>
  );
}
