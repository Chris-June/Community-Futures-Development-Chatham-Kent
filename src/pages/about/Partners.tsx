import { useState } from 'react';
import { Building2, ChevronLeft, ChevronRight, Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { communityPartners } from '../../data/communityPartners';
import PartnerModal from '../../components/modals/PartnerModal';
import ParallaxHero from '../../components/ParallaxHero';
import type { CommunityPartner } from '../../types';

const PARTNERS_PER_PAGE = 4;

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
}

const ContactInfo = ({ icon: Icon, text }: ContactInfoProps) => (
  <div className="flex items-center gap-x-2 text-sm text-gray-500">
    <Icon className="h-5 w-5 flex-none text-gray-400" />
    <span>{text}</span>
  </div>
);

export default function Partners() {
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
    <div className="bg-white py-24 sm:py-32">
      <ParallaxHero
        title="Community Partners"
        description="We work closely with local organizations to create a strong support network for businesses in Chatham-Kent. Our partnerships enhance the resources and opportunities available to entrepreneurs in our community."
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {currentPartners.map((partner) => (
              <div
                onClick={() => setSelectedPartner(partner)}
                key={partner.id}
                className="relative isolate flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-x-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {partner.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">{partner.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <Building2 className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-gray-900">
                    {partner.partnership.type} since {partner.partnership.startYear}
                  </span>
                </div>
                <div className="text-sm leading-6 text-gray-600">
                  <p className="mb-4">{partner.description}</p>
                  <p>{partner.partnership.description}</p>
                </div>
                {partner.contactInfo && (
                  <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
                    <ContactInfo icon={MapPin} text={partner.contactInfo.address} />
                    <ContactInfo icon={Phone} text={partner.contactInfo.phone} />
                    <ContactInfo icon={Mail} text={partner.contactInfo.email} />
                  </div>
                )}
                <div className="mt-2">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div className="mt-12 flex items-center justify-center gap-x-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-700">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        {selectedPartner && (
          <PartnerModal
            partner={selectedPartner}
            isOpen={true}
            onClose={() => setSelectedPartner(null)}
          />
        )}
      </div>
    </div>
  );
}
