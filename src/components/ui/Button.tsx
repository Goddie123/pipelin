import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-150 select-none";

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-hover rounded-[3px]",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink rounded-[3px]",
  ghost:
    "text-ink hover:text-accent-ink",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
}: ButtonProps) {
  // External links (e.g. the Calendly booking page) open in a new tab.
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={cn(base, sizes[size], variants[variant], className)}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
    </Link>
  );
}
