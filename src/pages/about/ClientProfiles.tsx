import { Star, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import EngagementCTA from '../../components/EngagementCTA';
import { clientProfiles } from '../../data/clientProfiles';
import { LucideIcon } from 'lucide-react';

const MetaInfo = ({ icon: Icon, text }: { icon: LucideIcon; text: string }) => (
  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
    <Icon className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
    <span>{text}</span>
  </div>
);

export default function ClientProfiles() {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900">
      <ParallaxHero
        title="Success Stories"
        description="Meet some of the local entrepreneurs who have partnered with us to achieve their business goals. These success stories showcase the diverse range of businesses we've helped grow in Chatham-Kent."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Real Stories, Real Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Discover how local entrepreneurs are building successful businesses with our support.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16">
            {clientProfiles.map((profile, index) => (
              <motion.article 
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative isolate flex flex-col gap-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700/50 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-1/3 lg:shrink-0">
                  <img
                    src={profile.image}
                    alt={profile.businessName}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 lg:p-8 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                      {profile.industry}
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      <MetaInfo icon={Calendar} text={`Est. ${profile.yearFounded}`} />
                      <MetaInfo icon={MapPin} text={profile.location} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {profile.businessName}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-primary-600 dark:text-primary-400">
                    Owner: {profile.ownerName}
                  </p>
                  
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {profile.description}
                  </p>
                  
                  <div className="mt-6 space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300">{profile.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300">{profile.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">Outcome</h4>
                      <p className="text-gray-600 dark:text-gray-300">{profile.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700/50">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Star className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Testimonial</div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">"{profile.testimonial}"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a
              href="/about/contact"
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Share Your Success Story
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      
      <EngagementCTA 
        title="Ready to Start Your Success Story?"
        subtitle="Join the growing community of successful entrepreneurs in Chatham-Kent. Our team is here to help you achieve your business goals."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/contact')}
        variant="inverted"
      />
    </div>
  );
}