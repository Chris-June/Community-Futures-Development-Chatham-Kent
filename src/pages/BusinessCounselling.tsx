import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, LineChart, TrendingUp, CheckCircle2 } from 'lucide-react';
import { counsellingServices, expertiseAreas } from '../data/counsellingServices';
import EngagementCTA from '../components/EngagementCTA';
import ParallaxHero from '../components/ParallaxHero';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Users':
      return <Users className="h-6 w-6" />;
    case 'FileText':
      return <FileText className="h-6 w-6" />;
    case 'LineChart':
      return <LineChart className="h-6 w-6" />;
    case 'TrendingUp':
      return <TrendingUp className="h-6 w-6" />;
    default:
      return <FileText className="h-6 w-6" />;
  }
};

export default function BusinessCounselling() {
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <ParallaxHero
        title="Expert Business Counselling"
        description="Get personalized guidance from our experienced business advisors to help your business thrive. Whether you're starting up or scaling up, we're here to support your success."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      >
      </ParallaxHero>

      {/* Services Section */}
      <section id="services" aria-labelledby="services-heading" className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-primary-950/30 transition-colors duration-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4">
                Our Services
              </span>
              <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-heading">
                Comprehensive Business Support
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer a range of professional services designed to help your business succeed at every stage.
              </p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto sm:mt-20 lg:mt-24 lg:max-w-7xl w-full">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {counsellingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col bg-white dark:bg-gray-800 p-8 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-primary-200 dark:hover:border-primary-500/30"
              >
                <dt className="flex flex-col">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-primary-800/50 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/50 group-hover:ring-primary-200 dark:group-hover:ring-primary-700 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </dt>
                <dd className="mt-4 flex flex-1 flex-col">
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  <div className="mt-6">
                    <ul role="list" className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-x-3">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400 mt-0.5" aria-hidden="true" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </dd>
              </motion.div>
            ))}
            </dl>
          </div>
        </div>
      </div>
      </section>

      {/* Expertise Areas */}
      <section aria-labelledby="expertise-heading" className="w-full py-16 sm:py-24 bg-gradient-to-b from-primary-700/90 to-white dark:from-primary-950 dark:to-gray-900 transition-colors duration-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/20 text-primary-100 dark:bg-primary-900/50 dark:text-primary-200 mb-4">
                Expertise Areas
              </span>
              <h2 id="expertise-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                Supporting Your Business Journey
              </h2>
              <p className="mt-4 text-lg text-primary-100/90 dark:text-primary-200 max-w-2xl mx-auto">
                Our experienced advisors provide expert guidance across key business areas to help you achieve your goals.
              </p>
            </div>
            <div className="mt-16 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {expertiseAreas.map((area) => (
                  <motion.article
                    key={area.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col h-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-500/50"
                  >
                    <div className="relative w-full group">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="w-full mt-6">
                      <div className="flex items-center gap-x-3">
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
                          {area.title}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
                        <ul role="list" className="mt-4 space-y-3">
                          {area.points.map((point, index) => (
                            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                              <CheckCircle2 className="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EngagementCTA 
        title="Ready to Take Your Business to the Next Level?"
        subtitle="Apply for your Business loan or view our Supporting Resources to help get you started on your Entrepreneurial journey."
        primaryButtonText="Apply Here"
        secondaryButtonText="View Resources"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/learn-more')}
        className="mt-0"
      />
    </div>
  );
}
