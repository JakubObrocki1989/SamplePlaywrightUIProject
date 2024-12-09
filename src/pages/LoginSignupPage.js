export class LoginSignupPage {
    constructor(page) {
        this.page = page
        this.signupHeader = this.page.locator('div[class="signup-form"] h2')
        this.nameInput = this.page.locator('input[data-qa="signup-name"]')
        this.emailAddressInput = this.page.locator('input[data-qa="signup-email"]')
        this.signupButton = this.page.locator('button[data-qa="signup-button"]')
        this.signupEmailExistErrorHeader = this.page.locator('div[class="signup-form"] p')
        this.emailOrPasswordIsIncorrectHeader = this.page.locator('div[class="login-form"] p')
        this.loginEmailInput = this.page.locator('input[data-qa="login-email"]')
        this.loginPasswordInput = this.page.locator('input[data-qa="login-password"]')
        this.loginButton = this.page.locator('button[data-qa="login-button"]')
    }

    isHeaderVisible = async () => {
        return await this.signupHeader.isVisible()
    }

    fillSignup = async (username, email) => {
        await this.nameInput.waitFor()
        await this.nameInput.fill(username)
        await this.emailAddressInput.fill(email)
    }

    clickSignup = async () => {
        await this.signupButton.waitFor()
        await this.signupButton.click()
    } 

    isSignupEmailExistErrorHeaderVisible = async () => {
        await this.signupEmailExistErrorHeader.waitFor()
        return this.signupEmailExistErrorHeader.isVisible()
    }

    getSignupEmailExistErrorText = async () => {
        return await this.signupEmailExistErrorHeader.first().innerText()
    }

    isEmailOrPasswordIsIncorrectHeaderVisible = async () => {
        await this.emailOrPasswordIsIncorrectHeader.waitFor()
        return this.emailOrPasswordIsIncorrectHeader.isVisible()
    }

    getEmailOrPasswordIsIncorrectHeaderText = async () => {
        return await this.emailOrPasswordIsIncorrectHeader.first().innerText()
    }

    fillLogin = async (username, password) => {
        await this.loginEmailInput.waitFor()
        await this.loginEmailInput.fill(username)
        await this.loginPasswordInput.fill(password)
    }

    clickLogin = async () => {
        await this.loginButton.waitFor()
        await this.loginButton.click()
    }
}