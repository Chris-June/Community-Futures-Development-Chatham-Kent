import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  robots?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Community Futures - Chatham-Kent',
  description = 'Empowering entrepreneurs and small businesses in Chatham-Kent with resources, funding, and support to help you start, grow, and succeed.',
  keywords = [
    'Community Futures',
    'Chatham-Kent',
    'small business',
    'entrepreneurship',
    'business loans',
    'business consulting',
    'business resources',
  ],
  author = 'Community Futures Development Corporation of Chatham-Kent',
  url = typeof window !== 'undefined' ? window.location.href : '',
  image = '/images/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  twitterCardType = 'summary_large_image',
  twitterSite = '@cfdcck',
  twitterCreator = '@cfdcck',
  robots = 'index, follow',
  children,
}) => {
  const siteName = 'Community Futures Chatham-Kent';
  const fullTitle = title === 'Home' ? siteName : `${title} | ${siteName}`;
  const fullKeywords = [...new Set([...keywords, siteName, 'Chatham-Kent', 'business support'])];

  return (
    <>
      <Helmet
        title={fullTitle}
        meta={[
          // Basic meta tags
          { name: 'description', content: description },
          { name: 'keywords', content: fullKeywords.join(', ') },
          { name: 'author', content: author },
          { name: 'robots', content: robots },

          // Open Graph / Facebook
          { property: 'og:title', content: fullTitle },
          { property: 'og:description', content: description },
          { property: 'og:type', content: type },
          { property: 'og:url', content: url },
          { property: 'og:image', content: image },
          { property: 'og:site_name', content: siteName },

          // Twitter
          { name: 'twitter:card', content: twitterCardType },
          { name: 'twitter:site', content: twitterSite },
          { name: 'twitter:creator', content: twitterCreator },
          { name: 'twitter:title', content: fullTitle },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: image },

          // Article specific
          ...(type === 'article'
            ? [
                { property: 'article:published_time', content: publishedTime },
                { property: 'article:modified_time', content: modifiedTime || publishedTime },
                { property: 'article:section', content: section },
                ...(tags?.map((tag) => ({
                  property: 'article:tag',
                  content: tag,
                })) || []),
              ]
            : []),
        ]}
      />
      {children}
    </>
  );
};

export default SEO;
