var path = require('path');
var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: path.resolve(__dirname, '../reports'),
  hideSuccess: false
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
