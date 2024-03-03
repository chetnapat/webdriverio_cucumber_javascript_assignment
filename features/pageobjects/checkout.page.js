const { $ } = require('@wdio/globals')

/**
 * This page contains selectors and methods for a checkout page
 */
class CheckoutPage {
    /**
     * define selectors using getter methods
     */
    get firstName () {
        return $('#first-name');
    }

    get lastName () {
        return $('#last-name');
    }

    get postalCode () {
        return $('#postal-code');
    }

    get postalCode () {
        return $('#postal-code');
    }

    get continueBtn () {
        return $('#continue');
    }

    get finishBtn () {
        return $('#finish');
    }

    get successMessage () {
        return $('#finish');
    }

    async enterDetails(firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
    }

    async clickOnContinueBtn() {
        (await this.continueBtn).waitForDisplayed({
          timeoutMsg: "Continue button on checkout page is not displayed",
        });
        (await this.continueBtn).click();
      }

      async clickOnFinishBtn() {
        (await this.finishBtn).waitForDisplayed({
          timeoutMsg: "Finish button is not displayed",
        });
        (await this.finishBtn).click();
      }

      async getSuccessMessage() {
        (await this.successMessage).waitForDisplayed({
          timeoutMsg: "Success message after order placed is not displayed",
        });
        return (await this.successMessage).getText();
      }
}

module.exports = new CheckoutPage();
