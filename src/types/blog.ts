export interface Post {
  id: string;
  title: string;
  slug: string;
  author: string;
  authorAvatar: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  readingTime: number; // in minutes
  featured?: boolean;
  tags: string[];
  content: string;
}
