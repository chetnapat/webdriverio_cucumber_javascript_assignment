const { $ } = require('@wdio/globals')
const Page = require('./page');


class productsPage extends Page {
  /**
   * This page has locators of products page of swag labs website
   */
  get pageHeading() {
    return $('//*[@class="product_label"]');
  }

  get firstProduct() {
    return $('(//*[@class="inventory_item_name"])[1]');
  }

  get firstProductName() {
    return $('(//*[@class="inventory_item_name"])[1]');
  }

  get addToCartButton() {
    return $('//*[contains(text(),"ADD TO CART")]');
  }

  get shoppingCartIcon() {
    return $('//*[@data-icon="shopping-cart"]');
  }

  async getPageHeading() {
    (await this.pageHeading).waitForDisplayed({
      timeoutMsg: "Products page heading is not displayed",
    });
    return (await this.pageHeading).getText();
  }

  async clickOnFirstProduct() {
    (await this.firstProduct).waitForDisplayed({
      timeoutMsg: "First Product on products page is not displayed",
    });
    (await this.firstProduct).click();
  }

  async getFirstProductName() {
    (await this.firstProductName).waitForDisplayed({
      timeoutMsg: "First product name is not displayed",
    });
    return (await this.firstProductName).getText();
  }

  async clickOnAddToCartButton() {
    (await this.addToCartButton).waitForDisplayed({
      timeoutMsg: "Add to cart button is not displayed",
    });
    (await this.addToCartButton).click();
  }

  async clickOnShoppingCartIcon() {
    (await this.shoppingCartIcon).waitForDisplayed({
      timeoutMsg: "Shopping Cart Icon is not displayed",
    });
    (await this.shoppingCartIcon).click();
  }
}

module.exports = new productsPage();
