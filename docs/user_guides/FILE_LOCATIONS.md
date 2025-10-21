# File Locations Reference

**Your complete map to the EncryptHer repository**

This guide helps you find any file you need to edit. Use Ctrl+F to search for what you're looking for.

---

## 🎯 Quick Finder

**I want to update...**

- [SEO settings (titles, descriptions)](#seo--meta-tags) → `src/config/seo.config.ts`
- [Social media links](#social-media) → `src/config/social-media.config.ts`
- [Analytics tracking](#analytics) → `src/config/analytics.config.ts`
- [Page content](#content-files) → `src/content/`
- [Site colors and branding](#styling--branding) → `tailwind.config.ts` & `src/styles/global.css`
- [Navigation menu](#navigation-menu) → `src/components/Header.astro`
- [Footer links](#footer) → `src/components/Footer.astro`
- [Homepage](#page-files) → `src/pages/index.astro`
- [Contact form](#contact-form) → `src/pages/contact.astro`
- [Logo and images](#images) → `public/images/`

---

## 📂 Configuration Files

### SEO & Meta Tags

**File:** `src/config/seo.config.ts`

**What's Inside:**
- Site title and description
- Organization details (name, email, phone, address)
- SEO keywords
- Twitter handle
- Site URL
- Author information
- Default social share image

**When to Edit:**
- Getting a custom domain
- Changing contact information
- Adding Twitter handle
- Updating keywords for SEO

---

### Social Media

**File:** `src/config/social-media.config.ts`

**What's Inside:**
- Twitter/X link and settings
- Facebook page link
- Instagram handle
- LinkedIn company page
- YouTube channel
- TikTok account
- GitHub organization
- Contact email

**When to Edit:**
- Creating new social media accounts
- Changing social media handles
- Enabling/disabling platforms in footer

---

### Analytics

**File:** `src/config/analytics.config.ts`

**What's Inside:**
- Google Analytics 4 configuration
- Cloudflare Web Analytics configuration
- Environment detection settings

**When to Edit:**
- Enabling analytics after deployment
- Adding Google Analytics Measurement ID
- Testing analytics in development

---

### Build Configuration

**File:** `astro.config.mjs`

**What's Inside:**
- Site URL configuration
- Sitemap settings
- Build optimizations
- Cloudflare Pages settings
- Vite performance config

**When to Edit:**
- Getting a custom domain
- Changing build settings
- Adding new Astro integrations

---

### Theme & Colors

**File:** `tailwind.config.ts`

**What's Inside:**
- Tailwind CSS configuration
- Color definitions (primary, accent, etc.)
- Breakpoint settings
- Container settings

**When to Edit:**
- Changing brand colors
- Updating responsive breakpoints
- Customizing design tokens

**File:** `src/styles/global.css`

**What's Inside:**
- CSS custom properties (HSL color values)
- Dark mode color definitions
- Animation keyframes
- Global styles

**When to Edit:**
- Fine-tuning colors
- Adjusting dark mode appearance
- Modifying animations

---

## 📄 Page Files

All page files are in: `src/pages/`

### Main Pages

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.astro` | Main landing page |
| About | `about.astro` | Mission and values |
| Contact | `contact.astro` | Contact form and info |
| Online Privacy | `online-privacy.astro` | Privacy course page |
| Travel Safety | `travel-safety.astro` | Travel safety course |
| Public Safety | `public-safety.astro` | Public safety course |
| Digital Advocacy | `digital-advocacy.astro` | Advocacy information |
| Donate | `donate.astro` | Donation page |
| Newsletter | `newsletter.astro` | Newsletter signup |
| Blog | `blog.astro` | Blog listing |
| Safety Guides | `safety-guides.astro` | Resources page |
| 404 Error | `404.astro` | Custom error page |

**When to Edit:**
- Changing page layout
- Adding/removing sections
- Updating page-specific SEO

---

## 🧩 Component Files

All components are in: `src/components/`

### Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| Base Layout | `layouts/BaseLayout.astro` | Wrapper for all pages |
| Header | `Header.astro` | Top navigation bar |
| Footer | `Footer.astro` | Bottom footer section |
| Hero | `Hero.astro` | Page hero sections |

### Feature Components

| Component | File | Purpose |
|-----------|------|---------|
| Card | `Card.astro` | Content cards |
| CTA | `CTA.astro` | Call-to-action sections |
| Feature Grid | `sections/FeatureGrid.astro` | Grid layouts |
| Dark Mode Toggle | `DarkModeToggle.astro` | Theme switcher |
| Glitch Text | `GlitchText.astro` | Animated text effect |

### SEO & Analytics Components

| Component | File | Purpose |
|-----------|------|---------|
| Structured Data | `StructuredData.astro` | JSON-LD for search engines |
| Google Analytics | `GoogleAnalytics.astro` | GA4 tracking code |
| Cloudflare Analytics | `CloudflareAnalytics.astro` | CF tracking code |

---

## 📝 Content Files

All content is in: `src/content/`

### Content Organization

```
src/content/
├── README.md              ← Content editing guide (START HERE)
├── index/                 ← Homepage sections
│   ├── hero.md
│   └── what-we-do.md
├── about/                 ← About page sections
├── online-privacy/        ← Privacy course content
├── travel-safety/         ← Travel safety content
├── public-safety/         ← Public safety content
├── digital-advocacy/      ← Advocacy content
├── donate/                ← Donation page content
└── contact/               ← Contact page content
```

**How to Edit:** See the detailed guide at `src/content/README.md`

---

## 🖼️ Images

**Location:** `public/images/`

### Current Images

| Image | Purpose |
|-------|---------|
| `encrypther-logo.png` | Main logo (header, footer, social share) |
| `hero-privacy.jpg` | Hero background image |
| `privacy-paper.jpg` | Online privacy course |
| `street-awareness.jpg` | Public safety course |
| `travel-luggage.jpg` | Travel safety course |
| `advocacy.jpg` | Digital advocacy |
| `founder-photo.png` | Founder photo |

**Adding New Images:**
1. Save image in `public/images/`
2. Reference in code: `/images/your-image.jpg`
3. Optimize before adding (< 200KB recommended)

---

## ⚙️ Scripts & Utilities

All scripts are in: `src/scripts/`

| Script | Purpose | User-Editable? |
|--------|---------|----------------|
| `scroll-animations.ts` | Fade-in animations | ⚠️ Advanced |
| `prefetch.ts` | Link prefetching | ⚠️ Advanced |
| `performance-monitor.ts` | Core Web Vitals | ⚠️ Advanced |

**Note:** Scripts are pre-configured. Only edit if you know what you're doing.

---

## 📋 Public Files

**Location:** `public/`

| File | Purpose | User-Editable? |
|------|---------|----------------|
| `favicon.svg` | Browser tab icon | ✅ Yes (replace image) |
| `robots.txt` | Search engine rules | ⚠️ Advanced |
| `_headers` | Security headers | ⚠️ Advanced |
| `manifest.json` | PWA settings | ⚠️ Advanced |
| `images/` | All images | ✅ Yes |

---

## 📚 Documentation Files

### User Guides (for humans)

**Location:** `docs/user_guides/`

| File | Purpose |
|------|---------|
| `QUICK_START.md` | 15-minute deployment guide |
| `CONFIGURATION_GUIDE.md` | Complete config reference |
| `FILE_LOCATIONS.md` | This file! |

### Machine Guides (for developers/AI)

**Location:** `docs/machine_guides/`

| File | Purpose |
|------|---------|
| `DEPLOYMENT.md` | Technical deployment guide |
| `SEO_IMPLEMENTATION_SUMMARY.md` | SEO implementation details |
| `PERFORMANCE_IMPROVEMENTS.md` | Performance optimizations |
| `FINAL_STATUS.md` | Project status and overview |

### Root Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `docs/README.md` | Documentation index |

---

## 🎨 Styling & Branding

### Global Styles

**File:** `src/styles/global.css`

**What's Inside:**
- CSS variables for colors
- Dark mode styles
- Animation keyframes
- Base styles

### Tailwind Configuration

**File:** `tailwind.config.ts`

**What's Inside:**
- Color scheme definitions
- Typography settings
- Breakpoints
- Custom utilities

### Theme Configuration

**File:** `src/config/theme.config.ts`

**What's Inside:**
- Theme-related constants
- Currently minimal (can be expanded)

---

## 🔧 Development Files

| File | Purpose | User-Editable? |
|------|---------|----------------|
| `package.json` | Dependencies & scripts | ⚠️ Advanced |
| `tsconfig.json` | TypeScript config | ❌ No |
| `.gitignore` | Git ignore rules | ⚠️ Advanced |
| `.cloudflare-pages` | Deployment notes | ✅ Yes (reference only) |
| `src/content.config.ts` | Content collections | ❌ No |

---

## 🗺️ Full Directory Structure

```
encrypther/
├── public/                    # Static assets
│   ├── images/               # All images
│   ├── favicon.svg           # Site icon
│   ├── robots.txt            # SEO crawling rules
│   ├── _headers              # Security headers
│   └── manifest.json         # PWA settings
│
├── src/
│   ├── components/           # Reusable components
│   │   ├── Header.astro      # Navigation bar
│   │   ├── Footer.astro      # Footer section
│   │   ├── Hero.astro        # Hero sections
│   │   ├── Card.astro        # Content cards
│   │   ├── CTA.astro         # Call-to-action
│   │   ├── DarkModeToggle.astro
│   │   ├── GlitchText.astro
│   │   ├── StructuredData.astro
│   │   ├── GoogleAnalytics.astro
│   │   ├── CloudflareAnalytics.astro
│   │   └── sections/         # Section components
│   │       └── FeatureGrid.astro
│   │
│   ├── config/               # ⭐ CONFIGURATION FILES
│   │   ├── seo.config.ts     # SEO settings
│   │   ├── social-media.config.ts  # Social links
│   │   ├── analytics.config.ts     # Analytics
│   │   ├── theme.config.ts   # Theme settings
│   │   └── web3forms.config.ts     # Form config
│   │
│   ├── content/              # ⭐ CONTENT FILES
│   │   ├── README.md         # Content editing guide
│   │   ├── index/            # Homepage content
│   │   ├── about/            # About page content
│   │   ├── online-privacy/   # Privacy course
│   │   ├── travel-safety/    # Travel course
│   │   ├── public-safety/    # Safety course
│   │   └── digital-advocacy/ # Advocacy content
│   │
│   ├── layouts/              # Page layouts
│   │   └── BaseLayout.astro  # Main wrapper
│   │
│   ├── pages/                # Website pages
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # About page
│   │   ├── contact.astro     # Contact page
│   │   └── (more pages...)
│   │
│   ├── scripts/              # JavaScript files
│   │   ├── scroll-animations.ts
│   │   ├── prefetch.ts
│   │   └── performance-monitor.ts
│   │
│   ├── styles/               # Global styles
│   │   └── global.css
│   │
│   └── content.config.ts     # Content collections
│
├── docs/                     # ⭐ DOCUMENTATION
│   ├── README.md             # Docs index
│   ├── user_guides/          # Human-friendly guides
│   │   ├── QUICK_START.md
│   │   ├── CONFIGURATION_GUIDE.md
│   │   └── FILE_LOCATIONS.md (this file)
│   └── machine_guides/       # Technical docs
│       ├── DEPLOYMENT.md
│       ├── SEO_IMPLEMENTATION_SUMMARY.md
│       ├── PERFORMANCE_IMPROVEMENTS.md
│       └── FINAL_STATUS.md
│
├── dist/                     # Build output (generated)
├── node_modules/             # Dependencies (generated)
│
├── README.md                 # Project overview
├── package.json              # Dependencies & scripts
├── astro.config.mjs          # Astro configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── .gitignore                # Git ignore rules
```

---

## 📍 By Task: Where Do I Go?

### Website Content

| Task | Location | Difficulty |
|------|----------|------------|
| Edit homepage text | `src/content/index/` | ⭐ Easy |
| Edit about page | `src/content/about/` | ⭐ Easy |
| Edit course descriptions | `src/content/online-privacy/` etc. | ⭐ Easy |
| Update blog posts | `src/content/blog/` (future) | ⭐ Easy |
| See content editing guide | `src/content/README.md` | ⭐ Easy |

### SEO & Metadata

| Task | Location | Difficulty |
|------|----------|------------|
| Update page titles | `src/config/seo.config.ts` | ⭐ Easy |
| Change meta descriptions | Individual page files | ⭐⭐ Medium |
| Add keywords | `src/config/seo.config.ts` | ⭐ Easy |
| Update site URL | `src/config/seo.config.ts` + `astro.config.mjs` | ⭐ Easy |
| Add Twitter handle | `src/config/seo.config.ts` | ⭐ Easy |

### Social Media

| Task | Location | Difficulty |
|------|----------|------------|
| Add social media icon | `src/config/social-media.config.ts` | ⭐ Easy |
| Update social links | `src/config/social-media.config.ts` | ⭐ Easy |
| Enable/disable platforms | `src/config/social-media.config.ts` | ⭐ Easy |
| Customize footer social | `src/components/Footer.astro` | ⭐⭐⭐ Advanced |

### Analytics

| Task | Location | Difficulty |
|------|----------|------------|
| Enable Google Analytics | `src/config/analytics.config.ts` | ⭐ Easy |
| Enable Cloudflare Analytics | `src/config/analytics.config.ts` | ⭐ Easy |
| Add GA4 Measurement ID | `src/config/analytics.config.ts` | ⭐ Easy |

### Design & Styling

| Task | Location | Difficulty |
|------|----------|------------|
| Change primary color | `src/styles/global.css` | ⭐⭐ Medium |
| Update dark mode colors | `src/styles/global.css` | ⭐⭐ Medium |
| Modify animations | `src/styles/global.css` | ⭐⭐⭐ Advanced |
| Add custom Tailwind classes | `tailwind.config.ts` | ⭐⭐⭐ Advanced |

### Navigation

| Task | Location | Difficulty |
|------|----------|------------|
| Add menu item | `src/components/Header.astro` | ⭐⭐ Medium |
| Update footer links | `src/components/Footer.astro` | ⭐⭐ Medium |
| Change logo | `public/images/encrypther-logo.png` | ⭐ Easy |

### Images

| Task | Location | Difficulty |
|------|----------|------------|
| Add new image | `public/images/` | ⭐ Easy |
| Update logo | `public/images/encrypther-logo.png` | ⭐ Easy |
| Change hero background | `public/images/hero-privacy.jpg` | ⭐ Easy |
| Update favicon | `public/favicon.svg` | ⭐ Easy |

### Contact Form

| Task | Location | Difficulty |
|------|----------|------------|
| Edit form fields | `src/pages/contact.astro` | ⭐⭐ Medium |
| Update contact emails | Multiple locations (see below) | ⭐⭐ Medium |

**Contact email appears in:**
- `src/config/seo.config.ts` - Organization email
- `src/config/social-media.config.ts` - Email icon
- `src/pages/contact.astro` - Contact page

---

## 🔍 By File Type

### Configuration Files (.ts)
```
src/config/
├── seo.config.ts          ⭐ EDIT OFTEN
├── social-media.config.ts ⭐ EDIT OFTEN
├── analytics.config.ts    ⭐ EDIT OFTEN
├── theme.config.ts        ⚠️ ADVANCED
└── web3forms.config.ts    ⚠️ ADVANCED
```

### Page Files (.astro)
```
src/pages/
├── index.astro            ⭐ EDIT OCCASIONALLY
├── about.astro            ⭐ EDIT OCCASIONALLY
├── contact.astro          ⭐ EDIT OCCASIONALLY
└── (more pages...)        ⭐ EDIT OCCASIONALLY
```

### Component Files (.astro)
```
src/components/
├── Header.astro           ⚠️ EDIT CAREFULLY
├── Footer.astro           ⚠️ EDIT CAREFULLY
└── (more components...)   ⚠️ ADVANCED
```

### Content Files (.md)
```
src/content/
└── (all .md files)        ⭐ EDIT OFTEN
```

### Style Files (.css, .ts)
```
src/styles/global.css      ⚠️ EDIT CAREFULLY
tailwind.config.ts         ⚠️ ADVANCED
```

---

## 🎯 Skill Level Guide

### ⭐ Easy (Anyone Can Edit)
- Configuration files in `src/config/`
- Content files in `src/content/`
- Images in `public/images/`
- Contact emails

**You can safely edit these with basic knowledge of the values you're changing.**

### ⭐⭐ Medium (Some Technical Knowledge)
- Page files in `src/pages/`
- CSS color values
- Footer and Header structure

**Edit with care. Follow existing patterns.**

### ⭐⭐⭐ Advanced (Developer Knowledge Required)
- Component logic
- TypeScript interfaces
- Build configuration
- Script files

**Only edit if you understand the code. May break the site if done incorrectly.**

---

## 🆘 Can't Find Something?

### Search Strategy

1. **Use this file:** Ctrl+F to search for what you're looking for
2. **Check config files:** 90% of user tasks are in `src/config/`
3. **Check content:** Text content is in `src/content/`
4. **Check docs:** See `docs/user_guides/CONFIGURATION_GUIDE.md`

### Still Can't Find It?

1. Use your code editor's file search (usually Ctrl+Shift+F)
2. Search for the text you see on the website
3. Check the documentation in `docs/`
4. Create an issue in the repository

---

## 💡 Pro Tips

1. **Stick to config files** - 90% of tasks can be done in `src/config/`
2. **Don't edit components** unless necessary - they're complex
3. **Always test locally** - Run `npm run dev` before deploying
4. **Keep backups** - Use git to track changes
5. **Ask for help** - Documentation is here to guide you

---

## 📞 Support

For detailed guides, see:
- **[QUICK_START.md](QUICK_START.md)** - Deployment
- **[CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)** - Settings
- **Main README** - `README.md` in root folder

---

**You now know where everything is! 🎉**

