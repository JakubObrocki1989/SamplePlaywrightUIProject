import { faker } from '@faker-js/faker/locale/en';
import { RegisterUser} from '../models/RegisterUser.js';
const genders = new Array("Mr", "Mrs")
const months = new Array("January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December");
const countries = new Array("India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore");

let registerUser = new RegisterUser()

export class RegisterUserFactory {
    constructor() {
        
    }

      getRegularRegisterUser() {
        registerUser.setUsername(faker.internet.username())
        registerUser.setEmail(faker.internet.email())
        registerUser.setGender(genders[Math.floor(Math.random() * 1)])
        registerUser.setPassword(faker.internet.password())
        registerUser.setDay(Math.floor(Math.random() * 30))
        registerUser.setMonth(months[Math.floor(Math.random() * 11)])
        registerUser.setYear(Math.floor(Math.random() * (2024 - 1900 + 1) + 1900))
        registerUser.setSignUpForNewsletter(true)
        registerUser.setReceiveSpecialOffers(true)
        registerUser.setFirstName(faker.person.firstName())
        registerUser.setLastName(faker.person.lastName())
        registerUser.setCompany(faker.company.name())
        registerUser.setAddress(faker.location.streetAddress())
        registerUser.setAddress2(faker.location.buildingNumber())
        registerUser.setCountry(countries[Math.floor(Math.random() * 6)])
        registerUser.setState(faker.location.state())
        registerUser.setCity(faker.location.city())
        registerUser.setZipCode(faker.location.zipCode())
        registerUser.setMobile(Math.floor(Math.random() * (900000000 - 100000000 + 1) + 100000000).toString())
        return registerUser
    }
}