import { ContactMessageFactory } from '../src/factories/ContactMessageFactory.js';

const { test, expect } = require('./BaseTests.js');


test('Send message by contact us', async ({ page, homePage, contactUsPage }) => {
    const contactMessageFactory = new ContactMessageFactory()
    const contacUsMessage = contactMessageFactory.getContactUsMessage()
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Contact us")).toBe(true)
    await homePage.clickMenuOption("Contact us")
    expect(await contactUsPage.isHeaderVisible()).toBe(true)
    expect(await contactUsPage.getGetInTouchHeader()).toBe("GET IN TOUCH")
    await contactUsPage.fillData(contacUsMessage)
    await contactUsPage.clickSubmit()
    expect(await contactUsPage.getSuccessMessage()).toBe("Success! Your details have been submitted successfully.")
    });