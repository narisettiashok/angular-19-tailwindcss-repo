# 📦 Building and Deploying a Static Angular Website

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

   * Duplicate the `index.csr.html` file.

   * Rename the duplicated file to `index.html`.

   > 💡 This step is important for static hosting platforms that expect `index.html` as the default entry file.

4. **Deploy to Hosting**

   Copy all the contents of the `/dist/{project-name}/browser` directory to your static hosting platform, such as:

   * GitHub Pages
   * Netlify
   * Firebase Hosting
   * Hostinger
   * Any other static file server

---

# 📦 Building and Deploying an SSR (Server-Side Rendered) Angular App

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
