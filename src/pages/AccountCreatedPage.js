import { expect } from "@playwright/test"

export class AccountCreatedPage {
    constructor(page) {
        this.page = page
        this.accountCreatedHeader = this.page.locator('h2[data-qa="account-created"]')
        this.continueButton = this.page.locator('a[data-qa="continue-button"]')
    }

    isHeaderVisible = async () => {
        await expect(this.accountCreatedHeader).toBeVisible()
    }

    checkHeaderText = async (text) => {
        await expect(await this.accountCreatedHeader.innerText()).toBe(text)
    }

    clickContinueButton = async () => {
        await this.continueButton.click()
    }
}