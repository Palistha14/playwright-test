import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
});

test('should load the homepage', async ({ page }) => {
  const home = new HomePage(page);
  await home.expectTitle('Automation Testing Practice');
});

test('should click on a button', async ({ page }) => {
  const home = new HomePage(page);
  await home.clickSubmit();
});

test('should fill the contents dynamically', async ({ page }) => {
  const home = new HomePage(page);

  await home.fillForm({
    name: 'Anna Bell',
    email: 'anna.bell@example.com',
    phone: '1234567890',
    address: '123 Main St, Test',
    gender: 'Female',
    day: 'Friday',
    country: 'canada',
    color: 'blue',
    animal: 'fox',
    datePicker1: '04/29/2025',
    datePicker2: '05/29/2025',
    startDate: '2025-04-01',
    endDate: '2025-04-29'
  });

  await home.clickSubmit();
});
