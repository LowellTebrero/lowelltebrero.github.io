function onSubmit(event) {
  event.preventDefault();
  
  
  const formData = new FormData(event.target);
  formData.append("access_key", "198942e4-f2e4-4a8d-b587-d14e6e151b4e");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          console.log("Form Submitted Successfully");
          event.target.reset();
      } else {
          console.log("Error", data);
          console.log(data.message);
      }
  })
  .catch(error => {
      console.error("Error:", error);
      console.log("An error occurred while submitting the form");
  });
}


function toggle() {
 const sidebar =  document.getElementById('sidebar');
 sidebar.classList.toggle('w-change');

}


// Function to open a specific tab by id and set the active button
function openTab(tabId, element) {
  // Hide all tab contents
  let tabContents = document.getElementsByClassName("tabcontent");
  for (let tab of tabContents) {
    tab.classList.remove("active");
  }
  
  // Show the selected tab content
  let selectedTab = document.getElementById(tabId);
  selectedTab.classList.add("active");

  // Remove active class from all tab buttons
  let tabLinks = document.getElementsByClassName("tablink");
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active");
  }
  
  // Add active class to the clicked tab button
  element.classList.add("active");

  // Store the active tab in localStorage
  localStorage.setItem("activeTab", tabId);
  localStorage.setItem("activeButtonIndex", Array.from(tabLinks).indexOf(element));
}

// Check if there is a previously active tab and open it
let previouslyActiveTab = localStorage.getItem("activeTab");
let previouslyActiveButtonIndex = localStorage.getItem("activeButtonIndex");

if (previouslyActiveTab && previouslyActiveButtonIndex) {
  // Open the previously active tab and set the corresponding button as active
  let tabLinks = document.getElementsByClassName("tablink");
  openTab(previouslyActiveTab, tabLinks[previouslyActiveButtonIndex]);
} else {
  // Default to opening the first tab if no active tab is stored
  openTab("graphics", document.getElementsByClassName("tablink")[0]);
}



// Get the main featured image element
const featuredImage = document.getElementById('featured-image').querySelector('img');

// Get all the thumbnail images and their wrappers
const thumbnailWrappers = document.querySelectorAll('.flex-none');

// Store the currently featured thumbnail wrapper
let currentThumbnailWrapper = null;

// Add click event listener to each thumbnail wrapper
thumbnailWrappers.forEach(wrapper => {
    const thumbnail = wrapper.querySelector('.thumbnail');
    thumbnail.addEventListener('click', function() {
        // If the clicked thumbnail is the currently featured one, unhide it and reset the main image
        if (currentThumbnailWrapper === wrapper) {
            wrapper.style.display = "inline-block"; // Show the entire wrapper
            currentThumbnailWrapper = null; // Reset the current thumbnail wrapper
            featuredImage.src = ""; // Reset the featured image (optional: you can set a default image)
        } else {
            // Show the previously hidden wrapper (if any)
            if (currentThumbnailWrapper) {
                currentThumbnailWrapper.style.display = "inline-block"; // Show the previous wrapper
            }

            // Update the main featured image
            featuredImage.src = thumbnail.src;

            // Hide the clicked wrapper
            wrapper.style.display = "none";
            currentThumbnailWrapper = wrapper; // Set this wrapper as the currently featured one
        }
    });
});
