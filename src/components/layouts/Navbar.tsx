import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { NavItem } from '../../types';
import { useNavStore } from '../../store/navStore';
import { Home, Rocket, BookOpen, Users, FileText, Building2 } from 'lucide-react';

const navigation: NavItem[] = [
  { name: 'Home', href: '/',
    icon: Home
  },
  { name: 'Starting a Business', href: '/start-business',
    icon: Rocket
  },
  { name: 'Business Counselling', href: '/counselling',
    icon: BookOpen
  },
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
  { name: 'Resources', href: '/resources',
    icon: FileText
  },
];

const DropdownMenu = ({ items, isOpen }: { items: NavItem[]; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Navbar() {
  const { isOpen, setIsOpen, activeItem, setActiveItem } = useNavStore();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('header')?.classList.add('sticky', 'top-0', 'shadow-md');
      } else {
        document.querySelector('header')?.classList.remove('sticky', 'top-0', 'shadow-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname, setActiveItem]);

  return (
    <header className="bg-white z-50 transition-all duration-300">
      <div className="sr-only">
        <Link to="#main-content" className="absolute left-0 p-2 bg-primary-600 text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2">
          Skip to main content
        </Link>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Community Futures Chatham-Kent</span>
            <div className="text-2xl font-display font-bold text-primary-600">CFDC</div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                  onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                  aria-expanded={dropdownOpen === item.name}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary-600"
                  >
                    {item.icon && <item.icon className="h-5 w-5 mr-1" />}
                  </motion.div>
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors flex items-center gap-2 ${
                    activeItem === item.href
                      ? 'text-primary-600'
                      : 'text-gray-900 hover:text-primary-600'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-primary-600"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                  </motion.div>
                  {item.name}
                </Link>
              )}
              {item.children && (
                <div
                  className="absolute top-full left-0"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <DropdownMenu items={item.children} isOpen={dropdownOpen === item.name} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/services/loans"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Building2 className="h-5 w-5" />
              Get Started
            </motion.div>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Community Futures Chatham-Kent</span>
                <div className="text-2xl font-display font-bold text-primary-600">CFDC</div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                dropdownOpen === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {dropdownOpen === item.name && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className="flex items-center gap-2 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.9 }}
                                      className="text-primary-600"
                                    >
                                      <FileText className="h-4 w-4" />
                                    </motion.div>
                                    {child.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/services/loans"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Building2 className="h-5 w-5" />
                      Get Started
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}