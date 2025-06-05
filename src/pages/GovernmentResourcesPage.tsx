import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';

interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

const federalResources: ResourceLink[] = [
  {
    title: 'Business Planning Guide - Canada.ca',
    url: 'https://www.canada.ca/en/services/business/start/planning.html',
    description: 'How to write a business plan, access templates, sample plans, and market research.',
  },
  {
    title: 'ISED - Forms, Reports, and Guides',
    url: 'https://ised-isde.canada.ca/site/ised/en/forms-reports-guides',
    description: 'Innovation, Science and Economic Development Canada resources for businesses.',
  },
  {
    title: 'ISED - Resources for Business Corporations',
    url: 'https://ised-isde.canada.ca/site/corporations-canada/en/business-corporations/resources-business-corporations',
    description: 'Guides, forms, policies, and legislation for federally incorporated businesses.',
  },
  {
    title: 'CRA - Forms and Publications',
    url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications.html',
    description: 'Access to Canada Revenue Agency (CRA) forms, tax packages, guides, and publications.',
  },
  {
    title: 'CRA - Resources for Small and Medium Businesses',
    url: 'https://www.canada.ca/en/services/taxes/resources-for-small-and-medium-businesses.html',
    description: 'Tax information and resources for SMEs from the Canada Revenue Agency.',
  },
  {
    title: 'Canada Business App & Benefits Finder',
    url: 'https://www.canada.ca/en/services/business/programs.html', // General programs link, often leads to the app/finder
    description: 'Navigate government services, get funding recommendations, and business support.',
  },
];

const provincialResources: ResourceLink[] = [
  {
    title: 'Prepare a Business Plan - Ontario.ca',
    url: 'https://www.ontario.ca/page/business/start/prepare-business-plan',
    description: 'Guidance and resources for creating a business plan in Ontario.',
  },
  {
    title: 'Ontario Business Registry',
    url: 'https://www.ontario.ca/page/ontario-business-registry',
    description: 'Register, manage, and search for businesses in Ontario.',
  },
  {
    title: 'Indigenous Business Development Toolkit - Ontario.ca',
    url: 'https://www.ontario.ca/document/indigenous-business-development-toolkit',
    description: 'Comprehensive toolkit with planning guides, templates, and resources (useful for all).',
  },
  {
    title: 'Starting a Business in Ontario - Main Portal',
    url: 'https://www.ontario.ca/page/business/start',
    description: 'Official portal for starting and growing your business in Ontario.',
  },
  {
    title: 'Small Business Enterprise Centres - Ontario',
    url: 'https://www.ontario.ca/page/small-business-enterprise-centres',
    description: 'Find local support, advice, and resources for entrepreneurs across Ontario.',
  }
];

const legalAndIncorporationResources: ResourceLink[] = [
  {
    title: 'Choosing Federal vs. Provincial/Territorial Incorporation - Canada.ca',
    url: 'https://www.canada.ca/en/services/business/start/register-with-gov/register-corp/register-corp-fed-or-prov.html',
    description: 'Understand the differences and benefits of incorporating federally or provincially.',
  },
  {
    title: 'How to Incorporate a Federal Business - ISED Canada',
    url: 'https://ised-isde.canada.ca/site/corporations-canada/en/business-corporations/how-incorporate-business',
    description: 'Step-by-step guide to federally incorporating your business with Corporations Canada.',
  },
  {
    title: 'ISED - Resources for Business Corporations (Federal)',
    url: 'https://ised-isde.canada.ca/site/corporations-canada/en/business-corporations/resources-business-corporations',
    description: 'Guides, forms, policies, and legislation for federally incorporated businesses.',
  },
  {
    title: 'Incorporate an Ontario Business Corporation - Ontario.ca',
    url: 'https://www.ontario.ca/business/permits-licences/incorporate-an-ontario-business-corporation/',
    description: 'Official guide and requirements for incorporating your business in Ontario.',
  },
  {
    title: 'Ontario Business Registry (OBR)',
    url: 'https://www.ontario.ca/page/ontario-business-registry',
    description: 'Online portal to register, incorporate, and manage your business information in Ontario.',
  },
  {
    title: 'Decide on Business Structure - Ontario.ca',
    url: 'https://www.ontario.ca/page/business/start/choose-your-business-structure',
    description: 'Guidance on choosing the right legal structure for your business in Ontario (e.g., sole proprietorship, partnership, corporation).',
  },
];

const GovernmentResourcesPage = () => {
  const navigate = useNavigate();

  const renderResourceList = (resources: ResourceLink[], title: string) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">{title}</h2>
      <ul className="space-y-4">
        {resources.map((resource) => (
          <li key={resource.url} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {resource.title}
              <ExternalLink size={16} className="ml-2 opacity-75" />
            </a>
            {resource.description && (
              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 bg-white min-h-screen">
      <button 
        onClick={() => navigate('/resources')}
        className="mb-8 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-150"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to All Resources
      </button>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Business Resources</h1>
      <p className="text-lg text-gray-700 mb-10">
        Find official guides, templates, forms, and information from the Government of Canada and the Government of Ontario to help you start and grow your business.
      </p>

      {renderResourceList(federalResources, 'Federal Government Resources (Canada.ca)')}
      {renderResourceList(provincialResources, 'Ontario Provincial Resources (Ontario.ca)')}
      {renderResourceList(legalAndIncorporationResources, 'Legal & Incorporation Resources')}

    </div>
  );
};

export default GovernmentResourcesPage;
