import { Users2, Briefcase, Heart, Globe, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import AnimatedCounter from '../../components/AnimatedCounter';
import EngagementCTA from '../../components/EngagementCTA';
import { staffMembers } from '../../data/staffMembers';

const StatsSection = () => (
  <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by Local Businesses
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Our experienced team has helped hundreds of entrepreneurs achieve their business goals
        </p>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-gray-400/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-600">Years of Experience</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
            <AnimatedCounter end={25} suffix="+" />
          </dd>
        </div>
        <div className="flex flex-col bg-gray-400/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-600">Businesses Supported</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
            <AnimatedCounter end={500} suffix="+" />
          </dd>
        </div>
        <div className="flex flex-col bg-gray-400/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-600">Jobs Created</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
            <AnimatedCounter end={1000} suffix="+" />
          </dd>
        </div>
        <div className="flex flex-col bg-gray-400/5 p-8">
          <dt className="text-sm font-semibold leading-6 text-gray-600">Community Impact</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
            <AnimatedCounter end={25} prefix="$" suffix="M+" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default function Team() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white">
      <ParallaxHero
        title="Our Team"
        description="Meet the dedicated professionals who work every day to support and grow businesses in Chatham-Kent. Our team brings together expertise in business development, financial management, and community economic growth."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      <StatsSection />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-20 grid max-w-2xl gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none">
          {staffMembers.map((person) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative isolate flex flex-col gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-40 h-40 mx-auto md:mx-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-gray-100"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
                      <p className="text-lg font-medium text-primary-600">{person.role}</p>
                    </div>
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {person.email}
                    </a>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{person.bio}</p>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Background</h4>
                        <p className="mt-2 text-sm text-gray-600">{person.background}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Role & Responsibilities</h4>
                        <p className="mt-2 text-sm text-gray-600">{person.roleImportance}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Community Impact</h4>
                        <p className="mt-2 text-sm text-gray-600">{person.communityImpact}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">Personal Statement</h4>
                        <p className="mt-2 text-sm text-gray-600 italic">"{person.personalStatement}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      
      <EngagementCTA 
        title="Join Our Team"
        subtitle="We're always looking for talented individuals who are passionate about supporting local businesses."
        primaryButtonText="Apply Here"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/learn-more')}
        className="mt-0"
      />
    </div>
  );
}