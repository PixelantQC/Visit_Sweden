// Objects

// Instagram Feed
var instagramFeed = '.visit-sweden-instagram-grid';
var feedFirstItem = '.visit-sweden-instagram-col-60 div:nth-child(1)';
var feedSecondItem = '.visit-sweden-instagram-col-60 div:nth-child(2)';
var feedThirdItem = '.visit-sweden-instagram-col-60 div:nth-child(3)';

// Instagram Modal
var instagramModal = '.visit-sweden-instagram-modal';
var carouselItem = '.visit-sweden-instagram-carousel';
var leftArrow = '.instagram-left';
var rightArrow = '.instagram-right';
var disabledLeftArrow = '.instagram-left.disabled';
var disabledRightArrow = '.instagram-right.disabled';

// Tests

module.exports = {
  'Click first instagram item' : function (browser) {
    browser
      .url(browser.globals.urlMikkel)
      .maximizeWindow()
      .waitForElementVisible(instagramFeed, 1000, 'Instagram feed is visible on a page?')
      .click(feedFirstItem)
      .waitForElementVisible(instagramModal, 1000, 'Instagram modal window is visible on a page?')
      .assert.cssClassPresent(feedFirstItem, 'active', 'First feed carousel item IS active now?')
      .assert.elementPresent(disabledLeftArrow, 'Left arrow is disabled?')
      .assert.cssProperty(disabledLeftArrow, 'opacity', '0.3', 'Disabled Left arrow has proper styling(decresed opacity)?')
      .assert.elementNotPresent(disabledRightArrow, 'Right arrow is enabled?')
      .assert.cssProperty(rightArrow, 'opacity', '1', 'Enabled Right arrow has proper styling(opacity = 1)?')
  },
  'Click right arrow to change to Second slide': function (browser) {
    browser
      .click(rightArrow)
      .assert.cssClassNotPresent(feedFirstItem, 'active', 'First feed carousel item is NOT active now?')
      .assert.cssClassPresent(feedSecondItem, 'active', 'Second feed carousel item IS active now?')
      .assert.elementNotPresent(disabledLeftArrow, 'Left arrow is enabled?')
      .assert.cssProperty(leftArrow, 'opacity', '1', 'Enabled Left arrow has proper styling(opacity = 1)?')
      .assert.elementNotPresent(disabledRightArrow, 'Right arrow is enabled?')
      .assert.cssProperty(rightArrow, 'opacity', '1', 'Enabled Right arrow has proper styling(opacity = 1)?')
  },
  'Click right arrow to change to Third slide': function (browser) {
    browser
      .click(rightArrow)
      .assert.cssClassNotPresent(feedSecondItem, 'active', 'Second feed carousel item is NOT active now?')
      .assert.cssClassPresent(feedThirdItem, 'active', 'Third feed carousel item IS active now?')
      .assert.elementNotPresent(disabledLeftArrow, 'Left arrow is enabled?')
      .assert.cssProperty(leftArrow, 'opacity', '1', 'Enabled Left arrow has proper styling(opacity = 1)?')
      .assert.elementNotPresent(disabledRightArrow, 'Right arrow is enabled?')
      .assert.cssProperty(rightArrow, 'opacity', '1', 'Enabled Right arrow has proper styling(opacity = 1)?')
  },
  'Click left arrow to change to Second slide': function (browser) {
    browser
      .click(leftArrow)
      .assert.cssClassNotPresent(feedThirdItem, 'active', 'Third feed carousel item is NOT active now?')
      .assert.cssClassPresent(feedSecondItem, 'active', 'Second feed carousel item IS active now?')
      .assert.elementNotPresent(disabledLeftArrow, 'Left arrow is enabled?')
      .assert.cssProperty(leftArrow, 'opacity', '1', 'Enabled Left arrow has proper styling(opacity = 1)?')
      .assert.elementNotPresent(disabledRightArrow, 'Right arrow is enabled?')
      .assert.cssProperty(rightArrow, 'opacity', '1', 'Enabled Right arrow has proper styling(opacity = 1)?')
  },
  'Click left arrow to change to First slide': function (browser) {
    browser
      .click(leftArrow)
      .assert.cssClassNotPresent(feedSecondItem, 'active', 'Second feed carousel item is NOT active now?')
      .assert.cssClassPresent(feedFirstItem, 'active', 'First feed carousel item IS active now?')
      .assert.elementPresent(disabledLeftArrow, 'Left arrow is disabled?')
      .assert.cssProperty(disabledLeftArrow, 'opacity', '0.3', 'Disabled Left arrow has proper styling(decresed opacity)?')
      .assert.elementNotPresent(disabledRightArrow, 'Right arrow is enabled?')
      .assert.cssProperty(rightArrow, 'opacity', '1', 'Enabled Right arrow has proper styling(opacity = 1)?')
      .end();
  },
}
