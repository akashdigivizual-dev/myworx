// Sitemap Generator for MyWorx Website
// This script generates an XML sitemap for search engine optimization

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the hostname
const HOSTNAME = 'https://www.myworx.in';

// Define all routes with their metadata
const routes = [
  // Main Pages
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/about', priority: 0.9, changefreq: 'monthly' },
  { url: '/locations', priority: 0.9, changefreq: 'weekly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
  { url: '/price', priority: 0.8, changefreq: 'monthly' },
  { url: '/features', priority: 0.8, changefreq: 'monthly' },
  { url: '/faqs', priority: 0.8, changefreq: 'monthly' },
  { url: '/why-choose-us', priority: 0.8, changefreq: 'monthly' },
  { url: '/help-and-support', priority: 0.7, changefreq: 'monthly' },
  { url: '/privacy', priority: 0.7, changefreq: 'yearly' },
  
  // Workspace & Cabin Pages
  { url: '/private-cabin', priority: 0.8, changefreq: 'monthly' },
  { url: '/day-pass-coworking', priority: 0.8, changefreq: 'monthly' },
  { url: '/book-meeting-room', priority: 0.8, changefreq: 'monthly' },
  
  // Virtual Office Pages
  { url: '/virtual-office', priority: 0.8, changefreq: 'monthly' },
  { url: '/virtual-office-page', priority: 0.8, changefreq: 'monthly' },
  
  // Business Services Pages
  { url: '/business-registration', priority: 0.7, changefreq: 'monthly' },
  { url: '/gst-registration', priority: 0.7, changefreq: 'monthly' },
  { url: '/mailing-address', priority: 0.7, changefreq: 'monthly' },
  
  // Property Pages
  { url: '/myworx-property', priority: 0.8, changefreq: 'monthly' },
  { url: '/ace-starlit-noida-sector-152-noida', priority: 0.7, changefreq: 'monthly' },
  { url: '/our-coworking-partner', priority: 0.7, changefreq: 'monthly' },
  
  // Location-Specific Pages
  { url: '/noida-sector-1', priority: 0.8, changefreq: 'monthly' },
  { url: '/noida-sector-2', priority: 0.8, changefreq: 'monthly' },
  { url: '/noida-sector-3', priority: 0.8, changefreq: 'monthly' },
  { url: '/noida-sector-4', priority: 0.8, changefreq: 'monthly' },
  
  // Team/Person Pages
  { url: '/manoj-kumar-myworx', priority: 0.6, changefreq: 'yearly' },
  { url: '/pankaj-rathi', priority: 0.6, changefreq: 'yearly' },
];

/**
 * Generate the sitemap and write it to public/sitemap.xml
 */
async function generateSitemap() {
  try {
    // Resolve the output path
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
    
    // Create a write stream for the output file
    const writeStream = createWriteStream(outputPath);
    
    // Create a sitemap stream
    const sitemapStream = new SitemapStream({ hostname: HOSTNAME });
    
    // Connect the streams
    sitemapStream.pipe(writeStream);
    
    // Add all routes to the sitemap
    routes.forEach(route => {
      sitemapStream.write({
        url: route.url,
        priority: route.priority,
        changefreq: route.changefreq,
      });
    });
    
    // End the sitemap stream
    sitemapStream.end();
    
    // Wait for the stream to finish writing
    await streamToPromise(sitemapStream);
    
    console.log('✓ Sitemap generated successfully at public/sitemap.xml');
    console.log(`✓ Total routes: ${routes.length}`);
    console.log(`✓ Hostname: ${HOSTNAME}`);
  } catch (error) {
    console.error('✗ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Execute the sitemap generation
generateSitemap();
