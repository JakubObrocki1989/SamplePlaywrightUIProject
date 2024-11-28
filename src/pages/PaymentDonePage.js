export class PaymentDonePage {
    constructor(page) {
        this.page = page
        this.orderPlacedText = this.page.locator('')
        this.downloadInvoiceButton = this.page.locator('a[class="btn btn-default check_out"]')
        this.continueButton = this.page.locator('a[@data-qa="continue-button"]')
    }
}
