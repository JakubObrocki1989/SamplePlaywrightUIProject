const { test, expect } = require('./BaseTests.js');

test('Login with correct credentials', async ({ page, homePage, loginSignUpPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Signup / Login")).toBe(true)
    await homePage.clickMenuOption("Signup / Login")
    expect(await loginSignUpPage.isHeaderVisible()).toBe(true)
    await loginSignUpPage.fillLogin("automation-ui@sampledomain.com", "pass1723788968")
    await loginSignUpPage.clickLogin()
    expect(await homePage.isMenuOptionVisible("Logged in as test")).toBe(true)
    });

test('Login with incorrect credentials', async ({ page, homePage, loginSignUpPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Signup / Login")).toBe(true)
    await homePage.clickMenuOption("Signup / Login")
    expect(await loginSignUpPage.isHeaderVisible()).toBe(true)
    await loginSignUpPage.fillLogin("wronguser@credentials.com", "password")
    await loginSignUpPage.clickLogin()
    await loginSignUpPage.isEmailOrPasswordIsIncorrectHeaderVisible()
    expect(await loginSignUpPage.getEmailOrPasswordIsIncorrectHeaderText()).toBe("Your email or password is incorrect!")
});


