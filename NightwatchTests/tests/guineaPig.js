module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['guineaPig'],
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('body')
      .assert.title('Google')
      // .pause(2500)
      // .clearValue('#i_am_a_textbox')
      // .setValue('#i_am_a_textbox', 'jabadabaduu')

      // .pause(2500)
      // .click('#unchecked_checkbox')
      // .click('#checked_checkbox')

      // .pause(2500)
      // .clearValue('#fbemail')
      // .setValue('#fbemail', 'tomimarkus.alber@tptlive.ee')

      // .pause(2500)
      // .clearValue('#comments')
      // .setValue('#comments', 'Väga lahe tund oli')
      .pause(1000)
      .clearValue('.gLFyf.gsfi')
      .maximizeWindow()
      .setValue('.gLFyf.gsfi', 'kass')
      .click('.gNO89b')
      .pause(1000)
      .click('.q.qs')

      .end();
  }
};
