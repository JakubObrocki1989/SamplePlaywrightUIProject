import { expect } from "@playwright/test"
import { ProductDetails } from "../models/ProductDetails.js"

let productDetails = new ProductDetails()

export class HomePage {
    constructor(page) {
        this.page = page
        this.acceptDataButton = this.page.getByLabel('Consent', { exact: true })
        this.scrollUpArrow = this.page.locator('a[id="scrollUp"]')
        this.fullFledgedHeader = this.page.locator('div[class="carousel-inner"] h2')
        this.menuButtons = this.page.locator('ul[class="nav navbar-nav"] li a')
        this.recommendedItems = this.page.locator('div[class="carousel-inner"] div[class="single-products"]')
        this.recommendedItemsName = this.page.locator('div[class="carousel-inner"] div[class="single-products"] p')
        this.recommendedItemsPrice = this.page.locator('div[class="carousel-inner"] div[class="single-products"] h2')
    }

    isMenuOptionVisible = async (text) => {
        await this.menuButtons.filter({hasText: text}).waitFor()
    }

    clickMenuOption = async (text) => {
        await this.menuButtons.filter({hasText: text}).click()
    }

    getProductDetails = async (number) => {
        await productDetails.setName(await this.recommendedItems.locator('p').nth(number).innerText())
        await productDetails.setPrice(await this.recommendedItems.locator('h2').nth(number).innerText())
        return productDetails
    }

    addRecommendedProduct = async () => {
        await this.recommendedItems.locator('a').first().click()
    }

    
}