"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_LINKS, CALENDLY_URL } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between pad-x">
        <Link href="#top" aria-label={BRAND.name} className="shrink-0">
          <Logo />
        </Link>

        {/* desktop links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-tight text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={CALENDLY_URL} variant="primary" arrow className="hidden sm:inline-flex">
            {BRAND.cta}
          </Button>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-[3px] border border-line-strong text-ink lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform",
                  open && "translate-y-[5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[5px] h-0.5 w-4 bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[10px] h-0.5 w-4 bg-current transition-transform",
                  open && "-translate-y-[5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-line bg-background lg:hidden">
          <ul className="flex flex-col pad-x py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base tracking-tight text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button href={CALENDLY_URL} variant="primary" arrow className="w-full">
                {BRAND.cta}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
