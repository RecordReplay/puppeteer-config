# `@recordreplay/puppeteer-config`

Provides utilities to support using [Replay](https://replay.io) with [Puppeteer](https://pptr.dev)

Exports
* `getExecutablePath(browserName: string)` - Returns the path to the replay browser for the given `browserName`: only `"chromium"` is currently supported. If `browserName` isn't supported on the current platform, `undefined` is returned.
* `devices` - Object of configurations suitable for using with `@puppeteer/test`. Currently only supports a `"Replay Chromium"` configuration. If the configuration isn't supported on the current platform, a warning is emitted and the `executablePath` will be undefined.

## Using standalone

If you are using `puppeteer` (rather than `@recordreplay/puppeteer`), you can configure it to use the Replay browser by passing in the `executablePath` to `launch()`.

```js
const puppeteer = require("puppeteer");
const { getExecutablePath } = require("@recordreplay/puppeteer-config");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		executablePath: getExecutablePath("chromium"),
	});
	const page = await browser.newPage();
	await page.goto("https://replay.io");
	await page.screenshot({ path: "replay.png" });

	await page.close();
	await browser.close();
})();
```
