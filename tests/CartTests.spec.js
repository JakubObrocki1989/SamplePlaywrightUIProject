import { ProductDetails } from '../src/models/ProductDetails.js'
import { CartItem } from '../src/models/CartItem.js'

const { test, expect } = require('./BaseTests.js'); 

test('Add products -> Check cart -> Login -> Check cart again', async ({ page, homePage, productsPage, cartPage, loginSignUpPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.searchItem("Top for women")
    expect(await productsPage.getProductListSize()).toBe(2)
    await productsPage.addAllVisibleProducts()
    await homePage.clickMenuOption("Cart")
    expect(await cartPage.getProductsCount()).toBe(2)
    await homePage.clickMenuOption("Signup / Login")
    expect(await loginSignUpPage.isHeaderVisible()).toBe(true)
    await loginSignUpPage.fillLogin("automation-ui@sampledomain.com", "pass1723788968")
    await loginSignUpPage.clickLogin()
    expect(await homePage.isMenuOptionVisible("Logged in as test")).toBe(true)
    await homePage.clickMenuOption("Cart")
    expect(await cartPage.getProductsCount()).toBe(2)    
  });

  test('Add recommended item to cart', async ({ page, homePage, cartModalPage, cartPage }) => {
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