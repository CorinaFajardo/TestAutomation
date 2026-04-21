import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CandidateDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private applicationStageTitle(): Locator {
    return this.page.getByRole('heading', { name: 'Application Stage' });
  }

  private fieldValueByLabel(label: string): Locator {
    return this.page.locator(`label:has-text("${label}")`).locator('../..').locator('p');
  }

  private nameValue(): Locator {
    return this.fieldValueByLabel('Name');
  }

  private vacancyValue(): Locator {
    return this.fieldValueByLabel('Vacancy');
  }

  private applicationStatus(): Locator {
    return this.page.locator('p:has-text("Status:")');
  }

  async expectApplicationStage(name: string, vacancy: string, status: string): Promise<void> {
    await expect(this.applicationStageTitle()).toBeVisible();
    await expect(this.nameValue()).toHaveText(name);
    await expect(this.vacancyValue()).toHaveText(vacancy);
    await expect(this.applicationStatus()).toHaveText(`Status: ${status}`);
  }
}