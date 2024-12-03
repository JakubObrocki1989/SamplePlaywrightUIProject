import { expect } from "@playwright/test"

export class FooterPage {
    constructor(page) {
        this.page = page
        this.subscriptionHeader = this.page.locator('footer[id="footer"] div[class="footer-widget"] h2')
        this.subscriptionInput = this.page.locator('input[id="susbscribe_email"]')
        this.subscriptionButton = this.page.locator('button[id="subscribe"]')
        this.successSubscribeMessage = this.page.locator('div[id="success-subscribe"]')
    }

    checkSubscriptionHeaderText = async (text) => {
        await this.subscriptionHeader.waitFor()
        await expect(this.subscriptionHeader.first().innerText()).toBe(text)
    }

    checkSubscriptionMessageText = async (text) => {
        await await expect(this.successSubscribeMessage).toBeVisible()
        await expect(this.successSubscribeMessage.first().innerText()).toBe(text)
    }

    subscribe = async (text) => {
        await this.subscriptionInput.waitFor()
        await this.subscriptionInput.fill(text)
        await this.subscriptionButton.click()
    }
}