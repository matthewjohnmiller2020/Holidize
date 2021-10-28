let image = chrome.runtime.getURL("/images/skeleton.jpg");
console.log("image", image)
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ image });
});
