import { useState } from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
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
    <div className="bg-white">
      <ParallaxHero
        title="Board of Directors"
        description="Our board members bring diverse expertise and deep community connections to guide our organization's mission and strategic direction. Together, they ensure we maintain the highest standards of governance and community impact."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        {boardMembers.map((member) => (
          <li
            key={member.id}
            className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <img
              className="aspect-square w-48 mx-auto rounded-full object-cover mb-6"
              src={member.image}
              alt={member.name}
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                {member.name}
              </h3>
              <p className="text-base leading-7 text-primary-600 font-medium">{member.role}</p>
              <p className="text-sm leading-6 text-gray-600 mb-4">{member.company}</p>
              <p className="text-sm leading-6 text-gray-600 mb-6">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.socialLinks && Object.entries(member.socialLinks).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{type}</span>
                    <SocialIcon type={type} />
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedMember && (
        <BoardMemberModal
          member={selectedMember}
          isOpen={true}
          onClose={() => setSelectedMember(null)}
        />
      )}
      {/* CTA Section */}
      <EngagementCTA 
        title="Join Our Board"
        subtitle="Make a lasting impact on Chatham-Kent's economic future by joining our board of directors."
        primaryButtonText="Apply Here"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/learn-more')}
        className="mt-0"
      />
    </div>
  );
}