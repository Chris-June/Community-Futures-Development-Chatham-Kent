import { useNavigate } from 'react-router-dom';
import ServiceCards from '../components/ServiceCards';
import ParallaxHero from '../components/ParallaxHero';
import TestimonialCarousel from '../components/TestimonialCarousel';
// import NewsletterSignup from '../components/NewsletterSignup'; to be implemented in future
import EngagementCTA from '../components/EngagementCTA';
import { motion } from 'framer-motion';
import { Building2, Users, LineChart } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import LogoMarquee from '../components/LogoMarquee/LogoMarquee';
import { approvedPartnerLogos } from '../data/approvedPartners';

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
    <motion.div className="w-full bg-gradient-to-b from-background via-primary-50 to-primary-100 dark:from-background dark:via-background/95 dark:to-background">
      <ParallaxHero
        title="Empowering Business Growth in Chatham-Kent"
        description="Supporting local entrepreneurs with business loans, expert counselling, and resources to help your business thrive in our community."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />
      {/* Approved Partners Marquee - prominent placement below hero */}
      <div className="relative z-10 -mt-8 mb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-3xl bg-card/70 dark:bg-card/60 backdrop-blur-md shadow-xl border border-border/50 dark:border-border/40 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                Trusted Service Providers
              </h2>
              <a
                href="/about/partners"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                View all
              </a>
            </div>
            <LogoMarquee
              logos={approvedPartnerLogos}
              speedSeconds={28}
              gap="2rem"
              // grayscale
              maskEdges
              pauseOnHover
              className="mx-auto"
              itemClassName="h-10 sm:h-12 md:h-14"
            />
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="w-full py-24 relative overflow-hidden">
        {/* Light background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-50 to-background dark:from-background dark:via-background dark:to-background -z-20" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-50 text-primary-700 mb-4 border border-primary-100">
              Our Impact
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
              Building a Stronger Community
            </h2>
            <p className="mt-4 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Making a real difference in Chatham-Kent through business support and economic development.
            </p>
          </motion.div>
          {/* Decorative offset glow behind stats card */}
          <div className="pointer-events-none absolute inset-x-8 sm:inset-x-16 lg:inset-x-24 -bottom-10 h-40 rounded-[3rem] bg-gradient-to-r from-primary-200/25 via-primary-100/10 to-primary-200/25 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-16 bg-card/95 dark:bg-card/10 rounded-[2rem] shadow-[0_24px_80px_rgba(15,118,110,0.18)] ring-1 ring-primary-100/80 dark:ring-white/20 overflow-hidden max-w-6xl mx-auto relative"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-primary-400 via-emerald-400 to-lime-300" />

            <div className="grid grid-cols-1 divide-y divide-primary-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-primary-100">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative px-8 py-10 flex flex-col items-center text-center bg-gradient-to-b from-card to-primary-50/60 dark:from-background dark:to-background/60 transition-transform duration-300 group-hover:translate-y-0 hover:-translate-y-1"
                >
                  <div className="mb-5 flex justify-center">
                    <span className="inline-flex rounded-2xl bg-primary-50 p-4 text-primary-700 shadow-md ring-1 ring-primary-100">
                      <stat.icon className="h-7 w-7" />
                    </span>
                  </div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
                    <AnimatedCounter
                      end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                      suffix={stat.value.includes('+') ? '+' : ''}
                      prefix={stat.value.includes('$') ? '$' : ''}
                    />
                  </dd>
                  <dd className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xs">
                    {stat.description}
                  </dd>
                </div>
              ))}
            </div>
          </motion.div>
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
          variant="hero"
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
