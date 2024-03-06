const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const YourCartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

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
    const errorMessage = await LoginPage.getLoginErrorMsg();
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
    const cartPageHeader = await YourCartPage.getYourCartPageHeader();
    expect(cartPageHeader).toEqual('Your Cart');
});

Then(/^user should see same product on your cart page$/, async() => {
    const productNameOnCartPage = await YourCartPage.getProductNameOnYourCartPage();
    console.log("Product Name On Cart Page is : " + productNameOnCartPage);
    expect(productNameOnCartPage).toEqual(firstProductNameOnProductsPage);
});


When(/^user clicks on checkout button$/, async() => {
	await YourCartPage.clickOnCheckoutBtn();
});

When(/^user enters <firstName>, <lastName> and <postalCode>$/, async(firstName, lastname, postalCode) => {
    await CheckoutPage.enterDetails(firstName, lastname, postalCode);
    await CheckoutPage.clickOnContinueBtn();
    await CheckoutPage.clickOnFinishBtn();
});

Then(/^user should see success <message>$/, async(message) => {
    const successMessageOnoOrderPlcaed = await CheckoutPage.getSuccessMessage();
    console.log("Success message after placing order is : " + successMessageOnoOrderPlcaed);
    expect(successMessageOnoOrderPlcaed).toEqual(message);
});





