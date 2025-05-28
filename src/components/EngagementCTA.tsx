import React from 'react';
import { FaArrowRight, FaRegHandshake, FaHandsHelping } from 'react-icons/fa';

type EngagementCTAProps = {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
};

const EngagementCTA: React.FC<EngagementCTAProps> = ({
  title = "Shape the Future of Our Community",
  subtitle = "Your voice matters! Join us in creating positive change and building a better tomorrow, together.",
  primaryButtonText = "Join the Movement",
  secondaryButtonText = "Learn More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`} style={{ margin: 0, padding: 0 }}>
      <div className="w-full bg-gradient-to-b from-white to-gray-900" style={{ marginBottom: 0 }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-12 lg:px-16 py-12 sm:py-14">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
          <FaRegHandshake className="w-8 h-8 text-white" />
        </div>
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl mb-4">
          {title}
        </h2>
        
        {/* Subtitle */}
        <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onPrimaryClick}
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {primaryButtonText}
            <FaArrowRight className="ml-2" />
          </button>
          
          <button
            onClick={onSecondaryClick}
            className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <FaHandsHelping className="mr-2" />
            {secondaryButtonText}
          </button>
        </div>
        
        {/* Trust indicator */}
        <div className="mt-8 flex flex-col items-center text-sm text-blue-100">
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold backdrop-blur-sm">
                {i*20}%
              </div>
            ))}
          </div>
          <p className="mt-3 text-center">Join over 1,000+ community members making a difference</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementCTA;
