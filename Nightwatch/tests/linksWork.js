// Objects

// Instagram Feed
var instagramFeed = '.visit-sweden-instagram-grid';
var feedLastItem = '.visit-sweden-instagram-col-40 div:nth-child(1)';

// instagramModal
var instagramUser = '.visit-sweden-instagram-modal-username a';
var instagramLikes = '.visit-sweden-instagram-item-modal-likes a';


module.exports = {
  'Click last(big) instagram item' : function (browser) {
    browser
      .url(browser.globals.url)
      .maximizeWindow()
      .waitForElementVisible(instagramFeed, 1000, 'Instagram feed is visible on a page?')
      .click(feedLastItem)
      .assert.cssClassPresent(feedLastItem, 'active', 'Last feed carousel item IS active now?')
  },
  'Click instagram username link': function (browser) {
    browser
      .click(instagramUser)
      .waitForElementVisible('body', 1000, 'Page is loaded?')
      .verify.urlContains('instagram')
  },
  'Click instagram likes link': function (browser) {
    browser
      .click(instagramLikes)
      .waitForElementVisible('body', 1000, 'Page is loaded?')
      .verify.urlContains('instagram')
  },
}
