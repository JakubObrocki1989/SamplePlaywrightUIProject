export class ContactUsPage {
    constructor(page) {
        this.page = page
        this.getInTouchHeader = this.page.locator('div[@class="contact-form"] h2')
        this.nameInput = this.page.locator('input[data-qa="name"]')
        this.emailInput = this.page.locator('input[data-qa="email"]')
        this.subjectInput = this.page.locator('input[data-qa="subject"]')
        this.messageTextarea = this.page.locator('textarea[data-qa="message"]')
        this.uploadFileInput = this.page.locator('input[name="upload_file"]')
        this.submitButton = this.page.locator('input[data-qa="submit"]')
        this.successMessage = this.page.locator('div[class="status alert alert-success"]')
    }
}