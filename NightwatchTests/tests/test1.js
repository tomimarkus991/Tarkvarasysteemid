module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['test1'],
  'AllKeyShop test': function(browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .assert.title('Google')
      // .pause(2500)
      // .clearValue('#i_am_a_textbox')
      // .setValue('#i_am_a_textbox', 'jabadabaduu')


      .pause(1000)
      .maximizeWindow()

    //   .pause(1000)
    //   .moveToElement('.xW5tKe', 10, 10)
    //   .click('.xW5tKe')

    //   .pause(500)
    //   .moveToElement('.U26fgb.XHsn7e.dURtfb.vvHnhc.M9Bg4d', 10, 10)
    //   .click('.U26fgb.XHsn7e.dURtfb.vvHnhc.M9Bg4d')
    //   .click('.U26fgb.XHsn7e.dURtfb.vvHnhc.M9Bg4d')
    //   .click('.jXLjzb')

    //   .pause(500)
    //   .moveToElement('.FKF6mc.TpQm9d', 10, 10)
    //   .click('.FKF6mc.TpQm9d')

      .pause(1000)
      .clearValue('.gLFyf.gsfi')

      .pause(1000)
      .setValue('.gLFyf.gsfi', 'allkeyshop')

      .pause(1000)
      .click('.gNO89b')

      .pause(2000)
      .click('.LC20lb')

      .pause(2000)
      .clearValue('.banner-search-form-input')
      .setValue('.banner-search-form-input', 'Call of Duty Modern Warfare')
      .click('.svg-inline--fa.fa-search.fa-w-16')

      .pause(2000)
      .moveToElement('.search-results-row-link', 10, 10)

      .pause(500)
      .click('.search-results-row-link')

      .pause(500)
      .moveToElement('.d-xl-none.buy-btn', 10, 10)
      .click('.d-xl-none.buy-btn')

      .pause(1000)
      .moveToElement('.offers-table-row', 10, 10)
      .pause(500)
      .click('.d-xl-none.buy-btn')
      .pause(30000)

      .end();
  }
};
