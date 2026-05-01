# Styloops - Custom T-Shirt Printing Website

A modern, eye-catching website for a custom t-shirt printing business built with React, TailwindCSS, and Vite.

## Features

- 🎨 **Custom Design Tool** - Interactive designer to create your own t-shirt designs
- 🖼️ **Product Gallery** - Browse curated designs with category filtering
- ⚡ **Modern UI** - Beautiful animations and gradient effects
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **USP Focused** - Highlights the "print whatever you want" unique selling point

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations (ready to use)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
styloops/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Features.jsx        # Key features showcase
│   │   ├── ProductGallery.jsx  # Product catalog with filters
│   │   ├── CustomDesigner.jsx  # Interactive design tool
│   │   ├── HowItWorks.jsx      # Process explanation
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── ContactForm.jsx     # Contact form
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content

Update text content directly in the component files in `src/components/`.

## License

This project is created for Styloops custom t-shirt printing business.
