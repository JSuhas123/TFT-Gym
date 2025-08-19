# Thrust Fitness - Deployment Guide

## 🚀 Vercel Deployment Instructions

### 1. Quick Deploy (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: thrust-fitness
# - Directory: ./ (current directory)
# - Override settings? No
```

### 2. Manual GitHub Deployment
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

### 3. Environment Setup
- No environment variables needed for basic deployment
- Optional: Set up analytics or external APIs in Vercel dashboard

## 🔧 Build Configuration

### Project Structure
```
dist/                 # Build output (auto-generated)
public/              # Static assets
├── heropage.mp4     # Optimized background video
├── logo1.png        # Logo and favicon
├── manifest.json    # PWA configuration
├── robots.txt       # SEO configuration
├── sitemap.xml      # Search engine sitemap
└── _redirects       # Routing fallbacks

src/                 # Source code
vercel.json          # Vercel configuration
```

### Build Commands
```bash
npm run build        # Production build
npm run preview      # Test production build locally
npm run dev          # Development server
```

## 🎯 Performance Optimizations Applied

### Video Optimization
- ✅ Preload metadata only
- ✅ Poster image fallback
- ✅ Error handling with gradient fallback
- ✅ Smooth loading transitions
- ✅ Video preload in HTML head

### Bundle Optimization
- ✅ Code splitting by vendor/feature
- ✅ Terser minification
- ✅ Console removal in production
- ✅ Chunk size optimization

### Caching Strategy
- ✅ Static assets: 1 year cache
- ✅ HTML: No cache (always fresh)
- ✅ Video: Immutable caching
- ✅ Logo/images: Immutable caching

### SEO & Performance
- ✅ DNS prefetch for social links
- ✅ Preconnect to external fonts
- ✅ Structured data for search engines
- ✅ Sitemap.xml for indexing
- ✅ Robots.txt for crawlers

## 🌐 Domain Configuration

### Custom Domain (Optional)
1. In Vercel dashboard, go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### SSL Certificate
- ✅ Automatic HTTPS (provided by Vercel)
- ✅ HTTP to HTTPS redirects

## 📱 PWA Features

### App Installation
- ✅ Can be installed as mobile app
- ✅ Offline-ready service worker
- ✅ App shortcuts for quick navigation

## 🔍 Monitoring

### Available Metrics
- Core Web Vitals
- Bundle size analysis
- Performance insights
- Error tracking (Vercel Analytics)

## 🛠 Troubleshooting

### Common Issues
1. **Routing Issues**: Handled by `vercel.json` redirects
2. **Video Not Loading**: Fallback gradient shows instead
3. **Build Errors**: Check terminal output for specifics

### Support
- Vercel Documentation: https://vercel.com/docs
- React Router: https://reactrouter.com/docs
- Vite: https://vitejs.dev/guide/

---

## ✅ Ready for Production!

Your Thrust Fitness website is now optimized and ready for deployment with:
- ⚡ Fast video loading
- 🔄 Unlimited page refreshes
- 📱 Mobile-optimized
- 🎯 SEO-ready
- 🚀 Vercel-optimized
