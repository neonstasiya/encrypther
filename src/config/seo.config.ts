/**
 * SEO Configuration
 * 
 * ============================================================================
 * LOCATION: src/config/seo.config.ts
 * ============================================================================
 * 
 * This file contains all SEO-related settings for the EncryptHer website.
 * These settings control meta tags, Open Graph tags, Twitter Cards, and
 * structured data that appear across all pages.
 * 
 * WHEN TO UPDATE:
 * - When you get a custom domain (update siteUrl)
 * - When you create social media accounts (update twitterHandle)
 * - When organization details change (email, phone, address)
 * - When you want to optimize for different keywords
 * 
 * IMPACT:
 * - Search engine rankings and visibility
 * - Social media share previews
 * - Rich results in search engines
 * 
 * See: docs/user_guides/CONFIGURATION_GUIDE.md for detailed instructions
 */

export interface SEOConfig {
  // Site Identity
  siteName: string;              // Your site name (used in titles and Open Graph)
  siteUrl: string;                // Your production URL (update when deploying to custom domain)
  defaultTitle: string;           // Default page title (used if page doesn't specify one)
  defaultDescription: string;     // Default meta description (used if page doesn't specify one)
  defaultImage: string;           // Default social share image (path relative to public folder)
  
  // Content & Authority
  author: string;                 // Author name (appears in meta tags)
  keywords: string[];             // Primary keywords for SEO (add/remove as needed)
  locale: string;                 // Language and region code (e.g., 'en_US', 'en_GB')
  
  // Branding
  themeColor: string;             // Browser theme color (hex color code)
  
  // Social Media (Optional)
  twitterHandle?: string;         // Your Twitter/X handle (e.g., '@EncryptHer')
                                  // Uncomment when you create your Twitter account
  
  // Organization Details (for structured data and contact info)
  organization: {
    name: string;                 // Organization name
    legalName: string;            // Legal business name
    foundingDate: string;         // Year founded (e.g., '2024')
    email: string;                // Primary contact email
    telephone?: string;           // Contact phone number (optional)
    address?: {                   // Physical address (optional - add when available)
      streetAddress: string;      // Street address
      addressLocality: string;    // City
      addressRegion: string;      // State/Province
      postalCode: string;         // ZIP/Postal code
      addressCountry: string;     // Country code (e.g., 'US')
    };
  };
}

export const seoConfig: SEOConfig = {
  // ============================================================================
  // SITE INFORMATION
  // ============================================================================
  siteName: 'EncryptHer',
  
  // 🔧 ACTION REQUIRED: Update this URL when you have a custom domain
  // Current: Cloudflare Pages temporary URL
  // Future: https://encrypther.org or https://www.encrypther.org
  siteUrl: 'https://encrypther.pages.dev',
  
  defaultTitle: 'EncryptHer - Your Safety, Your Privacy, Your Power',
  defaultDescription: 'EncryptHer provides essential education on online privacy, personal safety, and digital advocacy for women worldwide.',
  
  // Default image for social media shares (appears on Facebook, LinkedIn, Twitter)
  // Should be 1200x630px for best results
  defaultImage: '/images/hero-privacy.jpg',
  
  author: 'Anastasiya, Cybersecurity Analyst and Founder of EncryptHer',
  
  // ============================================================================
  // SEO KEYWORDS
  // ============================================================================
  // Add or remove keywords based on your target audience and content
  // These appear in the meta keywords tag and help with search engine optimization
  keywords: [
    'women digital safety',
    'online privacy education',
    'cybersecurity for women',
    'personal safety training',
    'travel safety women',
    'public awareness',
    'digital advocacy',
    'privacy legislation',
    'data protection',
    'women empowerment',
    'digital rights',
    'online harassment prevention',
    'situational awareness',
    'cyber safety',
    'women privacy rights'
  ],
  
  // ============================================================================
  // LOCALIZATION
  // ============================================================================
  locale: 'en_US',  // For international sites, change to appropriate locale (e.g., 'en_GB', 'fr_FR')
  
  // ============================================================================
  // BRANDING
  // ============================================================================
  themeColor: '#8b5cf6', // Primary purple color - matches brand colors in tailwind.config.ts
                          // This affects browser chrome on mobile devices
  
  // ============================================================================
  // SOCIAL MEDIA
  // ============================================================================
  // 🔧 ACTION REQUIRED: Uncomment and update when you create Twitter/X account
  // This adds Twitter Card metadata and attribution to your tweets
  // twitterHandle: '@EncryptHer',
  
  // ============================================================================
  // ORGANIZATION DETAILS (for Google structured data)
  // ============================================================================
  // This information appears in Google's Knowledge Graph and rich results
  organization: {
    name: 'EncryptHer',
    legalName: 'EncryptHer',
    foundingDate: '2024',
    email: 'info@encrypther.org',
    
    // 🔧 OPTIONAL: Add phone number when available
    // telephone: '+1-XXX-XXX-XXXX',
    
    // 🔧 OPTIONAL: Add physical address when available
    // This helps with local SEO and adds legitimacy
    // address: {
    //   streetAddress: '123 Main Street',
    //   addressLocality: 'San Francisco',
    //   addressRegion: 'CA',
    //   postalCode: '94102',
    //   addressCountry: 'US'
    // }
  }
};

/**
 * Page-specific SEO configurations
 * Override defaults for specific pages
 */
export const pageSEO = {
  home: {
    title: 'EncryptHer - Your Safety, Your Privacy, Your Power',
    description: 'EncryptHer empowers women through comprehensive education on online privacy, personal safety, travel security, and digital advocacy. Join thousands learning to protect themselves in the digital age.',
    keywords: ['women digital safety', 'online privacy education', 'cybersecurity training', 'personal safety for women']
  },
  about: {
    title: 'About EncryptHer - Our Mission & Values',
    description: 'Learn about EncryptHer\'s mission to empower women through cybersecurity education, privacy awareness, and practical safety training. Founded by cybersecurity analyst Anastasiya.',
    keywords: ['EncryptHer mission', 'women empowerment', 'cybersecurity analyst', 'privacy advocacy', 'digital safety education']
  },
  onlinePrivacy: {
    title: 'Online Privacy & Security Course - EncryptHer',
    description: '1 in 3 women experience online harassment. Learn to protect your digital footprint, secure your accounts, and maintain privacy online with our comprehensive privacy course.',
    keywords: ['online privacy', 'digital security', 'cybersecurity course', 'data protection', 'online harassment prevention']
  },
  publicSafety: {
    title: 'Public Safety & Awareness Training - EncryptHer',
    description: 'Research shows awareness and education can reduce women\'s risk of violence by up to 50%. Turn fear into preparedness with situational awareness and safety training.',
    keywords: ['public safety', 'situational awareness', 'self-defense', 'violence prevention', 'women safety training']
  },
  travelSafety: {
    title: 'Travel Safety for Women - EncryptHer',
    description: '1 in 4 female travelers feel unsafe when traveling alone. Learn to identify danger before it starts, from rideshare red flags to hotel security checks.',
    keywords: ['travel safety', 'women solo travel', 'safe travel tips', 'travel security', 'international travel safety']
  },
  digitalAdvocacy: {
    title: 'Digital Advocacy - Fighting for Privacy Rights',
    description: 'EncryptHer advocates for comprehensive federal privacy legislation. Learn how to demand privacy protections and join the fight for digital rights in America.',
    keywords: ['digital advocacy', 'privacy legislation', 'data protection laws', 'privacy rights', 'GDPR', 'CCPA', 'digital rights']
  },
  contact: {
    title: 'Contact Us - EncryptHer',
    description: 'Get in touch with EncryptHer. We\'re here to answer questions, provide support, and help with media inquiries.',
    keywords: ['contact EncryptHer', 'support', 'inquiries', 'get help']
  },
  donate: {
    title: 'Donate - Support Women\'s Digital Safety',
    description: 'Support EncryptHer\'s mission to empower women through digital safety education. Your donation helps us provide free resources and advocacy.',
    keywords: ['donate', 'support women', 'nonprofit', 'digital safety donation']
  }
};

