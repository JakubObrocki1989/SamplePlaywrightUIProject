export class CreditCardDetails {
    constructor() {}

    setCardOwner(text) {
        this.cardOwner = text
    }

    setCardNumber(text) {
        this.cardNumber = text
    }

    setCvcNumber(text) {
        this.cvcNumber = text
    }

    setExpiryMonth(text) {
        this.expiryMonth = text
    }

    setExpiryYear(text) {
        this.expiryYear = text
    }
    
    getCardOwner() {
        return this.cardOwner
    }

    getCardNumber() {
        return this.cardNumber
    }

    getCvcNumber() {
        return this.cvcNumber
    }

    getExpiryMonth() {
        return this.expiryMonth
    }

    getExpiryYear() {
        return this.expiryYear
    }
}