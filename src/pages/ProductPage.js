export class ProductPage {
    constructor(page) {
        this.page = page
        this.productDetails = this.page.locator('div[class="product-details"]')
        this.productName = this.page.locator('div[class="product-details"] h2')
        this.productCategory = this.page.locator('div[class="product-information"] p')
        this.productPrice = this.page.locator('div[class="product-information"] span span')
        this.productAvailability = this.page.locator('div[class="product-information"] p')
        this.productCondition = this.page.locator('div[class="product-information"] p')
        this.productBrand = this.page.locator('div[class="product-information"] p')
        this.quantityInput = this.page.locator('input[id="quantity"]')
        this.addToCartButton = this.page.locator('button[class="btn btn-default cart"]')
        this.nameInput = this.page.locator('input[id="name"]')
        this.emailInput = this.page.locator('input[id="email"]')
        this.reviewTextarea = this.page.locator('textarea[id="review"]')
        this.submitButton = this.page.locator('button[id="button-review"]')
        this.successAlert = this.page.locator('div[id="review-section"] div[class="alert-success alert"]')
    }

    getProductName = async () => {
        await this.productName.waitFor()
        return await this.page.productName.innerText()
    }
    
    getProductCategory = async () => {
        await this.productCategory.first().waitFor()
        return await this.page.productCategory.innerText()
    }
    
    getProductPrice = async () => {
        await this.productPrice.waitFor()
        return await this.page.productPrice.innerText()
    }
    
    getProductAvailability = async () => {
        await this.productAvailability.waitFor()
        return await this.page.productAvailability.nth(1).innerText()
    }

    getProductCondition = async () => {
        await this.productCondition.waitFor()
        return await this.page.productCondition.nth(2).innerText()
    }
    
    getProductBrand = async () => {
        await this.productBrand.waitFor()
        return await this.page.productBrand.nth(3).innerText()
    }

    setQuantity = async (number) => {
        await this.quantityInput.fill(number.toString())
    }

    addToCart = async () => {
        await this.addToCartButton.click()
    }

    writeAReview = async (review) => {
        await this.nameInput.waitFor()
        await this.nameInput.fill(review.getName())
        await this.emailInput.fill(review.getEmail())
        await this.reviewTextarea.fill(review.getReview())
        await this.submitButton.click()
    }

    getReviewSentSuccessMessage = async () => {
        await this.successAlert.waitFor()
        return await this.successAlert.innerText()
    }
}