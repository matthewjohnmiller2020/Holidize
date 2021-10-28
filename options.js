let page = document.getElementById("buttons");
let selectedClassName = "current";
const themeButtons = ["url('/images/comboSkeleton.gif')"];//change to pics

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected image
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let image = event.target.dataset.image;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ image });
}

// Add a button to the page for each supplied image
function constructOptions(buttonImages) {
  chrome.storage.sync.get("image", (data) => {
    let currentimage = data.image;

    // For each image we were provided…
    for (let buttonImage of buttonImages) {//iterates through buttons
      // …crate a button with that image…
      let button = document.createElement("button");//make a button for each one
      button.dataset.image = buttonImage;
      button.style.backgroundColor = black;//change to image for themes
      button.style.backgroundImage = buttonImage;

      // …mark the currently selected image…
      if (buttonImage === currentimage) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the image options

constructOptions(themeButtons);//makes list of buttons
