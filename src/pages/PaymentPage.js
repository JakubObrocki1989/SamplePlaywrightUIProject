export class PaymentPage {
    constructor(page) {
        this.page = page
        this.nameOnCardInput = this.page.locator('input[data-qa="name-on-card"]')
        this.cardNumberInput = this.page.locator('input[data-qa="card-number"]')
        this.cvcInput = this.page.locator('input[data-qa="cvc"]')
        this.expiryMonthInput = this.page.locator('input[data-qa="expiry-month"]')
        this.expiryYearInput = this.page.locator('input[data-qa="expiry-year"]')
        this.placeAndConfirmButton = this.page.locator('id submit')
    }
}