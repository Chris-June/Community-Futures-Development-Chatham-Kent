import { useState } from 'react';
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
  const [activeStepId, setActiveStepId] = useState<string>(startupSteps[0]?.id ?? 'BusinessStep1');

  const activeStep =
    startupSteps.find((step) => step.id === activeStepId) ?? startupSteps[0];
  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95">
      <ParallaxHero
        title="Start Your Business Journey"
        description="Turn your business idea into reality with expert guidance and support from our team. We'll help you navigate every step of the entrepreneurial journey."
        image="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />

      {/* Quick Tips Section */}
      <section
        className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950"
        aria-labelledby="quick-tips-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
              Quick Tips
            </span>
            <h2
              id="quick-tips-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading"
            >
              Things to Know Before Starting
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential insights to help you start your business journey on the right foot.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Soft horizontal line across steps */}
            <div className="pointer-events-none absolute inset-x-4 lg:inset-x-12 top-8 h-px bg-gradient-to-r from-primary-200/20 via-primary-400/40 to-primary-200/20 dark:from-primary-900/10 dark:via-primary-600/50 dark:to-primary-900/10" />

            <dl className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular step marker */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-card shadow-md ring-2 ring-primary-300/80 dark:ring-primary-600/80 group-hover:ring-primary-500 dark:group-hover:ring-primary-400 transition-all duration-300">
                      <span className="text-sm font-semibold text-primary-700 dark:text-primary-200">
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-wide text-primary-700 dark:text-primary-300">
                      Step {index + 1}
                    </div>
                  </div>

                  {/* Card under marker */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="mt-6 w-full h-full max-w-xs sm:max-w-none relative"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-card/80 dark:bg-card/60 backdrop-blur-md border border-border/60 dark:border-border/40 shadow-lg group-hover:shadow-xl group-hover:bg-card/95 dark:group-hover:bg-card/70 transition-all duration-300" />
                    <div className="relative z-10 p-6 flex flex-col h-full text-left">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 text-primary-foreground shadow-md">
                          {getIcon(tip.icon)}
                        </div>
                        <h3 className="text-base font-semibold leading-6 text-foreground">
                          {tip.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section
        className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-background dark:from-primary-950 dark:to-background relative overflow-hidden"
        aria-labelledby="process-heading"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/50 dark:text-primary-100 mb-4 backdrop-blur-sm">
              The Process
            </span>
            <h2
              id="process-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading"
            >
              How We Help You Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process helps turn your business idea into reality with expert guidance every step of the way.
            </p>
          </div>

          {/* Mobile accordion version */}
          <div className="mt-12 space-y-4 lg:hidden">
            {startupSteps.map((step, index) => {
              const isActive = step.id === activeStepId;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-primary-foreground text-xs font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {index === 0 && 'Start with a conversation about your idea.'}
                          {index === 1 && 'Turn your idea into a clear, written plan.'}
                          {index === 2 && 'Explore how to finance the plan you have.'}
                        </p>
                      </div>
                    </div>
                    <span className="ml-3 text-xs text-muted-foreground">
                      {isActive ? 'Hide' : 'View'}
                    </span>
                  </button>
                  {isActive && (
                    <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground space-y-3">
                      <p>{step.description}</p>
                      <ul className="list-disc list-inside space-y-1">
                        {index === 0 && (
                          <>
                            <li>Clarify your goals and timeline.</li>
                            <li>Identify key risks and questions.</li>
                            <li>Agree on immediate next steps.</li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li>Outline your business model and market.</li>
                            <li>Document revenue, expenses, and forecasts.</li>
                            <li>Prepare a plan you can share with lenders.</li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li>Review loan and funding options.</li>
                            <li>Understand what lenders look for.</li>
                            <li>Plan how much funding you actually need.</li>
                          </>
                        )}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                          Clarity on next steps
                        </span>
                        <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                          Actionable checklist
                        </span>
                        {index >= 1 && (
                          <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                            Stronger plan for funding
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Desktop split layout */}
          <div className="mt-16 hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-12 items-start">
              {/* Vertical step rail */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200/40 via-primary-400/60 to-primary-200/20 dark:from-primary-900/20 dark:via-primary-600/60 dark:to-primary-900/10" />
                <div className="space-y-6 pl-10">
                  {startupSteps.map((step, index) => {
                    const isActive = step.id === activeStepId;
                    return (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveStepId(step.id)}
                        className={`relative flex items-start gap-4 text-left transition-colors ${
                          isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <div className="relative mt-1">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-300 ${
                            isActive
                              ? 'border-primary-600 bg-primary-600 text-primary-foreground shadow-md'
                              : 'border-border bg-card text-muted-foreground'
                          }`}>
                            {index + 1}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="text-xs text-muted-foreground max-w-xs">
                            {index === 0 && 'Share your idea and get initial direction from an advisor.'}
                            {index === 1 && 'Shape your idea into a concrete, written business plan.'}
                            {index === 2 && 'Match your plan with the right funding options.'}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic detail panel */}
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl bg-card/95 dark:bg-card/70 p-8 shadow-[0_18px_60px_rgba(15,118,110,0.18)] ring-1 ring-primary-100/80 dark:ring-border flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-6 items-start">
                  <div className="relative overflow-hidden rounded-2xl bg-muted ring-1 ring-border/40">
                    <img
                      src={activeStep.image}
                      alt={activeStep.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wide text-primary-700">
                        Step {startupSteps.findIndex((step) => step.id === activeStep.id) + 1}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                        {activeStep.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {activeStep.description}
                    </p>
                    <ul className="space-y-2 text-sm text-foreground">
                      {activeStep.id === 'BusinessStep1' && (
                        <>
                          <li>Clarify your idea, goals, and timeline with an advisor.</li>
                          <li>Identify key risks and what information you still need.</li>
                          <li>Leave with a short list of concrete next steps.</li>
                        </>
                      )}
                      {activeStep.id === 'BusinessStep2' && (
                        <>
                          <li>Translate your idea into a structured business plan.</li>
                          <li>Work through revenue, costs, and basic forecasting.</li>
                          <li>Prepare materials you can share with lenders or partners.</li>
                        </>
                      )}
                      {activeStep.id === 'BusinessStep3' && (
                        <>
                          <li>Review loan and funding options that fit your plan.</li>
                          <li>Understand lender expectations and documentation.</li>
                          <li>Build a funding approach that matches your needs.</li>
                        </>
                      )}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                        Clarity on next steps
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                        Draft action plan
                      </span>
                      {activeStep.id !== 'BusinessStep1' && (
                        <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-700">
                          Stronger funding story
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
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
        variant="hero"
      />
    </div>
  );
}
