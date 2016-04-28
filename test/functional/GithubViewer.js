/* Functional Test. Nightwatch.js, runs on Selenium
 * Starts the game and hits each mole once. */
var validation = {};
module.exports = {
    '@tags': ['test'],
    'GithubViewer': function(browser) {
        browser
            .url(browser.launch_url)
            .waitForElementVisible('body', 1000)
            .waitForElementVisible('.list-container', 1000)
            .getValue('#app > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(1) >' +
                ' div.username', function(response){
                validation = Object.assign( {}, {username: response.value})
            })
            .getValue('#app > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div:nth-child(2) >' +
                ' div.title', function(response){
                validation = Object.assign( validation, {}, {title: response.value})
            })
            .click('#app > div > div > div:nth-child(2) > div > div > div > div:nth-child(1)')
            .waitForElementNotPresent('.list-container', 3000)
            .waitForElementVisible('#app > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div.username', 1000)
            .getValue('#app > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div:nth-child(1) > div.username', function(response){
                this.assert.equal(response.value, validation.username);
            })
            .waitForElementVisible('#app > div > div > div:nth-child(2) > div > div > h2', 1000)
            .getValue('#app > div > div > div:nth-child(2) > div > div > h2', function(response){
                this.assert.equal(response.value, validation.title);
            })
            .click('button')
            .waitForElementVisible('.list-container', 1000)
            .end();
    }

}
