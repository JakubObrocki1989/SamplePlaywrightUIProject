export class CheckoutCustomerAddress {
    constructor() {
    }

    setGenderFirstLastName(text) {
        this.genderFirstLastName = text
    }

    setCompany(text) {
        this.company = text
    }

    setAddress(text) {
        this.address = text
    }

    setAddress2(text) {
        this.address2 = text
    }

    setCityStatePostalCode(text) {
        this.cityStatePostalCode = text
    }

    setCountry(text) {
        this.country = text
    }

    setMobile(text) {
        this.mobile = text
    }

    getGenderFirstLastName() {
        return this.genderFirstLastName
    }

    getCompany() {
        return this.company
    }

    getAddress() {
        return this.address
    }

    getAddress2() {
        return this.address2
    }

    getCityStatePostalCode() {
        return this.cityStatePostalCode
    }

    getCountry() {
        return this.country
    }

    getMobile() {
        return this.mobile
    }
}