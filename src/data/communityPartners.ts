import { CommunityPartner } from '../types';

export const communityPartners: CommunityPartner[] = [
  {
    id: '1',
    name: 'Municipality of Chatham-Kent',
    category: 'Government',
    description: 'Working together to drive economic development and support local businesses.',
    logo: 'https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?auto=format&fit=crop&w=200&h=200&q=80',
    website: 'https://www.chatham-kent.ca',
    partnership: {
      type: 'Strategic Partner',
      description: 'Collaboration on economic development initiatives and business support programs.',
      startYear: 1995
    },
    contactInfo: {
      email: 'info@chatham-kent.ca',
      phone: '519-360-1998',
      address: '315 King St W, Chatham, ON N7M 5K8'
    }
  },
  {
    id: '2',
    name: 'St. Clair College',
    category: 'Education',
    description: 'Collaborating on entrepreneurship programs and skills development initiatives.',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=200&h=200&q=80',
    website: 'https://www.stclaircollege.ca',
    partnership: {
      type: 'Education Partner',
      description: 'Joint programs for business training and entrepreneurship development.',
      startYear: 2010
    },
    contactInfo: {
      email: 'info@stclaircollege.ca',
      phone: '519-354-9100',
      address: '1001 Grand Ave W, Chatham, ON N7M 5W4'
    }
  },
  {
    id: '3',
    name: 'Chatham-Kent Chamber of Commerce',
    category: 'Business Association',
    description: 'Partnering to provide networking and growth opportunities for local businesses.',
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&h=200&q=80',
    website: 'https://www.chatham-kentchamber.ca',
    partnership: {
      type: 'Network Partner',
      description: 'Collaboration on business events and member services.',
      startYear: 2000
    },
    contactInfo: {
      email: 'info@chatham-kentchamber.ca',
      phone: '519-352-7540',
      address: '54 Fourth St, Chatham, ON N7M 2G2'
    }
  }
];