import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Ensures relative paths in the built index.html
    build: {
        outDir: 'dist',
    }
})
