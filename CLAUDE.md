# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

동풍직구 (Dongpung Direct) landing page - A Next.js 15 application for a China-Korea import/shipping service company.

## Commands

### Development
```bash
npm run dev        # Start development server (usually on port 3009 or 3010)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Git Operations
```bash
git add -A
git commit -m "message"
git push origin main
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4 (NOT v4 - important for compatibility)
- **Animations**: Framer Motion
- **UI Components**: Custom components based on shadcn/ui patterns
- **Icons**: Lucide React
- **Deployment**: Vercel (configured for Seoul region - icn1)

### Project Structure
```
/app              # Next.js App Router pages
  layout.tsx      # Root layout with Header/Footer
  page.tsx        # Home page composition
  globals.css     # Global styles with Tailwind directives

/components
  /layout         # Header and Footer components
  /sections       # Main page sections (Hero, Services, etc.)
  /ui             # Reusable UI components (Button, Card)

/lib
  utils.ts        # cn() utility for className merging

/public           # Static assets including logo.png
```

### Component Architecture

The landing page follows a sectional architecture:
1. **HeroSection**: Main banner with gradient backgrounds and animated cards
2. **ServiceIntro**: Three core services display
3. **Advantages**: Company strengths with statistics
4. **ProcessFlow**: 5-step process visualization
5. **CustomServices**: 3PL services grid
6. **CTASection**: Contact methods and call-to-action

All sections use:
- Framer Motion for scroll-triggered animations
- Responsive grid layouts
- Consistent color scheme (primary: #0099CC, accent: #FFB800)

### Styling System

Uses Tailwind CSS with custom configuration:
- Custom colors mapped to CSS variables
- Pretendard font for Korean text
- Utility classes for gradients and animations
- Mobile-first responsive design

Important: The project uses Tailwind CSS v3, not v4. PostCSS config uses `tailwindcss: {}`, not `@tailwindcss/postcss`.

### State Management

Components use React hooks for local state:
- Mobile menu toggle in Header
- Hover effects in CTASection
- All animations are declarative via Framer Motion

### Deployment Configuration

Vercel deployment is configured via `vercel.json`:
- Seoul region (icn1) for optimal Korea performance
- Next.js framework preset
- Standard build/dev commands

## Key Considerations

### When Adding Features
- Maintain the existing component structure in `/components/sections/`
- Follow the established Framer Motion animation patterns
- Use existing UI components from `/components/ui/`
- Keep responsive design patterns consistent

### When Fixing Issues
- Check Tailwind CSS version compatibility (must be v3)
- Verify imports use correct paths with @ alias
- Test on multiple viewport sizes
- Ensure Korean text renders with Pretendard font

### Performance
- Images use Next.js Image component with priority for above-fold content
- Animations use GPU-accelerated transforms
- Components are client-side only when necessary ('use client')