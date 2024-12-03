import { expect } from "@playwright/test"

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
        this.nameInput = this.page.locator('id name')
        this.emailInput = this.page.locator('id email')
        this.reviewTextarea = this.page.locator('id review')
        this.submitButton = this.page.locator('id button-review')
        this.successAlert = this.page.locator('div[class="alert-success alert"]')
    }

    getProductName = async () => {
        await expect(this.productName).toBeVisible()
        return await this.page.productName.innerText()
    }
    
    getProductCategory = async () => {
        await expect(this.productCategory).toBeVisible()
        return await this.page.productCategory.innerText()
    }
    
    getProductPrice = async () => {
        await expect(this.productPrice).toBeVisible()
        return await this.page.productPrice.innerText()
    }
    
    getProductAvailability = async () => {
        await expect(this.productAvailability).toBeVisible()
        return await this.page.productAvailability.nth(1).innerText()
    }

    getProductCondition = async () => {
        await expect(this.productCondition).toBeVisible()
        return await this.page.productCondition.nth(2).innerText()
    }
    
    getProductBrand = async () => {
        await expect(this.productBrand).toBeVisible()
        return await this.page.productBrand.nth(3).innerText()
    }

    setQuantity = async (number) => {
        await this.quantityInput.fill(number.toString())
    }

    addToCart = async () => {
        await this.addToCartButton.click()
    }
}