import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://testautomationpractice.blogspot.com/',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
});
