import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async isDashboardVisible() {
    await this.waitForPageHeading('Dashboard');
  }

  async openCandidateToInterview() {
    await this.page.getByText(/Candidate to Interview/).click();
  }
}
