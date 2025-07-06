import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'

export default defineConfig({
  server:{
    port: 8080
  },
  plugins: [cloudflare(), ssrPlugin()]
})
