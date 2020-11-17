var webdriver = require('selenium-webdriver');

var browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

browser.get('http://www.google.com');

browser.manage().window().maximize();

var promise = browser.getTitle();

promise.then(function(title) {
    console.log(title);
})

// browser.quit();