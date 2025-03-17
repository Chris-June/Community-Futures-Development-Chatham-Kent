import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, ChevronLeft, ChevronRight, Rocket, Globe, Heart } from 'lucide-react';
import ParallaxHero from '../../components/ParallaxHero';
import { successStories } from '../../data/successStories';
import AnimatedCounter from '../../components/AnimatedCounter';
import LogoCarousel from '../../components/LogoCarousel';

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
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
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
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-primary-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[#ff80b5] via-[#9089fc] to-[#80b5ff] opacity-30 blur-3xl"
            />
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Business Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join the community of successful entrepreneurs we've helped in Chatham-Kent.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/about/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
            <a href="/resources" className="text-sm font-semibold leading-6 text-white">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}