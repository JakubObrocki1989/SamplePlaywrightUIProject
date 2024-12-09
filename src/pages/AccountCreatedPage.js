export class AccountCreatedPage {
    constructor(page) {
        this.page = page
        this.accountCreatedHeader = this.page.locator('h2[data-qa="account-created"]')
        this.continueButton = this.page.locator('a[data-qa="continue-button"]')
    }

    isHeaderVisible = async () => {
        await this.accountCreatedHeader.waitFor()
        return this.accountCreatedHeader.isVisible()
    }

    getHeaderText = async () => {
        return await this.accountCreatedHeader.innerText()
    }

    clickContinueButton = async () => {
        await this.continueButton.click()
    }
}