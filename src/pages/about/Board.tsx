import { useState } from 'react';
import { Linkedin, Mail, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { boardMembers } from '../../data/boardMembers';
import BoardMemberModal from '../../components/modals/BoardMemberModal';
import ParallaxHero from '../../components/ParallaxHero';
import { useNavigate } from 'react-router-dom';
import EngagementCTA from '../../components/EngagementCTA';
import { BoardMember } from '../../types';

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />;
    case 'twitter':
      return <Twitter className="h-5 w-5" />;
    case 'email':
      return <Mail className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function Board() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-900">
      <ParallaxHero
        title="Board of Directors"
        description="Our board members bring diverse expertise and deep community connections to guide our organization's mission and strategic direction. Together, they ensure we maintain the highest standards of governance and community impact."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              Leadership
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet Our Board of Directors
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A dedicated group of professionals committed to driving economic growth and community development in Chatham-Kent.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {boardMembers.map((member, index) => (
              <motion.li
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer flex-grow"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        className="h-full w-full object-cover"
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-primary-600 dark:text-primary-400 mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {member.company}
                      </p>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-center justify-center space-x-4">
                    {member.socialLinks && Object.entries(member.socialLinks).map(([type, url]) => (
                      <a
                        key={type}
                        href={type === 'email' ? `mailto:${url}` : url}
                        className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        target={type === 'email' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s ${type}`}
                      >
                        <span className="sr-only">{type}</span>
                        <SocialIcon type={type} />
                      </a>
                    ))}
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="ml-auto flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                      aria-label={`View ${member.name}'s full profile`}
                    >
                      View profile <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      {selectedMember && (
        <BoardMemberModal
          member={selectedMember}
          isOpen={true}
          onClose={() => setSelectedMember(null)}
        />
      )}
      {/* CTA Section */}
      <EngagementCTA 
        title="Join Our Mission"
        subtitle="Interested in making a difference in Chatham-Kent? Learn how you can get involved with Community Futures Development Corporation."
        primaryButtonText="Contact Us"
        secondaryButtonText="Our Programs"
        onPrimaryClick={() => navigate('/contact')}
        onSecondaryClick={() => navigate('/programs')}
        className="mt-0"
        variant="inverted"
      />
    </div>
  );
}