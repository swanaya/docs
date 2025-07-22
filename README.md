# RipkaAI Development Program - Remix Documentation

A modern, responsive documentation website for the Ketivee AI project, built with React Remix and featuring a dark theme by default with theme switching capabilities.

## Features

- 🌙 **Dark Theme by Default** - Modern dark theme with smooth transitions
- 🔄 **Theme Switching** - Toggle between dark and light themes with persistent preferences
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Remix for optimal loading speeds
- 🎨 **Modern UI** - Beautiful animations and smooth interactions
- 📚 **Comprehensive Documentation** - Detailed information about all AI models
- 🧭 **Smart Navigation** - Collapsible sidebar with smooth animations

## AI Models Covered

- **RipkaAI** - Main AI for user interaction and natural language processing
- **AAdi AI** - 3D image and video generation
- **Yug AI** - 3D generation and environment design
- **Arth AI** - Audio/music generation and voice processing
- **Ved AI** - Mental health and medical assistance
- **Parth AI** - Local AI for user assistance and security

## Tech Stack

- **Framework**: React Remix
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Theme Management**: React Context with localStorage persistence
- **Animations**: CSS transitions and Tailwind animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd docs-remix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
docs/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Main navigation bar
│   │   ├── SideMenu.tsx    # Collapsible sidebar
│   │   └── ThemeToggle.tsx # Theme switching button
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── routes/             # Remix routes
│   │   ├── _index.tsx      # Home page
│   │   ├── aadi.tsx        # AAdi AI page
│   │   └── yug.tsx         # Yug AI page
│   ├── root.tsx            # Root layout
│   └── tailwind.css        # Global styles
├── public/
│   ├── assets/             # Images and static assets
│   └── favicon.ico         # Site favicon
└── tailwind.config.ts      # Tailwind configuration
```

## Customization

### Adding New AI Model Pages

1. Create a new route file in `app/routes/`
2. Follow the pattern of existing pages (aadi.tsx, yug.tsx)
3. Add navigation link to `SideMenu.tsx`

### Modifying Theme Colors

Update the color variables in `tailwind.config.ts`:

```typescript
colors: {
  background: {
    light: '#f4f4f9',
    dark: '#1e1e2f',
  },
  accent: '#6e57ac',
  'secondary-accent': '#6d3683b6',
  // ... other colors
}
```

### Adding New Components

1. Create component file in `app/components/`
2. Export the component
3. Import and use in your routes

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Vercel will automatically detect Remix and deploy
3. No additional configuration needed

### Other Platforms

The app can be deployed to any platform that supports Node.js applications:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS, Google Cloud, Azure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Ketivee AI initiative and follows the same licensing terms as the main project.

## Support

For questions or support, please refer to the main Ketivee AI documentation or contact the development team.

---

**Built with ❤️ by the Ketivee AI Team**
