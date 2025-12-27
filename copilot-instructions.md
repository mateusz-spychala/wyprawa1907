# Copilot Instructions

## Project Overview
This is a React TypeScript application built with Vite for a game/interactive experience called "Wyprawa 1907". The application features a quiz/game system with notes and story elements.

## Technology Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS modules
- **Package Manager**: Bun
- **State Management**: Custom stores (see `src/store/`)

## Code Style & Conventions

### TypeScript
- Use functional components with TypeScript
- Prefer `interface` over `type` for object definitions
- Always provide explicit return types for functions
- Use strict TypeScript settings

### React Components
- Use functional components with hooks
- Place components in `src/components/` directory
- Use PascalCase for component names
- Export components as default when there's only one per file

### File Organization
- **Components**: `src/components/` - Reusable UI components
- **Pages**: `src/pages/` - Page-level components
- **Store**: `src/store/` - State management
- **Helpers**: `src/Helpers/` - Utility functions
- **Data**: `src/data/` - JSON data files
- **Styles**: `src/styles/` - Global SCSS files

### Styling
- Use SCSS for styling
- Import variables from `src/styles/variables.scss`
- Follow BEM naming convention for CSS classes
- Keep component-specific styles in the component file or separate SCSS file

### Naming Conventions
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase with descriptive names

### State Management
- Check `src/store/` for existing stores before creating new ones
- Use React Context or custom stores for global state
- Keep component-level state minimal

### Data Handling
- Game data is stored in JSON files in `src/data/`
- Use TypeScript interfaces to type JSON data
- Validate data structure when loading

## Best Practices
- Prefer composition over inheritance
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use meaningful variable and function names
- Add comments for complex logic
- Handle errors gracefully
- Ensure accessibility (semantic HTML, ARIA labels)

## Project-Specific Notes
- The application appears to be a story-driven game with diary entries ("dziennik")
- Multiple game variations exist: base, "Przebudzenie", "Zapomnienie"
- Modal system is in place for UI interactions
- Pagination component exists for navigating content
- Answer validation uses `reverseAnswer` helper function

## Development Commands
- Development server: Likely `bun dev` or `bun run dev`
- Build: Likely `bun build`
- Check package.json for exact scripts
