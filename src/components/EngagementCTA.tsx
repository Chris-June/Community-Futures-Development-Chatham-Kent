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
  variant?: 'default' | 'inverted' | 'minimal';
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
  variant = 'default',
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
      bg: 'bg-white dark:bg-gray-900',
      text: 'text-gray-900 dark:text-white',
      subtitle: 'text-gray-600 dark:text-gray-300',
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
      buttonSecondary: 'bg-transparent border-2 border-gray-900/20 text-gray-900 hover:bg-gray-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10',
      statsBg: 'bg-gray-100 dark:bg-gray-800',
    },
    minimal: {
      bg: 'bg-transparent',
      text: 'text-gray-900 dark:text-white',
      subtitle: 'text-gray-600 dark:text-gray-300',
      buttonPrimary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg',
      buttonSecondary: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800/50',
      statsBg: 'bg-gray-50 dark:bg-gray-800/50',
    },
  };

  const currentVariant = variants[variant] || variants.default;

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
      {/* Animated background elements */}
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
        'relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20 sm:px-8 lg:px-12',
        variant === 'minimal' ? 'max-w-5xl' : ''
      )}>
        <div className={cn(
          'text-center',
          variant !== 'minimal' ? 'max-w-4xl mx-auto' : ''
        )}>
          {/* Icon */}
          <motion.div 
            className={cn(
              'inline-flex items-center justify-center w-16 h-16 rounded-full mb-6',
              variant === 'default' ? 'bg-white/10' : 'bg-primary-100 dark:bg-primary-900/50',
              variant === 'inverted' ? 'bg-primary-600/10' : ''
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Handshake 
              className={cn(
                'w-8 h-8',
                variant === 'default' ? 'text-white' : 'text-primary-600 dark:text-primary-400',
              )} 
              aria-hidden="true"
            />
          </motion.div>
          
          {/* Title */}
          <motion.h2 
            id="cta-heading"
            className={cn(
              'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4',
              currentVariant.text,
              variant === 'minimal' ? 'text-4xl sm:text-5xl' : ''
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          
          {/* Subtitle */}
          {subtitle && (
            <motion.div 
              className={cn(
                'mt-4 text-lg sm:text-xl max-w-3xl mx-auto',
                currentVariant.subtitle,
                variant === 'minimal' ? 'text-xl sm:text-2xl' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handlePrimaryClick}
              className={cn(
                'flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                'transform hover:-translate-y-0.5 hover:shadow-lg',
                currentVariant.buttonPrimary,
                variant === 'minimal' ? 'px-10 py-4 text-lg' : ''
              )}
              aria-label={primaryButtonText}
            >
              {primaryButtonText}
              <ArrowRight className={cn(
                'ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1',
                variant === 'default' ? 'text-primary-600' : 'text-white'
              )} />
            </button>
            
            <button
              onClick={handleSecondaryClick}
              className={cn(
                'flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                currentVariant.buttonSecondary,
                variant === 'minimal' ? 'px-10 py-4 text-lg' : ''
              )}
              aria-label={secondaryButtonText}
            >
              <Users className={cn(
                'mr-2 w-4 h-4',
                variant === 'default' ? 'text-white' : 'currentColor'
              )} />
              {secondaryButtonText}
            </button>
          </motion.div>
          
          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div 
              className={cn(
                'mt-12 pt-8 border-t',
                variant === 'default' ? 'border-white/10' : 'border-gray-200 dark:border-gray-700',
                variant === 'minimal' ? 'mt-16' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <dt className={cn(
                      'text-3xl font-bold',
                      currentVariant.text,
                      variant === 'minimal' ? 'text-4xl' : ''
                    )}>
                      {stat.value}
                    </dt>
                    <dd className={cn(
                      'mt-2 text-sm font-medium',
                      variant === 'default' ? 'text-primary-100/90' : 'text-gray-500 dark:text-gray-400',
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
                'mt-8 flex flex-col items-center',
                variant === 'minimal' ? 'mt-12' : ''
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center text-sm">
                <CheckCircle className={cn(
                  'w-4 h-4 mr-1.5',
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
