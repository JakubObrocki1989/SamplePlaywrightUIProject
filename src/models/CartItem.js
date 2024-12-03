export class CartItem {
    constructor() {
    }

    setName(text) {
        this.name = text
    }

    setPrice(text) {
        this.price = text
    }

    setQuantity(text) {
        this.quantity = text
    }

    setTotalPrice(text) {
        this.totalPrice = text
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price
    }

    getQuantity() {
        return this.quantity
    }

    getTotalPrice() {
        return this.totalPrice
    }
}