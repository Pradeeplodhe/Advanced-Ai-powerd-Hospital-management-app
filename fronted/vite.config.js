import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// ✅ Tailwind ka plugin Vite me nahi chahiye
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
