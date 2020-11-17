var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

var driver;

test.describe('Google Search', function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        driver.get('http://www.google.com');

        done();
    });

    test.afterEach(function(done) {
        driver.quit();
        done();
    });

    test.it('Webpage should have expected title value', function(done) {
        var promise = driver.getTitle();
        promise.then(function(title) {
            assert.strictEqual(title, 'google');
        });

        done();
    });

    test.it('Searchbox should have expected text', function(done) {
        var searchBox = driver.findElement(webdriver.By.name('q'));
        searchBox.sendKeys('random text');
        searchBox.getAttribute('value').then(function(value) {
            assert.strictEqual(value, 'random text');
        });

        done();
    });
});