import React, { useEffect, useState } from 'react';
import AnimatedCounter from '../../components/AnimatedCounter';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';
import ParallaxHero from '../../components/ParallaxHero';
import { successStories } from '../../data/successStories';
import LogoCarousel from '../../components/LogoCarousel';
import EngagementCTA from '../../components/EngagementCTA';

const features = [
  {
    name: 'Our Mission',
    description: 'Supporting local economic development by helping small businesses start, grow, and succeed.',
    icon: Target,
    color: 'from-primary-50 to-white dark:from-primary-900/20 dark:to-primary-900/10',
    hoverColor: 'hover:from-primary-100/80 hover:to-primary-50/80 dark:hover:from-primary-800/30 dark:hover:to-primary-900/20',
    borderColor: 'border-primary-200/80 dark:border-primary-700/30',
    iconColor: 'text-primary-700 dark:text-primary-300',
    link: '/about#mission',
  },
  {
    name: 'Our Vision',
    description: 'To be the leading catalyst for sustainable economic growth in Chatham-Kent.',
    icon: Building2,
    color: 'from-primary-50 to-white dark:from-dark-900/20 dark:to-dark-900/10',
    hoverColor: 'hover:from-primary-100/80 hover:to-primary-50/80 dark:hover:from-dark-800/30 dark:hover:to-dark-900/20',
    borderColor: 'border-primary-200/80 dark:border-dark-700/30',
    iconColor: 'text-primary-700 dark:text-primary-300',
    link: '/about#vision',
  },
  {
    name: 'Our Values',
    description: 'Integrity, innovation, collaboration, and commitment to community success.',
    icon: Award,
    color: 'from-primary-50 to-white dark:from-primary-900/20 dark:to-primary-900/10',
    hoverColor: 'hover:from-primary-100/80 hover:to-primary-50/80 dark:hover:from-primary-800/30 dark:hover:to-primary-900/20',
    borderColor: 'border-primary-200/80 dark:border-primary-700/30',
    iconColor: 'text-primary-700 dark:text-primary-300',
    link: '/about#values',
  },
  {
    name: 'Our Impact',
    description: 'Creating jobs, fostering entrepreneurship, and building a stronger local economy.',
    icon: Users,
    color: 'from-primary-50 to-white dark:from-primary-900/20 dark:to-primary-900/10',
    hoverColor: 'hover:from-primary-100/80 hover:to-primary-50/80 dark:hover:from-primary-800/30 dark:hover:to-primary-900/20',
    borderColor: 'border-primary-200/80 dark:border-primary-700/30',
    iconColor: 'text-primary-700 dark:text-primary-300',
    link: '/about#impact',
  },
];

const impactStats = [
  {
    value: '500+',
    label: 'Businesses Supported',
    description: 'Since our establishment',
    icon: Building2,
    iconColor: 'text-primary-600 dark:text-primary-400',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30',
    textColor: 'text-primary-700 dark:text-primary-200'
  },
  {
    value: '$25M',
    label: 'In Funding Provided',
    description: 'Helping businesses grow',
    icon: Rocket,
    iconColor: 'text-primary-600 dark:text-primary-400',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30',
    textColor: 'text-primary-700 dark:text-primary-200'
  },
  {
    value: '1000+',
    label: 'Jobs Created',
    description: 'In our community',
    icon: Users,
    iconColor: 'text-primary-600 dark:text-primary-400',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30',
    textColor: 'text-primary-700 dark:text-primary-200'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/20 dark:to-primary-900/10 py-16 sm:py-24"
      aria-label="Success Stories Carousel"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary-700 dark:text-primary-300 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Discover how we've helped local businesses thrive in Chatham-Kent.
          </p>
        </div>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
        >
          <motion.article
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative h-[32rem] overflow-hidden rounded-2xl shadow-2xl"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Success story ${currentIndex + 1} of ${successStories.length}`}
          >
            <div className="absolute inset-0">
              <img
                src={successStories[currentIndex].image}
                alt={`${successStories[currentIndex].businessName} business location`}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 sm:text-3xl md:text-4xl mb-3">
                  {successStories[currentIndex].businessName}
                </h3>
                <p className="text-gray-200 text-base sm:text-lg">
                  {successStories[currentIndex].description}
                </p>
                {successStories[currentIndex].cta && (
                  <div className="mt-6">
                    <a
                      href={successStories[currentIndex].cta?.url}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {successStories[currentIndex].cta?.text || 'Learn More'}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.article>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-opacity-50"
            aria-label="Previous success story"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-opacity-50"
            aria-label="Next success story"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* Pagination */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  index === currentIndex 
                    ? 'bg-white w-10 scale-110' 
                    : 'bg-white/50 hover:bg-white/75 w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAre: React.FC = () => {
  const navigate = useNavigate();
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <ParallaxHero
        title="Who We Are"
        description="Community Futures Development Corporation of Chatham-Kent is a community-based, non-profit organization that provides business support services to help entrepreneurs succeed."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Learn About Our Services"
        ctaLink="/services"
        secondaryCtaText="Meet Our Team"
        secondaryCtaLink="/about/team"
      />
      
      {/* Impact Stats */}
      <section id="impact" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Making a Difference in Chatham-Kent
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Through our commitment to local economic development, we've helped create lasting positive change in our community.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {impactStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                    >
                      <dt className="flex flex-col items-center text-center flex-grow">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bgColor} ${stat.iconColor} mb-4`}>
                          <stat.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {stat.value.includes('+') ? (
                            <>
                              <AnimatedCounter 
                                end={parseInt(stat.value.replace(/[^0-9]/g, ''))} 
                                duration={2}
                                suffix={stat.value.includes('+') ? '+' : ''}
                              />
                            </>
                          ) : stat.value.includes('$') ? (
                            <>
                              <AnimatedCounter 
                                end={parseFloat(stat.value.replace(/[^0-9.]/g, ''))} 
                                duration={2}
                                prefix={stat.value.includes('$') ? '$' : ''}
                                suffix={stat.value.match(/([A-Za-z%]+)$/)?.[0] || ''}
                              />
                            </>
                          ) : (
                            stat.value
                          )}
                        </span>
                        <span className="mt-2 text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400">
                          {stat.label}
                        </span>
                      </dt>
                      <dd className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                        {stat.description}
                      </dd>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section id="mission" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
              Our Core Pillars
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Building a Stronger Chatham-Kent
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Through innovation, collaboration, and community focus, we're creating opportunities for businesses to thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                id={feature.name.toLowerCase().replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-8 transition-all duration-300",
                  "border bg-gradient-to-br",
                  feature.color,
                  feature.borderColor,
                  feature.hoverColor,
                  "hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/10 dark:hover:shadow-primary/20"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={cn(
                      "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl",
                      "bg-white/90 dark:bg-primary-950/50 backdrop-blur-sm",
                      "shadow-sm border border-white/80 dark:border-primary-800/50",
                      feature.iconColor,
                      "group-hover:bg-white/100 dark:group-hover:bg-primary-900/70 transition-colors"
                    )}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                        feature.name === 'Our Mission' && "from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300",
                        feature.name === 'Our Vision' && "from-primary-700 to-primary-900 dark:from-primary-300 dark:to-primary-200",
                        feature.name === 'Our Values' && "from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300",
                        feature.name === 'Our Impact' && "from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-300"
                      )}>
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={feature.link || '#'}
                      className={cn(
                        "inline-flex items-center text-sm font-medium transition-colors",
                        "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                        "group-hover:underline underline-offset-4"
                      )}
                      aria-label={`Learn more about ${feature.name}`}
                    >
                      <span>Learn more</span>
                      <svg 
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel - Trusted By */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-8">
            Trusted by local businesses and organizations
          </h3>
          <LogoCarousel />
        </div>
      </section>

      {/* Success Stories Carousel */}
      <Carousel />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <EngagementCTA 
          title="Ready to Grow Your Business?"
          subtitle="Join our community of successful entrepreneurs and take your business to the next level with our expert support and resources."
          primaryButtonText="Apply for Support"
          secondaryButtonText="Contact Our Team"
          onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
          onSecondaryClick={() => navigate('/contact')}
          variant="default"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;