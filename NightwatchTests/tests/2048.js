module.exports =
{
  '2048 test': function (browser)
  {
    browser
      .url('https://play2048.co')
      .waitForElementVisible('body')
      .moveToElement('.game-container', 10, 10)
      .click('.game-container')
      .click('.restart-button', function (forike)
      {
        for (let i = 0; i < 50; i++)
        {
          let move = Math.floor((Math.random() * 4) + 1);
          switch (move) {
            case 1:
              browser.useXpath().sendKeys('/html/body', browser.Keys.UP_ARROW);
              break;
            case 2:
              browser.useXpath().sendKeys('/html/body', browser.Keys.DOWN_ARROW);
              break;
            case 3:
              browser.useXpath().sendKeys('/html/body', browser.Keys.LEFT_ARROW);
              break;
            case 4:
              browser.useXpath().sendKeys('/html/body', browser.Keys.RIGHT_ARROW);
              break;
          }
          browser.pause(1000)
        }
      })
      .pause(5000)
      .end();
  }
};