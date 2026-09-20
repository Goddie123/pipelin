import { Section, SectionHeading } from "@/components/ui/Section";
import { WHAT_WE_DO } from "@/lib/content";

export function WhatWeDo() {
  return (
    <Section id="what-we-do" tag={WHAT_WE_DO.tag} index={WHAT_WE_DO.index}>
      <SectionHeading title={WHAT_WE_DO.headline} subhead={WHAT_WE_DO.subhead} />

      <div className="mt-10 overflow-hidden rounded-[4px] border border-line divide-y divide-line sm:mt-14">
        {WHAT_WE_DO.services.map((service) => (
          <div
            key={service.no}
            className="grid gap-4 bg-surface p-7 sm:p-9 md:grid-cols-[120px_1fr] md:gap-10 md:items-baseline"
          >
            <span className="font-mono text-3xl tracking-tight text-accent-ink sm:text-4xl">
              {service.no}
            </span>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-ink text-balance sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                {service.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
