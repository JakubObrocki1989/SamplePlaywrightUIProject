import { expect } from "@playwright/test"

export class SignupPage {
    constructor(page) {
        this.page = page
        this.header = this.page.locator('div[class="login-form"] h2[class="title text-center"] b')
        this.genderRadios = this.page.locator('input[type="radio"]')
        this.passwordInput = this.page.locator('input[type="password"]')
        this.daysSelect = this.page.locator('select[data-qa="days"]')
        this.monthsSelect = this.page.locator('select[data-qa="months"]')
        this.yearsSelect = this.page.locator('select[data-qa="years"]')
        this.newletterCheckbox = this.page.getByRole('checkbox', {name: "newsletter"})
        this.optinCheckbox = this.page.locator('input[name="optin"]')
        this.firstNameInput = this.page.locator('input[data-qa="first_name"]')
        this.lastNameInput = this.page.locator('input[data-qa="last_name"]')
        this.companyInput = this.page.locator('input[data-qa="company"]')
        this.addressInput = this.page.locator('input[data-qa="address"]')
        this.address2Input = this.page.locator('input[data-qa="address2"]')
        this.countrySelect = this.page.locator('select[data-qa="country"]')
        this.stateInput = this.page.locator('input[data-qa="state"]')
        this.cityInput = this.page.locator('input[data-qa="city"]')
        this.zipcodeInput = this.page.locator('input[data-qa="zipcode"]')
        this.mobileNumberInput = this.page.locator('input[data-qa="mobile_number"]')
        this.createAccountButton = this.page.locator('button[data-qa="create-account"]')
    }

    isHeaderVisible = async () => {
        await expect(this.header.first()).toBeVisible()
    }

    checkHeaderText = async (text) => {
        await expect(await this.header.first().innerText()).toBe(text)
    }

    fillSignupDetails = async (user) => {
        await expect(this.header.first()).toBeVisible()
        await this.genderRadios.first().check()
        await this.passwordInput.fill(user.getPassword())
        await this.daysSelect.selectOption(user.getDay().toString())
        await this.monthsSelect.selectOption(user.getMonth().toString())
        await this.yearsSelect.selectOption(user.getYear().toString())
        await this.newletterCheckbox.check()
        await this.optinCheckbox.check()
        await this.firstNameInput.fill(user.getFirstName())
        await this.lastNameInput.fill(user.getLastName())
        await this.companyInput.fill(user.getCompany())
        await this.addressInput.fill(user.getAddress())
        await this.address2Input.fill(user.getAddress2())
        await this.countrySelect.selectOption(user.getCountry())
        await this.page.mouse.wheel(0, 300);
        await this.stateInput.fill(user.getState())
        await this.cityInput.fill(user.getCity())
        await this.zipcodeInput.fill(user.getZipCode())
        await this.mobileNumberInput.fill(user.getMobile())
        await this.createAccountButton.click()
    }
}