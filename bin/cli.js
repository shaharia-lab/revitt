#!/usr/bin/env node

import { program } from 'commander';
import { createApp } from '../lib/create-app.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .name('create-revitt-app')
  .description('Create a new React app with Vite, TypeScript, and Tailwind CSS v4')
  .version('1.0.0')
  .argument('[project-name]', 'Name of the project')
  .option('-t, --template <template>', 'Template to use', 'default')
  .action(async (projectName, options) => {
    try {
      await createApp(projectName, options);
    } catch (error) {
      console.error('Error creating app:', error.message);
      process.exit(1);
    }
  });

program.parse();