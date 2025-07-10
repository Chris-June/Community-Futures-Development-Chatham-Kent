import {useState, useEffect} from 'react';
import {cn} from '../../lib/utils';
import {motion, AnimatePresence} from 'framer-motion';
import { Users2, Briefcase, Heart, Globe, Mail, ArrowRight, Phone} from 'lucide-react';
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Building a Stronger Chatham-Kent
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Through innovation, collaboration, and community focus, we're creating opportunities for businesses to thrive.
          </p>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className={cn(
                "bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6",
                "shadow-sm hover:shadow-md transition-all duration-300",
                "border border-gray-100 dark:border-gray-700/50"
              )}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl mb-4",
                    `bg-gradient-to-br ${stat.color} shadow-md`
                  )}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { 
                      type: 'spring',
                      stiffness: 400,
                      damping: 10
                    } 
                  }}
                >
                  <stat.icon 
                    className={cn(
                      "h-7 w-7 transition-transform duration-200 group-hover:scale-110",
                      stat.iconColor
                    )} 
                    aria-hidden="true" 
                  />
                </motion.div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix || ''} 
                    suffix={stat.suffix || ''} 
                  />
                </dd>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
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
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
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
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:py-3 md:text-base md:px-8 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Contact Our Team
          </a>
        </div>
      </ParallaxHero>
      
      <StatsSection />
      
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
              Our Experts
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Leadership & Team
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Meet the passionate individuals dedicated to supporting Chatham-Kent's business community
            </p>
          </div>
          
          {/* Role Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['all', 'executive', 'advisor', 'support'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-all',
                  activeTab === tab 
                    ? 'bg-primary-600 text-white shadow-sm' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800/50 hover:text-primary-700 dark:hover:text-primary-400'
                )}
                aria-label={`Filter by ${tab === 'all' ? 'all' : tab} roles`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredMembers.map((person) => (
                <motion.article
                  key={person.id}
                  id={`member-${person.id}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-800/50"
                >
                  <div className="relative pt-8 px-6">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent dark:from-primary-900/20" aria-hidden="true" />
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                      <img
                        src={person.image}
                        alt={`${person.name}, ${person.role}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        width={160}
                        height={160}
                      />
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 pt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {person.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {person.role}
                    </p>
                    
                    <div className="mt-4 flex justify-center space-x-5">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                        aria-label={`Email ${person.name}`}
                      >
                        <span className="sr-only">Email</span>
                        <Mail className="h-5 w-5" />
                      </a>
                      {person.phone && (
                        <a
                          href={`tel:${person.phone.replace(/\D/g, '')}`}
                          className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                          aria-label={`Call ${person.name}`}
                        >
                          <span className="sr-only">Phone</span>
                          <Phone className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    
                    <div className={cn(
                      'prose prose-sm text-gray-600 dark:text-gray-300 text-left mt-4',
                      'transition-all duration-300 overflow-hidden',
                      expandedMember === person.id ? 'max-h-[1000px]' : 'max-h-20 md:max-h-24'
                    )}>
                      <p className="line-clamp-3">{person.bio}</p>
                      
                      {/* Expanded content - only visible when expanded */}
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-3">
                          <Briefcase className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Background</h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{person.background}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Users2 className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Role & Responsibilities</h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{person.roleImportance}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Globe className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Community Impact</h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{person.communityImpact}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Heart className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Personal Note</h4>
                              <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-300">"{person.personalStatement}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleExpand(person.id)}
                      className={cn(
                        'mt-4 inline-flex items-center text-sm font-medium',
                        'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
                        'transition-colors group'
                      )}
                      aria-expanded={expandedMember === person.id}
                      aria-controls={`member-content-${person.id}`}
                    >
                      {expandedMember === person.id ? 'Show less' : 'Read more'}
                      <ArrowRight className={cn(
                        'ml-1 h-4 w-4 transition-transform',
                        expandedMember === person.id ? 'rotate-90' : ''
                      )} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
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
          className="text-white"
        />
      </div>
    </div>
  );
}