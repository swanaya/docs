# Deployment Guide - Ketivee Docs

This guide covers deploying the RipkaAI Development Program documentation website to various platforms.

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel provides the best experience for Remix applications:

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository

2. **Automatic Detection**
   - Vercel will automatically detect it's a Remix app
   - No additional configuration needed

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### 2. Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `public`
   - Node version: `20`

3. **Deploy**
   - Click "Deploy site"

### 3. Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Sign up/login with your GitHub account
   - Click "New Project" → "Deploy from GitHub repo"

2. **Automatic Setup**
   - Railway will detect the Remix app
   - No additional configuration needed

3. **Deploy**
   - Click "Deploy Now"

## Manual Deployment

### Prerequisites

- Node.js 20+
- npm or yarn
- Git

### Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=production
PORT=3000
```

## Platform-Specific Configurations

### Vercel

Create `vercel.json` in the root:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "remix"
}
```

### Netlify

Create `netlify.toml` in the root:

```toml
[build]
  command = "npm run build"
  publish = "public"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t ketivee-docs .
docker run -p 3000:3000 ketivee-docs
```

## Performance Optimization

### 1. Enable Compression

Add compression middleware in your server configuration.

### 2. CDN Configuration

Configure your CDN to cache static assets:
- Cache images for 1 year
- Cache CSS/JS for 1 month
- Cache HTML for 1 hour

### 3. Image Optimization

Consider using:
- WebP format for images
- Responsive images with `srcset`
- Lazy loading for images

## Monitoring

### 1. Error Tracking

Add error tracking services:
- Sentry
- LogRocket
- Bugsnag

### 2. Analytics

Add analytics:
- Google Analytics
- Plausible
- Fathom

### 3. Performance Monitoring

Monitor Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## SSL/HTTPS

Most platforms (Vercel, Netlify, Railway) provide automatic SSL certificates. For custom domains:

1. Add your domain in the platform dashboard
2. Update DNS records as instructed
3. SSL certificate will be automatically provisioned

## Custom Domain Setup

### 1. Add Domain

In your platform dashboard:
- Go to Domain settings
- Add your custom domain
- Follow DNS configuration instructions

### 2. DNS Configuration

Common DNS records:
```
Type: CNAME
Name: www
Value: your-app.vercel.app

Type: A
Name: @
Value: 76.76.19.19
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 20+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Runtime Errors**
   - Check environment variables
   - Verify all dependencies are installed
   - Check server logs

3. **Performance Issues**
   - Enable compression
   - Optimize images
   - Use CDN for static assets

### Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Contact platform support
4. Open an issue in the repository

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Theme switching works
- [ ] Images load properly
- [ ] Mobile responsiveness
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Error monitoring active
- [ ] Performance optimized
- [ ] SEO meta tags present

---

**Happy Deploying! 🚀** 