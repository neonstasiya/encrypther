# EncryptHer Configuration Guide

**For:** Website Administrators & Content Editors  
**Last Updated:** October 2025  
**Difficulty:** Beginner-Friendly

---

## 📍 Quick Navigation

- [Configuration Files Overview](#configuration-files-overview)
- [SEO Settings](#seo-settings)
- [Social Media Setup](#social-media-setup)
- [Analytics Setup](#analytics-setup)
- [Content Management](#content-management)
- [Common Tasks](#common-tasks)

---

## Configuration Files Overview

All website settings are stored in easy-to-edit configuration files. You only need to update these files - the website automatically uses your settings everywhere.

### Where Are The Config Files?

All configuration files are located in:
```
src/config/
├── seo.config.ts          ← SEO & meta tags
├── social-media.config.ts ← Social media links
└── analytics.config.ts    ← Google Analytics & Cloudflare
```

### How To Edit

1. Open the file in any text editor
2. Find the setting you want to change
3. Update the value
4. Save the file
5. Rebuild the website (`npm run build`)

**That's it!** Your changes automatically appear everywhere on the site.

---

## SEO Settings

**File:** `src/config/seo.config.ts`

### What It Controls

- Page titles in browser tabs
- Descriptions in Google search results
- Social media share previews (Facebook, LinkedIn, Twitter)
- Search engine optimization
- Site branding

### Common Tasks

#### Update Site URL (When You Get a Domain)

**When:** You get a custom domain like `encrypther.org`

```typescript
// Find this line:
siteUrl: 'https://encrypther.pages.dev',

// Change to:
siteUrl: 'https://encrypther.org',
```

**Also update in:** `astro.config.mjs` (same change)

#### Add Twitter Handle

**When:** You create a Twitter/X account

```typescript
// Find this commented line:
// twitterHandle: '@EncryptHer',

// Remove the // and update:
twitterHandle: '@YourActualHandle',
```

#### Update Contact Email

```typescript
// Find:
email: 'info@encrypther.org',

// Change to:
email: 'your-new@email.com',
```

#### Add Physical Address (Optional)

**When:** You have a physical location

```typescript
// Find the commented address section:
// address: {
//   streetAddress: '123 Main Street',
//   ...
// }

// Remove the // and fill in:
address: {
  streetAddress: '123 Main Street',
  addressLocality: 'San Francisco',
  addressRegion: 'CA',
  postalCode: '94102',
  addressCountry: 'US'
}
```

#### Update Keywords

**When:** You want to target different search terms

```typescript
// Find the keywords array:
keywords: [
  'women digital safety',
  'online privacy education',
  // ... more keywords
],

// Add or remove keywords:
keywords: [
  'your new keyword',
  'another keyword',
  // ... etc
],
```

---

## Social Media Setup

**File:** `src/config/social-media.config.ts`

### What It Controls

- Social media icons in the website footer
- Links to your social media profiles
- Which platforms are visible

### How It Works

Each platform has an `enabled` setting:
- `enabled: false` → Icon doesn't appear
- `enabled: true` → Icon appears in footer with your link

### Adding a Social Platform

**Example: Adding Twitter**

1. Open `src/config/social-media.config.ts`
2. Find the Twitter section
3. Update the URL and handle:

```typescript
twitter: {
  name: 'Twitter',
  url: 'https://twitter.com/YourHandle',     // 👈 Your actual Twitter
  handle: '@YourHandle',                      // 👈 Your handle
  enabled: true,                              // 👈 Change to true!
  icon: 'Twitter',
  ariaLabel: 'Follow us on Twitter'
},
```

4. Save the file
5. Rebuild the site
6. The Twitter icon now appears in your footer!

### Supported Platforms

✅ Twitter/X  
✅ Facebook  
✅ Instagram  
✅ LinkedIn  
✅ YouTube  
✅ TikTok  
✅ GitHub  
✅ Email (always visible)

### Quick Enable Checklist

For each platform you want to add:

- [ ] Create the social media account
- [ ] Update the `url` with your actual profile
- [ ] Update the `handle` (if applicable)
- [ ] Change `enabled: false` to `enabled: true`
- [ ] Save and rebuild

---

## Analytics Setup

**File:** `src/config/analytics.config.ts`

### What It Controls

- Google Analytics 4 tracking
- Cloudflare Web Analytics
- Visitor statistics

### Important: Privacy First

**Both analytics are DISABLED by default.** They only start tracking after you explicitly enable them.

### Google Analytics Setup

**When:** You want detailed visitor statistics

#### Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" → "Create Property"
3. Follow the setup wizard
4. Get your Measurement ID (looks like: `G-ABC123XYZ`)

#### Step 2: Add to Website

Open `src/config/analytics.config.ts`:

```typescript
googleAnalytics: {
  enabled: true,                      // 👈 Change to true
  measurementId: 'G-ABC123XYZ',       // 👈 Your actual ID
  enableInDev: false,                 // Keep false
},
```

#### Step 3: Rebuild and Deploy

```bash
npm run build
# Deploy to Cloudflare Pages
```

### Cloudflare Analytics Setup

**When:** You deploy to Cloudflare Pages

#### Super Easy Setup:

1. Deploy your site to Cloudflare Pages
2. Open `src/config/analytics.config.ts`
3. Change one line:

```typescript
cloudflareAnalytics: {
  enabled: true,    // 👈 That's it!
  enableInDev: false,
},
```

4. Rebuild and deploy

#### View Your Stats:

1. Go to Cloudflare Dashboard
2. Navigate to: Analytics → Web Analytics
3. View your traffic stats!

### Privacy Notes

- **Google Analytics:** Anonymizes IP addresses automatically
- **Cloudflare Analytics:** Doesn't use cookies at all
- **Both:** Only track when enabled
- **Development:** No tracking in dev mode

---

## Content Management

### Where Is Content Stored?

Content is organized in:
```
src/content/
├── README.md              ← Content editing guide
├── index/                 ← Homepage content
├── about/                 ← About page content
├── online-privacy/        ← Program pages
├── travel-safety/
├── public-safety/
└── digital-advocacy/
```

### How To Edit Content

See the detailed guide at: `src/content/README.md`

**Quick summary:**
- Content uses Markdown format (easy to edit)
- Each section has frontmatter (settings) and content
- Enable/disable sections with `enabled: true/false`
- Reorder sections with `order: 1, 2, 3...`

---

## Common Tasks

### Task: Update When You Get a Custom Domain

**Files to Update:**
1. `src/config/seo.config.ts` - Update `siteUrl`
2. `astro.config.mjs` - Update `site`

**Example:**
```typescript
// Both files:
// Change from:
'https://encrypther.pages.dev'

// To:
'https://encrypther.org'
```

### Task: Add All Social Media at Once

1. Create all your social accounts first
2. Open `src/config/social-media.config.ts`
3. For each platform:
   - Update the `url`
   - Update the `handle`
   - Change `enabled: false` to `enabled: true`
4. Save and rebuild

### Task: Change Contact Email Everywhere

**Primary location:** `src/config/seo.config.ts`

```typescript
organization: {
  email: 'your-new@email.com',  // Update here
}
```

**Also check:**
- Footer component (uses config automatically)
- Contact page content
- Social media config (email platform)

### Task: Update Site Branding Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: 'hsl(var(--primary))',  // Purple brand color
  accent: 'hsl(var(--accent))',    // Pink accent color
}
```

**File:** `src/styles/global.css`

```css
:root {
  --primary: 280 70% 45%;    /* Purple */
  --accent: 320 65% 55%;     /* Pink */
}
```

---

## Need Help?

### Documentation Files

- **This Guide:** Configuration settings
- **Content Guide:** `src/content/README.md` - Editing content
- **Deployment Guide:** `docs/machine_guides/DEPLOYMENT.md` - Deploying to Cloudflare
- **README:** `README.md` - Project overview

### Common Issues

**Q: I updated a config file but nothing changed**  
**A:** Did you rebuild the site? Run `npm run build` after changes.

**Q: Social media icon not showing**  
**A:** Check that `enabled: true` and the URL is correct.

**Q: Analytics not working**  
**A:** Make sure `enabled: true` and you're viewing the live site (not localhost).

### File Locations Quick Reference

| What | File Path |
|------|-----------|
| SEO Settings | `src/config/seo.config.ts` |
| Social Media | `src/config/social-media.config.ts` |
| Analytics | `src/config/analytics.config.ts` |
| Content | `src/content/` |
| Styles | `src/styles/global.css` |
| Colors | `tailwind.config.ts` |
| Build Config | `astro.config.mjs` |

---

**Next Steps:**
1. ✅ Read this guide
2. 📝 Update your configuration files
3. 🔨 Rebuild the site: `npm run build`
4. 🚀 Deploy to Cloudflare Pages

**Happy configuring! 🎉**

