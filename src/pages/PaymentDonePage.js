export class PaymentDonePage {
    constructor(page) {
        this.page = page
        this.orderPlacedText = this.page.locator('div[class="col-sm-9 col-sm-offset-1"] p')
        this.downloadInvoiceButton = this.page.locator('a[class="btn btn-default check_out"]')
        this.continueButton = this.page.locator('a[data-qa="continue-button"]')
    }

    getOrderPlacedText = async () => {
        await this.orderPlacedText.waitFor()
        return await this.orderPlacedText.innerText()
    }
}
