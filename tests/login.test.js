// tests/login.test.js
import { test, expect } from '../fixtures/baseTest.js';
import { getUser } from '../utils/testDataReader.js';

test.describe('Login Tests', () => {
  test('Admin user login', async ({ loginPage, dashboardPage }) => {
    const admin = getUser('migration');
    await loginPage.goto();
    await loginPage.login(admin.username, admin.password);
    await dashboardPage.verifyDashboard();
  });

  test('Employee user login', async ({ loginPage, dashboardPage }) => {
    const emp = getUser('tauhedul');
    await loginPage.goto();
    await loginPage.login(emp.username, emp.password);
    await dashboardPage.verifyDashboard();
  });
});
