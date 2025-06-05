import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Link as LinkIcon, ChevronLeft, ChevronRight, Edit3, BookOpen } from 'lucide-react';
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
    title: 'Download Full Business Plan Template (MD)',
    description: 'Download the complete business plan template in Markdown format to fill out manually.',
    type: 'download',
    icon: Download,
    link: '/BusinessPlan.md', // Direct link to the markdown file in public or root
    downloadName: 'Business_Plan_Template.md',
  },
  {
    title: 'Interactive Market Research Guide',
    description: 'An interactive guide to help you learn about and plan market research activities for your Ontario business.',
    type: 'interactive',
    icon: BookOpen,
    link: '/market-research-guide',
  },
  {
    title: 'Download Market Research Guide (MD)',
    description: 'Download the complete market research guide in Markdown format for offline reference.',
    type: 'download',
    icon: Download,
    link: '/MarketResearch.md',
    downloadName: 'Market_Research_Guide.md',
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
      />

      {/* Resources Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group relative flex flex-col rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:ring-gray-300 transition-all duration-200 hover:shadow-md cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (resource.type === 'download' && resource.downloadName) {
                  // Handle download
                  const link = document.createElement('a');
                  link.href = resource.link;
                  link.download = resource.downloadName;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  return;
                } else if (resource.type === 'link' || resource.type === 'interactive') {
                  // Handle internal navigation
                  navigate(resource.link);
                  return;
                }
                // Fallback for external links
                window.open(resource.link, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="relative z-10 w-full h-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <resource.icon className="h-6 w-6 text-primary-600" />
                  <span className="text-gray-500 uppercase">{resource.type}</span>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <h2 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm leading-6 text-gray-600">{resource.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Resources */}
      <div className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Video Resources</h2>
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Coming Soon</span>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <strong>Coming Soon.</strong> We’re hard at work building even more valuable tools and video content to help you plan, launch, and grow your business. Stay tuned—more resources are on the way!
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {currentVideos.map((video) => (
              <div key={video.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-x-2">
              <button
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-700 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our services and support programs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">
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