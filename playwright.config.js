import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.(test|spec)\.js/,

  timeout: 30 * 1000,
  retries: 1,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://stagingv2.smartoffice.ai/',
    trace: 'on-first-retry'
  }
});
