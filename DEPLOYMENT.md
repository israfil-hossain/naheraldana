# Deployment Guide - Naher Aldana Website

## Quick Start

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Update the variables in `.env.local` with your actual values.

3. **Run Development Server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000`

4. **Build for Production**
   ```bash
   pnpm build
   ```

## Deployment Platforms

### Vercel (Recommended)

**Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `pnpm build`
   - Output Directory: (default)
6. Add environment variables in Vercel dashboard
7. Click "Deploy"

**Environment Variables in Vercel:**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PHONE_NUMBER=+971554470608
NEXT_PUBLIC_EMAIL_ADDRESS=naherproject@gmail.com
```

### Netlify

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `.next`
6. Add environment variables
7. Deploy

### Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t naheraldana .
docker run -p 3000:3000 naheraldana
```

### Traditional VPS/Server

**Steps:**
1. Install Node.js 18+ and pnpm
2. Clone repository
3. Install dependencies: `pnpm install`
4. Build: `pnpm build`
5. Start: `pnpm start`
6. Use PM2 for process management:
   ```bash
   pm2 start npm --name "naheraldana" -- start
   pm2 save
   pm2 startup
   ```

### Nginx Reverse Proxy

Configure Nginx to proxy to your Next.js app:

```nginx
server {
    listen 80;
    server_name naheraldana.com www.naheraldana.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Pre-Deployment Checklist

- [ ] Update `.env.local` with production values
- [ ] Update `NEXT_PUBLIC_SITE_URL` with your domain
- [ ] Test production build locally: `pnpm build && pnpm start`
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Test WhatsApp button
- [ ] Check mobile responsiveness
- [ ] Verify analytics setup
- [ ] Add custom domain (if using Vercel/Netlify)
- [ ] Set up SSL certificate
- [ ] Configure DNS records

## Post-Deployment Tasks

### DNS Configuration

```
A Record: @ → [Your Server IP]
CNAME: www → @ (or to Vercel/Netlify)
```

### SSL Certificate

- **Vercel/Netlify**: Automatic
- **VPS**: Use Let's Encrypt with Certbot:
  ```bash
  sudo certbot --nginx -d naheraldana.com -d www.naheraldana.com
  ```

### Search Engine Submission

1. Submit sitemap to Google Search Console
2. Submit to Bing Webmaster Tools
3. Submit to search engines:
   - Google: https://search.google.com/search-console
   - Bing: https://www.bing.com/webmasters

### Analytics Setup

1. **Vercel Analytics**: Already configured
2. **Google Analytics**:
   - Create GA4 property
   - Add measurement ID to `.env.local`
   - Update `NEXT_PUBLIC_GA_ID`

## Monitoring & Maintenance

### Performance Monitoring

- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Check Core Web Vitals
- Monitor load times

### Error Monitoring

Consider adding:
- Sentry for error tracking
- LogRocket for session replay

### Backups

- Database backups (if applicable)
- Code repository backups
- Configuration backups

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
pnpm install

# Rebuild
pnpm build
```

### Runtime Errors

Check logs:
- Vercel: Dashboard → Logs
- VPS: `pm2 logs naheraldana`

### Performance Issues

- Optimize images
- Enable compression
- Use CDN for static assets
- Implement caching strategy

## Support

For issues or questions:
- Phone: +971 55 447 0608
- Email: naherproject@gmail.com

## Security Best Practices

1. Keep dependencies updated: `pnpm update`
2. Monitor security vulnerabilities: `pnpm audit`
3. Use environment variables for sensitive data
4. Enable HTTPS
5. Set up firewall rules
6. Regular backups
7. Monitor access logs
