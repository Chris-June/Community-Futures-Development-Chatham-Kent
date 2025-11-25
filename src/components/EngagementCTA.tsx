import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowRight, Handshake, Users, CheckCircle } from 'lucide-react';

type EngagementCTAProps = {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  variant?: 'default' | 'inverted' | 'minimal' | 'glass' | 'hero';
  stats?: Array<{ value: string | number; label: string }>;
  showTrustIndicator?: boolean;
  trustCount?: number;
  trustLabel?: string;
};

const EngagementCTA: React.FC<EngagementCTAProps> = ({
  title = "Shape the Future of Our Community",
  subtitle = "Your voice matters! Join us in creating positive change and building a better tomorrow, together.",
  primaryButtonText = "Apply Now",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  className = '',
  variant = 'glass',
  stats = [
    { value: '500+', label: 'Businesses Supported' },
    { value: '25+', label: 'Years of Service' },
    { value: '98%', label: 'Satisfaction Rate' },
  ],
  showTrustIndicator = true,
  trustCount = 1000,
  trustLabel = 'community members making a difference',
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    setIsMounted(true);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer');
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      window.location.href = '/learn-more';
    }
  };

  // Variant styles
  const variants = {
    default: {
      bg: 'bg-gradient-to-br from-primary-700 to-primary-800 dark:from-primary-900 dark:to-primary-950',
      text: 'text-white',
      subtitle: 'text-primary-100/90',
      buttonPrimary: 'bg-white text-primary-700 hover:bg-primary-50 hover:shadow-lg',
      buttonSecondary: 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10',
      statsBg: 'bg-white/10',
    },
    inverted: {
      bg: 'bg-white dark:bg-primary-950',
      text: 'text-gray-900 dark:text-white',
      subtitle: 'text-gray-600 dark:text-gray-300',
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
      buttonSecondary: 'bg-transparent border-2 border-gray-900/20 text-gray-900 hover:bg-gray-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10',
      statsBg: 'bg-gray-100 dark:bg-primary-900',
    },
    minimal: {
      bg: 'bg-transparent',
      text: 'text-gray-900 dark:text-white',
      subtitle: 'text-gray-600 dark:text-gray-300',
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
      buttonSecondary: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-primary-700 dark:text-primary-100 dark:hover:bg-primary-800/50',
      statsBg: 'bg-gray-50 dark:bg-primary-900/50',
    },
    glass: {
      bg: 'bg-primary-900/5 dark:bg-primary-900/20 backdrop-blur-lg border-y border-white/20 dark:border-white/5',
      text: 'text-gray-900 dark:text-white',
      subtitle: 'text-gray-600 dark:text-gray-300',
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:scale-105 transition-transform',
      buttonSecondary: 'bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 backdrop-blur-sm',
      statsBg: 'bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-2xl',
    },
    hero: {
      bg: 'relative bg-gradient-to-b from-primary-700 via-primary-800 to-primary-950 text-white',
      text: 'text-white',
      subtitle: 'text-primary-50/90',
      buttonPrimary: 'bg-white text-primary-800 hover:bg-primary-50 hover:shadow-2xl hover:-translate-y-0.5',
      buttonSecondary: 'bg-primary-900/40 border border-primary-200/30 text-primary-50 hover:bg-primary-800/60 hover:border-primary-100/60',
      statsBg: 'bg-primary-900/50 border border-primary-400/20 backdrop-blur-2xl rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]',
    }
  };

  const currentVariant = variants[variant] || variants.glass;

  if (!isMounted) {
    return (
      <div className={cn(
        'w-full min-h-[400px] flex items-center justify-center',
        currentVariant.bg,
        className
      )}>
        <div className="animate-pulse w-full max-w-7xl mx-auto px-6 py-12 sm:px-8">
          <div className="h-12 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-8"></div>
          <div className="flex justify-center gap-4">
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden',
        currentVariant.bg,
        className
      )}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      aria-labelledby="cta-heading"
    >
      {/* Animated background elements for glass variant */}
      {variant === 'glass' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-400/10 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-600/10 blur-3xl" />
        </div>
      )}

      {/* Hero variant: layered animated wave background */}
      {variant === 'hero' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Soft radial glows */}
          <motion.div
            aria-hidden="true"
            className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
            animate={{
              scale: isHovered ? [1, 1.08, 1] : [1, 1.03, 1],
              x: isHovered ? [0, 14, 0] : [0, 6, 0],
              y: isHovered ? [0, -10, 0] : [0, -4, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-lime-400/15 blur-3xl"
            animate={{
              scale: isHovered ? [1, 1.06, 1] : [1, 1.02, 1],
              x: isHovered ? [0, -12, 0] : [0, -4, 0],
              y: isHovered ? [0, 10, 0] : [0, 4, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Layered SVG waves */}
          <div className="absolute inset-x-0 bottom-0 h-[55%]">
            <motion.svg
              aria-hidden="true"
              className="absolute inset-x-0 bottom-10 h-40 w-[200%] -translate-x-1/4 text-emerald-400/35"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              animate={{ x: ['0%', '-25%'] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <path
                fill="currentColor"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,154.7C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </motion.svg>

            <motion.svg
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40 w-[220%] -translate-x-1/3 text-emerald-300/25"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              animate={{ x: ['-10%', '0%'] }}
              transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
            >
              <path
                fill="currentColor"
                d="M0,256L60,250.7C120,245,240,235,360,218.7C480,203,600,181,720,192C840,203,960,245,1080,250.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              />
            </motion.svg>

            <motion.div
              aria-hidden="true"
              className="absolute inset-x-10 bottom-6 h-32 rounded-3xl bg-gradient-to-r from-emerald-400/10 via-lime-300/10 to-emerald-500/5 blur-2xl border border-emerald-300/10"
              animate={{
                opacity: isHovered ? [0.6, 0.9, 0.6] : [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      )}

      {/* Animated background elements for default variant */}
      <AnimatePresence>
        {variant === 'default' && (
          <>
            <motion.div
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 backdrop-blur-sm"
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                x: isHovered ? [0, 10, 0] : 0,
                y: isHovered ? [0, -10, 0] : 0,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-white/5 backdrop-blur-sm"
              animate={{
                scale: isHovered ? [1, 1.05, 1] : 1,
                x: isHovered ? [0, -5, 0] : 0,
                y: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </>
        )}
      </AnimatePresence>

      <div className={cn(
        'relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24 sm:px-8 lg:px-12',
        variant === 'minimal' ? 'max-w-5xl' : ''
      )}>
        <div className={cn(
          'text-center',
          variant !== 'minimal' ? 'max-w-4xl mx-auto' : ''
        )}>
          {/* Icon */}
          <motion.div
            className={cn(
              'inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-lg',
              variant === 'default'
                ? 'bg-white/10 backdrop-blur-md border border-white/20'
                : 'bg-white dark:bg-primary-900 shadow-xl',
              variant === 'glass'
                ? 'bg-gradient-to-br from-white to-primary-50 dark:from-primary-900 dark:to-primary-950 border border-white/50 dark:border-white/10'
                : '',
              variant === 'hero'
                ? 'bg-gradient-to-tr from-emerald-400 via-lime-300 to-white text-primary-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)]'
                : ''
            )}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Handshake
              className={cn(
                'w-10 h-10',
                variant === 'default' ? 'text-white' : 'text-primary-600 dark:text-primary-400',
              )}
              aria-hidden="true"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            id="cta-heading"
            className={cn(
              'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6',
              currentVariant.text,
              variant === 'minimal' ? 'text-4xl sm:text-5xl' : '',
              variant === 'glass' ? 'drop-shadow-sm' : '',
              variant === 'hero' ? 'drop-shadow-[0_10px_40px_rgba(0,0,0,0.65)]' : ''
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              className={cn(
                'mt-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed',
                currentVariant.subtitle,
                variant === 'minimal' ? 'text-xl sm:text-2xl' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {typeof subtitle === 'string' ? (
                <p>{subtitle}</p>
              ) : (
                subtitle
              )}
            </motion.div>
          )}

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={handlePrimaryClick}
              className={cn(
                'group flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                'transform hover:-translate-y-1 hover:shadow-xl',
                currentVariant.buttonPrimary,
                variant === 'minimal' ? 'px-10 py-4 text-lg' : ''
              )}
              aria-label={primaryButtonText}
            >
              {primaryButtonText}
              <ArrowRight className={cn(
                'ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1',
                variant === 'default' ? 'text-primary-600' : 'text-white'
              )} />
            </button>

            <button
              onClick={handleSecondaryClick}
              className={cn(
                'flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                'transform hover:-translate-y-1',
                currentVariant.buttonSecondary,
                variant === 'minimal' ? 'px-10 py-4 text-lg' : ''
              )}
              aria-label={secondaryButtonText}
            >
              <Users className={cn(
                'mr-2 w-5 h-5',
                variant === 'default' ? 'text-white' : 'currentColor'
              )} />
              {secondaryButtonText}
            </button>
          </motion.div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div
              className={cn(
                'mt-16 p-8 sm:p-10',
                currentVariant.statsBg,
                variant === 'minimal' ? 'mt-16' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/20 dark:divide-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center pt-8 sm:pt-0 px-4">
                    <dt className={cn(
                      'text-4xl sm:text-5xl font-bold mb-2',
                      currentVariant.text,
                      variant === 'minimal' ? 'text-4xl' : '',
                      variant === 'glass' ? 'text-primary-600 dark:text-primary-400' : ''
                    )}>
                      {stat.value}
                    </dt>
                    <dd className={cn(
                      'text-sm sm:text-base font-medium uppercase tracking-wider',
                      variant === 'default' ? 'text-primary-100/80' : 'text-gray-500 dark:text-gray-400',
                      variant === 'minimal' ? 'text-base' : ''
                    )}>
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}

          {/* Trust indicator */}
          {showTrustIndicator && (
            <motion.div
              className={cn(
                'mt-10 flex flex-col items-center',
                variant === 'minimal' ? 'mt-12' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center text-sm px-4 py-2 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/5">
                <CheckCircle className={cn(
                  'w-5 h-5 mr-2',
                  variant === 'default' ? 'text-green-300' : 'text-green-500',
                )} />
                <span className={cn(
                  variant === 'default' ? 'text-primary-100/90' : 'text-gray-600 dark:text-gray-300',
                  'font-medium'
                )}>
                  <span className="font-bold">{trustCount.toLocaleString()}+</span> {trustLabel}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EngagementCTA;
