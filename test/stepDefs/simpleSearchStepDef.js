const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
});

//cookie banner was blocking site interatcion, added step to accept cookies
Given('I accept all cookies', function () {
  simpleSearchPageObject.acceptAllCookies()
});

Given('I open the search bar', function () {
  simpleSearchPageObject.openSearchBar()
});

When('I enter "Samsung"', function () {
  simpleSearchPageObject.enterSearchParam("Samsung")
});

Then('I should be shown a search listing for "Samsung"', function () {
  simpleSearchPageObject.verifyResults("Samsung")
})
