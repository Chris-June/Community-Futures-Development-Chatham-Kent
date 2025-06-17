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
    <div className="w-full bg-gradient-to-b from-primary-900 to-primary-50 dark:from-primary-950 dark:to-gray-900">
      <div className="w-full">
        <div className="w-full py-12 px-6 lg:px-8 bg-gradient-to-b from-primary-900 to-primary-50 dark:from-primary-950 dark:to-gray-900">
          <div className="mx-auto max-w-7xl">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-4xl">
              Businesses We've Supported
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-800 dark:text-primary-200">
              Meet some of the local entrepreneurs who have partnered with us to achieve their business goals.
            </p>
          </div>
        </div>

        <div className="relative w-full bg-white dark:bg-gray-900 py-12">
          <div className="relative w-full overflow-hidden">
            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3 px-6 lg:px-12 max-w-7xl mx-auto">
              {currentBusinesses.map((business) => (
                <motion.div
                  key={business.name}
                  className="group relative flex flex-col items-center rounded-2xl bg-white/80 dark:bg-gray-800/50 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-32 w-full flex items-center justify-center bg-white dark:bg-gray-800 p-4 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-gray-700/50 transition-colors">
                    <img
                      src={business.logo}
                      alt={`${business.name} logo`}
                      className="max-h-20 w-auto max-w-full object-contain"
                      loading="lazy"
                      width="160"
                      height="80"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-primary-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                    {business.name}
                  </h3>
                  <p className="text-base leading-7 text-primary-800 dark:text-primary-200">
                    {business.industry}
                  </p>
                  <p className="text-sm leading-6 text-primary-600 dark:text-primary-400">
                    Since {business.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="relative w-full">
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-primary-700 dark:text-primary-300 shadow-lg ring-1 ring-primary-200 dark:ring-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-100 dark:focus:ring-offset-gray-900"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-primary-700 dark:text-primary-300 shadow-lg ring-1 ring-primary-200 dark:ring-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-100 dark:focus:ring-offset-gray-900"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentPage(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentPage 
                    ? 'bg-primary-700 dark:bg-primary-400 w-8' 
                    : 'bg-primary-300 dark:bg-primary-700 hover:bg-primary-500 dark:hover:bg-primary-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentPage ? 'step' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}