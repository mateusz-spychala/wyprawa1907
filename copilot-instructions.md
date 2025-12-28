# Copilot Instructions

## Project Overview
React TypeScript application built with Vite for an interactive story-driven game "Wyprawa 1907". Features a quiz/puzzle system with multiple game variants, diary entries, and narrative elements. Deployed to GitHub Pages.

## Technology Stack
- **Framework**: React 19.1.1 with TypeScript 5.8
- **Build Tool**: Vite 7.1
- **Routing**: React Router DOM 7.8 (HashRouter for GitHub Pages)
- **State Management**: Zustand 5.0 with Immer middleware
- **Styling**: SCSS (Sass 1.91)
- **Package Manager**: npm (scripts configured for npm, not bun)
- **Deployment**: GitHub Pages (gh-pages)

## Documentation Access
**Prefer official, version-specific documentation for libraries and tools.**

When implementing new features, troubleshooting version-specific issues, or working with unfamiliar APIs:
- If your environment provides Context7 MCP (or a similar documentation tool), use it to look up the official docs for the relevant library and version.
- Otherwise, consult the library’s official documentation site and clearly note any version assumptions you are making.
- When precise versioned docs are not available, fall back to general knowledge but be cautious about potential version differences.

**Project libraries**:
- React, Vite, React Router DOM, Zustand, TypeScript, Immer, Sass

**When NOT to use external documentation tools (including Context7 MCP)**:
- Basic React patterns already established in the codebase
- Simple TypeScript questions
- General programming concepts
- Quick clarifications that don't require version-specific details

## TypeScript Configuration
The project uses TypeScript project references with strict mode enabled:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- Target: ES2022
- Module resolution: bundler

Use `interface` for object shapes and export types explicitly. Always provide return types for functions.

## Code Style & Conventions

### React Components
- **Only functional components** with hooks
- Default export for single-component files
- PascalCase for component names and files
- Place in `src/components/` (reusable) or `src/pages/` (route components)

Example structure:
```tsx
import { useState } from 'react';

const ComponentName = () => {
  return <div>Content</div>;
};

export default ComponentName;
```

### File Organization
- **Components**: `src/components/` - Reusable UI (AnswerForm, Modal, Pagination, etc.)
- **Pages**: `src/pages/` - Route-level components (GamePage, Notes, Rozpadlina)
- **Store**: `src/store/` - Zustand stores with Immer middleware
- **Helpers**: `src/Helpers/` - Utility functions (note: PascalCase directory name)
- **Data**: `src/data/` - JSON data files for game content
- **Styles**: `src/styles/` - Global SCSS (variables, fonts, common)

### Naming Conventions
- **Component files**: PascalCase (`AnswerForm.tsx`, `GamePage.tsx`)
- **Utility files**: camelCase (`reverseAnswer.ts`)
- **Directories**: Mostly lowercase, except `Helpers/` uses PascalCase
- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase with `I` prefix for interfaces (`IGameData`, `IKey`)

### State Management with Zustand
- Check existing stores in `src/store/` before creating new ones
- Use Zustand with Immer middleware for immutable updates
- Include devtools middleware in development
- Define interfaces for state shape and store methods
- Export store hook and types

Example pattern:
```tsx
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IState {
  value: string;
}

interface IStore extends IState {
  setValue: (value: string) => void;
}

export const useStore = create<IStore>()(
  immer((set) => ({
    value: '',
    setValue: (value) => set({ value }),
  }))
);
```

### Routing Conventions
- Uses React Router DOM v7 with HashRouter (for GitHub Pages)
- Define routes in `src/App.tsx`
- Dynamic route: `/:pageId` for game pages
- Polish and English route aliases (`/notes` and `/notatki`)
- Catch-all redirect to home: `<Route path="*" element={<Navigate to="/" replace />} />`
- Use `useNavigate()` hook for programmatic navigation
- Use `useParams()` for route parameters

### Styling with SCSS
- Global styles in `src/styles/`
- Import variables from `src/styles/variables.scss`
- Use BEM-like naming for CSS classes
- Avoid inline styles unless dynamic
- Use semantic HTML with proper class names

### Data Handling
- Game data stored in JSON files: `dziennik29.json`, `dziennik29Przebudzenie.json`, `dziennik29Zapomnienie.json`
- Type all JSON data with TypeScript interfaces
- Keys structure: `{ answer: string, key: string, tip: string, error?: string }`
- Use `reverseAnswer` helper for answer validation

## Best Practices
- Keep components small and single-purpose
- Extract shared logic into custom hooks
- Use TypeScript strictly - no `any` types
- Handle errors gracefully with user feedback
- Ensure accessibility (semantic HTML, ARIA attributes)
- Prefer declarative patterns over imperative
- Use Zustand selectors to prevent unnecessary re-renders

## Project-Specific Patterns
- **Game Variants**: Three versions with different diary content (base, Przebudzenie, Zapomnienie)
- **Modal System**: Centralized modal component with type-based content ('tip', 'answer')
- **Pagination**: Custom pagination for navigating game pages
- **Answer Validation**: Uses `reverseAnswer` helper function
- **State**: Game state managed in `GameStore` (currentPage, keys, result, correctAnswer)

## Development Workflow

### Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production (TypeScript check + Vite build)
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
npm run deploy       # Deploy to GitHub Pages
```

### Deployment
- Configured for GitHub Pages at `https://mateusz-spychala.github.io/wyprawa1907/`
- Uses HashRouter to handle client-side routing on GitHub Pages
- Build artifacts in `dist/` directory
- Auto-deploy with `npm run deploy` (runs build then gh-pages)

## Environment Notes
- Development: Uses HashRouter with `/` base
- Production: Deployed to GitHub Pages subdirectory
- No environment variables currently configured
- Vite handles imports via `import.meta.env`
