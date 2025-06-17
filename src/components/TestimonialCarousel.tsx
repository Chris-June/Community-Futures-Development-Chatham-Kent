import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'SuccessStory1',
    name: "Name",
    business: "Padget Accounting",
    quote: "CFDC helped me turn my passion for accounting into a thriving business. Their guidance was invaluable.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 'SuccessStory2',
    name: "Name",
    business: "Smith Cycles",
    quote: "Community Futures Development Corporation helped me turn my passion for bicycles into a thriving business. Their guidance was invaluable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 'SuccessStory3',
    name: "Name",
    business: "Quo Vadis Pizza",
    quote: "Community Futures Development Corporation helped me turn my passion for pizza into a thriving business. Their guidance was invaluable.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Animation variants for the carousel
  const carouselVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Animation for the quote
  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-primary-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white font-heading">
            Success Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear from the entrepreneurs we've helped succeed in Chatham-Kent.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <AnimatePresence mode="wait" custom={1} initial={false}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
            >
              <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-10">
                <div className="absolute top-0 right-0 p-4 text-primary-500/10 dark:text-primary-400/10">
                  <Quote className="h-16 w-16 sm:h-20 sm:w-20" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md"
                        width={80}
                        height={80}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-primary-500 dark:bg-primary-400 p-1.5 rounded-full">
                        <Star className="h-4 w-4 text-white" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  
                  <motion.blockquote 
                    className="mt-8"
                    variants={quoteVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <footer className="mt-8">
                      <div className="text-base font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-primary-600 dark:text-primary-400">
                        {testimonials[currentIndex].business}
                      </div>
                    </footer>
                  </motion.blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>

          {/* Pagination Dots */}
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary-600 dark:bg-primary-400 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400/50 dark:hover:bg-primary-600/50'
                }`}
                aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                aria-current={currentIndex === index ? 'step' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}