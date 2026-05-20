# Shri Renuka Engineering Works - Company Website

A modern, fully responsive, and professionally designed website for Shri Renuka Engineering Works, a leading mechanical engineering and CNC machining company.

## 🎯 Features

✅ **Responsive Design** - Optimized for mobile, tablet, and desktop  
✅ **Sticky Navigation** - Glass-morphism navbar with smooth scroll effects  
✅ **Smooth Scrolling** - Enhanced navigation with smooth scroll behavior  
✅ **Scroll Animations** - Fade-in effects when elements enter viewport  
✅ **Professional UI** - Clean, modern, corporate design aesthetic  
✅ **Card-Based Layout** - Services, infrastructure, and highlights in grid cards  
✅ **Interactive Form** - Careers/Job application form with validation  
✅ **Mobile Menu** - Hamburger menu for mobile navigation  
✅ **Accessibility** - Semantic HTML and keyboard navigation support  
✅ **Performance Optimized** - Minimal CSS, smooth animations, fast loading  

## 📁 Project Structure

```
shri-renuka-website/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling with responsive design
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- A local web server is optional, not required, for this project

### Installation

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd shri-renuka-website
   ```

2. **Open in browser**
   - Double-click `index.html` to open it directly in your browser
   - Or drag `index.html` into an open browser window

3. **If you want to run a local server anyway**
   - Make sure your terminal is in the project folder first: `C:\Projects\shri-renuka-website`
   - Python 3:
   ```bash
   python -m http.server 8000
   ```
   - Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   - Node.js:
   ```bash
   npx http-server
   ```
   - Then open the URL shown in the terminal, usually `http://localhost:8000`

4. **Use VS Code Live Server**
   - Install the Live Server extension by Ritwick Dey
   - Open the project folder in VS Code, then open `index.html`
   - Right-click and choose **Open with Live Server**
   - Or click **Go Live** in the VS Code status bar

## Why `localhost:8000` may not work

`http://localhost:8000` only works if a local server is actually running. This website does not require one, so the simplest way to view it is to open `index.html` directly in the browser.

## 📝 Main Sections

### 1. **Navbar** (Fixed/Sticky)
- Logo placeholder (SREW badge)
- Navigation links with smooth scrolling
- Mobile hamburger menu
- Glass-morphism blur effect on scroll

### 2. **Hero Section**
- Full-screen height with gradient background
- Compelling headline: "Precision Engineering. Trusted Since 1995."
- Subtext about CNC, VMC, and engineering solutions
- Two CTA buttons: "Get a Quote" and "Our Services"

### 3. **About Us**
- Company introduction and history (established 1995)
- Three feature cards: Industrial Excellence, Advanced Technology, Quality Assurance

### 4. **Services** (4 Cards)
- CNC Machining
- Grinding Services
- Special Purpose Machines (SPM)
- Shaft Manufacturing
- Hover animations with accent color bars

### 5. **Why Choose Us**
- 30+ Years Experience
- Advanced Machinery (CNC/VMC)
- ISO Quality Standards
- Highlight cards with hover effects

### 6. **Infrastructure**
- 5600+ Sq.Ft. Facility
- Advanced Manufacturing Systems
- Quality Control Department
- Skilled Engineers & Training

### 7. **Achievements**
- Heavy Shaft Machining (up to 500kg)
- Railway Components
- Custom SPM Machines

### 8. **Leadership**
- Founder photo placeholder
- Name: Govardhan Nagnath Chavan
- Title & biography

### 9. **Careers**
- Job/Internship application form
- Form fields: Name, Email, Phone, Position, Resume, Message
- Integrated with Formspree for easy submission

### 10. **Contact**
- Email: rew22795@gmail.com
- Phone: +91 9822249304
- Address: MIDC Akkalkot Road, Solapur
- Map placeholder

### 11. **Footer**
- Copyright information
- Company tagline

## 🔧 Customization Guide

### 1. **Update Company Information**

Edit the following in `index.html`:

```html
<!-- Update Logo Text -->
<div class="logo-placeholder">SREW</div>

<!-- Update Company Contact Info -->
<a href="mailto:rew22795@gmail.com">rew22795@gmail.com</a>
<a href="tel:+919822249304">+91 9822249304</a>

<!-- Update Address -->
<p>MIDC Akkalkot Road<br>Solapur, Maharashtra<br>India</p>

<!-- Update Founder Info -->
<h3>Govardhan Nagnath Chavan</h3>
<p class="founder-title">Founder & Managing Director</p>
```

### 2. **Setup Formspree for Careers Form**

1. Visit [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form for your email
4. Copy the form action URL

5. Replace the form action in `index.html`:
```html
<form class="careers-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. **Add Images**

Replace placeholder images with actual ones:

```html
<!-- Logo -->
<!-- Replace: -->
<div class="logo-placeholder">SREW</div>
<!-- With: -->
<img src="logo.png" alt="Shri Renuka Engineering Logo" class="logo-img">

<!-- Founder Image -->
<!-- Replace: -->
<div class="image-placeholder">Founder Photo</div>
<!-- With: -->
<img src="founder.jpg" alt="Govardhan Nagnath Chavan">

<!-- Hero Background -->
<!-- Replace gradient in style.css: -->
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* With: */
background: url('hero-bg.jpg') center/cover;
```

### 4. **Customize Colors**

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #1a1a1a;      /* Dark grey/black */
    --secondary-color: #f5f5f5;    /* Light grey/white */
    --accent-color: #ff9500;       /* Orange */
    --accent-dark: #e67e00;        /* Dark orange */
    --text-light: #333;            /* Text color */
    --text-muted: #666;            /* Muted text */
}
```

### 5. **Add Google Maps**

Replace map placeholder in `index.html`:

```html
<!-- Replace: -->
<div class="map-placeholder">...</div>

<!-- With: -->
<iframe class="map-placeholder" 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    loading="lazy">
</iframe>
```

Get embed code from [Google Maps](https://maps.google.com) → Share → Embed Map

### 6. **Update Hero Section Content**

Customize the hero section messages in `index.html`:

```html
<h1 class="hero-title">Precision Engineering</h1>
<h2 class="hero-subtitle">Trusted Since 1995</h2>
<p class="hero-description">
    Advanced CNC machining, VMC operations, and precision engineering solutions 
    for industries worldwide
</p>
```

## 🎨 Design Details

### Color Scheme
- **Primary**: Dark grey/black (`#1a1a1a`) - Headers, text
- **Secondary**: Off-white (`#f5f5f5`) - Backgrounds
- **Accent**: Vibrant orange (`#ff9500`) - Buttons, highlights
- **Text**: Grey (`#333` dark, `#666` muted)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Weights**: 500 (regular), 600 (semi-bold), 700 (bold)
- **Heading Hierarchy**: H1 (3.5rem) → H2 (2.5rem) → H3 (1.5rem)

### Spacing
- **Container**: Max 1200px with 20px padding
- **Section Padding**: 5rem (larger screens), 3rem (tablets), etc.
- **Card Gap**: 2rem grid gap

### Animations
- **Fade-in**: Elements fade in when entering viewport
- **Hover Effects**: Cards lift up on hover with shadow expansion
- **Smooth Scroll**: All navigation uses smooth scrolling
- **Navbar Effect**: Blur/glass effect appears on scroll

## 📱 Responsive Breakpoints

```css
Desktop:   1200px and above
Tablet:    768px - 1199px
Mobile:    480px - 767px
Small:     Below 480px
```

## 🔍 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress PNG/JPG (TinyPNG, ImageOptim)
   - Use appropriate sizes (not larger than needed)

2. **Lazy Load Images**
   - Add `loading="lazy"` attribute
   - Implement intersection observer for below-fold images

3. **Minimize CSS/JS**
   - Use minified versions for production
   - Consider CSS preprocessing (SASS)

4. **Cache Management**
   - Enable browser caching on server
   - Use CDN for static assets

## 🔐 Security Considerations

1. **Form Security**
   - Use HTTPS for form submissions
   - Validate all inputs on backend
   - Use CSRF protection if needed

2. **Content Security**
   - Regular security audits
   - Update dependencies
   - Monitor for vulnerabilities

## 🤝 Contact & Support

For modifications or issues:
- **Email**: rew22795@gmail.com
- **Phone**: +91 9822249304
- **Address**: MIDC Akkalkot Road, Solapur

## 📄 License

This website template is provided as-is for Shri Renuka Engineering Works.

## 🔄 Version History

**v1.0** (2025)
- ✅ Complete responsive design
- ✅ All 11 sections implemented
- ✅ Mobile-first approach
- ✅ Smooth animations
- ✅ Form integration ready
- ✅ Accessibility features

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Formspree Documentation](https://formspree.io/)
- [Google Fonts](https://fonts.google.com/)

## ✨ Future Enhancements

- [ ] Blog section for articles/news
- [ ] Client testimonials/case studies
- [ ] Project portfolio gallery
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization
- [ ] Newsletter signup
- [ ] Social media links
- [ ] Advanced filtering for services

---

**Built with ❤️ for Shri Renuka Engineering Works**  
"Precision Engineering. Trusted Since 1995."
