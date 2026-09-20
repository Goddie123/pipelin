import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1280px] pad-x">
        <div className="grid gap-10 py-14 sm:py-16 md:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <span className="mono-label text-faint">{col.title}</span>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => {
                    const isExternal = /^https?:\/\//.test(link.href);
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted transition-colors hover:text-ink"
                          {...(isExternal && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-line py-6 text-faint sm:flex-row sm:items-center sm:justify-between">
          <span className="mono-label">{FOOTER.legal.copyright}</span>
          <div className="flex gap-5">
            {FOOTER.legal.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mono-label transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
