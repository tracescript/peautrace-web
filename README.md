# PeauTrace Website

Beautiful, modern website for PeauTrace - Your personal skincare companion.

## 🌸 Overview

This is the official website for PeauTrace, featuring:
- Stunning landing page with hero section
- Feature showcase with animations
- Download sections for Google Play & App Store
- Privacy Policy page
- Terms of Service page
- Support page with FAQ
- Fully responsive design
- Modern UI with smooth animations

## 🎨 Design Features

- **Frameworks Used:**
  - Tailwind CSS for utility-first styling
  - Alpine.js for lightweight interactivity
  - AOS (Animate On Scroll) for scroll animations
  
- **Color Palette:**
  - Primary Pink: `#F9E6F2`, `#B85C8A`
  - Coral: `#FF7F87`
  - Mint Green: `#CFFFE5`
  - Lavender: `#E6D8FF`
  - Cream: `#FFF6F0`

- **Typography:**
  - Headings: Playfair Display (serif)
  - Body: Poppins (sans-serif)

## 📁 Structure

```
PeauTraceWeb/
├── index.html          # Landing page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── support.html        # Support & FAQ
├── css/
│   └── style.css      # Custom styles
├── js/
│   └── main.js        # Custom JavaScript
└── assets/
    └── images/
        ├── logo.svg           # PeauTrace logo
        └── hero-mockup.svg    # Hero section mockup
```

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Use a Local Server
For better performance and to avoid CORS issues:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🔧 Customization

### Update Store Links
In `index.html`, find and replace:
- `https://play.google.com/store` → Your Google Play Store URL
- `https://apps.apple.com` → Your Apple App Store URL

### Update Contact Information
Replace email addresses throughout the site:
- `support@peautrace.com`
- `privacy@peautrace.com`
- `data@peautrace.com`

### Replace Hero Image
Replace `assets/images/hero-mockup.svg` with your actual app mockup screenshot (PNG/JPG recommended for photos).

### Add OG Image
Create an Open Graph image (`assets/images/og-image.png`) for better social media sharing (recommended size: 1200x630px).

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance

- Lightweight and fast loading
- Minimal JavaScript
- CDN-hosted libraries for better caching
- Lazy loading for images
- Optimized animations with AOS

## 🎯 SEO

The site includes:
- Semantic HTML5
- Meta descriptions
- Open Graph tags
- Proper heading hierarchy
- Alt text for images

## 🔒 Privacy & Legal

- Privacy Policy page with GDPR/CCPA compliance information
- Terms of Service page
- Cookie notice ready (if needed)
- Contact forms with privacy considerations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do Before Launch

- [ ] Replace hero mockup with actual app screenshot
- [ ] Update Google Play Store URL
- [ ] Update Apple App Store URL
- [ ] Add actual Open Graph image
- [ ] Test all email links
- [ ] Set up form backend (if adding contact forms)
- [ ] Add Google Analytics (optional)
- [ ] Test on all devices and browsers
- [ ] Optimize images for web
- [ ] Add favicon in multiple sizes

## 🚢 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to main branch

### Netlify
1. Connect your GitHub repository
2. Deploy with one click
3. Custom domain setup available

### Vercel
1. Import project from GitHub
2. Automatic deployments on push
3. Free SSL included

### Traditional Hosting
Upload all files to your web server via FTP/SFTP.

## 📧 Contact

For questions or support:
- Email: support@peautrace.com
- Website: [PeauTrace Landing Page]

## 📄 License

© 2025 PeauTrace. All rights reserved.

---

**Made with 💖 for the beauty community**

*PeauTrace - Trace your beauty. Track your glow.*

