import { faker } from '@faker-js/faker/locale/en';
import { CreditCardDetails } from '../models/CreditCardDetails.js'

let creditCardDetails = new CreditCardDetails()
export class CreditCardDetailsFactory {
    constructor() {}

    getRandomCreditCardDetails() {
        creditCardDetails.setCardOwner(faker.person.firstName());
        creditCardDetails.setCardNumber(faker.finance.creditCardNumber());
        creditCardDetails.setCvcNumber(faker.finance.creditCardCVV());
        creditCardDetails.setExpiryMonth(Math.floor(Math.random() * (12 - 1 + 1) + 1).toString());
        creditCardDetails.setExpiryYear(Math.floor(Math.random() * (2050 - 2000 + 1) + 2000).toString());
        return creditCardDetails
    }
}
        