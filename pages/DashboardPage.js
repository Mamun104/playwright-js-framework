// pages/DashboardPage.js
import { expect } from '@playwright/test';

export default class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = page.locator('h1:has-text("Dashboard")');
  }

  async verifyDashboard() {
    await expect(this.dashboardHeader).toBeVisible();
  }
}
