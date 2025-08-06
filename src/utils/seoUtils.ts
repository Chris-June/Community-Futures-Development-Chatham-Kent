interface RouteSEO {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
}

export const getRouteSEO = (pathname: string): Omit<RouteSEO, 'path'> => {
  const route = routesSEO.find((route) => route.path === pathname);
  return route || defaultSEO;
};

const defaultSEO = {
  title: 'Home',
  description: 'Empowering entrepreneurs and small businesses in Chatham-Kent with resources, funding, and support to help you start, grow, and succeed.',
  keywords: [
    'Community Futures',
    'Chatham-Kent',
    'small business',
    'entrepreneurship',
    'business loans',
    'business consulting',
  ],
};

export const routesSEO: RouteSEO[] = [
  {
    path: '/',
    ...defaultSEO,
  },
  {
    path: '/start-business',
    title: 'Start a Business',
    description: 'Resources and guidance to help you start your business in Chatham-Kent. Get support with business planning, registration, and more.',
    keywords: ['start business', 'business planning', 'business registration', 'new business'],
  },
  {
    path: '/counselling',
    title: 'Business Counselling',
    description: 'Expert business counselling services to help you navigate challenges and grow your business in Chatham-Kent.',
    keywords: ['business counselling', 'business advice', 'consulting', 'business growth'],
  },
  {
    path: '/resources',
    title: 'Business Resources',
    description: 'Access valuable resources, tools, and information to support your business journey in Chatham-Kent.',
    keywords: ['business resources', 'tools', 'templates', 'guides'],
  },
  {
    path: '/about/who-we-are',
    title: 'About Us',
    description: 'Learn about Community Futures Chatham-Kent and how we support local entrepreneurs and small businesses.',
    keywords: ['about us', 'our mission', 'our team', 'community futures'],
  },
  {
    path: '/about/team',
    title: 'Our Team',
    description: 'Meet the dedicated team at Community Futures Chatham-Kent working to support local businesses.',
    keywords: ['our team', 'staff', 'business advisors'],
  },
  {
    path: '/about/board',
    title: 'Board of Directors',
    description: 'Meet the board members guiding Community Futures Chatham-Kent in supporting local entrepreneurship.',
    keywords: ['board of directors', 'governance', 'leadership'],
  },
  {
    path: '/about/client-profiles',
    title: 'Client Success Stories',
    description: 'Read success stories from businesses we\'ve helped in the Chatham-Kent community.',
    keywords: ['success stories', 'case studies', 'client testimonials'],
  },
  {
    path: '/about/partners',
    title: 'Our Partners',
    description: 'Meet the organizations that partner with us to support Chatham-Kent businesses.',
    keywords: ['partners', 'sponsors', 'collaborators'],
  },
  {
    path: '/about/contact',
    title: 'Contact Us',
    description: 'Get in touch with Community Futures Chatham-Kent for business support and inquiries.',
    keywords: ['contact', 'get in touch', 'location', 'hours'],
  },
  // Legal pages
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Learn how Community Futures Chatham-Kent protects your privacy and handles your personal information.',
    keywords: ['privacy', 'data protection', 'personal information'],
  },
  {
    path: '/terms-of-use',
    title: 'Terms of Use',
    description: 'Terms and conditions for using the Community Futures Chatham-Kent website.',
    keywords: ['terms', 'conditions', 'website usage'],
  },
  {
    path: '/accessibility',
    title: 'Accessibility',
    description: 'Our commitment to web accessibility and how we ensure our website is usable by everyone.',
    keywords: ['accessibility', 'a11y', 'web standards'],
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer',
    description: 'Legal disclaimer for the Community Futures Chatham-Kent website.',
    keywords: ['disclaimer', 'legal notice', 'liability'],
  },
  {
    path: '/blogs',
    title: 'Blogs',
    description: 'Read the latest news, articles, and insights from Community Futures Chatham-Kent.',
    keywords: ['blog', 'news', 'articles', 'small business tips'],
  },
];
