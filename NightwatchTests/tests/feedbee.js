module.exports = {
    '@tags': ['feedbee'],
    'feedbee test': function (browser) {
      browser
        .maximizeWindow()
        .url('http://127.0.0.1:3000/')
        .waitForElementVisible('body')
        .pause(10000)
        .useXpath()
        .waitForElementVisible('/html/body/div/div/div[2]/section/div[2]/div[1]/div[3]/div[3]/div[2]/div/div[2]/div/div/a')
        .pause(2000)
        .click('/html/body/div/div/div[2]/section/div[2]/div[1]/div[3]/div[3]/div[2]/div/div[2]/div/div/a')
        .end();
    }
  };