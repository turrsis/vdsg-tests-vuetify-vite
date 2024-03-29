// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Designer injection
import { configureSlaveConfig, configureVue } from 'vdsg-server-common'

// https://vitejs.dev/config/
let viteConf = await configureSlaveConfig({
  plugins: [
    vue(configureVue({
      template: { transformAssetUrls }
    })),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
}, {
  searchForWorkspaceRoot: searchForWorkspaceRoot
})

export default defineConfig(viteConf)
