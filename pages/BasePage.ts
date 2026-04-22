import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async waitForNetworkIdle(): Promise<void> {
    await this.page.waitForLoadState('load');
  }

  protected async waitForPageHeading(name: string): Promise<void> {
    await this.page.getByRole('heading', { name, exact: true }).waitFor({ state: 'visible' });
  }
}