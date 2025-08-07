import React from "react";

// Minimal classNames combiner to avoid adding a dependency
function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export type LogoItem = {
  src: string;
  alt: string;
  href?: string;
  height?: number; // optional per-logo override
  width?: number; // optionally supply to avoid layout shift
};

export type LogoMarqueeProps = {
  logos: LogoItem[];
  speedSeconds?: number; // animation duration for a full cycle
  gap?: string; // e.g. "2rem", "32px", "1.5rem"
  reverse?: boolean;
  pauseOnHover?: boolean;
  maskEdges?: boolean; // fade edges
  grayscale?: boolean;
  className?: string;
  itemClassName?: string; // additional class for each item wrapper
  trackClassName?: string; // additional class for the track
  ariaLabel?: string; // for accessibility of the whole marquee region
};

/**
 * Tailwind-only infinite horizontal scrolling logo marquee.
 *
 * - Duplicates the logo list to create a seamless loop (200% width track).
 * - Uses CSS variables for speed (--duration) and spacing (--gap).
 * - Honors prefers-reduced-motion via utilities added in index.css.
 */
export function LogoMarquee({
  logos,
  speedSeconds = 30,
  gap = "2.5rem",
  reverse = false,
  pauseOnHover = false,
  maskEdges = true,
  grayscale = false,
  className,
  itemClassName,
  trackClassName,
  ariaLabel = "Partner logos scrolling",
}: LogoMarqueeProps) {
  const hasLinks = logos.some(l => !!l.href);

  const containerClasses = cx(
    "marquee w-full",
    maskEdges && "marquee-mask",
    pauseOnHover && "pause-on-hover",
    grayscale && "logos-grayscale",
    className
  );

  const trackClasses = cx(
    "marquee-track animate-marquee",
    reverse && "animate-marquee-reverse",
    trackClassName
  );

  type CSSVars = React.CSSProperties & { [key: string]: string | number | undefined };
  const styleVars: CSSVars = {
    "--duration": `${speedSeconds}s`,
    "--gap": gap,
  };

  const InnerRow = () => (
    <div className="marquee-inner" aria-hidden>
      {logos.map((logo, idx) => {
        const img = (
          // Using explicit height if provided to help layout stability
          <img
            src={logo.src}
            alt={logo.alt}
            height={logo.height}
            width={logo.width}
            className={cx("h-10 sm:h-12 md:h-14 object-contain", itemClassName)}
            loading="lazy"
          />
        );
        return (
          <div key={`${logo.src}-${idx}`} className="flex items-center">
            {logo.href ? (
              <a
                href={logo.href}
                target={logo.href?.startsWith("/") ? undefined : "_blank"}
                rel={logo.href?.startsWith("/") ? undefined : "noopener noreferrer"}
                aria-label={logo.alt}
                className="inline-flex"
              >
                {img}
              </a>
            ) : (
              img
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      className={containerClasses}
      style={styleVars}
      aria-label={ariaLabel}
      role={hasLinks ? "navigation" : undefined}
    >
      <div className={trackClasses}>
        <InnerRow />
        {/* Duplicate for seamless scroll */}
        <InnerRow />
      </div>
    </section>
  );
}

export default LogoMarquee;
