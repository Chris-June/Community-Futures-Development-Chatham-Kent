import React, { useEffect, useState } from 'react';
import AnimatedCounter from '../../components/AnimatedCounter';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, ChevronLeft, ChevronRight, Rocket, ShieldCheck, Lightbulb, HeartHandshake, ChevronRight as ChevronRightIcon, LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import ParallaxHero from '../../components/ParallaxHero';
import { successStories } from '../../data/successStories';
import LogoCarousel from '../../components/LogoCarousel';
import EngagementCTA from '../../components/EngagementCTA';
import WhoWeAreModal from '../../components/modals/WhoWeAreModal';

const features = [
  {
    name: 'Access to Capital',
    description: 'Providing financial solutions to help businesses start, grow, and succeed.',
    content: 'Our Access to Capital programs offer flexible financing options for small and medium-sized businesses in Chatham-Kent. We understand that access to funding is often the biggest hurdle for entrepreneurs, which is why we provide loans and financial products tailored to meet the unique needs of local businesses.',
    importanceToCF: 'Access to capital is fundamental to our mission of fostering economic development. It allows us to directly support local businesses and entrepreneurs who may not qualify for traditional bank financing.',
    importanceToCK: 'By providing access to capital, we help local businesses create jobs, stimulate economic growth, and contribute to the overall prosperity of Chatham-Kent.',
    economicImpact: 'Every dollar invested through our financing programs generates significant economic activity in the community, creating a multiplier effect that benefits the entire region.',
    businessImportance: 'Understanding our financing options can help businesses secure the capital they need to start, expand, or weather challenging times, ensuring their long-term success.',
    icon: Target,
    color: 'from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-900/10',
    hoverColor: 'hover:from-blue-100/80 hover:to-blue-50/80 dark:hover:from-blue-800/30 dark:hover:to-blue-900/20',
    borderColor: 'border-blue-200/80 dark:border-blue-700/30',
    iconColor: 'text-white',
    iconBgColor: 'bg-blue-500',
    link: '/services/financing',
  },
  {
    name: 'Business Services',
    description: 'Expert guidance and resources to help your business thrive.',
    content: 'Our Business Services provide entrepreneurs and business owners with the tools, knowledge, and support they need to succeed. From business planning and market research to mentorship and training programs, we offer comprehensive services designed to address the unique challenges faced by Chatham-Kent businesses.',
    importanceToCF: 'Business services are at the heart of what we do, allowing us to provide hands-on support and guidance to local entrepreneurs at every stage of their business journey.',
    importanceToCK: 'Strong, well-supported businesses create jobs, drive innovation, and contribute to a vibrant local economy that benefits all residents of Chatham-Kent.',
    economicImpact: 'By helping businesses grow and succeed, we contribute to job creation, increased local spending, and a more diversified and resilient local economy.',
    businessImportance: 'Access to expert business advice and resources can help businesses overcome challenges, identify opportunities, and achieve sustainable growth in today\'s competitive marketplace.',
    icon: Building2,
    color: 'from-green-50 to-white dark:from-green-900/20 dark:to-green-900/10',
    hoverColor: 'hover:from-green-100/80 hover:to-green-50/80 dark:hover:from-green-800/30 dark:hover:to-green-900/20',
    borderColor: 'border-green-200/80 dark:border-green-700/30',
    iconColor: 'text-white',
    iconBgColor: 'bg-green-500',
    link: '/services/business-support',
  },
  {
    name: 'Community Economic Development',
    description: 'Building a stronger, more resilient local economy together.',
    content: 'Our Community Economic Development initiatives focus on creating the conditions for sustainable economic growth throughout Chatham-Kent. We work with local stakeholders to identify opportunities, address challenges, and implement strategies that support business growth and community prosperity.',
    importanceToCF: 'Community economic development is central to our mandate, allowing us to address systemic challenges and create an environment where businesses can thrive.',
    importanceToCK: 'Targeted economic development efforts help create jobs, improve quality of life, and ensure that Chatham-Kent remains a great place to live, work, and do business.',
    economicImpact: 'By investing in community economic development, we help create a more diverse and resilient local economy that can adapt to changing circumstances and provide opportunities for all residents.',
    businessImportance: 'A strong local economy benefits all businesses by creating a larger customer base, attracting investment, and fostering a supportive business environment.',
    icon: Users,
    color: 'from-purple-50 to-white dark:from-purple-900/20 dark:to-purple-900/10',
    hoverColor: 'hover:from-purple-100/80 hover:to-purple-50/80 dark:hover:from-purple-800/30 dark:hover:to-purple-900/20',
    borderColor: 'border-purple-200/80 dark:border-purple-700/30',
    iconColor: 'text-white',
    iconBgColor: 'bg-purple-500',
    link: '/about/economic-development',
  },
  {
    name: 'Strategic Partnerships',
    description: 'Collaborating for greater impact in our community.',
    content: 'We believe in the power of partnerships to achieve meaningful change. Through strategic collaborations with government agencies, educational institutions, business organizations, and community groups, we leverage resources and expertise to maximize our collective impact on the Chatham-Kent economy.',
    importanceToCF: 'Strategic partnerships allow us to extend our reach, share resources, and implement more effective programs and initiatives than we could achieve alone.',
    importanceToCK: 'By working together with diverse stakeholders, we can address complex economic challenges and create more comprehensive solutions that benefit the entire community.',
    economicImpact: 'Collaborative efforts lead to more efficient use of resources, reduced duplication of services, and greater overall impact on the local economy.',
    businessImportance: 'Our partnerships create valuable connections and opportunities for local businesses, helping them access new markets, resources, and support services.',
    icon: Award,
    color: 'from-indigo-50 to-white dark:from-indigo-900/20 dark:to-indigo-900/10',
    hoverColor: 'hover:from-indigo-100/80 hover:to-indigo-50/80 dark:hover:from-indigo-800/30 dark:hover:to-indigo-900/20',
    borderColor: 'border-indigo-200/80 dark:border-indigo-700/30',
    iconColor: 'text-white',
    iconBgColor: 'bg-indigo-500',
    link: '/about/partners',
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

interface ValueType {
  name: string;
  description: string;
  content: string;
  importanceToCF: string;
  importanceToCK: string;
  economicImpact: string;
  businessImportance: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  iconColor: string;
  iconBgColor: string;
}

const WhoWeAre: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);
  const [selectedValue, setSelectedValue] = useState<ValueType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValueModalOpen, setIsValueModalOpen] = useState(false);

  const handleFeatureClick = (feature: typeof features[0]) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Delay to allow the modal close animation to complete before resetting the selected feature
    setTimeout(() => setSelectedFeature(null), 300);
  };

  const handleValueClick = (value: ValueType) => {
    setSelectedValue(value);
    setIsValueModalOpen(true);
  };

  const closeValueModal = () => {
    setIsValueModalOpen(false);
    // Delay to allow the modal close animation to complete before resetting the selected value
    setTimeout(() => setSelectedValue(null), 300);
  };

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
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        secondaryCtaText="Learn About Our Services"
        secondaryCtaLink="/services"
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
      
      {/* Core Pillars with Modal */}
      <section id="core-pillars" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 cursor-pointer",
                  "border bg-gradient-to-br",
                  feature.color,
                  feature.borderColor,
                  feature.hoverColor,
                  "hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/10 dark:hover:shadow-primary/20"
                )}
                onClick={() => handleFeatureClick(feature)}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={cn(
                      "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl",
                      "bg-white/90 dark:bg-primary-950/50 backdrop-blur-sm",
                      "shadow-sm border border-white/80 dark:border-primary-800/50",
                      "group-hover:bg-white/100 dark:group-hover:bg-primary-900/70 transition-colors"
                    )}>
                      <div className={cn(
                        "h-10 w-10 rounded-lg flex items-center justify-center",
                        feature.iconBgColor || "bg-primary-100 dark:bg-primary-900/50"
                      )}>
                        <feature.icon 
                          className={cn("h-5 w-5", feature.iconColor || "text-primary-600 dark:text-primary-400")} 
                          aria-hidden="true" 
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {feature.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <button
                      className={cn(
                        "inline-flex items-center text-sm font-medium transition-colors",
                        "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                        "group-hover:underline underline-offset-4"
                      )}
                      aria-label={`Learn more about ${feature.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFeatureClick(feature);
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Who We Are Modal */}
          {selectedFeature && (
            <WhoWeAreModal
              isOpen={isModalOpen}
              onClose={closeModal}
              title={selectedFeature.name}
              description={selectedFeature.description}
              content={selectedFeature.content}
              importanceToCF={selectedFeature.importanceToCF}
              importanceToCK={selectedFeature.importanceToCK}
              economicImpact={selectedFeature.economicImpact}
              businessImportance={selectedFeature.businessImportance}
              icon={selectedFeature.icon}
              iconColor={selectedFeature.iconColor}
            />
          )}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Guiding principles that shape everything we do at Community Futures Chatham-Kent.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Integrity',
                description: 'We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.',
                content: 'Integrity is the foundation of our organization. We believe in doing what is right, even when no one is watching. Our commitment to integrity ensures that we build trust with our clients, partners, and community members through transparent and ethical practices.',
                importanceToCF: 'Integrity is essential to maintaining the trust of our stakeholders and ensuring the long-term success of our organization.',
                importanceToCK: 'A community built on integrity fosters trust and cooperation among its members, leading to stronger relationships and better outcomes for all.',
                economicImpact: 'Businesses that operate with integrity attract loyal customers, dedicated employees, and reliable partners, contributing to a thriving local economy.',
                businessImportance: 'Understanding the importance of integrity helps businesses build strong reputations and lasting relationships with their customers and communities.',
                icon: ShieldCheck,
                color: 'from-blue-50 to-white dark:from-blue-900/20 dark:to-blue-900/10',
                borderColor: 'border-blue-200/80 dark:border-blue-700/30',
                iconColor: 'text-blue-600 dark:text-blue-400',
                iconBgColor: 'bg-blue-100 dark:bg-blue-900/30'
              },
              {
                name: 'Innovation',
                description: 'We embrace creativity and forward-thinking to develop effective solutions for our community.',
                content: 'Innovation drives progress and helps us find new and better ways to serve our community. We encourage creative thinking and are always looking for innovative approaches to address challenges and seize opportunities.',
                importanceToCF: 'Innovation allows us to stay relevant and effective in a rapidly changing world, ensuring we can meet the evolving needs of our community.',
                importanceToCK: 'A culture of innovation helps Chatham-Kent remain competitive and attractive to businesses, talent, and investment.',
                economicImpact: 'Innovative businesses drive economic growth by creating new products, services, and markets, leading to job creation and increased prosperity.',
                businessImportance: 'Embracing innovation helps businesses stay competitive, adapt to change, and capitalize on new opportunities in the marketplace.',
                icon: Lightbulb,
                color: 'from-amber-50 to-white dark:from-amber-900/20 dark:to-amber-900/10',
                borderColor: 'border-amber-200/80 dark:border-amber-700/30',
                iconColor: 'text-amber-600 dark:text-amber-400',
                iconBgColor: 'bg-amber-100 dark:bg-amber-900/30'
              },
              {
                name: 'Collaboration',
                description: 'We believe in the power of partnerships and working together to achieve common goals.',
                content: 'Collaboration is at the heart of everything we do. By working together with community partners, businesses, and stakeholders, we can achieve more than we could alone. We value diverse perspectives and believe that collective action leads to better outcomes.',
                importanceToCF: 'Collaboration allows us to leverage the strengths and resources of our partners to maximize our impact in the community.',
                importanceToCK: 'Strong partnerships create a more connected and resilient community where everyone has the opportunity to succeed.',
                economicImpact: 'Collaborative efforts lead to more efficient use of resources, reduced duplication of services, and greater overall impact on the local economy.',
                businessImportance: 'Businesses that collaborate with others can access new markets, share resources, and create more value for their customers and community.',
                icon: Users,
                color: 'from-green-50 to-white dark:from-green-900/20 dark:to-green-900/10',
                borderColor: 'border-green-200/80 dark:border-green-700/30',
                iconColor: 'text-green-600 dark:text-green-400',
                iconBgColor: 'bg-green-100 dark:bg-green-900/30'
              },
              {
                name: 'Community Commitment',
                description: 'We are dedicated to the economic success and well-being of Chatham-Kent and its residents.',
                content: 'Our commitment to the Chatham-Kent community runs deep. We are invested in the success of our local businesses and the well-being of all residents. Through our programs and services, we work to create opportunities, support growth, and build a brighter future for everyone in our community.',
                importanceToCF: 'Our commitment to the community is at the core of our mission and guides all of our decisions and actions.',
                importanceToCK: 'A strong, supportive community provides the foundation for individual and collective success, creating a better quality of life for all residents.',
                economicImpact: 'When communities thrive, businesses thrive. A strong local economy benefits everyone by creating jobs, supporting families, and generating tax revenue for important public services.',
                businessImportance: 'Businesses that are committed to their communities build strong relationships with customers, attract and retain top talent, and contribute to the overall health of the local economy.',
                icon: HeartHandshake,
                color: 'from-purple-50 to-white dark:from-purple-900/20 dark:to-purple-900/10',
                borderColor: 'border-purple-200/80 dark:border-purple-700/30',
                iconColor: 'text-purple-600 dark:text-purple-400',
                iconBgColor: 'bg-purple-100 dark:bg-purple-900/30'
              }
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-8 transition-all duration-300",
                  "border bg-gradient-to-br",
                  value.color,
                  value.borderColor,
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={cn(
                      "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl",
                      "bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm",
                      "shadow-sm border border-white/80 dark:border-gray-700/50",
                      "group-hover:bg-white/100 dark:group-hover:bg-gray-800/70 transition-colors"
                    )}>
                      <div className={cn("p-3 rounded-xl", value.iconBgColor)}>
                        <value.icon className={cn("h-6 w-6", value.iconColor)} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {value.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                    {value.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      className={cn(
                        "inline-flex items-center text-sm font-medium transition-colors",
                        "text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300",
                        "group-hover:underline underline-offset-4"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleValueClick(value);
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Modal */}
      {selectedValue && (
        <WhoWeAreModal
          isOpen={isValueModalOpen}
          onClose={closeValueModal}
          title={selectedValue.name}
          description={selectedValue.description}
          content={selectedValue.content}
          importanceToCF={selectedValue.importanceToCF}
          importanceToCK={selectedValue.importanceToCK}
          economicImpact={selectedValue.economicImpact}
          businessImportance={selectedValue.businessImportance}
          icon={selectedValue.icon}
          iconColor={selectedValue.iconColor}
        />
      )}

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