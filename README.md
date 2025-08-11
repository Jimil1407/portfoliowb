# Modern Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://jimil.vercel.app/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4)](https://tailwindcss.com/)

A modern, responsive portfolio website built with React, TypeScript, Vite, and styled with Tailwind CSS and shadcn/ui components. Features smooth animations, interactive elements, and a clean, professional design.

## 🌐 Live Demo

**[Visit Portfolio →](https://jimil.vercel.app/)**

## 📸 Screenshots

### Desktop View
![Desktop Preview](https://via.placeholder.com/800x600/0f172a/f1f5f9?text=Portfolio+Desktop+View)

### Mobile View
![Mobile Preview](https://via.placeholder.com/400x800/0f172a/f1f5f9?text=Portfolio+Mobile+View)

## ✨ Features

- **Responsive Design**: Fully optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Engaging user interface elements
- **Dark/Light Theme**: Beautiful theming system
- **Performance Optimized**: Built with Vite for lightning-fast loading
- **Type Safety**: Full TypeScript integration
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jimil1407/portfoliowb.git
   cd portfoliowb
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

## 🎨 Customization

### Personalizing the Portfolio

To customize this portfolio for your own use:

1. **Update Personal Information**
   - Edit `src/data/portfolio.ts` (or relevant data files)
   - Replace placeholder content with your information
   - Update social media links and contact details

2. **Customize Styling**
   - Modify `tailwind.config.ts` for theme customization
   - Update color schemes in the CSS variables
   - Adjust component styles in respective component files

3. **Add/Remove Sections**
   - Components are modular - easy to add/remove
   - Update navigation in `src/components/Navigation.tsx`
   - Modify main layout in `src/App.tsx`

4. **Update Images and Assets**
   - Replace images in `public/` directory
   - Update favicon and metadata in `index.html`
   - Add your own project screenshots and portfolio images

5. **Configure SEO**
   - Update meta tags in `index.html`
   - Modify site title and description
   - Add Open Graph and Twitter meta tags

### Environment Variables

Create a `.env` file for any environment-specific configurations:

```env
VITE_SITE_TITLE="Your Portfolio"
VITE_SITE_DESCRIPTION="Your portfolio description"
VITE_CONTACT_EMAIL="your.email@example.com"
```

## 📁 Project Structure

```
portfoliowb/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── sections/     # Portfolio sections
│   │   └── common/       # Shared components
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── styles/
│   │   └── globals.css   # Global styles
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 🚀 Deployment

This project is optimized for deployment on Vercel, but can be deployed anywhere that supports static sites:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Other Platforms
- **Netlify**: Drag and drop the `dist` folder after `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered development platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **If you found this project helpful, please give it a star!**
