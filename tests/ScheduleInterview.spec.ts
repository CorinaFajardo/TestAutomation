import { test, expect } from '../fixtures/fixtures';
import testData from '../data/data.json';

test('Schedule an interview', async ({ page, Login, Dashboard, Recruitment, CandidateDetails, CandidateList }) => {

  await Login.goto();
  await Login.login(testData.login.admin.user, testData.login.admin.password);
  await Dashboard.isDashboardVisible();
  await Dashboard.openCandidateToInterview();

  await Recruitment.isRecruitmentPageVisible();
  await Recruitment.addCandidate();

  await Recruitment.fillCandidateForm(
    testData.candidate.user.name,
    testData.candidate.user.middlename,
    testData.candidate.user.lastname
  );

  await Recruitment.selectJobVacancy(testData.candidate.user.vacancy);
  await Recruitment.fillContactDetails(testData.candidate.user.email, testData.candidate.user.phone);
  await Recruitment.selectApplicationDate();
  await Recruitment.saveCandidate();

  const candidateFullName = [
    testData.candidate.user.name,testData.candidate.user.middlename,testData.candidate.user.lastname,]
    .filter(Boolean).join(' ');

 

  await CandidateDetails.expectApplicationStage(
    candidateFullName,
    testData.candidate.user.vacancy,
    'Application Initiated'
  );

  await Recruitment.clickCandidatesTab(); 
  await CandidateList.expectCandidateListed(candidateFullName);
await page.pause();
  await CandidateList.clickCandidatesDetails(candidateFullName);

  
});
