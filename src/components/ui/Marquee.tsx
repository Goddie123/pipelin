import { cn } from "@/lib/cn";

/**
 * Marquee — infinite horizontal scroller. Renders children twice so the
 * -50% keyframe loops seamlessly. Pauses on hover; respects reduced-motion.
 */
export function Marquee({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="animate-marquee flex w-max shrink-0 items-center hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
