import { Star, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParallaxHero from '../../components/ParallaxHero';
import EngagementCTA from '../../components/EngagementCTA';
import { clientProfiles } from '../../data/clientProfiles';

import { LucideIcon } from 'lucide-react';

const MetaInfo = ({ icon: Icon, text }: { icon: LucideIcon; text: string }) => (
  <div className="flex items-center text-sm text-gray-500">
    <Icon className="h-4 w-4 mr-2 text-primary-600" />
    <span>{text}</span>
  </div>
);

export default function ClientProfiles() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <ParallaxHero
        title="Success Stories"
        description="Meet some of the local entrepreneurs who have partnered with us to achieve their business goals. These success stories showcase the diverse range of businesses we've helped grow in Chatham-Kent."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
          {clientProfiles.map((profile) => (
            <article key={profile.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 lg:ml-8">
                <img
                  src={profile.image}
                  alt={profile.businessName}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700">
                    {profile.industry}
                  </span>
                  <div className="flex gap-x-2.5 text-gray-500">
                    <MetaInfo icon={Calendar} text={`Est. ${profile.yearFounded}`} />
                    <MetaInfo icon={MapPin} text={profile.location} />
                  </div>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {profile.businessName}
                  </h3>
                  <p className="mt-2 text-sm text-primary-600">Owner: {profile.ownerName}</p>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    {profile.description}
                  </p>
                  <div className="mt-6 border-t border-gray-900/5 pt-6">
                    <div className="flex flex-col gap-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Challenge</h4>
                        <p className="mt-2 text-sm text-gray-500">{profile.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Solution</h4>
                        <p className="mt-2 text-sm text-gray-500">{profile.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Outcome</h4>
                        <p className="mt-2 text-sm text-gray-500">{profile.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        Testimonial
                      </p>
                      <p className="text-gray-600">"{profile.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <EngagementCTA 
          title="Ready to Start Your Success Story?"
          subtitle="Join our community of successful entrepreneurs and take your business to the next level with our expert support and resources."
          primaryButtonText="Get Started"
          secondaryButtonText="Contact Us"
          onPrimaryClick={() => navigate('/start-business')}
          onSecondaryClick={() => navigate('/about/contact')}
        />
      </div>
  );
}