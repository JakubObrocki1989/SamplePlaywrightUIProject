import { BrowserActions } from "../../tests/BrowserActions.js"

export class BasePage extends BrowserActions {
    constructor(page) {
        super(page)
        this.page = page
        const browserActions = new BrowserActions(this.page)
    }
}