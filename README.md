# VyomGarud Landing Website

A production-grade, pixel-perfect landing website for VyomGarud - an advanced UAV (Drone) defense technology company. Built with modern web technologies and featuring a dark military theme with premium animations.

<img width="400" height="874" alt="Screenshot 2025-11-15 205024" src="https://github.com/user-attachments/assets/0ea22e01-12ed-45b5-833d-5b9c3ff5f91d" />
<img width="400" height="857" alt="Screenshot 2025-11-15 205030" src="https://github.com/user-attachments/assets/b375ba16-bf19-4223-aa73-1d9ca27c9a43" />

<img width="400" height="857" alt="Screenshot 2025-11-15 205034" src="https://github.com/user-attachments/assets/982ddf00-3080-4eab-b5ca-95654765abba" />
<img width="400" height="857" alt="Screenshot 2025-11-15 205038" src="https://github.com/user-attachments/assets/dc784ee9-ff2d-4474-8156-dbcca8f8a679" />

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

Your project is now on GitHub: [https://github.com/PRATYUSH213S/VyomGarud-project](https://github.com/PRATYUSH213S/VyomGarud-project)

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your repository: `PRATYUSH213S/VyomGarud-project`
4. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**
6. Your site will be live in ~2 minutes with a URL like: `vyomgarud-project.vercel.app`

**Benefits**: Free, automatic HTTPS, custom domains, auto-deploys on git push

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your repository: `PRATYUSH213S/VyomGarud-project`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**
6. Your site will be live with a URL like: `vyomgarud-project.netlify.app`

**Benefits**: Free, automatic HTTPS, custom domains, form handling

### Option 3: GitHub Pages

1. Build your project locally:
   ```bash
   npm run build
   ```
2. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. Enable GitHub Pages in repository settings → Pages → Source: `gh-pages` branch
6. Your site will be at: `https://PRATYUSH213S.github.io/VyomGarud-project`

### Option 4: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. The `dist` folder contains all static files
3. Upload the contents of `dist` to any static hosting service:
   - AWS S3 + CloudFront
   - Firebase Hosting
   - Azure Static Web Apps
   - Any web server (Apache, Nginx, etc.)

### Build for Production

Before deploying, always build the project:

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For questions or support, please contact the development team.

---

Built with ❤️ for VyomGarud

