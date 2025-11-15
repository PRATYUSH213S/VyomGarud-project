# VyomGarud Landing Website

A production-grade, pixel-perfect landing website for VyomGarud - an advanced UAV (Drone) defense technology company. Built with modern web technologies and featuring a dark military theme with premium animations.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, TailwindCSS, Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Military Theme**: Professional design with accent color (#ff7b00)
- **Smooth Animations**: Subtle, premium animations using Framer Motion
- **Clean Architecture**: Well-organized component structure
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks and modern patterns
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library for React
- **PostCSS**: CSS processing with Autoprefixer

## 📁 Project Structure

```
vyomgarud-landing/
├── index.html                 # Main HTML entry point
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.cjs       # TailwindCSS configuration
├── postcss.config.cjs        # PostCSS configuration
├── README.md                 # Project documentation
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main app component
    ├── styles/
    │   └── tailwind.css     # TailwindCSS imports and custom styles
    └── components/
        ├── Hero.jsx          # Hero section with animated drone SVG
        ├── About.jsx         # About section with company information
        ├── Products.jsx      # Product portfolio grid
        ├── Highlights.jsx    # Key capabilities showcase
        └── Contact.jsx       # Contact form component
```

## 🎨 Design System

### Colors
- **Background**: `#111214` (Dark base)
- **Accent**: `#ff7b00` (Orange)
- **Text**: Grayscale palette (white → gray-300 → gray-500)
- **Cards**: Glassmorphism with subtle gradients

### Typography
- System font stack for optimal performance
- Responsive font sizes (text-4xl to text-7xl)
- Clear hierarchy with proper weight distribution

### Spacing
- Consistent section padding: `pt-20 pb-20`
- Container max-width: `max-w-7xl`
- Responsive gaps and margins

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd vyomgarud-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Components Overview

### Hero Component
- Animated hero section with company name and tagline
- Custom SVG drone illustration with hover effects
- Call-to-action buttons (Contact Sales, View Capabilities)
- Responsive layout (column on mobile, row on desktop)

### About Component
- Detailed company information
- Four key areas: Autonomy Stack, UAV Engineering, Mission Endurance, Reliability
- Professional copywriting with proper spacing

### Products Component
- Grid layout showcasing 4 main products:
  - Endurance UAV
  - Payload Suite
  - Autonomy Stack
  - Ground Control System
- Glassmorphism cards with hover effects
- Icon-based visual representation

### Highlights Component
- 6 key capabilities in a grid layout
- Bullet-point style with accent indicators
- Responsive 2-column grid on desktop

### Contact Component
- Accessible contact form with validation
- Name, email, and message fields
- Form submission handling with loading states
- Smooth animations on interaction

## 🎯 Customization

### Changing Colors

Edit `tailwind.config.cjs` to modify the color scheme:

```javascript
colors: {
  accent: '#ff7b00',  // Change accent color
  dark: {
    bg: '#111214',    // Change background
    card: '#1a1b1e',  // Change card background
  },
}
```

### Modifying Content

Each component is self-contained. Edit the respective component files in `src/components/` to update content.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Follow the existing design patterns and spacing

## 🔧 Development

### Code Style
- ESLint and Prettier compatible
- Consistent component structure
- Reusable utility classes in `tailwind.css`

### Performance
- Optimized animations with Framer Motion
- Lazy loading for images (when added)
- Minimal bundle size with tree-shaking

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🚢 Deployment

### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Other Platforms
The `dist` folder contains static files that can be deployed to any static hosting service.

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For questions or support, please contact the development team.

---

Built with ❤️ for VyomGarud

