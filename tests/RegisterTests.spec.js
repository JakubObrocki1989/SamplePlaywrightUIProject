import { RegisterUserFactory } from '../src/factories/RegisterUserFactory.js'

const { test, expect } = require('./BaseTests.js');

test('User should be registered and deleted', async ({ page, homePage, loginSignUpPage, signupPage, accountCreatedPage, accountDeletedPage }) => {
  const registerUserFactory = new RegisterUserFactory()
  const user = registerUserFactory.getRegularRegisterUser()
  await page.goto('/')
  expect(await homePage.isMenuOptionVisible("Signup / Login")).toBe(true)
  await homePage.clickMenuOption("Signup / Login")
  expect(await loginSignUpPage.isHeaderVisible()).toBe(true)
  await loginSignUpPage.fillSignup(user.getUsername(), user.getEmail())
  await loginSignUpPage.clickSignup()
  expect(await signupPage.isHeaderVisible()).toBe(true)
  expect(await signupPage.getHeaderText()).toBe("ENTER ACCOUNT INFORMATION")
  await signupPage.fillSignupDetails(user)
  expect(await accountCreatedPage.isHeaderVisible()).toBe(true)
  expect(await accountCreatedPage.getHeaderText()).toBe("ACCOUNT CREATED!")
  await accountCreatedPage.clickContinueButton()
  expect(await homePage.isMenuOptionVisible("Logged in as " + user.getUsername())).toBe(true)
  await homePage.clickMenuOption("Delete Account")
  expect(await accountDeletedPage.isHeaderVisible()).toBe(true)
  expect(await accountDeletedPage.getHeaderText()).toBe("ACCOUNT DELETED!")
  await accountDeletedPage.clickContinueButton()
});

test('User should not be registered with existing email', async ({ page, homePage, loginSignUpPage }) => {
  await page.goto('/')
  expect(await homePage.isMenuOptionVisible("Signup / Login")).toBe(true)
  await homePage.clickMenuOption("Signup / Login")
  expect(await loginSignUpPage.isHeaderVisible()).toBe(true)
  await loginSignUpPage.fillSignup("test", "test@testdomain.com")
  await loginSignUpPage.clickSignup()
  expect(await loginSignUpPage.isSignupEmailExistErrorHeaderVisible()).toBe(true)
  expect(await loginSignUpPage.getSignupEmailExistErrorText()).toBe("Email Address already exist!")
});
