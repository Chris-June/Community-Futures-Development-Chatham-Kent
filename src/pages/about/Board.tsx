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
  const [activeMemberId, setActiveMemberId] = useState<string>(boardMembers[0]?.id ?? '');
  const navigate = useNavigate();

  const activeMember: BoardMember =
    boardMembers.find((member) => member.id === activeMemberId) ?? boardMembers[0];

  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95">
      <ParallaxHero
        title="Board of Directors"
        description="Our board members bring diverse expertise and deep community connections to guide our organization's mission and strategic direction. Together, they ensure we maintain the highest standards of governance and community impact."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />

      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-4 backdrop-blur-sm">
              Leadership
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Board of Directors
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A dedicated group of professionals committed to driving economic growth and community development in Chatham-Kent.
            </p>
          </div>
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)] items-start">
            {/* Left column: board member list */}
            <div className="space-y-2">
              {boardMembers.map((member, index) => {
                const isActive = member.id === activeMemberId;
                return (
                  <motion.button
                    key={member.id}
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setActiveMemberId(member.id)}
                    className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-card shadow-sm border-primary-300 text-foreground'
                        : 'bg-card/80 hover:bg-card border-border text-muted-foreground'
                    }`}
                    aria-label={`View summary for ${member.name}`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold truncate">{member.name}</span>
                      <span className="text-xs text-muted-foreground truncate">{member.role}</span>
                    </div>
                    <span
                      className={`ml-3 h-2 w-2 rounded-full ${
                        isActive ? 'bg-primary-500' : 'bg-primary-300'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Right column: large profile card */}
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex flex-col rounded-3xl overflow-hidden bg-card/95 dark:bg-card/70 border border-border/60 shadow-lg"
            >
              <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex justify-center lg:items-start">
                  <div className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-full overflow-hidden border-4 border-card dark:border-border shadow-lg">
                    <img
                      className="h-full w-full object-cover"
                      src={activeMember.image}
                      alt={activeMember.name}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 lg:opacity-0" />
                  </div>
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <h3 className="text-2xl font-semibold leading-8 tracking-tight text-foreground">
                    {activeMember.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {activeMember.role}
                  </p>
                  {activeMember.company && (
                    <p className="text-sm text-muted-foreground">
                      {activeMember.company}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {activeMember.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 items-center">
                    {activeMember.socialLinks &&
                      Object.entries(activeMember.socialLinks).map(([type, url]) => (
                        <a
                          key={type}
                          href={type === 'email' ? `mailto:${url}` : url}
                          className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-muted text-muted-foreground hover:text-primary-600 dark:hover:text-primary-400 hover:bg-card transition-colors"
                          target={type === 'email' ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          aria-label={`${activeMember.name}'s ${type}`}
                        >
                          <span className="sr-only">{type}</span>
                          <SocialIcon type={type} />
                        </a>
                      ))}
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedMember(activeMember)}
                      className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
                      aria-label={`View ${activeMember.name}'s full profile`}
                    >
                      View full profile <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
