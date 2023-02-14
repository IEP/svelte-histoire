import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  plugins: [HstSvelte()],
  theme: {
    defaultColorScheme: 'light',
    hideColorSchemeSwitch: true
  },
  setupFile: '/src/histoire.setup.ts'
});
