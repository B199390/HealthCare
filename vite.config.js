import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    theme: {
    extend: {
      colors: {
        muted: '#f3f4f6', // light gray example
      },
    },
  },
  plugins: [react(), tailwindcss(),],
})