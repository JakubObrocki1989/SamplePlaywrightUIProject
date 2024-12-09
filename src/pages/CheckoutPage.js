import { faker } from '@faker-js/faker/locale/en';
import { CheckoutCustomerAddress } from '../models/CheckoutCustomerAddress.js';

let address = new CheckoutCustomerAddress()

export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.deliverAddressDetails = this.page.locator('ul[id="address_delivery"] li')
        this.invoiceAddressDetails = this.page.locator('ul[id="address_invoice"] li')
        this.descriptionTextArea = this.page.locator('textarea[name="message"]')
        this.placeOrderButton = this.page.locator('a[class="btn btn-default check_out"]')
        }

    typeDescription = async () => {
        await this.descriptionTextArea.waitFor()
        await this.descriptionTextArea.fill(faker.commerce.productDescription())
    } 

    getDeliveryAddress = async () => {
        await address.setGenderFirstLastName(await this.deliverAddressDetails.nth(1).innerText())
        await address.setCompany(await this.deliverAddressDetails.nth(2).innerText())
        await address.setAddress(await this.deliverAddressDetails.nth(3).innerText())
        await address.setAddress2(await this.deliverAddressDetails.nth(4).innerText())
        await address.setCityStatePostalCode(await this.deliverAddressDetails.nth(5).innerText())
        await address.setCountry(await this.deliverAddressDetails.nth(6).innerText())
        await address.setMobile(await this.deliverAddressDetails.nth(7).innerText())
        return address
    }

    getBillingAddress = async () => {
        await address.setGenderFirstLastName(await this.invoiceAddressDetails.nth(1).innerText())
        await address.setCompany(await this.invoiceAddressDetails.nth(2).innerText())
        await address.setAddress(await this.invoiceAddressDetails.nth(3).innerText())
        await address.setAddress2(await this.invoiceAddressDetails.nth(4).innerText())
        await address.setCityStatePostalCode(await this.invoiceAddressDetails.nth(5).innerText())
        await address.setCountry(await this.invoiceAddressDetails.nth(6).innerText())
        await address.setMobile(await this.invoiceAddressDetails.nth(7).innerText())
        return address
    }

    placeOrder = async () => {
        await this.placeOrderButton.click()
    }
}