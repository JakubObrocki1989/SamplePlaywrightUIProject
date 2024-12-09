export class FooterPage {
    constructor(page) {
        this.page = page
        this.subscriptionHeader = this.page.locator('footer[id="footer"] div[class="footer-widget"] h2')
        this.subscriptionInput = this.page.locator('input[id="susbscribe_email"]')
        this.subscriptionButton = this.page.locator('button[id="subscribe"]')
        this.successSubscribeMessage = this.page.locator('div[id="success-subscribe"]')
    }

    getSubscriptionHeaderText = async () => {
        return await this.subscriptionHeader.innerText()
    }

    getSubscriptionMessageText = async () => {
        return await this.successSubscribeMessage.first().innerText()
    }

    subscribe = async (text) => {
        await this.subscriptionInput.waitFor()
        await this.subscriptionInput.fill(text)
        await this.subscriptionButton.click()
    }
}