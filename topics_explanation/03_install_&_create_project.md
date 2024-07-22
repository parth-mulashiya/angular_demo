## Install and Create First Porject

Installing Angular and setting up your first project. This process involves several steps, so I'll break it down in detail:

Prerequisites:

1. Node.js and npm (Node Package Manager):
   Angular requires Node.js version 12.14.0 or later. To check if you have Node.js installed:
   ```
   node -v
   npm -v
   ```
   If not installed, download and install from nodejs.org.

2. Text Editor or IDE:
   Visual Studio Code, WebStorm, or Sublime Text are popular choices.

Installation Steps:

1. Install the Angular CLI (Command Line Interface):
   The Angular CLI is a command-line tool that you use to initialize, develop, scaffold, and maintain Angular applications.

   Open your terminal or command prompt and run:
   ```
   npm install -g @angular/cli
   ```
   The -g flag installs the CLI globally on your machine.

2. Verify the installation:
   ```
   ng version
   ```
   This should display the Angular CLI version along with other related package versions.

3. Create a new Angular project:
   Navigate to the directory where you want to create your project and run:
   ```
   ng new my-angular-app
   ```
   Replace "my-angular-app" with your desired project name.

4. Configuration prompts:
   The CLI will ask you several questions:
   - Would you like to add Angular routing? (y/N)
   - Which stylesheet format would you like to use? (CSS, SCSS, Sass, Less)
   Answer these based on your project requirements.

5. Navigate into your new project directory:
   ```
   cd my-angular-app
   ```

6. Serve the application:
   ```
   ng serve
   ```
   This command builds your app, starts the development server, watches your files, and rebuilds the app as you make changes to those files.

7. View your application:
   Open a web browser and navigate to `http://localhost:4200/`

Additional Configuration and Customization:

1. Installing additional packages:
   You can install additional Angular packages or third-party libraries using npm:
   ```
   npm install package-name
   ```

2. Updating Angular:
   To update to the latest version of Angular:
   ```
   ng update @angular/cli @angular/core
   ```

Troubleshooting:

- If you encounter permission errors on Linux or macOS, you might need to use `sudo` for the global installation.
- Make sure your Node.js version is compatible with the Angular version you're installing.
- If you face any issues, the Angular CLI has a built-in help system. Run `ng help` for more information.

Remember, the Angular ecosystem is continuously evolving. It's a good practice to check the official Angular documentation for the most up-to-date installation instructions and best practices.
