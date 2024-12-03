import { HomePage } from '../src/pages/HomePage.js';
import { LoginSignupPage } from '../src/pages/LoginSignupPage.js';
import { SignupPage } from '../src/pages/SignupPage.js';
import { RegisterUserFactory} from '../src/factories/RegisterUserFactory.js';
import { AccountCreatedPage } from '../src/pages/AccountCreatedPage.js';
import { AccountDeletedPage } from '../src/pages/AccountDeletedPage.js';

const { test, expect } = require('@playwright/test');

test('Login with correct credentials', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginSignUpPage = new LoginSignupPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Signup / Login")
    await homePage.clickMenuOption("Signup / Login")
    await loginSignUpPage.isHeaderVisible()
    await loginSignUpPage.fillLogin("automation-ui@sampledomain.com", "pass1723788968")
    await loginSignUpPage.clickLogin()
    await homePage.isMenuOptionVisible("Logged in as test")
    });

test('Login with incorrect credentials', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginSignUpPage = new LoginSignupPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Signup / Login")
    await homePage.clickMenuOption("Signup / Login")
    await loginSignUpPage.isHeaderVisible()
    await loginSignUpPage.fillLogin("wronguser@credentials.com", "password")
    await loginSignUpPage.clickLogin()
    await loginSignUpPage.isEmailOrPasswordIsIncorrectHeaderVusubke()
    await loginSignUpPage.checkEmailOrPasswordIsIncorrectHeaderText('Your email or password is incorrect!')
});


