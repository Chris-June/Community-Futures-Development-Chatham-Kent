import React from 'react';
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
                      src={member.image}
                      alt={member.name}
                      className="h-48 w-48 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                    <p className="mt-1 text-lg font-medium text-primary-600">{member.role}</p>
                    <p className="mt-4 text-gray-600">{member.bio}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 border-t border-gray-200 pt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professional Background</h3>
                    <p className="mt-2 text-gray-600">{member.background}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Why Community Futures Matters
                    </h3>
                    <p className="mt-2 text-gray-600">{member.communityImportance}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Economic Impact Vision</h3>
                    <p className="mt-2 text-gray-600">{member.economicImpact}</p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-primary-900">
                      A Message on Local Economic Prosperity
                    </h3>
                    <blockquote className="mt-2 text-primary-700 italic">
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