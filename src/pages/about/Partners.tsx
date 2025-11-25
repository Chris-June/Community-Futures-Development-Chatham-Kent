import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, ChevronLeft, ChevronRight, Globe, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { communityPartners } from '../../data/communityPartners';
import PartnerModal from '../../components/modals/PartnerModal';
import ParallaxHero from '../../components/ParallaxHero';
import EngagementCTA from '../../components/EngagementCTA';
import type { CommunityPartner } from '../../types';

const PARTNERS_PER_PAGE = 4;

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
}

const ContactInfo = ({ icon: Icon, text }: ContactInfoProps) => (
  <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
    <Icon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" />
    <span>{text}</span>
  </div>
);

export default function Partners() {
  const navigate = useNavigate();
  const [selectedPartner, setSelectedPartner] = useState<CommunityPartner | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(communityPartners.length / PARTNERS_PER_PAGE);

  const currentPartners = communityPartners.slice(
    currentPage * PARTNERS_PER_PAGE,
    (currentPage + 1) * PARTNERS_PER_PAGE
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95">
      <ParallaxHero
        title="Community Partners"
        description="We work closely with local organizations to create a strong support network for businesses in Chatham-Kent. Our partnerships enhance the resources and opportunities available to entrepreneurs in our community."
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
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
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-4 backdrop-blur-sm">
              Strategic Alliances
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Valued Community Partners
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Collaborating with local organizations to strengthen Chatham-Kent's business ecosystem.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto grid max-w-4xl grid-cols-1 gap-8"
          >
            {currentPartners.map((partner, index) => (
              <motion.li
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Glassmorphism Card Background */}
                <div className="absolute inset-0 rounded-3xl bg-card/70 dark:bg-card/60 backdrop-blur-md border border-border/60 dark:border-border/40 shadow-lg group-hover:shadow-xl group-hover:bg-card/90 dark:group-hover:bg-card/70 transition-all duration-300" />
                <div
                  onClick={() => setSelectedPartner(partner)}
                  className="relative z-10 p-6 lg:p-8 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative h-24 w-24 rounded-lg bg-card dark:bg-card p-2 border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {partner.name}
                          </h3>
                          <p className="text-base font-medium text-primary-600 dark:text-primary-400 mt-1">
                            {partner.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium px-3 py-1 rounded-full">
                          <Building2 className="h-4 w-4" />
                          <span>{partner.partnership.type} since {partner.partnership.startYear}</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-4">
                        <p className="text-muted-foreground">
                          {partner.description}
                        </p>
                        <p className="text-muted-foreground">
                          {partner.partnership.description}
                        </p>
                      </div>

                      {partner.contactInfo && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {partner.contactInfo.address && (
                              <ContactInfo icon={MapPin} text={partner.contactInfo.address} />
                            )}
                            {partner.contactInfo.phone && (
                              <ContactInfo icon={Phone} text={partner.contactInfo.phone} />
                            )}
                            {partner.contactInfo.email && (
                              <ContactInfo icon={Mail} text={partner.contactInfo.email} />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 px-6 py-4 bg-card/30 dark:bg-card/30 backdrop-blur-sm border-t border-border/50 dark:border-border/40">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Visit Website
                    </a>
                    <button
                      onClick={() => setSelectedPartner(partner)}
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
          {/* Pagination Controls */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="inline-flex items-center px-4 py-2 border border-border dark:border-primary-700 rounded-md shadow-sm text-sm font-medium text-foreground bg-card dark:bg-primary-900/50 hover:bg-muted dark:hover:bg-primary-900/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5 mr-2" aria-hidden="true" />
              Previous
            </button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="inline-flex items-center px-4 py-2 border border-border dark:border-primary-700 rounded-md shadow-sm text-sm font-medium text-foreground bg-card dark:bg-primary-900/50 hover:bg-muted dark:hover:bg-primary-900/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-sm"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground">Become a Partner</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Interested in partnering with us to support local businesses in Chatham-Kent?
            </p>
            <a
              href="/about/contact"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Contact Us About Partnership
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {selectedPartner && (
        <PartnerModal
          partner={selectedPartner}
          isOpen={true}
          onClose={() => setSelectedPartner(null)}
        />
      )}

      <EngagementCTA
        title="Strengthening Our Community Together"
        subtitle="Join us in building a stronger, more prosperous Chatham-Kent through strategic partnerships and collaborative initiatives."
        primaryButtonText="Partner With Us"
        secondaryButtonText="Contact Our Team"
        onPrimaryClick={() => navigate('/about/contact?interest=partnership')}
        onSecondaryClick={() => navigate('/about/contact')}
        variant="inverted"
      />
    </div>
  );
}
