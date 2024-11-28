export class ProductsPage {
    constructor(page) {
        this.page = page
        this.productsHeader = this.page.locator('div[class="features_items"] h2')
        this.productsList = this.page.locator('div[class="features_items"] div[class="col-sm-4"]')
        this.searchInput = this.page.locator('id search_product')
        this.submitSearchButton = this.page.locator('id submit_search')
        this.categoriesList = this.page.locator('div[class="panel-group category-products"] a')
        this.brandsList = this.page.locator('div[@class="brands-name"] a')
    }
}