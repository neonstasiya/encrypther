/**
 * Analytics Configuration
 * 
 * ============================================================================
 * LOCATION: src/config/analytics.config.ts
 * ============================================================================
 * 
 * This file controls website analytics tracking.
 * Both analytics services are DISABLED by default for privacy.
 * 
 * SUPPORTED PLATFORMS:
 * 1. Google Analytics 4 (GA4) - Detailed visitor analytics
 * 2. Cloudflare Web Analytics - Privacy-focused, no cookies
 * 
 * WHEN TO ENABLE:
 * - After you've deployed to production
 * - When you're ready to track visitor statistics
 * - When you have analytics accounts set up
 * 
 * HOW TO ENABLE GOOGLE ANALYTICS:
 * 1. Create a GA4 property at analytics.google.com
 * 2. Get your Measurement ID (looks like: G-XXXXXXXXXX)
 * 3. Update measurementId below
 * 4. Change enabled to true
 * 
 * HOW TO ENABLE CLOUDFLARE ANALYTICS:
 * 1. Deploy to Cloudflare Pages (it's automatic!)
 * 2. Change enabled to true
 * 3. View stats in Cloudflare Dashboard
 * 
 * PRIVACY NOTE:
 * - Both tracking scripts only load when enabled
 * - No tracking happens in development mode by default
 * - Google Analytics anonymizes IP addresses
 * - Cloudflare Analytics doesn't use cookies
 * 
 * See: docs/user_guides/CONFIGURATION_GUIDE.md for detailed instructions
 */

export interface AnalyticsConfig {
  googleAnalytics: {
    enabled: boolean;         // Set to true to enable GA4 tracking
    measurementId: string;    // Your GA4 Measurement ID (G-XXXXXXXXXX)
    enableInDev: boolean;     // Set to true to test tracking in development
  };
  cloudflareAnalytics: {
    enabled: boolean;         // Set to true to enable Cloudflare analytics
    token?: string;           // Optional - only needed for custom beacon
    enableInDev: boolean;     // Cloudflare analytics only work in production
  };
}

export const analyticsConfig: AnalyticsConfig = {
  // ============================================================================
  // GOOGLE ANALYTICS 4 (GA4)
  // ============================================================================
  // 🔧 TODO: When you're ready to track visitors:
  //    1. Go to analytics.google.com and create a GA4 property
  //    2. Get your Measurement ID (format: G-XXXXXXXXXX)
  //    3. Replace 'G-XXXXXXXXXX' below with your actual ID
  //    4. Change enabled to true
  // 
  // WHAT IT TRACKS:
  // - Page views
  // - User demographics
  // - Traffic sources
  // - User behavior and engagement
  // 
  // PRIVACY:
  // - IP addresses are anonymized
  // - Complies with GDPR when configured properly
  googleAnalytics: {
    enabled: false,                     // 👈 Change to true when ready
    measurementId: 'G-XXXXXXXXXX',      // 👈 Replace with your GA4 ID
    enableInDev: false,                 // Keep false unless testing
  },

  // ============================================================================
  // CLOUDFLARE WEB ANALYTICS
  // ============================================================================
  // 🔧 TODO: When deployed to Cloudflare Pages:
  //    1. Analytics are automatically available in your dashboard
  //    2. Change enabled to true
  //    3. View stats at: Cloudflare Dashboard → Analytics → Web Analytics
  // 
  // WHAT IT TRACKS:
  // - Page views
  // - Unique visitors
  // - Traffic sources
  // - Core Web Vitals
  // 
  // PRIVACY:
  // - No cookies used
  // - Privacy-focused tracking
  // - GDPR compliant by default
  cloudflareAnalytics: {
    enabled: false,                     // 👈 Change to true when deployed
    // token: 'XXXXXXXXXXXXX',          // Optional - usually not needed
    enableInDev: false,                 // Always keep false (doesn't work locally)
  }
};

/**
 * Check if we're in production environment
 */
export function isProduction(): boolean {
  return import.meta.env.PROD;
}

/**
 * Check if Google Analytics should be enabled
 */
export function shouldEnableGA(): boolean {
  const { enabled, enableInDev } = analyticsConfig.googleAnalytics;
  return enabled && (isProduction() || enableInDev);
}

/**
 * Check if Cloudflare Analytics should be enabled
 */
export function shouldEnableCF(): boolean {
  const { enabled, enableInDev } = analyticsConfig.cloudflareAnalytics;
  return enabled && (isProduction() || enableInDev);
}

