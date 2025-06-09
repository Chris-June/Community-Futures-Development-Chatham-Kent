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
    <div className="bg-white">
      <ParallaxHero
        title="Start Your Business Journey"
        description="Turn your business idea into reality with expert guidance and support from our team. We'll help you navigate every step of the entrepreneurial journey."
        image="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      >
      </ParallaxHero>

      {/* Quick Tips Section */}
      <div className="bg-gradient-to-b from-white to-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Quick Tips</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Things to Know Before Starting
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Essential insights to help you start your business journey on the right foot.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {quickTips.map((tip) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-100">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    {getIcon(tip.icon)}
                  </div>
                  {tip.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{tip.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-gradient-to-b from-gray-900 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-400">The Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              How We Help You Succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our proven process helps turn your business idea into reality with expert guidance every step of the way.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
              {startupSteps.map((step) => (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start"
                >
                  <div className="relative w-full">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-1 text-xs font-medium text-primary-600">
                        Step {step.id}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-800 group-hover:text-gray-800">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-800">{step.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-white to-gray-900">
        <EngagementCTA 
        title="Ready to Start Your Business?"
        subtitle="Book a free consultation with our business advisors and take the first step towards entrepreneurship."
        primaryButtonText="Apply Here"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
          onSecondaryClick={() => navigate('/about/contact')}
        />
      </div>
    </div>
  );
}