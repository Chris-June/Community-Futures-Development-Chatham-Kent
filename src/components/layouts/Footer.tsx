import { Facebook, Linkedin, Mail, MapPin, Phone, Clock, ExternalLink, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  external?: boolean;
  className?: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

interface HoursItem {
  day: string;
  time: string;
}

interface FooterLinkProps {
  item: NavigationItem;
  isExternal?: boolean;
  className?: string;
}

interface Navigation {
  main: NavigationItem[];
  social: SocialLink[];
  hours: HoursItem[];
}

const navigation: Navigation = {
  main: [
    { 
      name: 'Who We Are', 
      href: '/about/who-we-are',
      description: 'Learn about our mission, vision, and the team behind Community Futures Chatham-Kent'
    },
    { 
      name: 'Starting a Business', 
      href: '/start-business',
      description: 'Resources and guidance for new entrepreneurs'
    },
    { 
      name: 'Resources', 
      href: '/resources',
      description: 'Tools, templates, and guides for business success'
    },
    { 
      name: 'Loan Requirements', 
      href: '/learn-more',
      description: 'Information about our financing options and eligibility'
    },
    { 
      name: 'Contact', 
      href: '/about/contact',
      description: 'Get in touch with our team'
    },
    { 
      name: 'Loan Application', 
      href: 'https://chathamkent.commongoalsapp.com/ApplyNow?appid=2',
      external: true,
      description: 'Start your business loan application online',
      className: 'font-semibold text-primary-300 hover:text-primary-200 group'
    },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: Facebook,
      description: 'Follow us on Facebook',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      description: 'Connect with us on LinkedIn',
    },
  ],
  hours: [
    { day: 'Monday - Friday', time: '8:30 AM - 4:30 PM' },
    { day: 'Saturday - Sunday', time: 'Closed' },
    { day: 'Statutory Holidays', time: 'Closed' },
  ]
};

const FooterLink: React.FC<FooterLinkProps> = ({ item, isExternal = false, className = '' }) => {
  const content = (
    <>
      {item.name}
      {isExternal && <ExternalLink className="ml-1.5 h-3 w-3 inline-block" aria-hidden="true" />}
    </>
  );

  const classNameString = cn(
    'text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
    'dark:text-gray-300 dark:hover:text-white',
    className
  );

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameString}
        aria-label={`${item.name} (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={item.href} className={classNameString}>
      {content}
    </Link>
  );
};

export default function Footer({ className = '' }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={cn(
        'relative z-10 pt-16 pb-12 bg-primary-900 text-gray-200',
        'dark:bg-gradient-to-b dark:from-primary-900 dark:to-primary-950',
        className
      )}
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 bg-[url('/assets/images/footer-pattern.svg')] bg-cover bg-center opacity-5" 
           aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary-300 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-base font-medium text-white">Our Location</p>
                    <p className="mt-1 text-sm text-gray-300">124 Thames St., Chatham, ON N7L 2Y8</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-300 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="tel:2269961234" 
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    (226) 996-1234
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-300 flex-shrink-0" aria-hidden="true" />
                  <a 
                    href="mailto:info@cfdcck.on.ca" 
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 break-all"
                  >
                    info@cfdcck.on.ca
                  </a>
                </div>
              </address>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-200 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${item.name} (opens in new tab)`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation and Hours */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex items-start">
                      <div className="h-6 w-1 bg-transparent group-hover:bg-primary-400 mr-3 transition-colors duration-200 rounded-r" />
                      <div>
                        <FooterLink 
                          item={item} 
                          isExternal={item.external} 
                          className={item.className}
                        />
                        {item.description && (
                          <p className="mt-1 text-xs text-gray-400">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold text-white">Hours of Operation</h3>
              <div className="mt-6 space-y-6">
                {navigation.hours.map((time, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-1 bg-transparent mr-3" />
                    <div>
                      <p className="text-sm font-medium text-white">{time.day}</p>
                      <p className="mt-1 text-sm text-gray-300">{time.time}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-primary-700">
                  <p className="text-sm text-gray-400">
                    <Clock className="inline-block w-4 h-4 mr-2 -mt-0.5" aria-hidden="true" />
                    Closed on all statutory holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-700">
          <div className="flex flex-col items-center space-y-6">
            {/* Government Logo */}
            <div className="flex items-center justify-center space-x-8">
              <img 
                className="h-12 w-auto" 
                src="/assets/images/GovCanada.png" 
                alt="Government of Canada"
                loading="lazy"
              />
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-center text-gray-400">
              &copy; {currentYear} Community Futures Development Corporation of Chatham-Kent. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-use" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <Link 
                to="/accessibility" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Accessibility
              </Link>
              <Link 
                to="/disclaimer" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Disclaimer
              </Link>
            </div>
            
            {/* Back to top button */}
            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 text-sm font-medium text-primary-300 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}