const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { join } = require('path');
const { routesSEO } = require('../src/utils/seoUtils');

// Base URL for the website
const BASE_URL = 'https://communityfuturesck.ca';

// Priority levels for different routes
const getPriority = (path) => {
  if (path === '/') return 1.0;
  if (path.startsWith('/about') || path.startsWith('/resources')) return 0.8;
  if (path.startsWith('/start-business') || path.startsWith('/counselling')) return 0.9;
  return 0.7; // Lower priority for legal pages and others
};

// Change frequency for different routes
const getChangeFreq = (path) => {
  if (path === '/') return 'weekly';
  if (path.startsWith('/about/team') || path.startsWith('/about/board')) return 'monthly';
  if (path.startsWith('/about/client-profiles')) return 'weekly';
  return 'monthly';
};

async function generateSitemap() {
  try {
    // Create a stream to write to
    const sitemap = new SitemapStream({
      hostname: BASE_URL,
      xmlns: {
        // XML namespaces
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    });

    // Create a write stream to the public directory
    const writeStream = createWriteStream(
      join(process.cwd(), 'public', 'sitemap.xml')
    );

    // Pipe the sitemap to the write stream
    sitemap.pipe(writeStream);

    // Add all routes to the sitemap
    routesSEO.forEach((route) => {
      sitemap.write({
        url: route.path === '/' ? '/' : route.path,
        changefreq: getChangeFreq(route.path),
        priority: getPriority(route.path),
        lastmod: new Date().toISOString(),
      });
    });

    // Add any additional URLs that might not be in the routes
    const additionalUrls = [
      // Add any additional URLs here if needed
    ];

    additionalUrls.forEach((url) => {
      sitemap.write({
        url,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      });
    });

    // Generate sitemap
    sitemap.end();
    await streamToPromise(sitemap);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
