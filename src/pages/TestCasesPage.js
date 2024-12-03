import { expect } from "@playwright/test"

export class TestCasesPage {
    constructor(page) {
        this.page = page
        this.testCasesHeader = this.page.locator('h2[class="title text-center"]')
    }

    isHeaderVisible = async () => {
        await expect(this.testCasesHeader).toBeVisible()
    }

    checkTestCaseHeaderText = async (text) => {
        await expect(await this.testCasesHeader.innerText()).toBe(text)
    }
}