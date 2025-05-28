import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = {
  main: [
    { name: 'Who We Are', href: '/about/who-we-are' },
    { name: 'Starting a Business', href: '/start-business' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/about/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>124 Thames St., Chatham, ON N7L 2Y8</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>226-996-1234</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5" />
                <span>info@cfdcck.on.ca</span>
              </div>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Hours of Operation</h3>
              <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
                <li>Monday - Friday</li>
                <li>8:30 AM - 4:30 PM</li>
                <li>Weekends & Holidays: Closed</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center space-y-4">
            <img 
              className="h-12 w-auto" 
              src="/assets/images/GovCanada.png" 
              alt="Government of Canada"
            />
            <p className="text-xs leading-5 text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Community Futures Development Corporation of Chatham-Kent. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
              <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms-of-use" className="hover:text-gray-300">Terms of Use</Link>
              <span>•</span>
              <Link to="/accessibility" className="hover:text-gray-300">Accessibility</Link>
              <span>•</span>
              <Link to="/disclaimer" className="hover:text-gray-300">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}