import { X, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { CommunityPartner } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface PartnerModalProps {
  partner: CommunityPartner;
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ partner, isOpen, onClose }: PartnerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" 
            onClick={onClose}
            role="presentation"
            aria-label="Close modal"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-16 sm:pt-20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="partner-title"
          >
            <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-1.5 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center md:items-start md:flex-row md:text-left gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative group">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-32 w-32 rounded-lg object-contain p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                        width={128}
                        height={128}
                      />
                      <div className="absolute inset-0 rounded-lg ring-2 ring-offset-2 ring-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <h2 id="partner-title" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {partner.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-primary dark:text-primary-400">
                      {partner.category}
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Partnership Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {partner.partnership.description}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Vision for Collaboration</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {partner.partnership.vision}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Impact</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {partner.partnership.impact}
                    </p>
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border-l-4 border-primary-400 dark:border-primary-500">
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-200">Future Goals</h3>
                    <p className="mt-2 text-primary-800 dark:text-primary-100">
                      {partner.partnership.futureGoals}
                    </p>
                  </div>

                  {partner.contactInfo && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                      {partner.contactInfo.address && (
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 mt-0.5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{partner.contactInfo.address}</span>
                        </div>
                      )}
                      {partner.contactInfo.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          <a 
                            href={`tel:${partner.contactInfo.phone.replace(/\D/g, '')}`}
                            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                          >
                            {partner.contactInfo.phone}
                          </a>
                        </div>
                      )}
                      {partner.contactInfo.email && (
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          <a 
                            href={`mailto:${partner.contactInfo.email}`}
                            className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                          >
                            {partner.contactInfo.email}
                          </a>
                        </div>
                      )}
                      {partner.website && (
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}