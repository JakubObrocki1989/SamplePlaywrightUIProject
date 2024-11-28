import { faker } from '@faker-js/faker/locale/en';
import { Review } from '../models/Review.js'

let review = new Review()
export class ReviewFactory {
    constructor() {}

    getRandomReview() {
        review.setName(faker.person.username());
        review.setEmail(faker.internet.emailAddress());
        review.setReview(faker.letterify("test"));
        return review
    }
}
        