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
    <motion.div className="w-full">
      <ParallaxHero
        title="Empowering Business Growth in Chatham-Kent"
        description="Supporting local entrepreneurs with business loans, expert counselling, and resources to help your business thrive in our community."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/start-business"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get Started
          </a>
          <a href="/about/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </ParallaxHero>
      
      {/* Impact Stats */}
      <div className="w-full py-12 bg-gradient-to-b from-gray-900 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Impact at a Glance
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Making a real difference in our community through business support and development.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative rounded-xl border-2 border-white/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 bg-transparent"
              >
                <dt className="text-sm font-semibold leading-6 text-white">
                  <div className="mb-4 flex justify-center">
                    <span className="inline-flex rounded-xl bg-white/20 p-3 text-white ring-4 ring-white/20">
                      <stat.icon className="h-6 w-6" />
                    </span>
                  </div>
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white mt-2">
                  <AnimatedCounter
                    end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                    suffix={stat.value.includes('+') ? '+' : ''}
                    prefix={stat.value.includes('$') ? '$' : ''}
                  />
                </dd>
                <dd className="mt-2 text-sm text-gray-500">{stat.description}</dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        <ServiceCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <TestimonialCarousel />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <EngagementCTA 
          title="Business Support for Chatham-Kent"
          subtitle="The next Chatham-Kent success story starts with your idea."
          primaryButtonText="Apply Here"
          secondaryButtonText="Learn More"
          onPrimaryClick={() => navigate('/start-business')}
          onSecondaryClick={() => navigate('/about/contact')}
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