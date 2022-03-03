import {
  getPuppeteerBrowserPath,
  BrowserName,
} from "@recordreplay/recordings-cli";

function getDeviceConfig(browserName: BrowserName) {
  const executablePath = getPuppeteerBrowserPath(browserName);
  if (!executablePath) {
    console.warn(`${browserName} is not supported on this platform`);
  }

  return {
    executablePath,
  };
}

export function getExecutablePath(browserName: BrowserName) {
  return getPuppeteerBrowserPath(browserName);
}

export const devices = {
  get "Replay Chromium"() {
    return getDeviceConfig("chromium");
  },
};
