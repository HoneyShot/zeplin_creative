# Profuture Dergisi

> Bilgi ve Teknoloji Araştırmaları Dergisi - Akademik Yayın Platformu

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 About

**Profuture Dergisi** is a modern, responsive web platform for an academic journal focused on Information and Technology Research. The platform showcases journal issues, accepts article submissions, and provides comprehensive information about the publication's scope and objectives.

---

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling** - Enhanced navigation with anchor-based smooth scrolling
- **Dynamic Sections** - Hero, About, Article Submissions, Issues Archive
- **Performance Optimized** - Built with Next.js for optimal loading speeds
- **Accessible** - Following web accessibility best practices

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React Framework |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI Components |
| [Lucide Icons](https://lucide.dev/) | Icon Library |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22.XX
- **npm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HoneyShot/profuture-dergisi.git
   cd profuture-dergisi
   ```

2. **Install dependencies**
   ```bash
   npm install

3. **Run the development server**
   ```bash
   npm run dev

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── MobileMenu.tsx  # Mobile navigation
│   ├── pages/              # Page components
│   │   ├── LandingPage.tsx # Main landing page
│   │   └── landing/        # Landing page sections
│   └── ui/                 # UI components
│       ├── Badge.tsx       # Shadcn Component
│       ├── Icon.tsx        # Icon component
│       └── ...             # shadcn/ui components
├── lib/                    # Utility functions
│   ├── magazine-data.ts    # Magazine data
│   └── utils.ts            # Helper utilities
public/
├── icons/                  # Icon assets
└── vectors/                # SVG illustrations
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

### Tailwind Configuration

Modify `tailwind.config.ts` to customize:
- Color palette
- Typography
- Breakpoints
- Custom utilities

### Components

UI components are located in `src/components/ui/`. The project uses [shadcn/ui](https://ui.shadcn.com/) for base components which can be customized as needed.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
