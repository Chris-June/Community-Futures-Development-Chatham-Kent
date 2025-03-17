import React, { useState } from 'react';
import { FileText, Download, Link as LinkIcon, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ParallaxHero from '../components/ParallaxHero';

const resources = [
  {
    title: 'Business Plan Template',
    description: 'A comprehensive template to help you create your business plan.',
    type: 'download',
    icon: Download,
    link: '/resources/business-plan-template.pdf',
  },
  {
    title: 'Market Research Guide',
    description: 'Learn how to conduct effective market research for your business.',
    type: 'article',
    icon: FileText,
    link: '/resources/market-research',
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
    id: '1',
    title: 'How to Write a Business Plan',
    description: 'Step-by-step guide to creating a winning business plan',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Understanding Market Research',
    description: 'Learn the basics of market research for your business',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Financial Planning Basics',
    description: 'Essential financial planning tips for entrepreneurs',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Marketing Strategies for Small Business',
    description: 'Effective marketing tactics for local businesses',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '5',
    title: 'Legal Considerations for Startups',
    description: 'Important legal aspects of starting a business',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: '6',
    title: 'Building a Strong Team',
    description: 'Tips for hiring and managing employees',
    youtubeId: 'dQw4w9WgXcQ',
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
              className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:ring-gray-300 transition-all duration-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <resource.icon className="h-6 w-6 text-primary-600" />
                <span className="text-gray-500 uppercase">{resource.type}</span>
              </div>
              <div className="mt-4 flex flex-col gap-4">
                <h2 className="text-lg font-semibold leading-6 text-gray-900">
                  <a href={resource.link}>
                    <span className="absolute inset-0" />
                    {resource.title}
                  </a>
                </h2>
                <p className="text-sm leading-6 text-gray-600">{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Resources */}
      <div className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Video Resources</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Watch our educational videos to learn more about starting and growing your business.
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
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
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

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div
                className="absolute inset-0 bg-gradient-to-bl from-[#fc8089] via-[#90fc89] to-[#80b5ff] opacity-30 blur-3xl"
              />
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Business Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Connect with our team to access personalized guidance and support for your business goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline-block" />
              </a>
              <a href="/counselling" className="text-sm font-semibold leading-6 text-white">
                Learn About Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}