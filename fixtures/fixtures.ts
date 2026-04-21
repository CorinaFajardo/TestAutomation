import { test as base, expect } from '@playwright/test';

import { Login } from '../pages/Login';
import { DashboardPage } from '../pages/Dashboard';
import { RecruitmentPage } from '../pages/Recruitment';
import { CandidateDetailsPage } from '../pages/CandidateDetails';
import { CandidateList } from '../pages/CandidateList';


type Fixtures = {
  Login: Login;
  Dashboard: DashboardPage;
  Recruitment: RecruitmentPage;
  CandidateDetails: CandidateDetailsPage;
  CandidateList: CandidateList;
};


export const test = base.extend<Fixtures>({
  Login: async ({ page }, use) => {
    await use(new Login(page));
  },

  Dashboard: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  Recruitment: async ({ page }, use) => {
    await use(new RecruitmentPage(page));
  },

  CandidateDetails: async ({ page }, use) => {
    await use(new CandidateDetailsPage(page));
  },

  CandidateList: async ({ page }, use) => {
    await use(new CandidateList(page));
  },
});

export { expect };
