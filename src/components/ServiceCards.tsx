import { Briefcase, FileText, LineChart, ArrowRight } from 'lucide-react';
import { ServiceCard } from '../types';
import { motion } from 'framer-motion';

const services: ServiceCard[] = [
  {
    title: "Business Loans",
    description: "Access flexible financing options tailored to your business needs, with competitive rates and personalized support.",
    icon: "Briefcase",
    link: "/start-business"
  },
  {
    title: "Business Counselling",
    description: "Get expert guidance from our experienced advisors to help your business grow and overcome challenges.",
    icon: "FileText",
    link: "/counselling"
  },
  {
    title: "Economic Development",
    description: "Partner with us to strengthen the local economy through innovative programs and community initiatives.",
    icon: "LineChart",
    link: "/about/who-we-are"
  }
];

export default function ServiceCards() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="h-6 w-6" />;
      case 'FileText':
        return <FileText className="h-6 w-6" />;
      case 'LineChart':
        return <LineChart className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white font-heading">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Comprehensive support for your business journey in Chatham-Kent
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800/50 dark:border-gray-700/50 backdrop-blur-sm hover:border-primary-300/70 dark:hover:border-primary-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                {getIcon(service.icon)}
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  <a 
                    href={service.link} 
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a 
                    href={service.link} 
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 group transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}