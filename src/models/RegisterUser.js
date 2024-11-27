import { faker } from '@faker-js/faker/locale/en';
const genders = new Array("Mr", "Mrs")
const months = new Array("January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December");
const countries = new Array("India", "United States", "Canada", "Australia", "Israel", "New Zealand", "Singapore");

export class RegisterUser {
    constructor(username, email, gender, password, day, month, year, signUpForNewsletter, receiveSpecialOffers, firstName, lastName, company, address, address2, country, state, city, zipCode, mobile) {
    this.username = faker.internet.username()
    this.email = faker.internet.email()
    this.gender = genders[Math.floor(Math.random() * 1)],
    this.password = faker.internet.password(),
    this.day = Math.floor(Math.random() * 30),
    this.month = months[Math.floor(Math.random() * 11)],
    this.year = Math.floor(Math.random() * 2024),
    this.signUpForNewsletter = true,
    this.receiveSpecialOffers = true,
    this.firstName = faker.person.firstName(),
    this.lastName = faker.person.lastName(),
    this.company = faker.company.name(),
    this.address = faker.location.streetAddress(),
    this.address2 = faker.location.buildingNumber(),
    this.country = countries[Math.floor(Math.random() * 6)],
    this.state = faker.location.state(),
    this.city = faker.location.city(),
    this.zipcode = faker.location.zipCode()
    this.mobile = faker.location.mobile
    }
}