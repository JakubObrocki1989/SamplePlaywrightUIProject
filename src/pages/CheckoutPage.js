export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.deliverAddressDetails = this.page.locator('ul[id="address_delivery"] li')
        this.invoiceAddressDetails = this.page.locator('ul[id="address_invoice"] li')
        this.descriptionTextArea = this.page.locator('//textarea[name="message"]')
        this.placeOrderButton = this.page.locator('a[class="btn btn-default check_out"]')
    }
}