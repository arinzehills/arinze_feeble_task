# Feeble Hero Section - Frontend Assignment

A pixel-perfect implementation of the Feeble hero section with advanced animations and responsive design. with a MODULAR driven architecture to promote modular code and scalability, 

## 🚀 Live Demo

**Deployed Website:** https://hilary-feeble-task.netlify.app/

## 📋 Overview

This project is a frontend assignment for Feeble, implementing a hero section with:
- Pixel-perfect UI matching the Figma design
- Complex animation sequences
- Responsive layout for all device sizes
- High-quality code structure and organization

## 🛠 Tech Stack

### Core Framework
- **React 18** - UI library
- **Vite** - Build tool and development server
- **TypeScript** - Type safety (configured but not enforced in this project)

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animation library

### Additional Libraries
- **Iconify React** - Icon management system

## 📦 Installation & Setup

### Prerequisites
- Node.js (v20.16.0 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd arinze_feeble_task

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Implementation Details

### Project Structure

```
src/
├── App.tsx                          # Main app router and layout
├── App.css                          # Global styles
├── index.css                        # Tailwind directives and global CSS
├── app/
│   └── layout/
│       └── homepage/
│           ├── HomepageWrapper.tsx  # Layout wrapper with navbar
│           └── components/
│               └── Navbar.tsx       # Fixed navigation bar
└── modules/
    └── homepage/
        ├── HomePage.tsx             # Page component
        └── components/
            ├── HeroSection.tsx       # Main hero section
            ├── HeroTextContent.tsx   # Text content with decorative birds
            └── CrossingBirds.tsx     # Framer Motion bird animations
```



## 🎯 Design Implementation

### Pixel-Perfect Accuracy
- **Navbar**: 70px height, positioned 32px from top
- **Hero text content**: 40px from top of screen
- **Spacing**: Carefully matched margins and padding
- **Typography**: System fonts matching design specs
- **Colors**:
  - Primary blue: `#007AFF` / `#0D7AFF`
  - Text: Black with gray accents
  - Backgrounds: Light blue gradients

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg, xl)
- Flexible grid and flexbox layouts
- Touch-friendly interactive elements
- Optimized viewport settings

## 🎬 Animation Sequence

### Page Load
1. **0-800ms**: Initial delay
2. **800ms**: Hero content appears
3. **800-1000ms**: Cloud slides in from bottom
4. **800-1600ms**: Animated birds (Bird 1-4) slide in with staggered timing
5. **Continuous**: Crossing birds move slowly and continuously
6. **Continuous**: Flying birds at bottom animate in loops

### User Interaction
- Navbar links are functional
- Buttons have hover states
- All interactive elements are accessible

## 🔧 Configuration

### Tailwind CSS
 

### Framer Motion
- Configured for smooth 60fps animations

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Implementation Highlights

### Attention to Detail
- Precise spacing and alignment
- Multiple animation layers with staggered timing
- Color accuracy matching design
- Proper z-index layering

### Code Quality
- Clean, readable component structure
- Proper separation of concerns
- Reusable animation patterns
- Consistent naming conventions
- No unused imports or variables

### Performance
- Optimized animations with hardware acceleration
- Lazy loading considerations
- Efficient re-render prevention with proper state management
- Responsive image handling

 
## 🚀 Deployment

The project is deployed on **Netlify** with automatic deployments from the GitHub repository.

**Live URL**: https://hilary-feeble-task.netlify.app/

### Deployment Setup
- Build command: `npm run build`
- Publish directory: `dist/`
- Environment: Production-optimized build

## 📄 License

This is a proprietary assignment for Feeble. All rights reserved.

## 👤 Author

Developed as part of the Feeble Frontend Developer Assignment.

---

**Last Updated**: December 2024
**Status**: Ready for Submission ✅