const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * This page contains selectors and methods for a login page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    get loginError () {
        return $('//*[@data-test="error"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    async getLoginErrorMsg() {
        (await this.loginError).waitForDisplayed({
            timeoutMsg: 'Invalid login error message is not displayed',
          });
        return (await this.loginError).getText();
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
