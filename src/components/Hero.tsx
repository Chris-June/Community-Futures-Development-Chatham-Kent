import { ArrowRight, Briefcase, LineChart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Statistic } from '../types';

const stats: Statistic[] = [
  {
    value: "1000+",
    label: "Businesses Served",
    description: "Supporting local entrepreneurs"
  },
  {
    value: "2500+",
    label: "Jobs Created",
    description: "Growing our community"
  },
  {
    value: "$25M+",
    label: "In Loans Provided",
    description: "Investing in success"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div
                className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-4">
                    Community Futures Chatham-Kent
                  </span>
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                  variants={itemVariants}
                >
                  <span className="block">Empowering Business</span>{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600 dark:from-primary-400 dark:to-primary-200">
                    Growth in Chatham-Kent
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                  variants={itemVariants}
                >
                  Supporting local entrepreneurs with business loans, expert counselling, and resources
                  to help your business thrive in our community.
                </motion.p>
                <motion.div
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4"
                  variants={itemVariants}
                >
                  <div className="rounded-md shadow">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/start-business"
                      className="flex w-full items-center justify-center rounded-lg border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg shadow-primary/25"
                    >
                      Get Financing
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.a>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/about/contact"
                      className="flex w-full items-center justify-center rounded-lg border border-transparent bg-primary/10 px-8 py-3 text-base font-medium text-primary dark:text-primary-foreground hover:bg-primary/20 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Book Consultation
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-white dark:bg-card rounded-lg overflow-hidden">
                    <img
                      className="w-full"
                      src="/assets/images/hero-image.jpg"
                      alt="Business meeting"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div>
                        <p className="text-white font-semibold text-lg">Local Success Stories</p>
                        <p className="text-gray-200 text-sm">See how we've helped businesses like yours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-50 dark:bg-card/50 py-12 border-y border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-xl bg-white dark:bg-card px-6 py-6 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-md transition-all"
              >
                <dt>
                  <div className="absolute rounded-lg bg-primary/10 p-3">
                    {index === 0 ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : index === 1 ? (
                      <Users className="h-6 w-6 text-primary" />
                    ) : (
                      <LineChart className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline flex-col">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.description}
                  </p>
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}