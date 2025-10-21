# Quick Start Guide

**Get your EncryptHer website up and running in 15 minutes**

---

## ✅ Pre-Deployment Checklist

Before deploying, complete these quick configuration steps:

### 1. Review Site Information (2 minutes)

**File:** `src/config/seo.config.ts`

- [ ] Check that `defaultTitle` is correct
- [ ] Check that `defaultDescription` is correct
- [ ] Check that `email` is correct
- [ ] Note: You'll update `siteUrl` after deployment

### 2. Configure Analytics (Optional - 5 minutes)

**File:** `src/config/analytics.config.ts`

**If you want analytics:**
- [ ] Create Google Analytics 4 property
- [ ] Update `measurementId`
- [ ] Change `enabled` to `true`

**If not:** Skip this step - analytics are disabled by default.

### 3. Build & Test Locally (2 minutes)

```bash
# Make sure you're in the encrypther directory
cd encrypther

# Install dependencies (if you haven't)
npm install

# Build the site
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4321` and verify everything looks good.

---

## 🚀 Deploy to Cloudflare Pages

### Step 1: Push to GitHub (1 minute)

```bash
git add -A
git commit -m "Ready for deployment"
git push
```

### Step 2: Connect to Cloudflare Pages (3 minutes)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your GitHub
6. Select your EncryptHer repository

### Step 3: Configure Build Settings (1 minute)

Use these exact settings:

```
Build command:    npm run build
Build output:     dist
Root directory:   encrypther
Node version:     18
```

### Step 4: Deploy! (2 minutes)

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build
3. Your site is live! 🎉

You'll get a URL like: `https://encrypther-xxx.pages.dev`

---

## 🎯 Post-Deployment Tasks

### Immediate (5 minutes)

#### 1. Update Site URL

Now that you have your Cloudflare Pages URL:

**File:** `src/config/seo.config.ts`
```typescript
siteUrl: 'https://encrypther-xxx.pages.dev',  // Your actual URL
```

**File:** `astro.config.mjs`
```typescript
site: 'https://encrypther-xxx.pages.dev',  // Same URL
```

Commit and push - Cloudflare will auto-deploy.

#### 2. Test Your Site

- [ ] Visit your live URL
- [ ] Test on mobile
- [ ] Check dark mode toggle
- [ ] Test mobile menu
- [ ] Verify all links work

#### 3. Verify SEO Elements

- [ ] Visit `/sitemap-index.xml` - Should show XML sitemap
- [ ] Visit `/robots.txt` - Should show robots file
- [ ] Share a link on social media - Check preview looks good

### Optional (When Ready)

#### Add Social Media

When you create social accounts:

**File:** `src/config/social-media.config.ts`

For each platform:
1. Update the URL
2. Change `enabled: false` to `enabled: true`
3. Commit and push

#### Enable Cloudflare Analytics

**File:** `src/config/analytics.config.ts`
```typescript
cloudflareAnalytics: {
  enabled: true,  // Change this
}
```

View stats at: Cloudflare Dashboard → Analytics → Web Analytics

#### Submit to Search Engines

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Submit your sitemap: `https://your-site.pages.dev/sitemap-index.xml`

2. **Bing Webmaster Tools**
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters)
   - Add your site
   - Submit sitemap

#### Get a Custom Domain (Recommended)

1. Buy a domain (e.g., from Cloudflare Registrar, Namecheap, etc.)
2. In Cloudflare Pages:
   - Go to your project
   - Click **Custom domains**
   - Click **Set up a custom domain**
   - Follow the instructions
3. Update `siteUrl` in configs (see above)

---

## 📊 What You've Accomplished

✅ Website is live and accessible worldwide  
✅ SEO optimized with sitemap and meta tags  
✅ Social media ready (add accounts when ready)  
✅ Analytics ready (enable when ready)  
✅ Fast loading with Cloudflare CDN  
✅ Automatic deployments on every git push  
✅ HTTPS enabled automatically  
✅ Production-ready and secure  

---

## 🎓 Next Steps

### Learn More

- **Configuration Guide:** `docs/user_guides/CONFIGURATION_GUIDE.md`
- **Content Editing:** `src/content/README.md`
- **Full Documentation:** `docs/machine_guides/`

### Ongoing Maintenance

**To update your site:**
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Cloudflare auto-deploys in ~2 minutes

**That's it!** No manual deployments needed.

---

## ⚡ Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server (localhost:4321)

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Maintenance
npm run check            # Type checking
npm run clean            # Clean build artifacts
```

---

## 🆘 Troubleshooting

### Build Failed on Cloudflare

**Check:**
- Root directory set to `encrypther`
- Build command is `npm run build`
- Output directory is `dist`
- Node version is 18

### Site URL Doesn't Match

**Fix:**
- Update `siteUrl` in `src/config/seo.config.ts`
- Update `site` in `astro.config.mjs`
- Both must match your Cloudflare Pages URL

### Social Icons Not Showing

**Check:**
- Is `enabled: true`?
- Did you commit and push?
- Did Cloudflare finish deploying?

### Analytics Not Working

**Check:**
- Is `enabled: true`?
- Are you viewing the LIVE site (not localhost)?
- Did you add the correct Measurement ID?
- Wait 24 hours for first data to appear

---

## 🎉 You're Done!

Your EncryptHer website is now live and ready to empower women worldwide!

**Questions?** Check the full documentation in `docs/user_guides/`

**Ready to add content?** See `src/content/README.md`

**Happy deploying! 🚀**

