# Vireak Buntham - Slide Manager (Nuxt 3)

This is a professional slide and advertising management system built with Nuxt 3, Vue 3, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Nuxt 3** - Modern Vue.js framework with server-side rendering
- 🎨 **Vue 3** with Composition API - Reactive and component-based UI
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗂️ **Pinia** - State management for Vue
- 📱 **Responsive Design** - Mobile-first responsive layout
- 🎛️ **Slide Management** - CRUD operations for mobile and website slides
- 🔐 **Authentication** - Mock authentication system
- 📊 **Category Management** - Mobile/Website slideshow and advertising
- 🔔 **Notifications** - Real-time feedback system

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd viet_slide_and_advertising
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview

# Generate static site (if needed)
npm run generate
```

## Project Structure

```
├── components/           # Vue components
│   ├── layout/          # Layout components (Sidebar, Header)
│   └── ...              # Other reusable components
├── composables/         # Vue composables (useAuth, useSlides)
├── pages/              # Nuxt pages (file-based routing)
├── assets/css/         # Stylesheets and Tailwind CSS
├── constants/          # Mock data and constants
├── types/              # TypeScript type definitions
├── services/           # API services (Gemini AI)
├── public/             # Static assets
└── nuxt.config.ts      # Nuxt configuration
```

## Key Components

### Authentication
- Mock authentication system with local storage
- Login/Register functionality
- User profile management

### Slide Management
- Create, read, update, delete slides
- Category-based organization (Mobile/Website × Slideshow/Advertising)
- Image upload and management
- Order and status management

### Layout
- Responsive sidebar navigation
- Header with user menu
- Mobile-friendly design

## API Integration

The app includes integration with Google's Gemini AI for generating slide titles from images. Make sure to set your `GEMINI_API_KEY` in the environment variables.

## Development

### Adding New Pages
Create `.vue` files in the `pages/` directory. Nuxt will automatically create routes based on the file structure.

### Adding New Components
Create `.vue` files in the `components/` directory. Components are auto-imported in Nuxt 3.

### State Management
Use the composables in the `composables/` directory:
- `useAuth()` - Authentication state and methods
- `useSlides()` - Slide management state and methods

### Styling
The project uses Tailwind CSS. Custom styles are in `assets/css/main.css`.

## Migration from React

This project was migrated from React + Vite to Nuxt 3 + Vue 3. The original React files are preserved in the `_old_react_files/` directory for reference.

## License

This project is private and proprietary.
