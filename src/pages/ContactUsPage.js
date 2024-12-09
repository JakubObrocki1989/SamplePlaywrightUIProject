export class ContactUsPage {
    constructor(page) {
        this.page = page
        this.getInTouchHeader = this.page.locator('div[class="contact-form"] h2')
        this.nameInput = this.page.locator('input[data-qa="name"]')
        this.emailInput = this.page.locator('input[data-qa="email"]')
        this.subjectInput = this.page.locator('input[data-qa="subject"]')
        this.messageTextarea = this.page.locator('textarea[data-qa="message"]')
        this.uploadFileInput = this.page.locator('input[name="upload_file"]')
        this.submitButton = this.page.locator('input[data-qa="submit-button"]')
        this.successMessage = this.page.locator('div[class="status alert alert-success"]')
    }

    isHeaderVisible = async () => {
        return await this.getInTouchHeader.isVisible()
    }

    getGetInTouchHeader = async () => {
        return await this.getInTouchHeader.innerText()
    }

    fillData = async (data) => {
        await this.nameInput.fill(data.getName())
        await this.emailInput.fill(data.getEmail())
        await this.subjectInput.fill(data.getSubject())
        await this.messageTextarea.fill(data.getMessage())
        let path = require('path');
        let fileToUpload = '/src/resources/ContactUsAttachment.txt/';
        let absolutePath = path.resolve(process.cwd() + fileToUpload);
        await this.uploadFileInput.setInputFiles(absolutePath);
    }

    clickSubmit = async () => {
        this.page.on('dialog', dialog => dialog.accept());
        await this.submitButton.waitFor()
        await this.submitButton.click()
    }

    getSuccessMessage = async () => {
        await this.successMessage.waitFor()
        return await this.successMessage.innerText()
    }
}