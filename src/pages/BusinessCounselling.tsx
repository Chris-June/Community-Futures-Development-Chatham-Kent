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
    <div className="bg-white">
      <ParallaxHero
        title="Expert Business Counselling"
        description="Get personalized guidance from our experienced business advisors to help your business thrive. Whether you're starting up or scaling up, we're here to support your success."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/about/contact"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Book a Consultation
          </a>
          <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </ParallaxHero>

      {/* Services Section */}
      <div id="services" className="w-full py-24 sm:py-32 bg-gradient-to-b from-white to-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-700">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Business Support
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                We offer a range of professional services designed to help your business succeed at every stage.
              </p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto sm:mt-20 lg:mt-24 lg:max-w-7xl w-full">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {counsellingServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-transparent p-8 shadow-lg ring-1 ring-white/20 rounded-2xl hover:ring-white/40 transition-all duration-200"
              >
                <dt className="text-xl font-semibold leading-8 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                    {getIcon(service.icon)}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-200">{service.description}</p>
                  <div className="mt-6">
                    <ul role="list" className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-x-3">
                          <CheckCircle2 className="h-6 w-5 flex-none text-primary-400" aria-hidden="true" />
                          <span className="text-sm leading-6 text-gray-200">{benefit}</span>
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
      </div>

      {/* Expertise Areas */}
      <div className="w-full py-24 sm:py-32 bg-gradient-to-b from-gray-900 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-primary-300">Areas of Expertise</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Supporting Your Business Journey
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
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
                    className="flex flex-col items-start bg-gradient-to-br from-white to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
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
                        <span className="inline-flex items-center rounded-full bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-300">
                          {area.title}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-base leading-7 text-gray-300">{area.description}</p>
                        <ul role="list" className="mt-4 space-y-3">
                          {area.points.map((point, index) => (
                            <li key={index} className="flex items-start text-base text-gray-300">
                              <CheckCircle2 className="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-primary-600" />
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
      </div>

      {/* CTA Section */}
      <EngagementCTA 
        title="Ready to Take Your Business to the Next Level?"
        subtitle="Schedule a free consultation with our business advisors and start your journey to success."
        primaryButtonText="Apply Here"
        secondaryButtonText="View Resources"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/learn-more')}
        className="mt-0"
      />
    </div>
  );
}
