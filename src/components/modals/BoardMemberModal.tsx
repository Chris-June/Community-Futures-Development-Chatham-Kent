import { X } from 'lucide-react';
import { BoardMember } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface BoardMemberModalProps {
  member: BoardMember;
  isOpen: boolean;
  onClose: () => void;
}

export default function BoardMemberModal({ member, isOpen, onClose }: BoardMemberModalProps) {
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
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="board-member-title"
          >
            <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
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
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        width={192}
                        height={192}
                      />
                      <div className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="max-w-2xl">
                    <h2 id="board-member-title" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-primary dark:text-primary-400">
                      {member.role}
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Professional Background
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.background}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Why Community Futures Matters
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.communityImportance}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Economic Impact Vision
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.economicImpact}
                    </p>
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border-l-4 border-primary-400 dark:border-primary-500">
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-200">
                      A Message on Local Economic Prosperity
                    </h3>
                    <blockquote className="mt-2 text-primary-800 dark:text-primary-100 italic">
                      "{member.personalMessage}"
                    </blockquote>
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