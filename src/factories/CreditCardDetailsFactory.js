import { faker } from '@faker-js/faker/locale/en';
import { CreditCardDetails } from '../models/CreditCardDetails.js'

let creditCardDetails = new CreditCardDetails()
export class CreditCardDetailsFactory {
    constructor() {}

    getRandomCreditCardDetails() {
        creditCardDetails.setCardOwner(faker.person.firstName());
        creditCardDetails.setCardNumber(faker.business.creditCardNumber());
        creditCardDetails.setCvcNumber(faker.number.numberBetween(100, 999).toString());
        creditCardDetails.setExpiryMonth(faker.number.numberBetween(1, 12).toString());
        creditCardDetails.setExpiryYear(faker.number.numberBetween(2024, 2030).toString());
        return creditCardDetails
    }
}
        