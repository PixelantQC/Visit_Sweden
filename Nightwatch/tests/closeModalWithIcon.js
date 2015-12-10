// Objects

// Logo
var headerLogo = '.visit-sweden-logo'

// Instagram Feed
var instagramFeed = '.visit-sweden-instagram-grid';
var feedLastItem = '.visit-sweden-instagram-col-40 div:nth-child(1)';

//Instagram Modal
var instagramModal = '.visit-sweden-instagram-modal';
var closeIcon = '.visit-sweden-instagram-modal .iconscircle-cross';

//Footer
var footerLogo = '.visit-sweden-sender-model-white';

module.exports = {
  'Click last(big) instagram item' : function (browser) {
    browser
      .url(browser.globals.url)
      .maximizeWindow()
      .waitForElementVisible(instagramFeed, 1000, 'Instagram feed is visible on a page?')
      .click(feedLastItem)
      .assert.cssClassPresent(feedLastItem, 'active', 'Last feed carousel item IS active now?')
    },
  'Close last(big) instagram item with close icon' : function (browser) {
    browser
      .assert.visible(closeIcon, 'Modal close button is visible?')
      .click(closeIcon)
      .assert.elementNotPresent(instagramModal, 'Modal window is closed?')
      .moveToElement(footerLogo, 10, 10)
      .pause(2000)
      .moveToElement(headerLogo, 10, 10)
      .mouseButtonClick()
      .waitForElementVisible('body', 1000, 'New Page is loaded?')
      .assert.urlEquals('http://test.de.vs.typo3konsult.se/')
      .end()
    },
}
