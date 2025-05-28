import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
