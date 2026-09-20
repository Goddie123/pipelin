import { Section, SectionHeading } from "@/components/ui/Section";
import { BrandMark, brandMarkType } from "@/components/ui/BrandMark";
import { CLIENTS } from "@/lib/content";

export function Clients() {
  return (
    <Section id="clients" tag={CLIENTS.tag} index={CLIENTS.index}>
      <SectionHeading title={CLIENTS.headline} subhead={CLIENTS.subhead} />

      <div className="mt-10 grid overflow-hidden rounded-[4px] border border-line divide-y divide-line sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        {CLIENTS.cases.map((c) => (
          <div key={c.name} className="bg-surface p-7 sm:p-9">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-accent-ink" aria-hidden />
              <span className="mono-label text-faint">{c.stage}</span>
            </div>
            <h3 className="mt-6 flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {c.mark && brandMarkType(c.mark) === "wordmark" ? (
                <BrandMark id={c.mark} context="heading" />
              ) : (
                <>
                  {c.mark && <BrandMark id={c.mark} context="heading" />}
                  {c.name}
                </>
              )}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink">{c.result}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
