import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as LinkIcon, ChevronLeft, ChevronRight, Edit3, BookOpen } from 'lucide-react';
import ParallaxHero from '../components/ParallaxHero';
import EngagementCTA from '../components/EngagementCTA';

const resources = [
  {
    title: 'Interactive Business Plan Builder',
    description: 'Start building your business plan with our interactive step-by-step guide. Save your progress as you go!',
    type: 'interactive',
    icon: Edit3, // Using Edit3 for an interactive tool
    link: '/business-plan-form', // New route for the interactive form
  },
  {
    title: 'Interactive Market Research Guide',
    description: 'An interactive guide to help you learn about and plan market research activities for your Ontario business.',
    type: 'interactive',
    icon: BookOpen,
    link: '/market-research-guide',
  },
  {
    title: 'Government Resources',
    description: 'Links to helpful government programs and services.',
    type: 'link',
    icon: LinkIcon,
    link: '/resources/government',
  },
];

const videos = [
  {
    id: 'video1',
    title: 'How to Write a Business Plan',
    description: 'Step-by-step guide to creating a winning business plan',
    youtubeId: '',
  },
  {
    id: 'video2',
    title: 'Understanding Market Research',
    description: 'Learn the basics of market research for your business',
    youtubeId: '',
  },
  {
    id: 'video3',
    title: 'Financial Planning Basics',
    description: 'Essential financial planning tips for entrepreneurs',
    youtubeId: '',
  },
  {
    id: 'video4',
    title: 'Marketing Strategies for Small Business',
    description: 'Effective marketing tactics for local businesses',
    youtubeId: '',
  },
  {
    id: 'video5',
    title: 'Legal Considerations for Startups',
    description: 'Important legal aspects of starting a business',
    youtubeId: '',
  },
  {
    id: 'video6',
    title: 'Building a Strong Team',
    description: 'Tips for hiring and managing employees',
    youtubeId: '',
  },
];

const faqs = [
  {
    question: 'What types of businesses do you support?',
    answer: 'We support a wide range of businesses in Chatham-Kent, from startups to established companies looking to expand. Our services are available to businesses in various sectors including retail, manufacturing, technology, and services.',
  },
  {
    question: 'How much funding can I apply for?',
    answer: 'Our business loans typically range from $5,000 to $250,000, depending on your business needs and qualifications. The exact amount will be determined based on your business plan, financial projections, and other factors.',
  },
  {
    question: 'What are the requirements for getting a business loan?',
    answer: 'Basic requirements include a solid business plan, good credit history, and being located in the Chatham-Kent region. You\'ll also need to demonstrate the viability of your business and your ability to repay the loan.',
  },
  {
    question: 'How long does the application process take?',
    answer: 'The application process typically takes 2-4 weeks from initial consultation to funding decision. This timeline can vary depending on the complexity of your application and the completeness of your documentation.',
  },
  {
    question: 'Do you offer business mentoring services?',
    answer: 'Yes, we provide free business counselling and mentoring services to help entrepreneurs at all stages of their business journey. Our experienced advisors can help with business planning, marketing strategies, financial management, and more.',
  },
];

export default function Resources() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ParallaxHero
        title="Business Resources"
        description="Access tools, templates, and guides to help you succeed. Our comprehensive resource library is designed to support your business journey."
        image="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        ctaText="Apply Here"
        onCtaClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
      />

      {/* Resources Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200 mb-4">
            Tools & Resources
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-heading">
            Business Resources & Tools
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access our comprehensive library of tools and resources designed to support your business journey at every stage.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group relative flex flex-col rounded-2xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 transition-all duration-300 hover:shadow-xl hover:ring-gray-300 dark:hover:ring-gray-600 cursor-pointer hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                if (resource.type === 'link' || resource.type === 'interactive') {
                  navigate(resource.link);
                  return;
                }
                window.open(resource.link, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="relative z-10 w-full h-full">
                <div className="flex items-center gap-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-primary-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 group-hover:ring-primary-200 dark:group-hover:ring-primary-700 transition-all duration-300">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <h2 className="text-xl font-bold leading-7 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-base leading-6 text-gray-600 dark:text-gray-300">{resource.description}</p>
                </div>
                <div className="mt-6">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors flex items-center">
                    Access resource
                    <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Resources */}
      <div className="bg-gradient-to-b from-primary-900 to-primary-700 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-200/30 text-primary-100 mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
              Video Resources
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100 max-w-3xl mx-auto">
              We're hard at work building even more valuable tools and video content to help you plan, launch, and grow your business. Stay tuned—more resources are on the way!
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {currentVideos.map((video) => (
              <div key={video.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative aspect-video bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-white/70 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm absolute bottom-3 right-3">
                    5:00
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                    <p className="mt-2 text-sm text-primary-100">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-x-4">
              <button
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`h-8 w-8 rounded-full text-sm font-medium flex items-center justify-center ${
                      currentPage === pageNum 
                        ? 'bg-white text-primary-700' 
                        : 'text-white hover:bg-white/10'
                    } transition-colors`}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                    aria-label={`Page ${pageNum}`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200 mb-4">
              Support
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-heading">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and support programs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl lg:max-w-5xl">
            <dl className="space-y-10">
              {faqs.map((faq, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                      <span className="text-sm font-medium">0{index + 1}</span>
                    </div>
                    <h3 className="ml-16 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-2 ml-16 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <EngagementCTA 
          title="Need More Help?"
          subtitle="Our team is here to support you with expert guidance and resources for your business journey."
          primaryButtonText="Apply Here"
          secondaryButtonText="Learn More"
          onPrimaryClick={() => window.open('https://chathamkent.commongoalsapp.com/ApplyNow?appid=2', '_blank', 'noopener,noreferrer')}
          onSecondaryClick={() => navigate('/learn-more')}
        />
      </div>
    </div>
  );
}