import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  workers: 1,
  use: {
    headless: false, // show browser window so you can see typing
    launchOptions: {
      slowMo: 50, // slow down actions so typing is visible
    },
  },
  reporter: [
    ['list'], // pass/fail in terminal
    ['html', { open: 'always' }], // open HTML report in browser after run (pass/fail summary)
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
