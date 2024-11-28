export class TestCasesPage {
    constructor(page) {
        this.page = page
        this.testCasesHeader = this.page.locator('h2[class="title text-center"]')
    }
}