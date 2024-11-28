export class CartModalPage {
    constructor(page) {
        this.page = page
        this.continueShoppingButton = this.page.locator('div[@class="modal-footer"] button')
        this.viewCartLink = this.page.locator('div[@class="modal-body"] p a')
    }
}