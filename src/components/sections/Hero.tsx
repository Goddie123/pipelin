import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Terminal } from "@/components/ui/Terminal";
import { Marquee } from "@/components/ui/Marquee";
import { Accent } from "@/components/ui/Section";
import { BrandMark, brandMarkType } from "@/components/ui/BrandMark";
import { HERO, MARQUEE, CALENDLY_URL } from "@/lib/content";

export function Hero() {
  // repeat the wordmarks so the marquee fills the row before it loops
  const logos = Array.from({ length: 4 }).flatMap(() => MARQUEE.logos);

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* soft dot texture */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative pad-x pt-14 pb-14 sm:pt-20 sm:pb-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Pill badge={HERO.pillBadge}>{HERO.pillText}</Pill>

          <h1 className="text-display mt-9 font-semibold text-ink text-balance">
            {HERO.headline.replace(/\.$/, "")}
            <Accent>.</Accent>
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted text-pretty">
            {HERO.subhead}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={CALENDLY_URL} variant="primary" size="lg" arrow>
              {HERO.ctaPrimary}
            </Button>
            <Button href="#what-we-do" variant="secondary" size="lg">
              {HERO.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* client logos — embedded in the hero, like supermemory's "used by" strip */}
        <div className="relative mt-14">
          <p className="mono-label text-center text-faint">{MARQUEE.label}</p>
          <div className="mt-8">
            <Marquee>
              {logos.map((logo, i) => (
                <span
                  key={`${logo.name}-${i}`}
                  className="mx-4 inline-flex items-center gap-3 sm:mx-6"
                >
                  {logo.mark && brandMarkType(logo.mark) === "wordmark" ? (
                    <BrandMark id={logo.mark} context="marquee" />
                  ) : (
                    <>
                      {logo.mark && (
                        <BrandMark id={logo.mark} context="marquee" />
                      )}
                      <span className="text-base font-medium tracking-tight text-ink sm:text-lg">
                        {logo.name}
                      </span>
                    </>
                  )}
                </span>
              ))}
            </Marquee>
          </div>
        </div>

        {/* signature terminal */}
        <Terminal data={HERO.terminal} className="mx-auto mt-16 max-w-2xl" />
      </div>
    </section>
  );
}
