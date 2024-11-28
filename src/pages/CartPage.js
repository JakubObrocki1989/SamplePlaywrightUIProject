export class CartPage {
    constructor(page) {
        this.page = page
        this.cartItems = this.page.locator('table[id="cart_info_table"] tbody tr')
        this.proceedToCheckoutButton = this.page.locator('a[class="btn btn-default check_out"]')
        this.deleteProductButtonList = this.page.locator('a[class="cart_quantity_delete"]')
    }
}