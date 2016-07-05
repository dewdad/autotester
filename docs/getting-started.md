## Getting started with Autotester
In this guide we will write simple test for checking that google search is work.

### Final demo
At the end it will look like this:

### Test plan
 1. Open `https://google.com`
 2. Input "kitten" into search bar
 3. Press **Search** button
 4. Assert that http request with `q=kitten` was done
 5. Assert that link to `http://kitten.com` is shown in search results
 
There will be 3 big steps.

### Setup
  a. Download and unpack latest [autotester.zip](/master)
  b. Add extension to chrome from `src` folder of zip. 
  The easiest way is to open `chrome://extensions` tab and drag-and-drop `src` folder there
  c. Open developer tools and click on **Autotester** panel. You should see that `tests/index.js` not found, 
  that's ok.
 
### Develop the test
All test files should be located in `src/tests/` folder of unpacked zip.
Autotester requires only one file - `src/tests/index.js` that is configuration file describing all other tests.

So let's create two files:
- `src/tests/index.js` - configuration file
- `src/tests/google.js` - test itself

```js
// src/tests/index.js
window.autotesterConfig = {
  tests: [
    'google.js'
  ]
};
```

Tests 
```js
// src/tests/google.js
describe('google', function () {
  it('should perform search', function () {
    return Promise.resolve()
      .then(() => page.navigate('https://www.google.com/ncr'))
      .then(() => wait.ms(500))
      .then(() => fiddler.start())
      .then(() => page.type('input[name="q"]', 'autotester'))
      .then(() => wait.ms(500))
      .then(() => page.click('button[name="btnG"]'))
      .then(() => wait.ms(500))
      .then(() => fiddler.stop())
      .then(() => fiddler.assert({
        urlStart: 'https://www.google.com/complete',
        urlParams: {q: 'autotester'}
      }))
  });
});
```
 
### Test the test
 1. Click **Update** button in the top-right corner of Autotester panel
 2. Press **Run** button
