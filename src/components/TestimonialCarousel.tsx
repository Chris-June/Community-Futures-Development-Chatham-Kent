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
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  };

  // Animation for the quote
  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
  };

  return (
    <div className="w-full py-24 bg-gradient-to-b from-white to-primary-50 dark:from-background dark:to-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/50 to-transparent dark:from-primary-900/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white font-heading">
            Success Stories from Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear from the entrepreneurs we've helped succeed in Chatham-Kent.
          </p>
        </motion.div>

        <div className="relative mt-20">
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
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/60 dark:bg-primary-900/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/50 dark:border-white/10">
                <div className="absolute top-0 right-0 p-6 sm:p-8 text-primary-500/20 dark:text-primary-400/10">
                  <Quote className="h-24 w-24 sm:h-32 sm:w-32 rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover border-4 border-white dark:border-primary-800 shadow-lg"
                          width={112}
                          height={112}
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary-500 dark:bg-primary-400 p-2 rounded-full shadow-md border-2 border-white dark:border-primary-800">
                          <Star className="h-4 w-4 text-white" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <motion.blockquote
                        variants={quoteVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed italic">
                          "{testimonials[currentIndex].quote}"
                        </p>
                        <footer className="mt-6">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-base text-primary-600 dark:text-primary-400 font-medium">
                            {testimonials[currentIndex].business}
                          </div>
                        </footer>
                      </motion.blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center pointer-events-none px-2 sm:px-0 max-w-5xl mx-auto">
            <button
              type="button"
              onClick={handlePrevious}
              className="pointer-events-auto p-3 bg-white/80 dark:bg-primary-900/80 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 shadow-lg rounded-full transition-all border border-white/50 dark:border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto p-3 bg-white/80 dark:bg-primary-900/80 backdrop-blur-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 shadow-lg rounded-full transition-all border border-white/50 dark:border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                  ? 'bg-primary-600 dark:bg-primary-400 w-8'
                  : 'bg-gray-300 dark:bg-primary-800 hover:bg-primary-400/50 dark:hover:bg-primary-600/50 w-2.5'
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