import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // mixiny układu (column, under-metka, band) mają media query przed
        // deklaracjami rodzica — kolejność nie gra roli, nowe zachowanie Sassa jest OK
        silenceDeprecations: ['mixed-decls'],
      },
    },
  },
})
