const { $ } = require('@wdio/globals')

/**
 * This page contains selectors and methods for a cart page
 */
class YourCartPage {
    /**
     * define selectors using getter methods
     */
    get checkoutButton () {
        return $('#checkout');
    }

    get pageHeading () {
        return $('//*[@class="title"]');
    }

    get productNameOnYourCartPage () {
        return $('//*[@class="title"]');
    }

    async clickOnCheckoutBtn() {
        (await this.checkoutButton).waitForDisplayed({
          timeoutMsg: "Checkout button on your cart page is not displayed",
        });
        (await this.checkoutButton).click();
      }

      async getYourCartPageHeader() {
        (await this.pageHeading).waitForDisplayed({
            timeoutMsg: 'Page Heading of your cart page is not displayed',
          });
        return (await this.pageHeading).getText();
    }

    async getProductNameOnYourCartPage() {
        (await this.productNameOnYourCartPage).waitForDisplayed({
            timeoutMsg: 'Product Name On Your Cart Page is not displayed',
          });
        return (await this.productNameOnYourCartPage).getText();
    }
}

module.exports = new YourCartPage();
