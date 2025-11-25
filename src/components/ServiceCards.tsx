import { Briefcase, FileText, LineChart, ArrowRight } from 'lucide-react';
import { ServiceCard } from '../types';
import { motion } from 'framer-motion';

const services: ServiceCard[] = [
  {
    title: "Business Loans",
    description: "Access flexible financing options tailored to your business needs, with competitive rates and personalized support.",
    icon: "Briefcase",
    link: "/start-business"
  },
  {
    title: "Business Counselling",
    description: "Get expert guidance from our experienced advisors to help your business grow and overcome challenges.",
    icon: "FileText",
    link: "/counselling"
  },
  {
    title: "Economic Development",
    description: "Partner with us to strengthen the local economy through innovative programs and community initiatives.",
    icon: "LineChart",
    link: "/about/who-we-are"
  }
];

export default function ServiceCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="h-7 w-7" />;
      case 'FileText':
        return <FileText className="h-7 w-7" />;
      case 'LineChart':
        return <LineChart className="h-7 w-7" />;
      default:
        return <Briefcase className="h-7 w-7" />;
    }
  };

  return (
    <div className="w-full py-24 bg-gradient-to-b from-primary-50 to-background dark:from-primary-950 dark:to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comprehensive support for your business journey in Chatham-Kent
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Soft glow behind services row */}
          <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 lg:inset-x-16 -top-4 bottom-0 rounded-[3rem] bg-gradient-to-r from-primary-200/20 via-primary-100/10 to-primary-200/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-10 items-start">
            {/* Stacked service cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-3xl bg-card/80 dark:bg-card/70 p-6 sm:p-7 shadow-[0_14px_40px_rgba(15,118,110,0.16)] ring-1 ring-primary-100/80 dark:ring-border/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,118,110,0.24)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  {/* Glassmorphism Card Background */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-50/80 via-card to-transparent dark:from-primary-900/40 dark:via-primary-900/20 dark:to-primary-900/5 opacity-80" />

                  {/* Content */}
                  <div className="relative z-10 flex gap-4">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md ring-2 ring-primary-100/80 dark:ring-primary-700/70">
                      {getIcon(service.icon)}
                    </div>

                    <div className="flex flex-col h-full">
                      <h3 className="text-lg font-bold text-foreground mb-1.5">
                        <a
                          href={service.link}
                          className="focus:outline-none"
                        >
                          <span className="absolute inset-0" aria-hidden="true" />
                          {service.title}
                        </a>
                      </h3>

                      <p className="text-muted-foreground leading-relaxed flex-grow text-sm sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-primary-100/70 dark:border-border flex items-center justify-between">
                        <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200 transition-colors">
                          Learn more
                          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <span className="hidden sm:inline-flex rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                          Service
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right-hand content panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl bg-card/90 dark:bg-card/70 p-8 sm:p-10 shadow-[0_18px_60px_rgba(15,118,110,0.18)] ring-1 ring-primary-100/80 dark:ring-border flex flex-col gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                  Support at Every Stage
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Whether you are just exploring an idea, ready to launch, or looking to scale, our team can help you plan next steps, access funding, and connect with the right partners across Chatham-Kent.
                </p>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>Book a one-on-one conversation with a business advisor.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>Explore loan options tailored to your stage and sector.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>Connect with community partners and local programs that complement our services.</span>
                </li>
              </ul>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="/counselling"
                  className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-700 transition-colors"
                >
                  Talk to an advisor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/learn-more"
                  className="inline-flex items-center rounded-full border border-primary-200 bg-card px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition-colors"
                >
                  View loan details
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
