import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, LineChart, TrendingUp, CheckCircle2 } from 'lucide-react';
import { counsellingServices, expertiseAreas } from '../data/counsellingServices';
import EngagementCTA from '../components/EngagementCTA';
import ParallaxHero from '../components/ParallaxHero';

const counsellingPersonas = [
  {
    id: 'starting',
    label: 'Just starting',
    description: 'If you are pre-launch or in your first year, start with one-on-one counselling and a solid business plan.',
    serviceIds: ['CounsellingService1', 'CounsellingService2']
  },
  {
    id: 'growing',
    label: 'Growing my business',
    description: 'If you are already operating and looking to expand, focus on growth strategy and financial advisory.',
    serviceIds: ['CounsellingService3', 'CounsellingService4']
  },
  {
    id: 'financing',
    label: 'Need financing',
    description: 'If you are preparing for funding, combine business plan support with financial advisory.',
    serviceIds: ['CounsellingService2', 'CounsellingService3']
  }
];

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
  const [activePersona, setActivePersona] = useState<string>(counsellingPersonas[0].id);

  const activePersonaConfig =
    counsellingPersonas.find((tab) => tab.id === activePersona) ?? counsellingPersonas[0];

  const filteredServices = counsellingServices.filter((service) =>
    activePersonaConfig.serviceIds.includes(service.id)
  );

  const [activeExpertiseId, setActiveExpertiseId] = useState<string>(
    expertiseAreas[0]?.id ?? 'ExpertiseArea1'
  );

  const activeExpertise =
    expertiseAreas.find((area) => area.id === activeExpertiseId) ?? expertiseAreas[0];
  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95 transition-colors duration-200">
      <ParallaxHero
        title="Expert Business Counselling"
        description="Get personalized guidance from our experienced business advisors to help your business thrive. Whether you're starting up or scaling up, we're here to support your success."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      >
      </ParallaxHero>

      {/* Services Section */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 transition-colors duration-200 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section heading */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
                Our Services
              </span>
              <h2
                id="services-heading"
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading"
              >
                Comprehensive Business Support
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer a range of professional services designed to help your business succeed at every stage.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              <div className="mx-auto inline-flex rounded-full bg-muted p-1">
                {counsellingPersonas.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePersona(tab.id)}
                    className={`relative inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      activePersona === tab.id
                        ? 'bg-primary-600 text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-card'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto">
                {activePersonaConfig.description}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                {counsellingServices.slice(0, 3).map((service) => (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-card/90 dark:bg-card/70 p-5 shadow-sm ring-1 ring-border/60 flex flex-col gap-3 text-left"
                  >
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-1 space-y-1 text-xs text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Best for: </span>
                        {service.id === 'CounsellingService1' && 'getting started and clarifying your ideas.'}
                        {service.id === 'CounsellingService2' && 'building a strong plan for funding or launch.'}
                        {service.id === 'CounsellingService3' && 'understanding your numbers and funding options.'}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">What you get: </span>
                        {service.id === 'CounsellingService1' && 'regular one-on-one time with an advisor.'}
                        {service.id === 'CounsellingService2' && 'a structured, lender-ready business plan.'}
                        {service.id === 'CounsellingService3' && 'practical financial advice and next steps.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 sm:mt-20 lg:mt-24 relative">
              {/* Soft glow behind layout */}
              <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 lg:inset-x-16 -top-4 bottom-0 rounded-[3rem] bg-gradient-to-r from-primary-200/20 via-primary-100/10 to-primary-200/20 blur-3xl" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-10 items-start">
                {/* Left-hand explainer panel */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative rounded-3xl bg-card/90 dark:bg-card/70 p-8 sm:p-10 shadow-[0_18px_60px_rgba(15,118,110,0.18)] ring-1 ring-primary-100/80 dark:ring-border flex flex-col gap-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                      How Business Counselling Helps
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Work one-on-one with experienced advisors to clarify your goals, understand your numbers, and
                      build a practical plan. Our services are flexible whether you are just starting or ready to grow.
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm sm:text-base text-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>Start with a conversation about your business and challenges.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>Identify services that fit your stage: planning, financing, or growth.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>Get actionable next steps and connections to additional resources.</span>
                    </li>
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => navigate('/counselling')}
                      className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary-700 transition-colors"
                    >
                      Book a counselling session
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/resources')}
                      className="inline-flex items-center rounded-full border border-primary-200 bg-card px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition-colors"
                    >
                      Explore resources
                    </button>
                  </div>
                </motion.div>

                {/* Stacked service cards (right column on large screens) */}
                <div className="space-y-6">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      className="group relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Glassmorphism Card Background */}
                      <div className="absolute inset-0 rounded-3xl bg-card/70 dark:bg-card/60 backdrop-blur-md border border-border/60 dark:border-border/40 shadow-xl group-hover:shadow-2xl group-hover:bg-card/90 dark:group-hover:bg-card/70 transition-all duration-300" />

                      <dt className="relative z-10 flex flex-col">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-white dark:from-primary-800/50 dark:to-primary-900 text-primary-600 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-white/10 group-hover:scale-110 group-hover:ring-primary-200 dark:group-hover:ring-white/20 transition-all duration-300 shadow-md">
                          {getIcon(service.icon)}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {service.title}
                        </h3>
                      </dt>

                      <dd className="relative z-10 mt-3 flex flex-1 flex-col">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {service.description}
                        </p>
                        <div className="mt-4">
                          <ul role="list" className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex gap-x-2 text-sm sm:text-base">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500 dark:text-primary-400"
                                  aria-hidden="true"
                                />
                                <span className="text-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </dd>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section
        aria-labelledby="expertise-heading"
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-background dark:from-primary-950 dark:to-background transition-colors duration-200 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
                Expertise Areas
              </span>
              <h2
                id="expertise-heading"
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading"
              >
                Supporting Your Business Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced advisors provide expert guidance across key business areas to help you achieve your goals.
              </p>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
                These are three of the main ways we support you through our business counselling services.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {/* Persona tabs */}
              <div className="mx-auto inline-flex rounded-full bg-muted p-1">
                {expertiseAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveExpertiseId(area.id)}
                    className={`relative inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      activeExpertiseId === area.id
                        ? 'bg-primary-600 text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-card'
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </div>

              {/* Detail panel */}
              <motion.div
                key={activeExpertise.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mt-8 rounded-3xl bg-card/95 dark:bg-card/70 p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,118,110,0.18)] ring-1 ring-primary-100/80 dark:ring-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-start">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full bg-primary-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-800 dark:bg-primary-900/60 dark:text-primary-100">
                      {activeExpertise.title}
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {activeExpertise.description}
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm sm:text-base text-foreground">
                      {activeExpertise.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary-500 dark:text-primary-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40">
                    <img
                      src={activeExpertise.image}
                      alt={activeExpertise.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
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
        variant="hero"
      />
    </div>
  );
}
