export class ProductPage {
    constructor(page) {
        this.page = page
        this.productName = this.page.locator('div[class="product-information"] h2')
        this.productCategory = this.page.locator('div[class="product-information"] p')
        this.productPrice = this.page.locator('div[class="product-information"] span span')
        this.productAvailability = this.page.locator('div[class="product-information"]//p)[2]')
        this.productCondition = this.page.locator('div[class="product-information"]//p)[3]')
        this.productBrand = this.page.locator('div[class="product-information"]//p)[4]')
        this.quantityInput = this.page.locator('id quantity')
        this.addToCartButton = this.page.locator('button[class="btn btn-default cart"]')
        this.nameInput = this.page.locator('id name')
        this.emailInput = this.page.locator('id email')
        this.reviewTextarea = this.page.locator('id review')
        this.submitButton = this.page.locator('id button-review')
        this.successAlert = this.page.locator('div[class="alert-success alert"]')
        
    }
}