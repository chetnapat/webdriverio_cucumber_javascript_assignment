const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^user should navigate to products page$/, async () => {
	const pageHeading = await productsPage.getPageHeading();
    console.log('Products page heading is : ' + pageHeading);
    expect(pageHeading).toEqual("Products");
});

Then(/^user should see error <message>$/, async(message) => {
    const errorMessage = await loginPage.getLoginErrorMsg();
    console.log('Actual error message for invalid credentials is : ' + errorMessage);
    expect(errorMessage).toContain(message);
});

When(/^user click on first product$/, async() => {
    let firstProductNameOnProductsPage = await productsPage.getFirstProductName();
    console.log('First product name is : ' + firstProductNameOnProductsPage);
    await productsPage.clickOnFirstProduct();
});

When(/^user clicks on Add to cart button$/, async() => {
    await productsPage.clickOnAddToCartButton();
});

When(/^user navigates to cart$/, async() => {
    await productsPage.clickOnShoppingCartIcon();
    const cartPageHeader = await cartPage.getYourCartPageHeader();
    expect(cartPageHeader).toEqual('Your Cart');
});

Then(/^user should see same product on your cart page$/, async() => {
    const productNameOnCartPage = await cartPage.getProductNameOnYourCartPage();
    console.log("Product Name On Cart Page is : " + productNameOnCartPage);
    expect(productNameOnCartPage).toEqual(firstProductNameOnProductsPage);
});


When(/^user clicks on checkout button$/, async() => {
	await cartPage.clickOnCheckoutBtn();
});

When(/^user enters <firstName>, <lastName> and <postalCode>$/, async(firstName, lastname, postalCode) => {
    await checkoutPage.enterDetails(firstName, lastname, postalCode);
    await checkoutPage.clickOnContinueBtn();
    await checkoutPage.clickOnFinishBtn();
});

Then(/^user should see success <message>$/, async(message) => {
    const successMessageOnoOrderPlcaed = await checkoutPage.getSuccessMessage();
    console.log("Success message after placing order is : " + successMessageOnoOrderPlcaed);
    expect(successMessageOnoOrderPlcaed).toEqual(message);
});





