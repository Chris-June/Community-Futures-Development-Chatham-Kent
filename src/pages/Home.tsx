import { useNavigate } from 'react-router-dom';
import ServiceCards from '../components/ServiceCards';
import ParallaxHero from '../components/ParallaxHero';
import TestimonialCarousel from '../components/TestimonialCarousel';
// import NewsletterSignup from '../components/NewsletterSignup'; to be implemented in future
import EngagementCTA from '../components/EngagementCTA';
import { motion } from 'framer-motion';
import { Building2, Users, LineChart } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  {
    value: "500+",
    label: "Businesses Served",
    description: "Supporting local entrepreneurs",
    icon: Building2
  },
  {
    value: "2500+",
    label: "Jobs Created",
    description: "Growing our community",
    icon: Users
  },
  {
    value: "$25M+",
    label: "In Loans Provided",
    description: "Investing in success",
    icon: LineChart
  }
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div className="w-full bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-primary-950">
      <ParallaxHero
        title="Empowering Business Growth in Chatham-Kent"
        description="Supporting local entrepreneurs with business loans, expert counselling, and resources to help your business thrive in our community."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Impact Stats */}
      <div className="w-full py-24 bg-gradient-to-b from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-primary-50 mb-4">
              Our Impact
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Building a Stronger Community
            </h2>
            <p className="mt-4 text-xl leading-8 text-primary-100 max-w-3xl mx-auto">
              Making a real difference in Chatham-Kent through business support and economic development.
            </p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.4, 0, 0.2, 1],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex justify-center">
                      <span className="inline-flex rounded-xl bg-gradient-to-br from-white to-primary-100 p-3.5 text-primary-600 shadow-lg shadow-primary-500/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/30 group-hover:scale-105">
                        <stat.icon className="h-7 w-7" />
                      </span>
                    </div>
                    <span className="text-lg font-medium text-primary-50">{stat.label}</span>
                  </dt>
                  <dd className="order-first text-5xl font-bold tracking-tight text-white mt-4 font-heading">
                    <AnimatedCounter
                      end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                      suffix={stat.value.includes('+') ? '+' : ''}
                      prefix={stat.value.includes('$') ? '$' : ''}
                    />
                  </dd>
                  <dd className="mt-3 text-base text-primary-100/90">{stat.description}</dd>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ServiceCards />

      <TestimonialCarousel />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <EngagementCTA 
          title="Ready to Grow Your Business?"
          subtitle="Join the community of successful Chatham-Kent businesses that started with an idea and grew with our support."
          primaryButtonText="Apply Now"
          secondaryButtonText="Learn More"
          onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
          onSecondaryClick={() => navigate('/learn-more')}
          className="bg-gradient-to-r from-primary-600 to-primary-700"
        />
      </motion.div>

      {/* Newsletter Signup for future implementation*/}
      {/* <NewsletterSignup 
        title="Stay Connected"
        description="Sign up for updates on business resources, funding opportunities, and events."
      /> */}
    </motion.div>
  );
}