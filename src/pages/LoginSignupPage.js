import { faker } from "@faker-js/faker"
import { expect } from "@playwright/test"

export class LoginSignupPage {
    constructor(page) {
        this.page = page
        this.signupHeader = this.page.locator('div[class="signup-form"] h2')
        this.nameInput = this.page.locator('input[data-qa="signup-name"]')
        this.emailAddressInput = this.page.locator('input[data-qa="signup-email"]')
        this.signupButton = this.page.locator('button[data-qa="signup-button"]')
    }

    isHeaderVisible = async () => {
        await expect(this.signupHeader).toBeVisible()
    }

    fillSignup = async (RegisterUser) => {
        await this.nameInput.waitFor()
        await this.nameInput.fill(RegisterUser.username)
        await this.emailAddressInput.fill(RegisterUser.email)
        return this
    }

    clickSignup = async () => {
        await this.signupButton.waitFor()
        await this.signupButton.click()
    } 
}