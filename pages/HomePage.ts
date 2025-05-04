import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async expectTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async clickSubmit() {
    await this.page.click('.submit-btn');
  }

  async fillForm(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    gender: 'Male' | 'Female';
    day: string;
    country: string;
    color: string;
    animal: string;
    datePicker1: string; // MM/DD/YYYY
    datePicker2: string; // MM/DD/YYYY
    startDate: string; // YYYY-MM-DD
    endDate: string;   // YYYY-MM-DD
  }) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#email', data.email);
    await this.page.fill('#phone', data.phone);
    await this.page.fill('#textarea', data.address);
    await this.page.getByLabel(data.gender).check();
    await this.page.getByLabel(data.day).check();
    await this.page.selectOption('#country', data.country);
    await this.page.selectOption('#colors', data.color);
    await this.page.selectOption('#animals', data.animal);
    await this.page.fill('#datepicker', data.datePicker1);

    await this.page.evaluate(() => {
      const input = document.getElementById('txtDate');
      if (input) {
        input.removeAttribute('readonly');
      }
    });
    await this.page.fill('#txtDate', data.datePicker2);

    await this.page.fill('#start-date', data.startDate);
    await this.page.fill('#end-date', data.endDate);
  }
}
