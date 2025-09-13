# MidTyper

A modern, responsive web application built with React, TypeScript, and Tailwind CSS. MidTyper provides a sleek user interface with internationalization support, dark mode, and smooth animations.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Dark Mode**: Automatic theme switching with system preference detection
- **Internationalization**: Multi-language support with i18next
- **TypeScript**: Full type safety and better development experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Toast Notifications**: Modern toast system with Sonner
- **Error Handling**: Custom 404 and error pages
- **Performance Optimized**: Code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/MidTyper.git
   cd MidTyper
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run build:dev` - Build in development mode
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   └── ...             # Feature components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🌐 Internationalization

The app supports multiple languages through i18next. Language files are located in `src/lib/i18n.ts`.

## 🎨 Theming

- **Light/Dark Mode**: Automatic theme switching
- **Custom CSS Variables**: Consistent color scheme
- **Responsive Design**: Mobile-first approach

## 🚀 Deployment

### Build for Production

```bash
pnpm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `pnpm run build`
2. Upload the `dist/` folder to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Ahmed Moh**

- GitHub: [@AhmedMohO](https://github.com/AhmedMohO)
- Portfolio: https://ahmed-port-folio.vercel.app/

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the amazing library
