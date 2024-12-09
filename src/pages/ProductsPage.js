import { expect } from "@playwright/test"
import { CartModalPage } from '../pages/modals/CartModalPage.js';
import { ProductDetails } from "../models/ProductDetails.js"

let productDetails = new ProductDetails()

export class ProductsPage {
    constructor(page) {
        this.page = page
        this.productsHeader = this.page.locator('h2[class="title text-center"]')
        this.productsList = this.page.locator('div[class="features_items"] div[class="col-sm-4"]')
        this.searchInput = this.page.locator('input[id="search_product"]')
        this.submitSearchButton = this.page.locator('button[id="submit_search"]')
        this.categoriesList = this.page.locator('div[class="panel-group category-products"] a')
        this.subcategoriesList = this.page.locator('div[class="panel-body"] a')
        this.brandsList = this.page.locator('div[class="brands-name"] a')
    }

    addAllVisibleProducts = async () => {
        await expect(await this.productsList.count()).toBe(2)
        for (let i = 0; i < await this.productsList.count(); i++) {
            await this.productsList.nth(i).hover()
            await this.productsList.nth(i).locator('div[class="product-overlay"] a').locator('visible=true').waitFor()
            await this.productsList.nth(i).locator('div[class="product-overlay"] a').locator('visible=true').click()
            const modal = new CartModalPage(this.page)
            await modal.clickContinueShoopingButton()
          }
    }

    getProductListSize = async () => {
        this.productsHeader.waitFor()
        return await this.productsList.count()
    }

    searchItem = async (text) => {
        await this.searchInput.waitFor()
        await this.searchInput.fill(text)
        await this.submitSearchButton.click()
    }

    viewProduct = async (number) => {
        await this.productsHeader.waitFor()
        await this.productsList.nth(number).locator('div[class="choose"] a').click()
    }

    addProduct = async (number) => {
        await this.productsList.first().waitFor()
        await this.productsList.nth(number).hover()
        await this.productsList.nth(number).locator('div[class="product-overlay"] a').locator('visible=true').waitFor()
        await this.productsList.nth(number).locator('div[class="product-overlay"] a').locator('visible=true').click()
        const modal = new CartModalPage(this.page)
        await modal.clickContinueShoopingButton()
    }

    getProductDetails = async (number) => {
        await productDetails.setName(await this.productsList.nth(number).locator('p').first().innerText())
        await productDetails.setPrice(await this.productsList.nth(number).locator('h2').first().innerText())
        return productDetails
    }

    openCategory = async (text) => {
        await this.categoriesList.first().waitFor()
        await this.categoriesList.filter({hasText: text}).click()
    }

    openSubcategory = async (text) => {
        await this.subcategoriesList.filter({hasText: text}).locator('visible=true').click()
    }

    getProductsHeaderText = async () => {
        await this.productsHeader.waitFor()
        return await this.productsHeader.innerText()
    }

    openBrand = async (text) => {
        await this.brandsList.filter({hasText: text}).click()
    }
    
}