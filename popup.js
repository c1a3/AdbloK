document.addEventListener("DOMContentLoaded", () => {
  const blockListUl = document.getElementById("blockList");

  browser.runtime.sendMessage({ action: "getBlockList" }).then(response => {
    const blockList = response.blockList || []; 
    blockListUl.innerHTML = "";
    blockList.forEach(pattern => {
      const li = document.createElement("li");
      li.textContent = pattern;
      blockListUl.appendChild(li);
    }); 

    const selectors = [
      'div[id*="ad"]',
      'div[class*="ad"]',
      'ins.adsbygoogle',
      '[data-ad-client]',
      '[data-ad-slot]',
      'div[id*="banner"]',
      'iframe[src*="doubleclick.net"]'
    ];
    selectors.forEach(selector => {
      const li = document.createElement("li");
      li.textContent = `selector:${selector}`;
      blockListUl.appendChild(li);    
    });
  });
});
      
 
