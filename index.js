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
 sidebar.classList.toggle('change-width');

}