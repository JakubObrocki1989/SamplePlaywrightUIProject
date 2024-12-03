import { HomePage } from '../src/pages/HomePage.js';
import { ProductsPage } from '../src/pages/ProductsPage.js';
import { CartPage } from '../src/pages/CartPage.js';
import { CartModalPage } from '../src/pages/modals/CartModalPage.js';
import { LoginSignupPage } from '../src/pages/LoginSignupPage.js';
import { ProductDetails } from '../src/models/ProductDetails.js'
import { CartItem } from '../src/models/CartItem.js'

const { test, expect } = require('@playwright/test');


test('Add products -> Check cart -> Login -> Check cart again', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const loginSignUpPage = new LoginSignupPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.searchItem("Top for women")
    await productsPage.productListSizeShouldHasSize(2)
    await productsPage.addAllVisibleProducts()
    await homePage.clickMenuOption("Cart")
    await cartPage.cartProductListSizeShouldHasSize(2)
    await homePage.clickMenuOption("Signup / Login")
    await loginSignUpPage.isHeaderVisible()
    await loginSignUpPage.fillLogin("automation-ui@sampledomain.com", "pass1723788968")
    await loginSignUpPage.clickLogin()
    await homePage.isMenuOptionVisible("Logged in as test")
    await homePage.clickMenuOption("Cart")
    await cartPage.cartProductListSizeShouldHasSize(2)
  });

  test('Add recommended item to cart', async ({ page }) => {
    const homePage = new HomePage(page)
    const cartModalPage = new CartModalPage(page)
    const cartPage = new CartPage(page)
    let productDetails = new ProductDetails()
    let cartItem = new CartItem()
    await page.goto('/')
    productDetails = await homePage.getProductDetails(0) 
    await homePage.addRecommendedProduct()
    await cartModalPage.clickViewCartLink()
    cartItem = await cartPage.getCartItemDetails(0)
    expect.soft(productDetails.getName()).toBe(cartItem.getName())
    expect.soft(productDetails.getPrice()).toBe(cartItem.getPrice())
  });