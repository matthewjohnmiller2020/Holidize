let image = '/images/comboSkeleton.gif';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ image });
});
