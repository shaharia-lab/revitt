import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createApp(projectName, options = {}) {
  if (!projectName) {
    console.log(chalk.red('Please provide a project name:'));
    console.log(chalk.cyan('  npx create-revitt-app my-app'));
    process.exit(1);
  }

  const projectPath = path.resolve(projectName);
  const templatePath = path.join(__dirname, '..', 'templates', options.template || 'default');

  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`Directory ${projectName} already exists.`));
    process.exit(1);
  }

  console.log(chalk.green(`Creating a new React app in ${chalk.bold(projectPath)}`));
  console.log();

  // Copy template files
  const copySpinner = ora('Copying template files...').start();
  try {
    await fs.copy(templatePath, projectPath);
    
    // Update package.json with project name
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    
    copySpinner.succeed('Template files copied');
  } catch (error) {
    copySpinner.fail('Failed to copy template files');
    throw error;
  }

  // Install dependencies
  const installSpinner = ora('Installing dependencies...').start();
  try {
    process.chdir(projectPath);
    execSync('npm install', { stdio: 'pipe' });
    installSpinner.succeed('Dependencies installed');
  } catch (error) {
    installSpinner.fail('Failed to install dependencies');
    throw error;
  }

  console.log();
  console.log(chalk.green('Success! Created'), chalk.bold(projectName), chalk.green('at'), chalk.bold(projectPath));
  console.log();
  console.log('Inside that directory, you can run several commands:');
  console.log();
  console.log(chalk.cyan('  npm run dev'));
  console.log('    Starts the development server.');
  console.log();
  console.log(chalk.cyan('  npm run build'));
  console.log('    Builds the app for production.');
  console.log();
  console.log(chalk.cyan('  npm run preview'));
  console.log('    Serves the built app locally.');
  console.log();
  console.log('We suggest that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), projectName);
  console.log(chalk.cyan('  npm run dev'));
  console.log();
}