# create-revitt-app

Create React apps with Vite, TypeScript, and Tailwind CSS v4 with no build configuration.

## Quick Overview

```bash
npx create-revitt-app my-app
cd my-app
npm run dev
```

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS
- 🧪 **Jest** - Testing framework pre-configured
- 📏 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting
- 🔥 **Hot Module Replacement** - Instant updates during development

## Creating an App

You'll need Node.js 18+ on your local development machine.

To create a new app, run:

```bash
npx create-revitt-app my-app
```

This will create a directory called `my-app` inside the current folder with the following structure:

```
my-app/
├── public/
├── src/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── tests/
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

Once the installation is done, you can open your project folder:

```bash
cd my-app
```

Inside the newly created project, you can run built-in commands:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Locally preview the production build.

### `npm test`

Runs the test suite.

## What's Included?

Your environment will have everything you need to build a modern React app:

- React and React DOM
- TypeScript for type safety
- Vite for fast development and optimized builds
- Tailwind CSS v4 for styling
- ESLint for code quality
- Prettier for code formatting
- Jest and Testing Library for testing

## License

MIT