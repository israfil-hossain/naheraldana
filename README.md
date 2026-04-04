# Naher Aldana Project Management Services - Website

A modern, production-grade website for Naher Aldana Project Management Services, built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **SEO Optimized**: Complete SEO setup with structured data, sitemap, and meta tags
- **Performance**: Optimized images, lazy loading, and code splitting
- **Accessibility**: WCAG AA compliant with semantic HTML
- **Production Ready**: Security headers, error handling, and analytics

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI primitives
- **Language**: TypeScript
- **Analytics**: Vercel Analytics
- **Fonts**: Inter & Playfair Display (Google Fonts)

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── sections/         # Page sections
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   └── whatsapp-button.tsx
├── public/               # Static assets
│   └── images/           # Images and logos
├── styles/               # Global styles
└── lib/                  # Utility functions
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file from `.env.local.example`:

```bash
cp .env.local.example .env.local
```

Update the following variables:
- `NEXT_PUBLIC_SITE_URL` - Your production domain
- `NEXT_PUBLIC_PHONE_NUMBER` - Contact phone number
- `NEXT_PUBLIC_EMAIL_ADDRESS` - Contact email
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

## 🎨 Customization

### Updating Contact Information

Contact information is managed in constants within component files:
- **Phone**: `+971554470608`
- **Email**: `naherproject@gmail.com`

Update these in:
- `components/navbar.tsx`
- `components/footer.tsx`
- `components/sections/contact-section.tsx`
- `components/whatsapp-button.tsx`

### Updating Content

- **Hero Section**: `components/sections/hero-section.tsx`
- **About**: `components/sections/about-section.tsx`
- **Services**: `components/sections/services-section.tsx`
- **Products**: `components/sections/products-section.tsx`

## 🔍 SEO Features

- ✅ Structured data (JSON-LD) for Organization & LocalBusiness
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Open Graph & Twitter Card meta tags
- ✅ Semantic HTML structure
- ✅ Canonical URLs
- ✅ Mobile-friendly

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Ensure the platform supports Next.js 16 and Node.js 18+.

## 📊 Performance

- Lighthouse Score: 90+ on all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- HTTP security headers
- XSS protection
- Content Security Policy ready
- HTTPS enforced in production

## 📱 Features

- Responsive navigation with mobile menu
- Contact form with validation
- WhatsApp integration
- Smooth scroll navigation
- Dark mode support
- Analytics integration

## 📞 Contact

- **Phone**: +971 55 447 0608
- **Email**: naherproject@gmail.com
- **Address**: Office No. 101, King Hamad Mohammed Abdulrahman, Al-Bahr - Al-Khabisi - 155, Dubai, U.A.E

## 📄 License

Copyright © 2026 Naher Aldana Project Management Services. All rights reserved.
