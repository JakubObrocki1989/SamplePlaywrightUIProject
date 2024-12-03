import { HomePage } from '../src/pages/HomePage.js';
import { LoginSignupPage } from '../src/pages/LoginSignupPage.js';
import { SignupPage } from '../src/pages/SignupPage.js';
import { RegisterUserFactory} from '../src/factories/RegisterUserFactory.js';
import { AccountCreatedPage } from '../src/pages/AccountCreatedPage.js';
import { AccountDeletedPage } from '../src/pages/AccountDeletedPage.js';

const { test, expect } = require('@playwright/test');

test('User should be registered and deleted', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginSignUpPage = new LoginSignupPage(page)
  const signupPage = new SignupPage(page)
  const registerUserFactory = new RegisterUserFactory()
  const accountCreatedPage = new AccountCreatedPage(page)
  const accountDeletedPage = new AccountDeletedPage(page)
  const user = registerUserFactory.getRegularRegisterUser()
  await page.goto('/')
  await homePage.isMenuOptionVisible("Signup / Login")
  await homePage.clickMenuOption("Signup / Login")
  await loginSignUpPage.isHeaderVisible()
  await loginSignUpPage.fillSignup(user.getUsername(), user.getEmail())
  await loginSignUpPage.clickSignup()
  await signupPage.isHeaderVisible()
  await signupPage.checkHeaderText("ENTER ACCOUNT INFORMATION")
  await signupPage.fillSignupDetails(user)
  await accountCreatedPage.isHeaderVisible()
  await accountCreatedPage.checkHeaderText("ACCOUNT CREATED!")
  await accountCreatedPage.clickContinueButton()
  await homePage.isMenuOptionVisible("Logged in as " + user.getUsername())
  await homePage.clickMenuOption("Delete Account")
  await accountDeletedPage.isHeaderVisible()
  await accountDeletedPage.checkHeaderText("ACCOUNT DELETED!")
  await accountDeletedPage.clickContinueButton()
});

test('User should not be registered with existing email', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginSignUpPage = new LoginSignupPage(page)
  await page.goto('/')
  await homePage.isMenuOptionVisible("Signup / Login")
  await homePage.clickMenuOption("Signup / Login")
  await loginSignUpPage.isHeaderVisible()
  await loginSignUpPage.fillSignup("test", "test@testdomain.com")
  await loginSignUpPage.clickSignup()
  await loginSignUpPage.isSignupEmailExistErrorHeaderVisible()
  await loginSignUpPage.checkSignupEmailExistErrorText("Email Address already exist!")
});
