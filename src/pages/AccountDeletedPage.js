import { expect } from "@playwright/test"

export class AccountDeletedPage {
    constructor(page) {
        this.page = page
        this.accountDeletedHeader = this.page.locator('h2[data-qa="account-deleted"]')
        this.continueButton = this.page.locator('a[data-qa="continue-button"]')
    }

    isHeaderVisible = async () => {
        await expect(this.accountDeletedHeader).toBeVisible()
    }

    checkHeaderText = async (text) => {
        await expect(await this.accountDeletedHeader.innerText()).toBe(text)
    }

    clickContinueButton = async () => {
        await this.continueButton.click()
    }
}