import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';
import ParallaxHero from '../../components/ParallaxHero';
import { successStories } from '../../data/successStories';
import AnimatedCounter from '../../components/AnimatedCounter';
import LogoCarousel from '../../components/LogoCarousel';
import EngagementCTA from '../../components/EngagementCTA';

const features = [
  {
    name: 'Our Mission',
    description: 'Supporting local economic development by helping small businesses start, grow, and succeed.',
    icon: Target,
  },
  {
    name: 'Our Vision',
    description: 'To be the leading catalyst for sustainable economic growth in Chatham-Kent.',
    icon: Building2,
  },
  {
    name: 'Our Values',
    description: 'Integrity, innovation, collaboration, and commitment to community success.',
    icon: Award,
  },
  {
    name: 'Our Impact',
    description: 'Creating jobs, fostering entrepreneurship, and building a stronger local economy.',
    icon: Users,
  },
];

const impactStats = [
  {
    value: '500+',
    label: 'Businesses Supported',
    description: 'Since our establishment',
    icon: Building2
  },
  {
    value: '$25M+',
    label: 'In Funding Provided',
    description: 'Helping businesses grow',
    icon: Rocket
  },
  {
    value: '1000+',
    label: 'Jobs Created',
    description: 'In our community',
    icon: Users
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how we've helped local businesses thrive in Chatham-Kent.
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0">
              <img
                src={successStories[currentIndex].image}
                alt={successStories[currentIndex].businessName}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {successStories[currentIndex].businessName}
              </h3>
              <p className="text-gray-200">
                {successStories[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition hover:bg-white/50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Pagination */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WhoWeAre() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ParallaxHero
        title="Who We Are"
        description="Community Futures Development Corporation of Chatham-Kent is a community-based, non-profit organization that provides business support services to help entrepreneurs succeed."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Impact Stats */}
      <div className="bg-gradient-to-b from-white to-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making a Difference in Chatham-Kent
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Through our commitment to local economic development, we've helped create lasting positive change in our community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {impactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <stat.icon className="h-8 w-8 flex-none text-white" aria-hidden="true" />
                    {stat.label}
                  </dt>
                  <dd className="mt-4">
                    <p className="text-5xl font-semibold tracking-tight text-white">
                      <AnimatedCounter
                        end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                        suffix={stat.value.includes('+') ? '+' : ''}
                        prefix={stat.value.includes('$') ? '$' : ''}
                      />
                    </p>
                    <p className="mt-4 text-base leading-7 text-white">{stat.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Grid */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Pillars
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Building a stronger Chatham-Kent through innovation, collaboration, and community focus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-transparent p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-200/20 to-primary-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white shadow-sm ring-1 ring-white/20">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.name}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    <span>Learn more</span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Carousel */}
      <Carousel />

      {/* CTA Section - No extra spacing */}
      <EngagementCTA 
        title="Join Our Community"
        subtitle="Be part of Chatham-Kent's economic success story. Whether you're starting a business or looking to grow, we're here to help."
        primaryButtonText="Apply Here"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/learn-more')}
        className="mt-0"
      />
    </div>
  );
}