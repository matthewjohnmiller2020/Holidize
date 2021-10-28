// Initialize butotn with users's prefered image
let changeImage = document.getElementById("changeImage");
// let imgURL = chrome.runtime.getURL("/images/comboSkeleton.gif");
//button style
chrome.storage.sync.get("image", ({ image }) => {
  const img = document.createElement('img');
  img.src = chrome.runtime.getURL('/images/skeleton.jpg');
  changeImage.style.backgroundImage = img;
});

// When the button is clicked, inject setPageBackgroundimage into current page
changeImage.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundImage,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundImage() {
  chrome.storage.sync.get("image", ({ image }) => {
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('/images/skeleton.jpg');
    document.body.style.backgroundImage = img;
  });
}
