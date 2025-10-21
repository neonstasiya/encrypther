/**
 * Social Media Configuration
 * 
 * ============================================================================
 * LOCATION: src/config/social-media.config.ts
 * ============================================================================
 * 
 * This file controls which social media icons appear in the website footer.
 * Icons only show up when you set `enabled: true` for that platform.
 * 
 * HOW IT WORKS:
 * 1. When enabled = false: Icon doesn't appear anywhere on the site
 * 2. When enabled = true: Icon appears in footer with clickable link
 * 3. Icons automatically update across the entire site
 * 
 * WHEN TO UPDATE:
 * - When you create a new social media account
 * - When you want to add/remove platforms from the footer
 * - When social media handles change
 * 
 * STEPS TO ADD A PLATFORM:
 * 1. Update the URL with your actual handle/page
 * 2. Update the handle field (if applicable)
 * 3. Change `enabled: false` to `enabled: true`
 * 4. Save the file - icons appear automatically!
 * 
 * See: docs/user_guides/CONFIGURATION_GUIDE.md for detailed instructions
 */

export interface SocialPlatform {
  name: string;           // Platform name (e.g., 'Twitter', 'Facebook')
  url: string;            // Full URL to your profile/page
  handle?: string;        // Your username/handle (e.g., '@EncryptHer')
  enabled: boolean;       // Set to true to show icon in footer
  icon: string;           // Icon identifier (used by rendering system)
  ariaLabel: string;      // Accessibility label for screen readers
}

export interface SocialMediaConfig {
  twitter: SocialPlatform;
  facebook: SocialPlatform;
  instagram: SocialPlatform;
  linkedin: SocialPlatform;
  youtube: SocialPlatform;
  tiktok: SocialPlatform;
  github: SocialPlatform;
  email: SocialPlatform;
}

export const socialMediaConfig: SocialMediaConfig = {
  // ============================================================================
  // TWITTER / X
  // ============================================================================
  // 🔧 TODO: Create Twitter/X account, then:
  //    1. Replace 'encrypther' with your actual handle
  //    2. Change enabled to true
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/encrypther',     // 👈 Update this
    handle: '@encrypther',                     // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Twitter',
    ariaLabel: 'Follow us on Twitter'
  },

  // ============================================================================
  // FACEBOOK
  // ============================================================================
  // 🔧 TODO: Create Facebook page, then:
  //    1. Replace 'encrypther' with your actual page name
  //    2. Change enabled to true
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/encrypther',    // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Facebook',
    ariaLabel: 'Follow us on Facebook'
  },

  // ============================================================================
  // INSTAGRAM
  // ============================================================================
  // 🔧 TODO: Create Instagram account, then:
  //    1. Replace 'encrypther' with your actual handle
  //    2. Change enabled to true
  instagram: {
    name: 'Instagram',
    url: 'https://instagram.com/encrypther',   // 👈 Update this
    handle: '@encrypther',                     // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Instagram',
    ariaLabel: 'Follow us on Instagram'
  },

  // ============================================================================
  // LINKEDIN
  // ============================================================================
  // 🔧 TODO: Create LinkedIn company page, then:
  //    1. Replace 'encrypther' with your actual company page
  //    2. Change enabled to true
  linkedin: {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/encrypther',  // 👈 Update this
    enabled: false,                                  // 👈 Change to true when ready
    icon: 'Linkedin',
    ariaLabel: 'Connect with us on LinkedIn'
  },

  // ============================================================================
  // YOUTUBE
  // ============================================================================
  // 🔧 TODO: Create YouTube channel, then:
  //    1. Replace '@encrypther' with your actual channel handle
  //    2. Change enabled to true
  youtube: {
    name: 'YouTube',
    url: 'https://youtube.com/@encrypther',    // 👈 Update this
    handle: '@encrypther',                     // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Youtube',
    ariaLabel: 'Subscribe to our YouTube channel'
  },

  // ============================================================================
  // TIKTOK
  // ============================================================================
  // 🔧 TODO: Create TikTok account, then:
  //    1. Replace '@encrypther' with your actual handle
  //    2. Change enabled to true
  tiktok: {
    name: 'TikTok',
    url: 'https://tiktok.com/@encrypther',     // 👈 Update this
    handle: '@encrypther',                     // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Music',  // Note: Using Music icon as placeholder
    ariaLabel: 'Follow us on TikTok'
  },

  // ============================================================================
  // GITHUB (for open-source resources)
  // ============================================================================
  // 🔧 TODO: If you plan to share code/resources on GitHub:
  //    1. Replace 'encrypther' with your actual organization/username
  //    2. Change enabled to true
  github: {
    name: 'GitHub',
    url: 'https://github.com/encrypther',      // 👈 Update this
    enabled: false,                            // 👈 Change to true when ready
    icon: 'Github',
    ariaLabel: 'View our open-source resources on GitHub'
  },

  // ============================================================================
  // EMAIL (Always Available)
  // ============================================================================
  // ✅ Pre-configured and enabled
  // This appears as a mailto: link in the footer
  email: {
    name: 'Email',
    url: 'mailto:info@encrypther.org',         // Update if email changes
    enabled: true,                             // Always enabled
    icon: 'Mail',
    ariaLabel: 'Email us at info@encrypther.org'
  }
};

/**
 * Get only enabled social platforms
 * Use this to filter and display only active platforms
 */
export function getEnabledPlatforms(): SocialPlatform[] {
  return Object.values(socialMediaConfig).filter(platform => platform.enabled);
}

/**
 * Get social media URLs for structured data (JSON-LD)
 * Returns array of enabled platform URLs
 */
export function getSocialMediaUrls(): string[] {
  return Object.values(socialMediaConfig)
    .filter(platform => platform.enabled && platform.name !== 'Email')
    .map(platform => platform.url);
}

