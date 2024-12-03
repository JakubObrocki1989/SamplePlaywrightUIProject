import { HomePage } from '../src/pages/HomePage.js';
import { ContactUsPage } from '../src/pages/ContactUsPage.js';
import { ContactMessageFactory } from '../src/factories/ContactMessageFactory.js';


const { test, expect } = require('@playwright/test');


test('Send message by contact us', async ({ page }) => {
    const homePage = new HomePage(page)
    const contactUsPage = new ContactUsPage(page)
    const contactMessageFactory = new ContactMessageFactory()
    const contacUsMessage = contactMessageFactory.getContactUsMessage()
    await page.goto('/')
    await homePage.isMenuOptionVisible("Contact us")
    await homePage.clickMenuOption("Contact us")
    await contactUsPage.isHeaderVisible()
    await contactUsPage.checkGetInTouchHeader("GET IN TOUCH")
    await contactUsPage.fillData(contacUsMessage)
    await contactUsPage.clickSubmit()
    await contactUsPage.checkSuccessMessage("Success! Your details have been submitted successfully.")
    });