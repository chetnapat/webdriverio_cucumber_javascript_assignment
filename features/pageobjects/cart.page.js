const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

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
