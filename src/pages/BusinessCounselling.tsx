import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, LineChart, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { counsellingServices, expertiseAreas } from '../data/counsellingServices';
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
      <div id="services" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Business Support
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a range of professional services designed to help your business succeed at every stage.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {counsellingServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    {getIcon(service.icon)}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto text-gray-600">{service.description}</p>
                  <div className="mt-6">
                    <ul role="list" className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-x-3">
                          <CheckCircle2 className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                          <span className="text-sm leading-6 text-gray-600">{benefit}</span>
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

      {/* Expertise Areas */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-400">Areas of Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Supporting Your Business Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our experienced advisors provide expert guidance across key business areas to help you achieve your goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
              {expertiseAreas.map((area) => (
                <motion.article
                  key={area.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start"
                >
                  <div className="relative w-full">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-700">
                        {area.title}
                      </span>
                    </div>
                    <div className="group relative">
                      <p className="mt-5 text-sm leading-6 text-gray-600">{area.description}</p>
                      <ul role="list" className="mt-4 space-y-2">
                        {area.points.map((point, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle2 className="mr-2 h-4 w-4 text-primary-600" />
                            {point}
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

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#80b5ff] via-[#fc9089] to-[#ff80b5] opacity-30 blur-3xl"
              />
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Schedule a free consultation with our business advisors and start your journey to success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </a>
              <a href="/resources" className="text-sm font-semibold leading-6 text-white">
                View Resources <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}