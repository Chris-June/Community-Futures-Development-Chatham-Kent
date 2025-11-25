import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, Variants } from 'framer-motion';
import { cn } from '../lib/utils';

interface ParallaxHeroProps {
  title: string;
  description: string | React.ReactNode;
  image: string;
  children?: React.ReactNode;
  pattern?: boolean;
  className?: string;
  overlayGradient?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  minHeight?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  onSecondaryCtaClick?: () => void;
}

const DEFAULT_OVERLAY_GRADIENT = 'bg-gradient-to-b from-black/40 via-black/20 to-black/60 dark:from-black/60 dark:via-black/40 dark:to-black/80';

export default function ParallaxHero({
  title,
  description,
  image,
  children,
  pattern = true,
  className = '',
  overlayGradient = DEFAULT_OVERLAY_GRADIENT,
  titleClassName = '',
  descriptionClassName = '',
  contentClassName = '',
  priority = false,
  loading = 'lazy',
  minHeight = 'min-h-[85vh]',
  ctaText,
  ctaLink,
  onCtaClick,
  secondaryCtaText,
  secondaryCtaLink,
  onSecondaryCtaClick,
}: ParallaxHeroProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle parallax effect with reduced motion preference
  const y = useTransform(
    scrollY,
    [0, 500],
    [0, prefersReducedMotion ? 0 : 150],
    { clamp: false }
  );

  const opacity = useTransform(
    scrollY,
    [0, 300],
    [1, prefersReducedMotion ? 1 : 0.5],
    { clamp: true }
  );

  const textY = useTransform(
    scrollY,
    [0, 300],
    [0, prefersReducedMotion ? 0 : 50],
    { clamp: true }
  );

  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 0.8
      },
    },
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Skip animations if user prefers reduced motion
  const motionConfig = useMemo(() => ({
    initial: prefersReducedMotion ? false : 'hidden',
    animate: isMounted ? 'visible' : 'hidden',
    variants: containerVariants,
  }), [isMounted, prefersReducedMotion]);

  if (!isMounted) {
    return (
      <div className={cn('relative w-full', minHeight, className)}>
        <div className="absolute inset-0 bg-primary-900" />
      </div>
    );
  }

  return (
    <section
      className={cn(
        'relative isolate w-full overflow-hidden flex items-center',
        minHeight,
        className
      )}
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Subtle texture */}
      {pattern && (
        <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10 pointer-events-none">
          <svg
            className="h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-pattern"
                width={80}
                height={80}
                patternUnits="userSpaceOnUse"
                patternTransform="scale(2)"
              >
                <path
                  d="M0 0h80v80H0z"
                  fill="none"
                />
                <path
                  d="M0 40h80"
                  stroke="currentColor"
                  className="text-white/10"
                  strokeWidth={1}
                  strokeLinecap="round"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#hero-pattern)"
            />
          </svg>
        </div>
      )}

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={prefersReducedMotion ? {} : { y, opacity }}
        aria-hidden="true"
      >
        {/* Overlay gradient */}
        <div className={cn(
          'absolute inset-0 z-10',
          overlayGradient
        )} />

        {/* Background image */}
        <img
          src={image}
          alt=""
          className={cn(
            'h-full w-full object-cover transition-opacity duration-1000 scale-105',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
          loading={loading}
          // @ts-ignore - fetchPriority is valid but TypeScript types might be outdated
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setImageLoaded(true)}
          role="presentation"
        />

        {/* Fallback background color */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-primary-900" />
        )}
      </motion.div>

      {/* Content */}
      <div className={cn(
        'mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-20',
        contentClassName
      )}>
        <div className="w-full max-w-4xl">
          <motion.div
            className="space-y-8"
            style={{ y: textY }}
            {...motionConfig}
          >
            {/* Glassmorphism Container for Text */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10 p-8 sm:p-10 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-50" />

              <motion.h1
                id="hero-heading"
                className={cn(
                  'text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl',
                  'drop-shadow-lg',
                  titleClassName
                )}
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              {description && (
                <motion.div
                  className={cn(
                    'mt-6 max-w-3xl text-lg leading-8 text-gray-100 sm:text-xl',
                    'drop-shadow-md font-light',
                    descriptionClassName
                  )}
                  variants={itemVariants}
                >
                  {typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )}
                </motion.div>
              )}

              {(ctaText || children) && (
                <motion.div
                  className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  variants={itemVariants}
                >
                  {ctaText && (ctaLink || onCtaClick) && (
                    <a
                      href={ctaLink || '#'}
                      onClick={(e) => {
                        if (onCtaClick) {
                          e.preventDefault();
                          onCtaClick();
                        }
                      }}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-4 text-base font-bold text-primary-700 shadow-lg transition-all duration-300 hover:bg-primary-50 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
                    >
                      <span className="relative z-10">{ctaText}</span>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  )}
                  {secondaryCtaText && (secondaryCtaLink || onSecondaryCtaClick) && (
                    <a
                      href={secondaryCtaLink || '#'}
                      onClick={(e) => {
                        if (onSecondaryCtaClick) {
                          e.preventDefault();
                          onSecondaryCtaClick();
                        }
                      }}
                      className="group inline-flex items-center justify-center rounded-xl border border-white/30 bg-black/20 backdrop-blur-sm px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-black/40 hover:border-white/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
                    >
                      {secondaryCtaText}
                    </a>
                  )}
                  {children}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}