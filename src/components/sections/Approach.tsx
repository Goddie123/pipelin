import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import { APPROACH } from "@/lib/content";

export function Approach() {
  return (
    <Section id="approach" tag={APPROACH.tag} index={APPROACH.index}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
        {/* Left — the pitch + headline stat, pinned while the engine scrolls. */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            title={APPROACH.headline}
            subhead={APPROACH.subhead}
            max="max-w-xl"
          />

          <Card
            variant="default"
            className="mt-8 overflow-hidden sm:mt-10"
          >
            <div className="relative flex items-center justify-center border-b border-line p-8 sm:p-10">
              <span className="text-6xl font-semibold tracking-tight text-accent-ink sm:text-7xl">
                {APPROACH.stat}
              </span>
              <CornerMarks color="accent" />
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-lg leading-snug text-ink sm:text-xl">
                {APPROACH.statCaption}
              </p>
            </div>
          </Card>
        </div>

        {/* Right — the signals-based GTM engine, drawn as a flow canvas. */}
        <WorkflowDiagram />
      </div>
    </Section>
  );
}
