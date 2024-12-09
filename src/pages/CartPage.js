import { expect } from "@playwright/test"
import { CartItem } from "../models/CartItem.js"

let cartItem = new CartItem()

export class CartPage {
    constructor(page) {
        this.page = page
        this.cartPageHeader = this.page.locator('div[class="breadcrumbs"]')
        this.cartItems = this.page.locator('table[id="cart_info_table"] tbody tr')
        this.proceedToCheckoutButton = this.page.locator('a[class="btn btn-default check_out"]')
        this.deleteProductButtonList = this.page.locator('a[class="cart_quantity_delete"]')
        }

    getCartProductListSize = async () => {
        await this.cartPageHeader.waitFor()
        return await this.cartItems.count()
    }

    getCartItemDetails = async (number) => {
        await cartItem.setName(await this.cartItems.locator('td[class="cart_description"] a').nth(number).innerText())
        await cartItem.setPrice(await this.cartItems.locator('td[class="cart_price"] p').nth(number).innerText())
        return cartItem
    }

    proceedToCheckOut = async () => {
        await this.proceedToCheckoutButton.waitFor()
        await this.proceedToCheckoutButton.click()
    }

    getProductsCount = async () => {
        return await this.deleteProductButtonList.count()

    }

    deleteProduct = async () => {
        await this.deleteProductButtonList.first().waitFor()
        const listSize = await this.getProductsCount()
        await this.cartPageHeader.waitFor()
        await this.deleteProductButtonList.first().click()
        await expect.poll(async () => {
            return await this.getProductsCount()
        }).toBeLessThan(listSize)
    }
}