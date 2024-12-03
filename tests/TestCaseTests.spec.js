import { HomePage } from '../src/pages/HomePage.js';
import { TestCasesPage } from '../src/pages/TestCasesPage.js';

const { test, expect } = require('@playwright/test');

test('Check Test Case Page header', async ({ page }) => {
    const homePage = new HomePage(page)
    const testCasesPage = new TestCasesPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Test Cases")
    await homePage.clickMenuOption("Test Cases")
    await testCasesPage.isHeaderVisible()
    await testCasesPage.checkTestCaseHeaderText("TEST CASES")
});