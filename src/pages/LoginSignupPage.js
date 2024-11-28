import { faker } from "@faker-js/faker"
import { expect } from "@playwright/test"

export class LoginSignupPage {
    constructor(page) {
        this.page = page
        this.signupHeader = this.page.locator('div[class="signup-form"] h2')
        this.nameInput = this.page.locator('input[data-qa="signup-name"]')
        this.emailAddressInput = this.page.locator('input[data-qa="signup-email"]')
        this.signupButton = this.page.locator('button[data-qa="signup-button"]')
        this.signupEmailExistErrorHeader = this.page.locator('div[class="signup-form"] p')
    }

    isHeaderVisible = async () => {
        await expect(this.signupHeader).toBeVisible()
    }

    fillSignup = async (username, email) => {
        await this.nameInput.waitFor()
        await this.nameInput.fill(username)
        await this.emailAddressInput.fill(email)
    }

    clickSignup = async () => {
        await this.signupButton.waitFor()
        await this.signupButton.click()
    } 

    isSignupEmailExistErrorHeaderVisible = async () => {
        await expect(this.signupEmailExistErrorHeader).toBeVisible()
    }

    checkSignupEmailExistErrorText = async (text) => {
        await expect(await this.signupEmailExistErrorHeader.first().innerText()).toBe(text)
    }
}