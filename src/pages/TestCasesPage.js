export class TestCasesPage {
    constructor(page) {
        this.page = page
        this.testCasesHeader = this.page.locator('h2[class="title text-center"]')
    }

    isHeaderVisible = async () => {
        await this.testCasesHeader.waitFor()
        return await this.testCasesHeader.isVisible()
    }

    getTestCaseHeaderText = async () => {
        return await this.testCasesHeader.innerText()
    }
}