import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Users2, Briefcase, Heart, Globe, Mail, ArrowRight, Phone } from 'lucide-react';
import ParallaxHero from '../../components/ParallaxHero';
import AnimatedCounter from '../../components/AnimatedCounter';
import EngagementCTA from '../../components/EngagementCTA';
import { staffMembers } from '../../data/staffMembers';


// Add phone property to staff members
const staffMembersWithPhone = staffMembers.map(member => ({
  ...member,
  phone: '' // Add empty phone number by default
}));

const StatsSection = () => {
  const stats = [
    {
      id: 'experience',
      name: 'Years of Experience',
      value: 25,
      suffix: '+',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-white',
      description: 'Combined experience supporting local businesses'
    },
    {
      id: 'businesses',
      name: 'Businesses Supported',
      value: 500,
      suffix: '+',
      icon: Users2,
      color: 'from-green-500 to-green-600',
      iconColor: 'text-white',
      description: 'Entrepreneurs and businesses we\'ve helped'
    },
    {
      id: 'jobs',
      name: 'Jobs Created',
      value: 1000,
      suffix: '+',
      icon: Briefcase,
      color: 'from-amber-500 to-amber-600',
      iconColor: 'text-white',
      description: 'Employment opportunities generated'
    },
    {
      id: 'impact',
      name: 'Community Impact',
      value: 25,
      prefix: '$',
      suffix: 'M+',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      iconColor: 'text-white',
      description: 'Invested in local economic development'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/30 rounded-full mb-4 backdrop-blur-sm">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building a Stronger Chatham-Kent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Through innovation, collaboration, and community focus, we're creating opportunities for businesses to thrive.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.05
              }
            }
          }}
          className="mt-10 rounded-3xl bg-card/80 dark:bg-card/70 backdrop-blur-xl border border-border/60 shadow-sm px-4 py-5 sm:px-6 sm:py-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col gap-1 rounded-2xl px-3 py-3 sm:px-4 sm:py-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br",
                      stat.color
                    )}
                  >
                    <stat.icon
                      className={cn("h-4 w-4", stat.iconColor)}
                      aria-hidden="true"
                    />
                  </span>
                  <span>{stat.name}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-semibold text-foreground">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Team() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Filter team members by role if tab is not 'all'
  const filteredMembers = (activeTab === 'all'
    ? staffMembersWithPhone
    : staffMembersWithPhone.filter(member => member.role.toLowerCase().includes(activeTab)));

  // Toggle expanded state for mobile view
  const toggleExpand = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95 transition-colors duration-200">
      <ParallaxHero
        title="Meet Our Team"
        description="Our dedicated professionals bring together decades of experience in business development, financial management, and community economic growth to support Chatham-Kent's entrepreneurs."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 md:py-3 md:text-base md:px-8 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Apply Here
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-full text-primary-700 bg-card hover:bg-muted md:py-3 md:text-base md:px-8 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Contact Our Team
          </a>
        </div>
      </ParallaxHero>

      <StatsSection />

      <section className="py-16 bg-gradient-to-b from-primary-50 to-background dark:from-primary-950 dark:to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/50 rounded-full mb-4 backdrop-blur-sm">
              Our Experts
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership & Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the passionate individuals dedicated to supporting Chatham-Kent's business community
            </p>
          </div>
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)] items-start">
            {/* Role Filter Tabs - vertical rail */}
            <div className="space-y-2">
              {['all', 'executive', 'advisor', 'support'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'w-full flex items-center justify-between rounded-xl border px-4 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-card shadow-sm border-primary-300 text-foreground'
                        : 'bg-card/80 hover:bg-card border-border text-muted-foreground'
                    )}
                    aria-label={`Filter by ${tab === 'all' ? 'all' : tab} roles`}
                  >
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                    <span
                      className={cn(
                        'ml-3 h-2 w-2 rounded-full',
                        isActive ? 'bg-primary-500' : 'bg-primary-300'
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* List-style profiles */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredMembers.map((person) => (
                  <motion.article
                    key={person.id}
                    id={`member-${person.id}`}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative flex flex-col sm:flex-row gap-4 rounded-3xl border border-border/60 bg-card/90 dark:bg-card/70 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 flex justify-center sm:items-start">
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-4 border-card dark:border-border shadow-md">
                        <img
                          src={person.image}
                          alt={`${person.name}, ${person.role}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground">
                            {person.name}
                          </h3>
                          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {person.role}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                          <a
                            href={`mailto:${person.email}`}
                            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-card transition-colors"
                            aria-label={`Email ${person.name}`}
                          >
                            <span className="sr-only">Email</span>
                            <Mail className="h-4 w-4" />
                          </a>
                          {person.phone && (
                            <a
                              href={`tel:${person.phone.replace(/\D/g, '')}`}
                              className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-card transition-colors"
                              aria-label={`Call ${person.name}`}
                            >
                              <span className="sr-only">Phone</span>
                              <Phone className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {person.bio}
                      </p>

                      <div
                        className={cn(
                          'mt-3 space-y-2 text-sm text-muted-foreground',
                          'transition-all duration-300 overflow-hidden',
                          expandedMember === person.id ? 'max-h-[600px]' : 'max-h-0'
                        )}
                        id={`member-content-${person.id}`}
                        aria-hidden={expandedMember !== person.id}
                      >
                        <div className="flex items-start gap-2">
                          <Briefcase className="h-4 w-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <p>{person.background}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users2 className="h-4 w-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <p>{person.roleImportance}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <p>{person.communityImpact}</p>
                        </div>
                        <div className="flex items-start gap-2 bg-muted rounded-lg p-2">
                          <Heart className="h-4 w-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <p className="italic">"{person.personalStatement}"</p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleExpand(person.id)}
                        className={cn(
                          'mt-2 inline-flex items-center text-sm font-medium',
                          'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
                          'transition-colors group'
                        )}
                        aria-expanded={expandedMember === person.id}
                        aria-controls={`member-content-${person.id}`}
                      >
                        {expandedMember === person.id ? 'Show less' : 'Read more'}
                        <ArrowRight
                          className={cn(
                            'ml-1 h-4 w-4 transition-transform',
                            expandedMember === person.id ? 'rotate-90' : ''
                          )}
                        />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <EngagementCTA
          title="Ready to Connect with Our Team?"
          subtitle="Whether you're starting a business, looking to grow, or need expert advice, our team is here to help you succeed."
          primaryButtonText="Contact Us"
          secondaryButtonText="View Services"
          onPrimaryClick={() => window.location.href = '/contact'}
          onSecondaryClick={() => window.location.href = '/services'}
          variant="hero"
        />
      </div>
    </div>
  );
}
