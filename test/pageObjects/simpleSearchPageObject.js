const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  acceptAllCookies () {
    const cookieBannerAcceptAll = $('#onetrust-accept-btn-handler')
    cookieBannerAcceptAll.click()
  }

  openSearchBar () {
    const searchBar = $('._1avdemu')
    searchBar.waitForDisplayed()
    searchBar.click()
    const searchBarInput = $('._v3q72m > div > div > input[class=_1g5dvk1]')
    searchBarInput.waitForDisplayed()
  }

  enterSearchParam (searchParam) {
    const searchBarInput = $('._v3q72m > div > div > input[class=_1g5dvk1]')
    searchBarInput.click()
    searchBarInput.setValue(searchParam)
  }

  verifyResults (searchParam) {
    //check 'Discounts' section is present
    const searchResults = $('._1bazady > div > div:nth-child(1) > div > div > h3[class=css-1ntqmb7]')
    searchResults.waitForDisplayed()
    this.isElementEqualToExpected(searchResults, 'Discounts')
    //check text in first result matches our search input
    const firstResultText = $('._dyvdsb > span')
    this.isElementEqualToExpected(firstResultText, searchParam)
  }
}

module.exports = simpleSearchPageObject
