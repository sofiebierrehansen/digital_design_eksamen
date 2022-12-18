// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        vores_menu: resolve(__dirname, "src/vores-menu.html"),
        book_os: resolve(__dirname, "src/book-os.html"),
        koeb_gavekort: resolve(__dirname, "src/koeb-gavekort.html"),
        kurv: resolve(__dirname, "src/kurv.html"),
        singleview: resolve(__dirname, "src/singleview.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        om_nicecream: resolve(__dirname, "src/om-nicecream.html"),
        find_os: resolve(__dirname, "src/find-os.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
