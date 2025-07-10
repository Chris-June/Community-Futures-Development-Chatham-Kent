import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhoWeAreModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  content: string;
  importanceToCF: string;
  importanceToCK: string;
  economicImpact: string;
  businessImportance: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

export default function WhoWeAreModal({
  isOpen,
  onClose,
  title,
  description,
  content,
  importanceToCF,
  importanceToCK,
  economicImpact,
  businessImportance,
  icon: Icon,
  iconColor,
}: WhoWeAreModalProps) {
  if (!isOpen) return null;

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
            aria-labelledby="who-we-are-modal-title"
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
                    <div className={`h-16 w-16 rounded-full ${iconColor} bg-opacity-20 flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${iconColor}`} />
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <h2 id="who-we-are-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {title}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-primary dark:text-primary-400">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {content}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Why it's important to Community Futures Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {importanceToCF}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Why it's important to Chatham-Kent
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {importanceToCK}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Economic impact on the community
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {economicImpact}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Why it's important for businesses to know
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {businessImportance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
