import { motion } from 'framer-motion';
import { Search, FileText, Wallet, Scale } from 'lucide-react';
import ParallaxHero from '../components/ParallaxHero';
import { quickTips, startupSteps } from '../data/businessTips';
import { useNavigate } from 'react-router-dom';
import EngagementCTA from '../components/EngagementCTA';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Search':
      return <Search className="h-6 w-6" />;
    case 'FileText':  
      return <FileText className="h-6 w-6" />;
    case 'Wallet':
      return <Wallet className="h-6 w-6" />;
    case 'Scale':
      return <Scale className="h-6 w-6" />;
    default:
      return <FileText className="h-6 w-6" />;
  }
};

export default function StartBusiness() {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900">
      <ParallaxHero
        title="Start Your Business Journey"
        description="Turn your business idea into reality with expert guidance and support from our team. We'll help you navigate every step of the entrepreneurial journey."
        image="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Quick Tips Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-primary-950/30" aria-labelledby="quick-tips-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4">
              Quick Tips
            </span>
            <h2 id="quick-tips-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-heading">
              Things to Know Before Starting
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Essential insights to help you start your business journey on the right foot.
            </p>
          </div>
          
          <div className="mt-16">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {quickTips.map((tip) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <dt className="flex flex-col">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white">
                      {getIcon(tip.icon)}
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                  </dt>
                  <dd className="mt-2 flex-1">
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {tip.description}
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4">
              The Process
            </span>
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-heading">
              How We Help You Succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven process helps turn your business idea into reality with expert guidance every step of the way.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {startupSteps.map((step, index) => (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col h-full"
                >
                  <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <img
                      src={step.image}
                      alt=""
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-sm font-medium text-white">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EngagementCTA 
        title="Ready to Start Your Business?"
        subtitle="Book a free consultation with our business advisors and take the first step towards entrepreneurship."
        primaryButtonText="Apply Here"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/about/contact')}
        className="bg-gradient-to-r from-primary-600 to-primary-700"
      />
    </div>
  );
}