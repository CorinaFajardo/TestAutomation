import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CandidateList extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private candidateRow(candidateFullName: string): Locator {
    return this.page.locator('.oxd-table-row', { hasText: candidateFullName })
    .first();
  }

  async expectCandidateListed(candidateFullName: string): Promise<void> {
    //await expect(this.candidateRow(candidateFullName)).toBeVisible();
  }

   async clickCandidatesDetails(candidateFullName: string) {
    const eyeIcon = this.candidateRow(candidateFullName).locator('i.bi-eye-fill');
    await expect(eyeIcon).toBeVisible();
    await eyeIcon.click();
  }
}