// new rules can be added below using the same specific rules ("*://*<website.com>/*") // [Format]
const blockList = [
  "*://*.doubleclick.net/*", 
  "*://*.googlesyndication.com/*", 
  "*://*.adnxs.com/*",
  "*://*.adservice.google.com/*",
  "*://*.analytics.google.com/*",
  "*://*.facebook.com/tr/*",
  "*://*.scorecardresearch.com/*", 
  "*://*.html-load.com/*"
];

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: blockList.some(pattern => {
      try {
        return details.url.match(new RegExp(pattern.replace(/\*/g, ".*")));
      } catch (e) {
        console.error(`Invalid pattern: ${pattern}`);
        return false;
      }
    }) };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getBlockList") {
    sendResponse({ blockList });
  }
});
