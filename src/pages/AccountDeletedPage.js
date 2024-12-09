export class AccountDeletedPage {
    constructor(page) {
        this.page = page
        this.accountDeletedHeader = this.page.locator('h2[data-qa="account-deleted"]')
        this.continueButton = this.page.locator('a[data-qa="continue-button"]')
    }

    isHeaderVisible = async () => {
        await this.accountDeletedHeader.waitFor()
        return this.accountDeletedHeader.isVisible()
    }

    getHeaderText = async () => {
        return await this.accountDeletedHeader.innerText()
    }

    clickContinueButton = async () => {
        await this.continueButton.click()
    }
}