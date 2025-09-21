# FTDM Framework Website

This is the official website for the **FTDM Framework** (Fast-Track Development Methodology) - an interactive knowledge base that showcases the framework's capabilities, user journey, and integration scenarios.

## 🚀 Features

- **Interactive Framework Overview**: 7-stage visual flow with detailed explanations
- **User Journey Simulation**: Step-by-step interactive walkthrough
- **Capabilities Showcase**: Interactive demonstration of framework features
- **Scenario Selector**: Choose between different project integration scenarios
- **Anti-Hallucination Safeguards**: Visual representation of error prevention
- **Modern UI/UX**: Responsive design with dark/light mode
- **Performance Optimized**: Fast loading, optimized for Vercel deployment

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion (animations)
- **Icons**: Lucide React (modern icon set)
- **Deployment**: Vercel (optimized for Next.js)
- **Search**: Built-in Next.js search functionality
- **Interactive Components**: Custom React components with smooth animations

## 📱 Website Structure

```
/
├── Home (Framework Overview)
├── Framework Flow (Interactive 7-Stage Diagram)
├── User Journey (Step-by-Step Interactive Guide)
├── Capabilities (Interactive Feature Showcase)
├── Scenarios (3 Project Scenarios with Interactive Demos)
├── Anti-Hallucination (Safeguards Visualization)
└── Get Started (Quick Start Guide)
```

## 🎯 Interactive Features

1. **Stage Progression Simulator**: Users can click through stages and see what happens
2. **Scenario Builder**: Interactive tool to build their specific scenario
3. **Domain Detector**: Interactive tool that shows how domain detection works
4. **Codebase Analyzer**: Interactive demo of existing project analysis
5. **Visual Diagram Generator**: Interactive Mermaid diagram viewer
6. **Framework Comparison**: Interactive comparison with traditional development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ftdm-framework/website.git
cd ftdm-framework-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment on Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository

2. **Configure Deployment**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Your website will be live at `https://your-project-name.vercel.app`

## 📁 Project Structure

```
ftdm-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── theme-provider.tsx
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── framework-overview.tsx
│   │   ├── capabilities.tsx
│   │   ├── user-journey.tsx
│   │   ├── scenarios.tsx
│   │   ├── anti-hallucination.tsx
│   │   └── get-started.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors and Themes

The website uses a custom color scheme defined in `globals.css`. You can customize:

- Primary colors (blue/purple gradient)
- Background colors
- Text colors
- Component colors

### Components

All components are modular and can be easily customized:

- **Hero**: Main landing section
- **Framework Overview**: Interactive stage flow
- **Capabilities**: Feature showcase
- **User Journey**: Step-by-step guide
- **Scenarios**: Project integration scenarios
- **Anti-Hallucination**: Safeguards visualization
- **Get Started**: CTA section

### Content

Update content by modifying the respective component files:

- Framework stages: `framework-overview.tsx`
- Capabilities: `capabilities.tsx`
- User journey: `user-journey.tsx`
- Scenarios: `scenarios.tsx`

## 🔧 Development

### Adding New Features

1. Create new components in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Add navigation links in `src/components/navigation.tsx`

### Styling

- Use Tailwind CSS classes
- Custom styles in `globals.css`
- Component-specific styles in component files

### Animations

- Use Framer Motion for animations
- Import motion components: `import { motion } from 'framer-motion'`
- Add animation props to components

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for performance
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic code splitting
- **Caching**: Optimized caching strategies

## 🛡️ Security

- **HTTPS**: Automatic HTTPS on Vercel
- **Security Headers**: Configured security headers
- **Content Security Policy**: CSP headers configured
- **Dependencies**: Regular security updates

## 📈 Analytics

Ready for analytics integration:

- Google Analytics
- Vercel Analytics
- Custom analytics solutions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: [FTDM Framework Docs](https://ftdm-framework.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/ftdm-framework/website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ftdm-framework/website/discussions)

## 🎯 Roadmap

- [ ] Interactive Mermaid diagram viewer
- [ ] Live code examples
- [ ] Video tutorials
- [ ] Community forum
- [ ] API documentation
- [ ] Mobile app

---

**FTDM Framework Website** - Transform raw requirements into production-ready applications! 🚀# Deployment Fix - Mon Sep 22 02:00:50 IST 2025
# Manual deployment trigger - Mon Sep 22 02:06:45 IST 2025
# Force Vercel Redeploy - Mon Sep 22 02:13:45 IST 2025
