const adSelectors = [
];

function hideAds() {
  const elements = document.querySelectorAll(adSelectors.join(", "));
  elements.forEach(el => {
    el.style.display = "none";
  });
}

hideAds();

const observer = new MutationObserver(hideAds);
observer.observe(document.body, { childList: true, subtree: true });

/* 

  'div[id*="ad"]',
  'div[class*="ad"]',
  'ins.adsbygoogle',
  '[data-ad-client]',
  '[data-ad-slot]',
  'div[id*="banner"]',
  'iframe[src*="doubleclick.net"]'

*/
// revert changes if page breaks.
