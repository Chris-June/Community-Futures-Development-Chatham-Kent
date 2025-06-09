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
          <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8"
          >
            <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-32 w-32 rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{partner.name}</h2>
                    <p className="mt-1 text-lg font-medium text-primary-600">{partner.category}</p>
                    <p className="mt-4 text-gray-600">{partner.description}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-gray-200 pt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Partnership Overview</h3>
                    <p className="mt-2 text-gray-600">
                      {partner.partnership.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Vision for Collaboration</h3>
                    <p className="mt-2 text-gray-600">{partner.partnership.vision}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Community Impact</h3>
                    <p className="mt-2 text-gray-600">{partner.partnership.impact}</p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-primary-900">Future Goals</h3>
                    <p className="mt-2 text-primary-700">
                      {partner.partnership.futureGoals}
                    </p>
                  </div>

                  {partner.contactInfo && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{partner.contactInfo.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{partner.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{partner.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gray-400" />
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700"
                        >
                          Visit Website
                        </a>
                      </div>
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