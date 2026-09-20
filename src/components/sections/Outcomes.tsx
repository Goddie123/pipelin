import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { OUTCOMES } from "@/lib/content";

export function Outcomes() {
  return (
    <Section id="outcomes" tag={OUTCOMES.tag} index={OUTCOMES.index}>
      <SectionHeading title={OUTCOMES.headline} />

      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
        {OUTCOMES.stats.map((stat) =>
          stat.highlight ? (
            <Card key={stat.unit} variant="blue" className="p-7 sm:p-9">
              <div className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-lg font-medium text-ink">
                {stat.unit}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {stat.caption}
              </p>
            </Card>
          ) : (
            <Card key={stat.unit} variant="default" className="p-7 sm:p-9">
              <div className="text-5xl font-semibold tracking-tight text-accent-ink sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-lg font-medium text-ink">
                {stat.unit}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stat.caption}
              </p>
            </Card>
          ),
        )}
      </div>
    </Section>
  );
}
