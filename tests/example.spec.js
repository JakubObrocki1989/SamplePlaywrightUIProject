import { HomePage } from '../src/pages/HomePage';
import { LoginSignupPage } from '../src/pages/LoginSignupPage.js';
import { RegisterUser } from '../src/models/RegisterUser.js';
import { SignupPage } from '../src/pages/SignupPage.js';
// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('title', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginSignUpPage = new LoginSignupPage(page)
  const signupPage = new SignupPage(page)
  const registerUser = new RegisterUser()
  await page.goto('/')
  await homePage.clickSignupLoginButton()
  await loginSignUpPage.isHeaderVisible()
  await loginSignUpPage.fillSignup(registerUser)
  await loginSignUpPage.clickSignup()
  await signupPage.isHeaderVisible()
  signupPage.checkHeaderText()
  signupPage.fillSignupDetails(registerUser)
  // await signupPage.test()
  // console.log("tmp: " + tmp)
  await page.pause()
});
