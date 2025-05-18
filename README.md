# Angular 19 + Tailwind CSS + Flowbite Repo Template

A clean and modern Boiler Plate template using **Angular 19**, **Tailwind CSS**, **Flowbite UI**. Built with standalone components and optimized for fast, responsive UI development.

---

&nbsp;

## 🚀 Features

- ✅ Built with Angular 19 (Standalone API)
- 🎨 Tailwind CSS v4 for utility-first styling
- 🌊 Pre-integrated Flowbite UI components
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
