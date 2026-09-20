import { Section, SectionHeading } from "@/components/ui/Section";
import { PROBLEM } from "@/lib/content";

export function Problem() {
  return (
    <Section id="problem" tag={PROBLEM.tag} index={PROBLEM.index}>
      <SectionHeading title={PROBLEM.headline} subhead={PROBLEM.subhead} />

      <div className="mt-10 grid overflow-hidden rounded-[4px] border border-line divide-y divide-line sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        {PROBLEM.cards.map((card, i) => (
          <div key={card.title} className="bg-surface p-7 sm:p-9">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-accent-ink" aria-hidden />
              <span className="mono-label text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-7 text-xl font-medium tracking-tight text-ink text-balance">
              {card.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
