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

const DEFAULT_OVERLAY_GRADIENT = 'bg-gradient-to-b from-black/30 to-black/50 dark:from-black/40 dark:to-black/60';

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
  minHeight = 'min-h-[80vh]',
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
    [0, prefersReducedMotion ? 0 : 100],
    { clamp: false }
  );
  
  const opacity = useTransform(
    scrollY, 
    [0, 300], 
    [1, prefersReducedMotion ? 1 : 0.7],
    { clamp: true }
  );

  // Animation variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
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
        'relative isolate w-full overflow-hidden',
        minHeight,
        className
      )}
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern - Subtle texture */}
      {pattern && (
        <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
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
                  className="text-primary-700 dark:text-primary-400"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </pattern>
            </defs>
            <rect 
              width="100%" 
              height="100%" 
              fill="url(#hero-pattern)" 
              className="text-primary-300 dark:text-primary-900"
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
          'absolute inset-0',
          overlayGradient || DEFAULT_OVERLAY_GRADIENT
        )} />
        
        {/* Background image */}
        <img
          src={image}
          alt=""
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700',
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
        'mx-auto flex h-full max-w-7xl items-center px-6 py-24 sm:py-32 lg:px-8',
        contentClassName
      )}>
        <div className="w-full max-w-4xl">
          <motion.div
            className="space-y-6 lg:space-y-8"
            {...motionConfig}
          >
            <motion.h1
              id="hero-heading"
              className={cn(
                'text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl',
                'drop-shadow-md',
                titleClassName
              )}
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.div 
                className={cn(
                  'max-w-3xl text-lg leading-8 text-gray-100 sm:text-xl',
                  'drop-shadow-sm',
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
                className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
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
                    className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary-700 shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    {ctaText}
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
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 bg-opacity-20 px-6 py-3 text-base font-medium text-white hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    {secondaryCtaText}
                  </a>
                )}
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}