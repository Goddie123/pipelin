import { Section, SectionHeading } from "@/components/ui/Section";
import { ToolLogo, WORDMARK_LOGOS } from "@/components/ui/ToolLogo";
import { STACK } from "@/lib/content";

export function Stack() {
  return (
    <Section id="stack" tag={STACK.tag} index={STACK.index}>
      <SectionHeading title={STACK.headline} subhead={STACK.subhead} />

      <div className="mt-10 sm:mt-14">
        {/* Core stack */}
        <span className="mono-label text-faint">{STACK.coreLabel}</span>
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-[4px] border border-line divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-5">
          {STACK.core.map((tool) => (
            <div
              key={tool}
              className="flex items-center justify-center gap-2 bg-surface p-7 text-base font-medium text-ink sm:p-9 sm:text-lg"
            >
              <ToolLogo name={tool} />
              {!WORDMARK_LOGOS.has(tool) && tool}
            </div>
          ))}
        </div>

        {/* CRM support */}
        <span className="mono-label mt-8 block text-faint">{STACK.crmLabel}</span>
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-[4px] border border-line divide-x divide-line sm:max-w-md">
          {STACK.crm.map((tool) => (
            <div
              key={tool}
              className="flex items-center justify-center gap-2 bg-surface p-7 text-base font-medium text-ink sm:p-9 sm:text-lg"
            >
              <ToolLogo name={tool} />
              {!WORDMARK_LOGOS.has(tool) && tool}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
