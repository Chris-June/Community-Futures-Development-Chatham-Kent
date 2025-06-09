import { CommunityPartner } from '../types';

export const communityPartners: CommunityPartner[] = [
  {
    id: 'CommunityPartner1',
    name: 'Municipality of Chatham-Kent',
    category: 'Government',
    description: 'Working together to drive economic development and support local businesses.',
    logo: 'https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?auto=format&fit=crop&w=200&h=200&q=80',
    website: 'https://www.chatham-kent.ca',
    partnership: {
      type: 'Strategic Partner',
      description: 'Collaboration on economic development initiatives and business support programs.',
      startYear: 1995,
      vision: 'Fostering sustainable economic growth and prosperity in Chatham-Kent through strategic partnerships and community development initiatives.',
      impact: 'Significantly contributed to local business growth and economic development since 1995, supporting numerous local enterprises and initiatives.',
      futureGoals: 'Continue expanding economic opportunities, supporting local entrepreneurs, and enhancing community development programs in the region.'
    },
    contactInfo: {
      email: 'info@chatham-kent.ca',
      phone: '519-360-1998',
      address: '315 King St W, Chatham, ON N7M 5K8'
    }
  }
]