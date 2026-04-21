import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class Login extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(user: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(user);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}