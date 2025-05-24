import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O plugin react já deve estar aqui
import tailwindcss from '@tailwindcss/vite' // Importe o plugin do Tailwind

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Mantenha o plugin React
    tailwindcss(), // Adicione o plugin do Tailwind CSS
  ],
})