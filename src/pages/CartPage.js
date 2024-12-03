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

    cartProductListSizeShouldHasSize = async (size) => {
        await expect(this.cartPageHeader).toBeVisible()
        await expect(await this.cartItems.count()).toBe(size)
    }

    getCartItemDetails = async (number) => {
        await cartItem.setName(await this.cartItems.locator('td[class="cart_description"] a').nth(number).innerText())
        await cartItem.setPrice(await this.cartItems.locator('td[class="cart_price"] p').nth(number).innerText())
        return cartItem
    }
}