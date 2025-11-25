import { ChevronDown, Menu, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { NavItem } from '../../types';
import { useNavStore } from '../../store/navStore';
import { Home, Rocket, BookOpen, Users, FileText, Newspaper } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

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
  { name: 'Blogs', href: '/blogs', icon: Newspaper },
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
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-xl bg-card py-2 shadow-xl ring-1 ring-black/5 focus:outline-none border border-border"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
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
  const { theme, setTheme } = useTheme();

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
      className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background/90 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sr-only">
          <Link to="#main-content" className="absolute left-0 p-2 bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Skip to main content
          </Link>
        </div>
        <div className="flex items-center justify-between h-20 lg:px-0">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center group">
              <span className="sr-only">Community Futures Chatham-Kent</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card p-2 rounded-xl shadow-sm border border-border"
              >
                <img
                  className="h-10 w-auto sm:h-12"
                  src="/assets/images/CFDC-logo.png"
                  alt="Community Futures Chatham-Kent"
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsOpen(true)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-2 items-center">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 
                        ${dropdownOpen === item.name
                          ? 'text-primary bg-primary/5 dark:bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted'
                        }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(dropdownOpen === item.name ? null : item.name);
                      }}
                      aria-expanded={dropdownOpen === item.name}
                    >
                      {item.icon && <item.icon className="h-4 w-4 opacity-70" />}
                      {item.name}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className="absolute left-0 pt-2 w-56">
                      <DropdownMenu
                        items={item.children}
                        isOpen={dropdownOpen === item.name}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5
                      ${activeItem === item.href
                        ? 'bg-primary/10 text-primary dark:text-primary-foreground font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary'
                      }`}
                  >
                    {item.icon && <item.icon className={`h-4 w-4 ${activeItem === item.href ? 'opacity-100' : 'opacity-70'}`} />}
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <div className="ml-4 pl-4 border-l border-gray-200 dark:border-primary-700">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary-900/50 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
