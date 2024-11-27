import { expect } from "@playwright/test"

export class SignupPage {
    constructor(page) {
        this.page = page
        this.header = this.page.locator('div[class="login-form"] h2[class="title text-center"] b')
        this.generRadios = this.page.locator('input[type="radio"]')
        this.passwordInput = this.page.locator('input[type="password"]')
        this.daysSelect = this.page.locator('select[data-qa="days"]')
        this.monthsSelect = this.page.locator('select[data-qa="months"]')
        this.yearsSelect = this.page.locator('select[@data-qa="years"]')
        this.newletterCheckbox = this.page.getByRole('checkbox', {name: "newsletter"})
        this.optinCheckbox = this.page.getByRole('checkbox', {name: "optin"})
        this.firstNameInput = this.page.locator('input[data-qa="first_name"]')
        this.lastNameInput = this.page.locator('input[@data-qa="last_name"]')
        this.companyInput = this.page.locator('input[@data-qa="company"]')
        this.addressInput = this.page.locator('input[@data-qa="address"]')
        this.address2Input = this.page.locator('input[@data-qa="address2"]')
        this.countryInput = this.page.locator('input[@data-qa="country"]')
        this.stateInput = this.page.locator('input[@data-qa="state"]')
        this.cityInput = this.page.locator('input[@data-qa="city"]')
        this.zipcodeInput = this.page.locator('input[@data-qa="zipcode"]')
        this.mobileNumberInput = this.page.locator('input[@data-qa="mobile_number"]')
        this.createAccountButton = this.page.locator('button[@data-qa="create-account"]')
    }

    isHeaderVisible = async () => {
        await expect(this.header.first()).toBeVisible()
    }

    checkHeaderText = async () => {
        await expect(await this.header.first().innerText()).toBe("ENTER ACCOUNT INFORMATION")
    }

    fillSignupDetails = async (RegisterUser) => {
        await this.generRadios.first().waitFor()
        await this.generRadios.first().check()
        await this.page.pause()
    }
}