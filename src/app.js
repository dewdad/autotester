
const runner = require('./runner');

runner.setGlobals();
runner.run([
  'test/google-search.test.js',
  //'test/vb-settings.test.js',
]);

//const Debugger = require('./debugger');
//document.addEventListener('keydown', e => console.log('keydown', e));
//document.addEventListener('keypress', e => console.log('keypress', e));
//document.addEventListener('keyup', e => console.log('keyup', e));

//function simulateKeyEvent(character) {
//  var evt = document.createEvent("KeyboardEvent");
//  //evt.initKeyboardEvent("keypress", true, true, window, 0, 0, 0, 0, 0, character.charCodeAt(0))
//  //evt.initKeyboardEvent("keypress", true, true, window, character);
//  evt.initKeyboardEvent("keypress", true, true, document.defaultView, false, false, false, false, 81, 81);
//  document.dispatchEvent(evt);
//}
//
//simulateKeyEvent('й')


//const d = new Debugger();
//const code = 81;
//d.attach({extensionId: chrome.runtime.id})
  //.then(() => d.sendCommand('Input.dispatchKeyEvent', {
  //  "modifiers": 0,
  // // "nativeVirtualKeyCode": code,
  //  "text": "й",
  //  // "type": "rawKeyDown",
  //  "type": "keyDown",
  //  "unmodifiedText": "й",
  // // "windowsVirtualKeyCode": code
  //}))

  //.then(() => d.sendCommand('Input.dispatchKeyEvent', {
  //  "modifiers": 0,
  //  "nativeVirtualKeyCode": code,
  // // "text": "Й",
  //  "type": "char",
  //   //"unmodifiedText": "й",
  //  "windowsVirtualKeyCode": code
  //}))
  //.then(() => d.sendCommand('Input.dispatchKeyEvent', {
  //  "modifiers": 0,
  //  "nativeVirtualKeyCode": code,
  //  "text": "",
  //  "type": "keyUp",
  //  "unmodifiedText": "",
  //  "windowsVirtualKeyCode": code
  //}))



//driver.get('http://www.google.com/ncr');
// driver.get('http://www.yandex.ru');
//driver.get('chrome://newtab');
//driver.get('/test/index.html');



//driver.findElement(By.name('q')).sendKeys(Key.SHIFT + 'q' + Key.SHIFT + 'q');

//driver.sleep(1000);
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('we - Google Search'), 5000);
//driver.quit();


//

//driver.findElement(By.name('q')).sendKeys('wW%5');
//const el = driver.findElement({css: 'a[href="https://news.yandex.ru/?lang=ru"]'});
//const el = driver.findElement({css: '.i-action__settings'});
//const el = driver.findElement({css: '.btn1'});
//const el = driver.findElement({css: '.b-head-logo__link'});
//el.click();
//driver.actions()
  //.keyDown(Key.SHIFT)
  //.keyDown(Key.COMMAND)
 // .sendKeys(Key.SHIFT)
  //.sendKeys('q')
 // .keyUp(Key.SHIFT)
 // .keyDown(Key.SHIFT)
 // .click(el)
 // .keyUp(Key.COMMAND)
 // .perform();

//const el = driver.findElement(By.name('text'));
//el.sendKeys('we');
//driver.sleep(1000);
//driver.findElement(By.css('.search2__button button')).click();
//const btn = driver.findElement(By.css('.search2__button button'));
//driver.actions()
  // .keyDown(input.Key.SHIFT)
 // .click(btn)
 // .perform();

// driver.wait(until.ableToSwitchToWindow())
//driver.sleep(2000);

//el.click();


//driver.getAllWindowHandles().then(res => {
//  console.log(res.length, res);
//  driver.switchTo().window(res[0]);
//});

//// driver.getWindowHandle().then(res => console.log(res));
//
//// driver.wait(until.titleContains('we'), 5000);
//driver.wait(until.titleContains('Яндекс.Новости'), 5000).then(() => console.log('title ok'));
//
//driver.quit();


// with frames
//driver.get('http://www.about.com/');
//driver.findElement(By.id('main')).findElements(By.id('main')).then(res => console.log('elem found', res));
//driver.getAllWindowHandles().then(res => console.log(res));
//driver.switchTo().frame(1);
//driver.findElement(By.id('main')).then(() => console.log('elem found'));
//driver.quit().then(() => console.log('ok'));

