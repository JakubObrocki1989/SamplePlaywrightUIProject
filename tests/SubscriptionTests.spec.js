const { test, expect } = require('./BaseTests.js');

test('Subscribe from home page', async ({ page, footerPage }) => {
    await page.goto('/')
    expect(await footerPage.getSubscriptionHeaderText()).toBe("SUBSCRIPTION")
    await footerPage.subscribe("test@test.com")
    expect(await footerPage.getSubscriptionMessageText()).toBe("You have been successfully subscribed!")
});

test('Subscribe from cart page', async ({ page, homePage, footerPage }) => {
    await page.goto('/')
    await homePage.clickMenuOption("Cart")
    expect(await footerPage.getSubscriptionHeaderText()).toBe("SUBSCRIPTION")
    await footerPage.subscribe("test@test.com")
    expect(await footerPage.getSubscriptionMessageText()).toBe("You have been successfully subscribed!")
});