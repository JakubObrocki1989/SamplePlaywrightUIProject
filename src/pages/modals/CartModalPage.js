export class CartModalPage {
    constructor(page) {
        this.page = page
        this.continueShoppingButton = this.page.locator('div[class="modal-footer"] button')
        this.viewCartLink = this.page.locator('div[class="modal-body"] p a')
    }

    clickContinueShoopingButton = async () => {
        await this.continueShoppingButton.waitFor()
        await this.continueShoppingButton.click()
    }

    clickViewCartLink = async () => {
        await this.viewCartLink.waitFor()
        await this.viewCartLink.click()
    }
}