import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    vue({
      script: {
        // 开启defineModel
        defineModel: true
      }
    })
  ]
})
