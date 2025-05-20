import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SupportedBusiness {
  name: string;
  logo: string;
  industry: string;
  year: number;
}

const supportedBusinesses: SupportedBusiness[] = [
  {
    name: "Sarah's Bakery",
    logo: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Food & Beverage',
    year: 2020
  },
  {
    name: 'TechGrow Solutions',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Agricultural Technology',
    year: 2021
  },
  {
    name: 'Green Earth Landscaping',
    logo: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Landscaping',
    year: 2019
  },
  {
    name: 'The Churreria',
    logo: 'https://images.unsplash.com/photo-1579619002916-88cd4c81a70c?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Restaurant',
    year: 2022
  },
  {
    name: 'Tech Solutions Hub',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Technology',
    year: 2021
  },
  {
    name: 'Wellness Center',
    logo: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=200&h=80&q=80',
    industry: 'Healthcare',
    year: 2020
  }
];

const LOGOS_PER_PAGE = 3;

export default function LogoCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalPages = Math.ceil(supportedBusinesses.length / LOGOS_PER_PAGE);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const currentBusinesses = supportedBusinesses.slice(
    currentPage * LOGOS_PER_PAGE,
    (currentPage + 1) * LOGOS_PER_PAGE
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-400">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Businesses We've Supported
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Meet some of the local entrepreneurs who have partnered with us to achieve their business goals.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="relative overflow-hidden">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
              {currentBusinesses.map((business) => (
                <motion.div
                  key={business.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white p-4 flex items-center justify-center">
                    <img
                      src={business.logo}
                      alt={business.name}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{business.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{business.industry}</p>
                    <p className="text-sm text-primary-600">Supported since {business.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <button
              onClick={handlePrevious}
              className="rounded-full bg-white p-2 text-gray-600 shadow-lg hover:text-gray-900 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={handleNext}
              className="rounded-full bg-white p-2 text-gray-600 shadow-lg hover:text-gray-900 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentPage(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === currentPage ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}