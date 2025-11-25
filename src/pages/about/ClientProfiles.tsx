import { Star, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParallaxHero from '../../components/ParallaxHero';
import EngagementCTA from '../../components/EngagementCTA';
import { clientProfiles } from '../../data/clientProfiles';
import { LucideIcon } from 'lucide-react';

const MetaInfo = ({ icon: Icon, text }: { icon: LucideIcon; text: string }) => (
  <div className="flex items-center text-sm text-muted-foreground">
    <Icon className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
    <span>{text}</span>
  </div>
);

export default function ClientProfiles() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-background/95">
      <ParallaxHero
        title="Success Stories"
        description="Meet some of the local entrepreneurs who have partnered with us to achieve their business goals. These success stories showcase the diverse range of businesses we've helped grow in Chatham-Kent."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />

      <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-4 backdrop-blur-sm">
              Client Success
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Real Stories, Real Impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Discover how local entrepreneurs are building successful businesses with our support.
            </p>
          </div>

          <div className="mx-auto flex flex-col gap-20">
            {clientProfiles.map((profile, index) => (
              <motion.article
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Story 1: Full-width banner image + centered content */}
                {index === 0 && (
                  <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/95 dark:bg-card/70 shadow-xl">
                    <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                      <img
                        src={profile.image}
                        alt={profile.businessName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                        <span className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-primary-50 backdrop-blur-sm">
                          {profile.industry}
                        </span>
                        <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          {profile.businessName}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-primary-50/90">
                          Owner: {profile.ownerName}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 sm:px-10 py-8 sm:py-10">
                      <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                        <MetaInfo icon={Calendar} text={`Est. ${profile.yearFounded}`} />
                        <MetaInfo icon={MapPin} text={profile.location} />
                      </div>
                      <div className="mx-auto max-w-3xl text-center space-y-4">
                        <p className="text-base sm:text-lg text-muted-foreground">
                          {profile.description}
                        </p>
                      </div>
                      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.challenge}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.solution}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Story 2: Image floated right, text left with pull-quote */}
                {index === 1 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                          {profile.industry}
                        </span>
                        <MetaInfo icon={Calendar} text={`Est. ${profile.yearFounded}`} />
                        <MetaInfo icon={MapPin} text={profile.location} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        {profile.businessName}
                      </h3>
                      <p className="text-base font-medium text-primary-600 dark:text-primary-400">
                        Owner: {profile.ownerName}
                      </p>
                      <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                        {profile.description}
                      </p>
                      <div className="mt-6 space-y-4 text-sm sm:text-base">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Challenge</h4>
                          <p className="text-muted-foreground">{profile.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Solution</h4>
                          <p className="text-muted-foreground">{profile.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">Outcome</h4>
                          <p className="text-muted-foreground">{profile.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/95 dark:bg-card/70 shadow-xl">
                        <div className="relative h-56 sm:h-72 w-full">
                          <img
                            src={profile.image}
                            alt={profile.businessName}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        </div>
                        <div className="p-5 sm:p-6">
                          <div className="flex items-start">
                            <Star className="h-5 w-5 text-yellow-500 mt-1" aria-hidden="true" />
                            <div className="ml-3">
                              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                Testimonial
                              </div>
                              <blockquote className="mt-2 text-sm sm:text-base text-muted-foreground italic">
                                “{profile.testimonial}”
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Story 3+: Two-column C/S/O cards + metrics + quote */}
                {index > 1 && (
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] items-start">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                          {profile.industry}
                        </span>
                        <MetaInfo icon={Calendar} text={`Est. ${profile.yearFounded}`} />
                        <MetaInfo icon={MapPin} text={profile.location} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        {profile.businessName}
                      </h3>
                      <p className="text-base font-medium text-primary-600 dark:text-primary-400">
                        Owner: {profile.ownerName}
                      </p>

                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.challenge}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.solution}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-card/90 dark:bg-card/70 border border-border/60 p-4 text-sm">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Outcome</h4>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {profile.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-3xl bg-card/95 dark:bg-card/70 border border-border/60 p-5 sm:p-6 shadow-md">
                        <div className="flex items-start">
                          <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="ml-3">
                            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              In their words
                            </div>
                            <blockquote className="mt-2 text-sm sm:text-base text-muted-foreground italic">
                              “{profile.testimonial}”
                            </blockquote>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-card/95 dark:bg-card/70 border border-border/60 p-5 sm:p-6 shadow-sm">
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                          Key details
                        </h4>
                        <dl className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start justify-between gap-4">
                            <dt className="font-medium text-foreground">Industry</dt>
                            <dd className="text-right">{profile.industry}</dd>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <dt className="font-medium text-foreground">Founded</dt>
                            <dd className="text-right">{profile.yearFounded}</dd>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <dt className="font-medium text-foreground">Location</dt>
                            <dd className="text-right">{profile.location}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/about/contact"
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Share Your Success Story
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <EngagementCTA
        title="Ready to Start Your Success Story?"
        subtitle="Join the growing community of successful entrepreneurs in Chatham-Kent. Our team is here to help you achieve your business goals."
        primaryButtonText="Get Started"
        secondaryButtonText="Contact Us"
        onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
        onSecondaryClick={() => navigate('/contact')}
        variant="inverted"
      />
    </div>
  );
}
