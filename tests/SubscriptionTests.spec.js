import { HomePage } from '../src/pages/HomePage.js';
import { FooterPage } from '../src/pages/FooterPage.js';

const { test, expect } = require('@playwright/test');

test('Subscribe from home page', async ({ page }) => {
    const homePage = new HomePage(page)
    const footerPage = new FooterPage(page)
    await page.goto('/')
    await footerPage.checkSubscriptionHeaderText("SUBSCRIPTION")
    await footerPage.subscribe("test@test.com")
    await footerPage.checkSubscriptionMessageText("You have been successfully subscribed!")
});

test('Subscribe from cart page', async ({ page }) => {
    const homePage = new HomePage(page)
    const footerPage = new FooterPage(page)
    await page.goto('/')
    await homePage.clickMenuOption("Cart")
    await footerPage.checkSubscriptionHeaderText("SUBSCRIPTION")
    await footerPage.subscribe("test@test.com")
    await footerPage.checkSubscriptionMessageText("You have been successfully subscribed!")
});