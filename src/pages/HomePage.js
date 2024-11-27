export class HomePage {
    constructor(page) {
        this.page = page
        this.acceptDataButton = this.page.getByLabel('Consent', { exact: true })
        this.subcriptionHeader = this.page.locator('div[class="footer-widget"]')
        this.scrollUpArrow = this.page.locator('a[id="scrollUp"]')
        this.fullFledgedHeader = this.page.locator('div[class="carousel-inner"] h2')
        this.menuButtons = this.page.locator('ul[class="nav navbar-nav"] li a')
    }

    clickSignupLoginButton = async () => {
        await this.menuButtons.filter({hasText: 'Signup / Login'}).click()
    }
}