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


const tabs = document.querySelectorAll('.graphiclink');
const contents = document.querySelectorAll('.content');
const activeGTab = localStorage.getItem('activeGTab') || 'highlights';

// Set initial active tab
document.querySelector(`.graphiclink[data-tab="${activeGTab}"]`).classList.add('active');
document.getElementById(activeGTab).classList.add('active');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        const target = tab.getAttribute('data-tab');
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');

        // Save the active tab to localStorage
        localStorage.setItem('activeGTab', target);
    });
});





// Get the main featured image element
const featuredImage = document.getElementById('featured-image').querySelector('img');

// Get all the thumbnail buttons
const thumbnailWrappers = document.querySelectorAll('.flex-none');

// Store the currently featured thumbnail wrapper
let currentThumbnailWrapper = null;

// Function to handle the thumbnail click or touch
function handleThumbnailClick(wrapper, thumbnail) {
    // If the clicked thumbnail is already hidden (currently featured), reset the image
    if (currentThumbnailWrapper === wrapper) {
        wrapper.style.display = "inline-block"; // Show the entire wrapper again
        currentThumbnailWrapper = null; // Reset the current thumbnail wrapper
        featuredImage.src = ""; // Optionally reset the featured image
    } else {
        // If there's a currently featured wrapper, show it again
        if (currentThumbnailWrapper) {
            currentThumbnailWrapper.style.display = "inline-block";
        }

        // Update the main featured image
        featuredImage.src = thumbnail.src;

        // Hide the clicked wrapper
        wrapper.style.display = "none";
        currentThumbnailWrapper = wrapper; // Set this wrapper as the currently featured one
    }
}

// Add event listeners for both click and touch events
thumbnailWrappers.forEach(wrapper => {
    const thumbnail = wrapper.querySelector('.thumbnail');

    // Add click event
    wrapper.addEventListener('click', function() {
        handleThumbnailClick(wrapper, thumbnail);
    });

    // Add touch event
    wrapper.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        handleThumbnailClick(wrapper, thumbnail);
    });
});


const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}


window.onscroll = function() {
  var backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Scroll back to top when the button is clicked
document.getElementById("backToTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.onscroll = function() {
  var backToTopButton = document.getElementById("backToTop1");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

// Scroll back to top when the button is clicked
document.getElementById("backToTop1").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



// Select all images with the class 'image-modal-trigger'
const imageElements = document.querySelectorAll('.image-modal-trigger');

imageElements.forEach(image => {
    image.addEventListener('click', function() {
        // Set the modal image source to the clicked image's source
        const modalImage = document.getElementById('modal-image');
        modalImage.src = image.src;

        // Show the modal
        const modal = document.getElementById('default-modal');
        modal.classList.remove('hidden');

        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
    });
});

// Close the modal when either the Close button or the X button is clicked
const closeModalButtons = document.querySelectorAll('[data-modal-hide="default-modal"], #close-modal');

closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('default-modal');
        modal.classList.add('hidden');

        // Enable scrolling on the body again
        document.body.style.overflow = '';
    });
});

// Close the modal when clicking outside the modal content
const modal = document.getElementById('default-modal');
modal.addEventListener('click', function(event) {
    // Check if the click was outside the modal content area
    if (event.target === modal) {
        modal.classList.add('hidden');

        // Enable scrolling on the body again
        document.body.style.overflow = '';
    }
});

// Close the modal when the Escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { // Escape key
        const modal = document.getElementById('default-modal');
        modal.classList.add('hidden');

        // Enable scrolling on the body again
        document.body.style.overflow = '';
    }
});