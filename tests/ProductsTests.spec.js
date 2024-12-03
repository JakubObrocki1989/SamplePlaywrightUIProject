import { HomePage } from '../src/pages/HomePage.js';
import { ProductsPage } from '../src/pages/ProductsPage.js';
import { ProductPage } from '../src/pages/ProductPage.js'
import { CartPage } from '../src/pages/CartPage.js';
import { CartModalPage } from '../src/pages/modals/CartModalPage.js';

const { test, expect } = require('@playwright/test');

test('Open and verify product details', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    const productPage = new ProductPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.viewProduct(1)
    await expect.soft(productPage.getProductName()).not.toBeEmpty()
    await expect.soft(productPage.getProductCategory()).not.toBeEmpty()
    await expect.soft(productPage.getProductPrice()).not.toBeEmpty()
    await expect.soft(productPage.getProductAvailability()).not.toBeEmpty()
    await expect.soft(productPage.getProductCondition()).not.toBeEmpty()
    await expect.soft(productPage.getProductBrand()).not.toBeEmpty()
});

test('Search product', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.searchItem("Sleeveless Dress")
    await productsPage.productListSizeShouldHasSize(1)
});

test('Add products to cart', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.addProduct(2)
    await productsPage.addProduct(4)
    await homePage.clickMenuOption("Cart")   
    await cartPage.cartProductListSizeShouldHasSize(2)      
});

test('Check product quantity in cart', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    const productPage = new ProductPage(page)
    const cartModalPage = new CartModalPage(page)
    const cartPage = new CartPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.viewProduct(2)
    await productPage.setQuantity(4)
    await productPage.addToCart()
    await cartModalPage.clickViewCartLink()   
    await cartPage.cartProductListSizeShouldHasSize(1)      
});

test('Check subcategory header', async ({ page }) => {
    const homePage = new HomePage(page)
    const productsPage = new ProductsPage(page)
    const productPage = new ProductPage(page)
    const cartModalPage = new CartModalPage(page)
    const cartPage = new CartPage(page)
    await page.goto('/')
    await homePage.isMenuOptionVisible("Products")
    await homePage.clickMenuOption("Products")
    await productsPage.openCategory("WOMEN")
    await productsPage.openSubcategory("TOPS")
    await productsPage.productsHeaderShouldHaveText("WOMEN - TOPS PRODUCTS")
    await productsPage.openCategory("MEN")
    await productsPage.openSubcategory("JEANS")
    await productsPage.productsHeaderShouldHaveText("MEN - JEANS PRODUCTS")
});