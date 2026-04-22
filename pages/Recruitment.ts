import { Page, expect } from '@playwright/test';
import moment from 'moment';
import { BasePage } from './BasePage';

export class RecruitmentPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  private get jobVacancyDropdown() {
    return this.page.locator('.oxd-select-text-input');
  }



  async isRecruitmentPageVisible() {
    await this.waitForPageHeading('Recruitment');
  }

  async addCandidate() {
    await this.page.locator('button', { hasText: 'Add' }).click();
  }

  async fillCandidateForm(firstName: string, middleName: string, lastName: string) {
    await this.waitForPageHeading('Add Candidate');
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Middle Name' }).fill(middleName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  }

  async selectJobVacancy(vacancy: string) {
    await this.jobVacancyDropdown.waitFor({ state: 'visible' });
    await this.jobVacancyDropdown.click();
    await this.page.getByText(vacancy, { exact: true }).waitFor({ state: 'visible' });
    await this.page.getByText(vacancy, { exact: true }).click();
  }

  async fillContactDetails(email: string, phone: string) {
    await this.page.locator('.oxd-input-group', { hasText: 'Email' }).locator('input').fill(email);
    await this.page.locator('.oxd-input-group', { hasText: 'Contact Number' }).locator('input').fill(phone);
  }

  async selectApplicationDate() {
    
  const todayDay = moment().date().toString();

  const dateInput = this.page.locator('.oxd-date-input input');
  await dateInput.click();

  const todayCell = this.page.locator('.oxd-calendar-date', {
    hasText: todayDay,
  });

  await todayCell.click();


  }

  async saveCandidate() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async clickCandidatesTab() {
    const tab = this.page.getByRole('link', { name: 'Candidates' });
    await expect(tab).toBeVisible();
    await tab.click();
    await this.waitForNetworkIdle(); 
  }

  
}