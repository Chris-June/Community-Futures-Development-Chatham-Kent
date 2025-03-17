import { CounsellingService, ExpertiseArea } from '../types';

export const counsellingServices: CounsellingService[] = [
  {
    id: '1',
    title: 'One-on-One Business Counselling',
    description: 'Personalized guidance tailored to your unique business needs and goals.',
    icon: 'Users',
    benefits: [
      'Expert advice from experienced business advisors',
      'Customized strategies for your specific industry',
      'Regular progress tracking and adjustments',
      'Confidential and professional support'
    ]
  },
  {
    id: '2',
    title: 'Business Plan Development',
    description: 'Professional assistance in creating comprehensive business plans that drive success.',
    icon: 'FileText',
    benefits: [
      'Market analysis and competitive research',
      'Financial projections and budgeting',
      'Marketing and sales strategies',
      'Risk assessment and mitigation plans'
    ]
  },
  {
    id: '3',
    title: 'Financial Advisory',
    description: 'Expert guidance on financial management and funding opportunities.',
    icon: 'LineChart',
    benefits: [
      'Cash flow management strategies',
      'Funding application assistance',
      'Financial planning and forecasting',
      'Budget optimization techniques'
    ]
  },
  {
    id: '4',
    title: 'Growth Strategy Planning',
    description: 'Strategic planning to help your business expand and reach new markets.',
    icon: 'TrendingUp',
    benefits: [
      'Market expansion strategies',
      'Operational scaling plans',
      'Technology adoption guidance',
      'Performance metrics and KPIs'
    ]
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: '1',
    title: 'Startup Success',
    description: 'Launch your business with confidence using our proven startup guidance and support.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    points: [
      'Business model validation',
      'Launch strategy development',
      'Initial market penetration',
      'Risk management planning'
    ]
  },
  {
    id: '2',
    title: 'Business Growth',
    description: 'Scale your existing business with strategic planning and expert guidance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    points: [
      'Market expansion strategies',
      'Operational efficiency',
      'Team development',
      'Growth financing options'
    ]
  },
  {
    id: '3',
    title: 'Digital Transformation',
    description: 'Modernize your business with digital solutions and technology adoption strategies.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    points: [
      'Digital strategy development',
      'Technology assessment',
      'Process automation',
      'Online presence optimization'
    ]
  }
];