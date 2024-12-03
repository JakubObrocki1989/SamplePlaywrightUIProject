import { faker } from '@faker-js/faker/locale/en';
import { ContactMessage } from '../models/ContactMessage.js'

let contactMessage = new ContactMessage()
export class ContactMessageFactory {
    constructor() {
        
    }

    getContactUsMessage() {
        contactMessage.setName(faker.person.firstName())
        contactMessage.setEmail(faker.internet.email())
        contactMessage.setSubject(faker.commerce.productName())
        contactMessage.setMessage(faker.person.fullName())
        return contactMessage
    }
}
