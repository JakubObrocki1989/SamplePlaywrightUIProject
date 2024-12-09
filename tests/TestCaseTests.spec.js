const { test, expect } = require('./BaseTests');

test('Check Test Case Page header', async ({ page, homePage, testCasesPage }) => {
    await page.goto('/')
    await homePage.isMenuOptionVisible("Test Cases")
    await homePage.clickMenuOption("Test Cases")
    expect(await testCasesPage.isHeaderVisible()).toBe(true)
    expect(await testCasesPage.getTestCaseHeaderText()).toBe("TEST CASES")
});