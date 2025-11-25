import { useNavigate } from 'react-router-dom';
import { FileText, CheckCircle, Clock, User, Building2, DollarSign, Handshake } from 'lucide-react';
import ParallaxHero from '../components/ParallaxHero';
import EngagementCTA from '../components/EngagementCTA';

const requirements = [
  {
    title: 'Business Plan',
    description: 'A detailed business plan outlining your business idea, market analysis, and financial projections.',
    icon: FileText
  },
  {
    title: 'Credit History',
    description: 'A good personal and business credit history (if applicable). We understand that new businesses may not have established credit.',
    icon: CheckCircle
  },
  {
    title: 'Time in Business',
    description: 'For existing businesses, at least 6 months of operational history is preferred. Startups are also welcome to apply.',
    icon: Clock
  },
  {
    title: 'Owner Investment',
    description: 'Evidence of owner investment in the business (typically 10-25% of total project costs).',
    icon: DollarSign
  },
  {
    title: 'Collateral',
    description: 'Available collateral may be required, though we understand that startups may have limited assets.',
    icon: Handshake
  },
  {
    title: 'Personal Guarantee',
    description: 'Personal guarantee from all owners with 20% or more ownership in the business.',
    icon: User
  },
  {
    title: 'Industry Experience',
    description: 'Relevant industry experience or training that demonstrates your ability to operate the business successfully.',
    icon: Building2
  },
  {
    title: 'Legal Requirements',
    description: 'All necessary business licenses and registrations must be in place or in progress.',
    icon: FileText
  }
];

const loanFeatures = [
  "Competitive interest rates",
  "Flexible repayment terms",
  "Loans from $5,000 to $150,000",
  "No prepayment penalties",
  "Personalized business support",
  "No application fees"
];

export default function LearnMore() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95">
      <ParallaxHero
        title="Loan Application Requirements"
        description="Everything you need to know to prepare a successful loan application with Community Futures Chatham-Kent."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      >
        {/* <div className="mt-10 flex items-center gap-x-6">
          <a
            onClick={() => navigate("/apply", { replace: true })}
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Start Application
          </a>
          <a onClick={() => navigate("/about/contact", { replace: true })} className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </div> */}
      </ParallaxHero>

      {/* Requirements Section */}
      <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 py-24 sm:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-block px-3 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-2 backdrop-blur-sm">
              Loan Requirements
            </span>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What You'll Need to Apply
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We've made the application process as straightforward as possible. Here's what we'll need from you to get started.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {requirements.map((requirement, index) => {
                const Icon = requirement.icon;
                return (
                  <div key={index} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-foreground">
                      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-primary-foreground">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      {requirement.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-muted-foreground">{requirement.description}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Loan Features */}
      <div className="bg-gradient-to-b from-primary-50 to-background dark:from-primary-950 dark:to-background py-24 sm:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-block px-3 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-2 backdrop-blur-sm">
              Why Choose Us
            </span>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Loan Features
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer flexible financing solutions designed to help your business grow and succeed.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="group relative rounded-3xl p-8 transition-all duration-300">
              {/* Glassmorphism Card Background */}
              <div className="absolute inset-0 rounded-3xl bg-card/70 dark:bg-card/60 backdrop-blur-md border border-border/60 dark:border-border/40 shadow-xl group-hover:shadow-2xl transition-all duration-300" />
              <ul role="list" className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {loanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-10 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Have questions about our loan programs? Our team is here to help you understand your options and guide you through the application process.
                </p>
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Contact our loan team <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <EngagementCTA
        title="Join 100's of successful businesses located here in Chatham-Kent"
        subtitle="Be part of Chatham-Kent's economic success story. Whether you're starting a business or looking to grow, we're here to help."
        primaryButtonText="Apply Here"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/about/contact')}
        variant="hero"
      />
    </div>
  );
}
