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
