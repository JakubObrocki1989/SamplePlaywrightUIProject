export class PaymentPage {
    constructor(page) {
        this.page = page
        this.nameOnCardInput = this.page.locator('input[data-qa="name-on-card"]')
        this.cardNumberInput = this.page.locator('input[data-qa="card-number"]')
        this.cvcInput = this.page.locator('input[data-qa="cvc"]')
        this.expiryMonthInput = this.page.locator('input[data-qa="expiry-month"]')
        this.expiryYearInput = this.page.locator('input[data-qa="expiry-year"]')
        this.placeAndConfirmButton = this.page.locator('button[id="submit"]')
        this.downloadInvoiceButton = this.page.locator('a[class="btn btn-default check_out"]')
    }

    fillCardDetails = async (creditCardDetails) => {
        await this.nameOnCardInput.fill(creditCardDetails.getCardOwner())
        await this.cardNumberInput.fill(creditCardDetails.getCardNumber())
        await this.cvcInput.fill(creditCardDetails.getCvcNumber())
        await this.expiryMonthInput.fill(creditCardDetails.getExpiryMonth())
        await this.expiryYearInput.fill(creditCardDetails.getExpiryYear())
        return this
    }

    placeOrder = async () => {
        await this.placeAndConfirmButton.click()
    }

    downloadInvoice = async () => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadInvoiceButton.waitFor()
        await this.downloadInvoiceButton.click()
        const download = await downloadPromise;
        await download.saveAs('../download/' + download.suggestedFilename());
    }
}