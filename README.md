# Angular 19 + Tailwind CSS + Flowbite Repo Template

A clean and modern Boiler Plate template using **Angular 19**, **Tailwind CSS**, **Flowbite UI**. Built with standalone components and optimized for fast, responsive UI development.

---

&nbsp;

## 🚀 Features

- ✅ Built with Angular 19 (Standalone API)
- 🎨 Tailwind CSS v4 for utility-first styling
- 🌈 Multi-theme support — Light, Dark, and Ocean themes with manual toggling
- 🌊 Pre-integrated Flowbite UI components for ready-to-use UI elements
- 🧩 Fully standalone architecture — no `AppModule` required
- 🧼 Clean and modular project structure
- 📦 Optimized for production and deployment
- 🏗️ Supports static site generation (SSG)
- 🌐 Includes server-side rendering (SSR) support

---

&nbsp;

# 📦 Installation

## Clone the repository

```bash
git clone https://github.com/narisettiashok/angular-19-tailwindcss-repo.git
```

## Navigate to the project folder

```bash
cd angular-19-tailwindcss-repo
```

## Install dependencies

```bash
Install Node Version in system: 24.0.2
Install Npm Version in system: 11.3.0
```

```bash
npm install
```

---

&nbsp;

# 📦 Building and Deploying a Angular Website

## Development Server

To run your Angular project locally in development mode, use the following command:

```bash
npm run start
```

## Static Angular Website

To build and deploy your Angular project as a static website:

1. **Prerequisites**

   Update the routes.txt file:

   ```bash
   Add the newly added routes to the routes.txt file.
   ```

2. **Build the Project**

   Run the following command to build the project with prerendering:

   ```bash
   npm run build:static
   ```

3. **Prepare the Output**

   After a successful build, navigate to:

   ```bash
   /dist/{project-name}/browser
   ```

   In this folder:

   - Duplicate the `index.csr.html` file.

   - Rename the duplicated file to `index.html`.

   > 💡 This step is important for static hosting platforms that expect `index.html` as the default entry file.

4. **Deploy to Hosting**

   Copy all the contents of the `/dist/{project-name}/browser` directory to your static hosting platform, such as:

   - GitHub Pages
   - Netlify
   - Firebase Hosting
   - Hostinger
   - Any other static file server

---

## 📦 SSR (Server-Side Rendered) Angular App

1. Build Project

   ```bash
   npm run build
   ```

2. Run Server
   ```bash
   npm run serve:ssr
   ```
3. Your website will run at h
   ```bash
   http://localhost:4000/
   ```

---

## 🧪 Project Structure

```
angular-19-tailwindcss-repo/
├── src/
│   ├── app/
│   │   └── app.component.ts
│   │   └── app.component.html
│   ├── assets/
│   ├── index.html
│   └── main.ts
├── public/
├── angular.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 💻 Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run start`        | Starts the development server locally      |
| `npm run build`        | Builds the app for local or production use |
| `npm run serve:ssr`    | Runs the server-side rendered (SSR) server |
| `npm run build:static` | Builds the app as a static website         |

---

## 🧩 UI Libraries Used

- [Angular 19](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)

---

## 🎨 Multi-Theme Support

This project supports **three built-in themes**:

- 🌞 **Light Theme** (Default)
- 🌙 **Dark Theme**
- 🌊 **Ocean Theme**

---

### 📁 Theme File Locations

| Theme | File Path                         |
| ----- | --------------------------------- |
| Light | `src/styles.css` (via `:root {}`) |
| Dark  | `src/assets/css/themes/dark.css`  |
| Ocean | `src/assets/css/themes/ocean.css` |

---

---

### 💡 Theme Usage

The `<html>` tag is assigned a class dynamically:

```html
<html class="dark">
  <!-- For dark theme -->
</html>

<html class="ocean">
  <!-- For ocean theme -->
</html>

<html>
  <!-- Default (light theme via :root) -->
</html>
```

### Buttons control the theme:

```
<div class="space-x-2">
  <button (click)="setTheme('light')" class="btn">🌞 Light</button>
  <button (click)="setTheme('dark')" class="btn">🌙 Dark</button>
  <button (click)="setTheme('ocean')" class="btn">🌊 Ocean</button>
</div>
```

### Theme Toggle Logic (Angular Component)

```
setTheme(theme: string) {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}

ngOnInit() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.className = saved;
  }
}
```

### 🎯 How It Works

- Default theme is defined using **:root {}** in **styles.css**
- Additional themes override CSS variables in separate files:
- **dark.css** uses **.dark**
- **ocean.css** uses **.ocean**
- Tailwind utility classes use **var(--color-\*)** for theming
- Changing the <html> class switches the theme
- Selected theme is saved to localStorage

### 🧩 Utility Classes

#### Custom CSS variables are mapped to Tailwind classes using @layer utilities in styles.css

```

@layer utilities {
  .bg-primary { background-color: var(--color-primary); }
  .bg-secondary { background-color: var(--color-secondary); }

  .text-primary { color: var(--color-primary); }
  .text-secondary { color: var(--color-secondary); }

  .border-primary { border-color: var(--color-primary); }
  .border-secondary { border-color: var(--color-secondary); }

}

```

#### Each theme sets these variables:

- Light: in **:root** (default)
- Dark: in **.dark**
- Ocean: in **.ocean**

### ✅ Summary

- ✔️ Light (default), Dark, and Ocean themes included
- 🎯 Works with Tailwind CSS v4 (no config file required)
- 🛠️ Fully CSS-driven via custom properties
- 🧠 Automatic theme persistence using **localStorage**

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use it for personal or commercial projects.

---

## 🙌 Contribution

Contributions are welcome!  
If you'd like to improve this repo or add more features, follow these steps:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/feature-name`
3. **Commit** your changes: `git commit -m "Add new feature"`
4. **Push** to the branch: `git push origin feature/feature-name`
5. \*\*Open a Pull Request`

---

## ⭐ Show Your Support

If this project helped you or saved you time, please consider giving it a ⭐ on [GitHub](https://github.com/narisettiashok/angular-19-tailwindcss-repo)!

---

## 📫 Contact

Created with 💡 and 💻 by **[Narisetti Ashok](https://github.com/narisettiashok)**  
Feel free to reach out for collaboration, ideas, or feedback.

---
