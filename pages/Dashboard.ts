import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {

 
  private candidateInterviewItem = this.page.locator(
    '.orangehrm-todo-list-item',
    { hasText: /Interview/i }
  );

  private candidateInterviewButton = this.candidateInterviewItem.locator(
    'button.orangehrm-report-icon'
  );

  constructor(page: Page) {
    super(page);
  }

  async isDashboardVisible() {
    await this.waitForPageHeading('Dashboard');
  }

  async openCandidateToInterview() {
    await this.candidateInterviewButton.click();
  }
}
