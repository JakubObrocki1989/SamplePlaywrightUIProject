import { ReviewFactory} from '../src/factories/ReviewFactory.js';

const { test, expect } = require('./BaseTests.js');

test('Open and verify product details', async ({ page, homePage, productsPage, productPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.viewProduct(1)
    await expect.soft(await productPage.getProductName()).not.toBeEmpty()
    await expect.soft(await productPage.getProductCategory()).not.toBeEmpty()
    await expect.soft(await productPage.getProductPrice()).not.toBeEmpty()
    await expect.soft(await productPage.getProductAvailability()).not.toBeEmpty()
    await expect.soft(await productPage.getProductCondition()).not.toBeEmpty()
    await expect.soft(await productPage.getProductBrand()).not.toBeEmpty()
});

test('Search product', async ({ page, homePage, productsPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.searchItem("Sleeveless Dress")
    expect(await productsPage.getProductListSize()).toBe(1)
});

test('Add products to cart', async ({ page, homePage, productsPage, cartPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.addProduct(2)
    await productsPage.addProduct(4)
    await homePage.clickMenuOption("Cart")   
    expect(await cartPage.getCartProductListSize()).toBe(2)      
});

test('Check product quantity in cart', async ({ page, homePage, productsPage, productPage, cartModalPage, cartPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.viewProduct(2)
    await productPage.setQuantity(4)
    await productPage.addToCart()
    await cartModalPage.clickViewCartLink()   
    expect(await cartPage.getCartProductListSize()).toBe(1)      
});

test('Check subcategory header', async ({ page, homePage, productsPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await page.pause()
    await productsPage.openCategory("WOMEN")
    await productsPage.openSubcategory("TOPS")
    expect(await productsPage.getProductsHeaderText()).toBe("WOMEN - TOPS PRODUCTS")
    await productsPage.openCategory("KIDS")
    await productsPage.openSubcategory("DRESS")
    expect(await productsPage.getProductsHeaderText()).toBe("KIDS - DRESS PRODUCTS")
});

test('Check brands header', async ({ page, homePage, productsPage }) => {
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.openBrand("POLO")
    expect(await productsPage.getProductsHeaderText()).toBe("BRAND - POLO PRODUCTS")
    await productsPage.openBrand("BABYHUG")
    expect(await productsPage.getProductsHeaderText()).toBe("BRAND - BABYHUG PRODUCTS")
});

test('Write a review', async ({ page, homePage, productsPage, productPage }) => {
    const reviewFactory = new ReviewFactory()
    const review = reviewFactory.getRandomReview()
    await page.goto('/')
    expect(await homePage.isMenuOptionVisible("Products")).toBe(true)
    await homePage.clickMenuOption("Products")
    await productsPage.viewProduct(2)
    await productPage.writeAReview(review)
    expect(await productPage.getReviewSentSuccessMessage()).toBe("Thank you for your review.")
});