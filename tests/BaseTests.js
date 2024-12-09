const base = require ('@playwright/test');
const { HomePage } = require ('../src/pages/HomePage.js');
const { ProductsPage } = require('../src/pages/ProductsPage.js');
const { CartPage } = require ('../src/pages/CartPage.js');
const { CartModalPage } = require ('../src/pages/modals/CartModalPage.js');
const { LoginSignupPage } = require ('../src/pages/LoginSignupPage.js');
const { ProductPage } = require ('../src/pages/ProductPage.js');
const { ContactUsPage} = require ('../src/pages/ContactUsPage.js')
const { CheckoutModalPage} = require ('../src/pages/modals/CheckoutModalPage.js')
const { CheckoutPage } = require ('../src/pages/CheckoutPage.js')
const { SignupPage } = require ('../src/pages/SignupPage.js')
const { AccountCreatedPage } = require ('../src/pages/AccountCreatedPage.js')
const { AccountDeletedPage } = require ('../src/pages/AccountDeletedPage.js')
const { PaymentPage } = require ('../src/pages/PaymentPage.js')
const { PaymentDonePage } = require ('../src/pages/PaymentDonePage.js')
const { FooterPage } = require ('../src/pages/FooterPage.js')
const { TestCasesPage } = require ('../src/pages/TestCasesPage.js')

exports.test = base.test.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    cartModalPage: async ({ page }, use) => {
        await use(new CartModalPage(page));
    },
    loginSignUpPage: async ({ page }, use) => {
        await use(new LoginSignupPage(page));
    },
    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetails(page));
    },
    cartItemPage: async ({ page }, use) => {
        await use(new CartItem(page));
    },
    contactUsPage: async ({ page}, use) => {
        await use(new ContactUsPage(page));
    },
    checkoutModalPage: async ({ page }, use) => {
        await use(new CheckoutModalPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    signupPage: async ({ page }, use) => {
        await use(new SignupPage(page));
    },
    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    },
    accountDeletedPage: async ({ page }, use) => {
        await use(new AccountDeletedPage(page));
    },
    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    },
    paymentDonePage: async ({ page }, use) => {
        await use(new PaymentDonePage(page));
    },
    footerPage: async ({ page }, use) => {
        await use(new FooterPage(page))
    },
    testCasesPage: async ({ page }, use) => {
        await use(new TestCasesPage(page))
    }
    
});
exports.expect = base.expect;