import { faker } from '@faker-js/faker/locale/en';
import { Review } from '../models/Review.js'

let review = new Review()
export class ReviewFactory {
    constructor() {}

    getRandomReview() {
        review.setName(faker.internet.username());
        review.setEmail(faker.internet.email());
        review.setReview(faker.lorem.paragraph());
        return review
    }
}
        