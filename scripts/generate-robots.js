const { writeFileSync } = require('fs');
const { join } = require('path');

// Base URL for the website
const BASE_URL = 'https://communityfuturesck.ca';

// Generate robots.txt content
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;

// Write to public directory
writeFileSync(
  join(process.cwd(), 'public', 'robots.txt'),
  robotsTxt,
  'utf8'
);

console.log('robots.txt generated successfully!');
