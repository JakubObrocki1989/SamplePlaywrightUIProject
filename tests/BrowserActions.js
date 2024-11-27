import { expect } from "@playwright/test"

export class BrowserActions {
    constructor(page) {
        this.page = page

    }

    assertText = async (text1, text2) => {
        await expect(text1).toHaveText(text2)
    }

    clickElement = async (element) => {
        console.info("Trying to click element found by " + element)
        await element.waitFor()
        await element.click()
    }

    scrollToElement = async (element) => {
        console.info("Trying to scroll to element found by " + element)
        await element.scrollIntoViewIfNeeded()
    }

    isElementVisible = async (element) => {
        console.info("Waiting for visibility of element found by " + element)
        await element.waitFor()
    }
}