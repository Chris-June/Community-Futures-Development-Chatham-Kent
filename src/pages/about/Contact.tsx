import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import ParallaxHero from '../../components/ParallaxHero';
import { toast } from 'react-hot-toast';

// Form field configurations

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  interest: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    interest: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success('Your message has been sent successfully!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        interest: '',
      });
      
    } catch (error) {
      console.error('Error preparing email:', error);
      toast.error('There was an error preparing your email. Please try again or contact us directly at info@communityfutures.ca');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-900">
      <ParallaxHero
        title="Get in Touch"
        description="Have questions about starting or growing your business? Our team is here to help you succeed."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />
      
      <div className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              We're Here to Help
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Contact Our Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Have questions about starting or growing your business? Our team is here to help you succeed.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 h-full border border-gray-100 dark:border-gray-700/50">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <dl className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</dt>
                      <dd className="mt-1 text-base text-gray-900 dark:text-white">
                        <p>124 Thames St.</p>
                        <p>Chatham, ON N7M 5K8</p>
                      </dd>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</dt>
                      <dd className="mt-1 text-base">
                        <a 
                          href="tel:+15193542400" 
                          className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors"
                        >
                          (519) 354-2400
                        </a>
                      </dd>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                      <dd className="mt-1 text-base">
                        <a 
                          href="mailto:info@communityfutures.ca" 
                          className="text-gray-900 hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors break-all"
                        >
                          info@communityfutures.ca
                        </a>
                      </dd>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-2 rounded-lg text-primary-600 dark:text-primary-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Hours</dt>
                      <dd className="mt-1 text-base text-gray-900 dark:text-white">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </dd>
                    </div>
                  </div>
                </dl>
                
                <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 h-full border border-gray-100 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Select an option</option>
                        <option value="business-loans">Business Loans</option>
                        <option value="business-counselling">Business Counselling</option>
                        <option value="training">Training & Workshops</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="-ml-1 mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}