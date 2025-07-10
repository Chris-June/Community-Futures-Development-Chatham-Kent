import { ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { NavItem } from '../../types';
import { useNavStore } from '../../store/navStore';
import { Home, Rocket, BookOpen, Users, FileText } from 'lucide-react';

const navigation: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Starting a Business', href: '/start-business', icon: Rocket },
  { name: 'Business Counselling', href: '/counselling', icon: BookOpen },
  {
    name: 'About Us',
    href: '/about/who-we-are',
    icon: Users,
    children: [
      { name: 'Who We Are', href: '/about/who-we-are' },
      { name: 'Board of Directors', href: '/about/board' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Client Profiles', href: '/about/client-profiles' },
      { name: 'Community Partners', href: '/about/partners' },
      { name: 'Contact Us', href: '/about/contact' },
    ],
  },
  { name: 'Resources', href: '/resources', icon: FileText },
];

const DropdownMenu = ({ 
  items, 
  isOpen
}: { 
  items: NavItem[]; 
  isOpen: boolean;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-primary/30 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary/10"
            role="menuitem"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

// Animation variants for the navbar
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

// Animation for nav items
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export default function Navbar() {
  const { isOpen, setIsOpen, activeItem, setActiveItem } = useNavStore();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Update active item when location changes
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname, setActiveItem]);

  return (
    <motion.header 
      initial="hidden"
      animate={controls}
      variants={navVariants}
      className="sticky top-0 z-50 w-full bg-dark text-white shadow-lg backdrop-blur-sm bg-opacity-95"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sr-only">
          <Link to="#main-content" className="absolute left-0 p-2 bg-primary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2">
            Skip to main content
          </Link>
        </div>
        <div className="flex items-center justify-between p-6 lg:px-0">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Community Futures Chatham-Kent</span>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img 
                  className="h-12 w-auto" 
                  src="/assets/images/CFDC-logo.png" 
                  alt="Community Futures Chatham-Kent"
                />
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-primary/20"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                {item.children ? (
                  <>
                    <div className="relative">
                      <button
                        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium leading-6 text-white transition-all duration-200 hover:bg-primary/10 hover:text-highlight focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:ring-offset-2 focus:ring-offset-dark"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDropdownOpen(dropdownOpen === item.name ? null : item.name);
                        }}
                        onMouseEnter={() => setDropdownOpen(item.name)}
                        onMouseLeave={() => {}}
                        aria-expanded={dropdownOpen === item.name}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
                          className="text-highlight"
                        >
                          {item.icon && <item.icon className="h-5 w-5 mr-1" />}
                        </motion.div>
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                        className="absolute left-0 mt-1 w-56"
                        onMouseEnter={() => setDropdownOpen(item.name)}
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        <DropdownMenu 
                          items={item.children} 
                          isOpen={dropdownOpen === item.name}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium leading-6 transition-all duration-200 flex items-center gap-2 ${
                      activeItem === item.href
                        ? 'bg-primary/10 text-highlight ring-2 ring-highlight/20'
                        : 'text-white hover:bg-primary/10 hover:text-highlight'
                    } focus:outline-none focus:ring-2 focus:ring-highlight/50 focus:ring-offset-2 focus:ring-offset-dark`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="text-highlight"
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                    </motion.div>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
