import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@c": resolve(__dirname, "src/components"),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/variable.scss";`
      }
    }
  },
  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn","element-plus/lib/locale/lang/en" ]
  }
})
