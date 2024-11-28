import { faker } from '@faker-js/faker/locale/en';
import { ContactMessage } from '../models/ContactMessage.js'

let contactMessage = new ContactMessage()
export class ContactMessageFactory {
    constructor() {
        
    }

    getContactUsMessage() {
        contactMessage.setEmail(faker.internet.email())
        contactMessage.setSubject(faker.commerce.productName)
        contactMessage.setMessage(faker.person.nameWithMiddle)
        contactMessage.setFilePath('tu bedzie sciezka')
        return contactMessage
    }
}
