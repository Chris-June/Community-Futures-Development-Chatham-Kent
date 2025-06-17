export interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  image: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Statistic {
  value: string;
  label: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  businessName: string;
  image: string;
  description: string;
  cta?: {
    url: string;
    text?: string;
  };
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export interface NavStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  background: string;
  communityImportance: string;
  economicImpact: string;
  personalMessage: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface ClientProfile {
  id: string;
  businessName: string;
  ownerName: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  testimonial: string;
  image: string;
  yearFounded: number;
  location: string;
}

export interface CommunityPartner {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  website: string;
  partnership: {
    type: string;
    description: string;
    startYear: number;
    vision: string;
    impact: string;
    futureGoals: string;
  };
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  background: string;
  roleImportance: string;
  communityImpact: string;
  personalStatement: string;
  image: string;
  email: string;
}

export interface BusinessTip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BusinessStep {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CounsellingService {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}