import Link from "next/link";
import { CLOSING, CALENDLY_URL } from "@/lib/content";

export function ClosingCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-line scroll-mt-20"
    >
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />

      <div className="relative pad-x py-16 sm:py-24">
        <div className="grid items-stretch gap-5 lg:grid-cols-5">
          {/* Left — headline, subhead, and the big proof stat */}
          <div className="flex flex-col lg:col-span-3">
            <h2 className="text-h2 font-semibold tracking-tight text-balance text-ink">
              {CLOSING.headline}
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted text-pretty">
              {CLOSING.subhead}
            </p>

            {/* Dark band, big lime number — the headline metric of the page */}
            <div className="relative mt-8 flex flex-1 flex-col justify-end overflow-hidden rounded-[4px] bg-accent-deep p-7 sm:p-9">
              <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden />
              <span className="mono-label relative text-invert/55">
                {CLOSING.counterLabel}
              </span>
              <div className="relative mt-3 text-6xl font-semibold tracking-tight tabular-nums text-accent sm:text-7xl">
                {CLOSING.counterValue}
              </div>
            </div>
          </div>

          {/* Right — stacked CTA: filled lime primary + bordered secondary */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[4px] bg-accent p-7 text-ink transition-colors duration-150 hover:bg-accent-hover sm:p-8"
            >
              <span className="mono-label text-ink/55">{CLOSING.ctaEyebrow}</span>
              <span className="mt-10 flex items-end justify-between gap-4">
                <span className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {CLOSING.cta}
                </span>
                <span
                  aria-hidden
                  className="text-2xl leading-none transition-transform duration-150 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>

            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-1 flex-col justify-between rounded-[4px] border border-line-strong bg-surface p-7 text-ink transition-colors duration-150 hover:border-ink sm:p-8"
            >
              <span className="mono-label flex items-center justify-between gap-4 text-faint">
                {CLOSING.secondaryCta}
                <span
                  aria-hidden
                  className="text-faint transition-colors duration-150 group-hover:text-ink"
                >
                  ↗
                </span>
              </span>
              <span className="mt-10 text-lg leading-relaxed text-muted text-pretty">
                {CLOSING.secondaryNote}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
