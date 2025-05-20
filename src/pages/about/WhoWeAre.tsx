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
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
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
      <div className="bg-white py-24 sm:py-32">
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
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <stat.icon className="h-8 w-8 flex-none text-primary-600" aria-hidden="true" />
                    {stat.label}
                  </dt>
                  <dd className="mt-4">
                    <p className="text-5xl font-semibold tracking-tight text-primary-600">
                      <AnimatedCounter
                        end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                        suffix={stat.value.includes('+') ? '+' : ''}
                        prefix={stat.value.includes('$') ? '$' : ''}
                      />
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">{stat.description}</p>
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
      <div className="mx-auto mt-16 mb-24 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl"
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Success Stories Carousel */}
      <Carousel />

      {/* CTA Section */}
      <EngagementCTA 
        title="Ready to Start Your Business Journey?"
        subtitle="Join the community of successful entrepreneurs we've helped in Chatham-Kent."
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => navigate('/about/contact')}
        onSecondaryClick={() => navigate('/resources')}
      />
    </div>
  );
}