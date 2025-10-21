# EncryptHer Documentation

Welcome to the EncryptHer website documentation!

---

## 📚 Documentation Structure

### For Human Users → `user_guides/`

Beginner-friendly guides for website administrators and content editors:

- **[QUICK_START.md](user_guides/QUICK_START.md)** - Get your site deployed in 15 minutes
- **[CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md)** - Complete guide to all config files
- **[FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md)** - Where to find everything in the repo

### For AI/Developers → `machine_guides/`

Technical implementation documentation and context:

- **[DEPLOYMENT.md](machine_guides/DEPLOYMENT.md)** - Cloudflare Pages deployment guide
- **[SEO_IMPLEMENTATION_SUMMARY.md](machine_guides/SEO_IMPLEMENTATION_SUMMARY.md)** - SEO implementation details
- **[PERFORMANCE_IMPROVEMENTS.md](machine_guides/PERFORMANCE_IMPROVEMENTS.md)** - Performance optimizations
- **[FINAL_STATUS.md](machine_guides/FINAL_STATUS.md)** - Complete project status

---

## 🚀 Quick Links

### I Want To...

**Deploy the website**  
→ Start here: [QUICK_START.md](user_guides/QUICK_START.md)

**Update SEO settings**  
→ Read: [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md#seo-settings)  
→ Edit: `src/config/seo.config.ts`

**Add social media links**  
→ Read: [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md#social-media-setup)  
→ Edit: `src/config/social-media.config.ts`

**Enable analytics**  
→ Read: [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md#analytics-setup)  
→ Edit: `src/config/analytics.config.ts`

**Edit page content**  
→ Read: `src/content/README.md`  
→ Edit: Files in `src/content/`

**Find a specific file**  
→ Read: [FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md)

**Understand the technical implementation**  
→ Read: `machine_guides/` folder

---

## 📁 Key File Locations

### Configuration Files
```
src/config/
├── seo.config.ts          ← SEO & meta tags
├── social-media.config.ts ← Social media links
└── analytics.config.ts    ← Analytics tracking
```

### Content
```
src/content/
├── README.md              ← Content editing guide
├── index/                 ← Homepage content
├── about/                 ← About page
└── (more pages...)
```

### Documentation
```
docs/
├── README.md              ← This file
├── user_guides/           ← Human-friendly guides
│   ├── QUICK_START.md
│   ├── CONFIGURATION_GUIDE.md
│   └── FILE_LOCATIONS.md
└── machine_guides/        ← Technical docs
    ├── DEPLOYMENT.md
    ├── SEO_IMPLEMENTATION_SUMMARY.md
    ├── PERFORMANCE_IMPROVEMENTS.md
    └── FINAL_STATUS.md
```

---

## 🎯 Getting Started Path

### New Users (No Technical Experience)

1. **Read:** [QUICK_START.md](user_guides/QUICK_START.md) (15 min)
2. **Deploy:** Follow the deployment steps
3. **Configure:** Use [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md) as reference
4. **Edit Content:** See `src/content/README.md`

### Experienced Users

1. **Skim:** [FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md) (5 min)
2. **Configure:** Edit config files directly
3. **Deploy:** Use [QUICK_START.md](user_guides/QUICK_START.md) for deployment steps
4. **Advanced:** Check `machine_guides/` for implementation details

### Developers / AI Context

1. **Read:** [FINAL_STATUS.md](machine_guides/FINAL_STATUS.md) - Complete project overview
2. **Implementation:** [SEO_IMPLEMENTATION_SUMMARY.md](machine_guides/SEO_IMPLEMENTATION_SUMMARY.md)
3. **Performance:** [PERFORMANCE_IMPROVEMENTS.md](machine_guides/PERFORMANCE_IMPROVEMENTS.md)
4. **Deployment:** [DEPLOYMENT.md](machine_guides/DEPLOYMENT.md)

---

## 🛠️ Common Tasks

### Task: First Time Deployment
1. Read: [QUICK_START.md](user_guides/QUICK_START.md)
2. Follow the checklist
3. Deploy to Cloudflare Pages
4. Update `siteUrl` with your new URL

### Task: Update Configuration
1. Find your config file: [FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md)
2. Reference: [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md)
3. Edit the file
4. Rebuild: `npm run build`
5. Deploy: `git push`

### Task: Add Social Media
1. Create your social accounts
2. Edit: `src/config/social-media.config.ts`
3. For each platform:
   - Update URL
   - Change `enabled: false` to `enabled: true`
4. Rebuild and deploy

### Task: Edit Content
1. Read: `src/content/README.md`
2. Edit markdown files in `src/content/`
3. Test locally: `npm run dev`
4. Deploy: Commit and push

---

## 📖 Documentation Standards

### User Guides
- **Audience:** Non-technical users
- **Style:** Step-by-step, screenshot-friendly
- **Format:** Markdown with clear headings
- **Goal:** Enable users to accomplish tasks independently

### Machine Guides
- **Audience:** Developers, AI assistants, technical users
- **Style:** Comprehensive, detailed, technical
- **Format:** Markdown with code examples
- **Goal:** Provide complete context for understanding and extending the system

---

## 🔄 Keeping Documentation Updated

When you make changes to the website:

**Update these if you change:**
- Configuration structure → [CONFIGURATION_GUIDE.md](user_guides/CONFIGURATION_GUIDE.md)
- File locations → [FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md)
- Deployment process → [DEPLOYMENT.md](machine_guides/DEPLOYMENT.md)
- Implementation details → `machine_guides/` files

**Don't update:**
- [QUICK_START.md](user_guides/QUICK_START.md) - Should stay simple and stable

---

## 💡 Tips for Using This Documentation

1. **Start with Quick Start** - Even if experienced, skim it for overview
2. **Bookmark Configuration Guide** - You'll reference it often
3. **File Locations is Your Friend** - Quick reference for finding things
4. **Machine Guides are Context** - Read when you need deep understanding
5. **Content README is Separate** - Content editing has its own guide in `src/content/`

---

## 🆘 Need Help?

### Documentation Issues

If documentation is unclear or outdated:
1. Note what needs clarification
2. Update it yourself (documentation is also code!)
3. Or create an issue in the repository

### Technical Issues

1. Check troubleshooting sections in guides
2. Review error messages carefully
3. Check that all config files are correct
4. Ensure you've rebuilt after changes: `npm run build`

### Can't Find Something?

Use [FILE_LOCATIONS.md](user_guides/FILE_LOCATIONS.md) - it's a comprehensive map of the entire project.

---

## ✨ Documentation Goals

This documentation aims to be:

✅ **Accessible** - Non-technical users can deploy and configure the site  
✅ **Complete** - Everything is documented somewhere  
✅ **Organized** - Easy to find what you need  
✅ **Practical** - Focused on accomplishing real tasks  
✅ **Maintainable** - Easy to keep up to date  

---

**Happy reading! 📚**

