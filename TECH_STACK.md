# 🛠️ Tech Stack Analysis - Wyprawa 1907

## Overview
Wyprawa 1907 is a modern web application built with React and TypeScript, designed to provide an interactive puzzle-solving experience for the book "Dziennik 29". The application uses a contemporary frontend stack with cutting-edge build tools and state management solutions.

---

## 📦 Core Technologies

### **React 19.1.1**
Modern JavaScript library for building user interfaces with a component-based architecture. React 19 is the latest major version, offering improved performance and developer experience.

- **Usage**: Core UI framework for building interactive components
- **Key Features**: Component composition, hooks, virtual DOM, JSX syntax
- **Files**: All `.tsx` files in `src/` directory

### **TypeScript 5.8.3**
Typed superset of JavaScript that compiles to plain JavaScript, providing static type checking and enhanced IDE support.

- **Usage**: Primary development language ensuring type safety
- **Configuration**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- **Compiler Options**: Strict mode enabled, ES2022 target, bundler module resolution

### **Vite 7.1.2**
Next-generation frontend build tool that provides extremely fast development server and optimized production builds.

- **Usage**: Development server, build tool, and bundler
- **Configuration**: `vite.config.ts`
- **Features**: Hot Module Replacement (HMR), fast cold start, optimized builds
- **Plugin**: `@vitejs/plugin-react` for React Fast Refresh support

---

## 🎨 Frontend Stack

### **React Router DOM 7.8.2**
Declarative routing library for React applications enabling single-page application navigation.

- **Usage**: Client-side routing with HashRouter for GitHub Pages compatibility
- **Features**: URL-based navigation, route parameters, nested routes
- **Implementation**: Supports multiple puzzle sets with dynamic routes

### **Zustand 5.0.8**
Lightweight state management solution with a minimal API, providing a simple and scalable approach to managing application state.

- **Usage**: Global state management for game progress and user interactions
- **Store**: `src/store/GameStore.tsx`
- **Features**: Simple hooks-based API, minimal boilerplate, TypeScript support

### **Immer 10.1.1**
Library for working with immutable state using a more convenient mutable API.

- **Usage**: Used with Zustand for simplified state updates
- **Benefits**: Write simpler code while maintaining immutability

### **Sass/SCSS**
CSS preprocessor that extends CSS with features like variables, nesting, and mixins.

- **Packages**: `sass@1.91.0`, `sass-embedded@1.91.0`
- **Usage**: Styling with variables, nested rules, and modular CSS
- **Files**: `src/styles/` directory containing `variables.scss`, `common.scss`, `main.scss`

---

## 🔧 Development Tools

### **ESLint 9.33.0**
Pluggable linting utility for JavaScript and TypeScript to identify and fix code quality issues.

- **Configuration**: `eslint.config.js` (flat config format)
- **Plugins**:
  - `@eslint/js` - Core JavaScript rules
  - `typescript-eslint@8.39.1` - TypeScript-specific linting
  - `eslint-plugin-react-hooks@5.2.0` - React Hooks rules
  - `eslint-plugin-react-refresh@0.4.20` - React Fast Refresh validation
- **Command**: `npm run lint`

### **Bun**
Modern JavaScript runtime and package manager used in the CI/CD pipeline.

- **Usage**: Dependency installation and build execution in GitHub Actions
- **Lock File**: `bun.lockb`
- **Benefits**: Faster package installation and script execution

---

## 🚀 Deployment & Infrastructure

### **GitHub Pages**
Static site hosting service provided by GitHub.

- **Package**: `gh-pages@6.3.0`
- **Deployment**: Automated via GitHub Actions
- **Base Path**: `/wyprawa1907/` for production builds
- **URL**: `https://mateusz-spychala.github.io/wyprawa1907/`

### **GitHub Actions**
CI/CD automation platform for building and deploying the application.

- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `master` branch or manual dispatch
- **Steps**:
  1. Checkout code
  2. Setup Bun runtime
  3. Install dependencies with Bun
  4. Build application
  5. Configure GitHub Pages
  6. Upload build artifacts
  7. Deploy to GitHub Pages

### **Docker Compose**
Tool for defining and running multi-container Docker applications.

- **Configuration**: `docker-compose.yml`
- **Service**: Jekyll server for local preview of built site
- **Image**: `jekyll/jekyll:pages`
- **Port**: 4000
- **Usage**: Local testing of the production build

---

## 📂 Project Structure

```
wyprawa1907/
├── src/
│   ├── components/      # React components (Header, Footer, Game, etc.)
│   ├── pages/           # Page components (GamePage, Notes, Rozpadlina)
│   ├── store/           # Zustand state management
│   ├── styles/          # SCSS stylesheets
│   ├── data/            # Application data
│   ├── assets/          # Static assets (images, icons)
│   ├── Helpers/         # Utility functions
│   ├── App.tsx          # Root component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
├── docker-compose.yml   # Docker configuration
└── .github/
    └── workflows/
        └── deploy.yml   # CI/CD pipeline
```

---

## 📋 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Compile TypeScript and build production bundle |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## 🔑 Key Features Enabled by Tech Stack

1. **Type Safety**: TypeScript with strict mode catches errors at compile time
2. **Fast Development**: Vite's instant HMR provides immediate feedback
3. **Modern React**: Latest React 19 features and patterns
4. **Responsive Design**: SCSS enables maintainable styling with variables and nesting
5. **State Management**: Zustand provides simple, scalable state management
6. **Client-Side Routing**: React Router enables SPA navigation with URL support
7. **Code Quality**: ESLint ensures consistent code style and best practices
8. **Automated Deployment**: GitHub Actions automates the build and deployment process
9. **Static Hosting**: GitHub Pages provides free, reliable hosting for the application

---

## 🎯 Technology Choices Rationale

- **React 19**: Latest version provides performance improvements and modern features
- **TypeScript**: Ensures code reliability and better developer experience
- **Vite**: Significantly faster than traditional bundlers like Webpack
- **Zustand**: Simpler than Redux, less boilerplate than Context API
- **SCSS**: More maintainable than plain CSS, lighter than CSS-in-JS
- **HashRouter**: Required for GitHub Pages (no server-side routing)
- **Bun**: Faster CI/CD builds compared to npm
- **GitHub Pages**: Free hosting with automatic HTTPS and CDN

---

## 📊 Dependencies Summary

### Production Dependencies (5)
- **UI Framework**: React, React DOM
- **Routing**: React Router DOM
- **State**: Zustand, Immer

### Development Dependencies (12)
- **Build**: Vite, @vitejs/plugin-react
- **Language**: TypeScript, @types/react, @types/react-dom
- **Linting**: ESLint + 4 plugins
- **Styling**: Sass, sass-embedded
- **Deployment**: gh-pages
- **Utilities**: globals

---

## 🌐 Browser Support

Based on TypeScript configuration targeting ES2022 and Vite defaults:
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES2022 feature support required
- DOM and DOM.Iterable API support

---

## 💡 Development Requirements

- **Node.js**: Version 18 or higher
- **Package Manager**: npm (or Bun for faster installation)
- **Git**: For version control
- **Modern Browser**: For testing and development

---

*Last Updated: January 2026*
