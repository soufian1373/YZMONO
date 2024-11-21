document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.modal-button');
  const closeButton = document.querySelector('.close-button');
  const loginButton = document.querySelector('#loginButton');
  const matriculeInput = document.querySelector('#Matricule');
  const timeconfInput = document.querySelector('#input-time');
  // Open the modal when the button is clicked
  modalButton.addEventListener('click', () => {
      modal.classList.add('is-open');
  });

  // Close the modal when the close button is clicked
  closeButton.addEventListener('click', () => {
      modal.classList.remove('is-open');
  });

  // Login logic
  loginButton.addEventListener('click', () => {
      const matricule = matriculeInput.value.trim();
      const timeconf = timeconfInput.value.trim();
      if (matricule === "") {
          alert("Please enter your matricule!");
      } else if (matricule === "" || isNaN(matricule)) {
        alert("Please enter a valid registration number!");
      } 
      else {
          window.location.href = `quiz.html?matricule=${encodeURIComponent(matricule)}&time=${encodeURIComponent(timeconf)}`;
          console.log("Logged in with matricule: ", matricule);
          // You can implement login logic here, such as an API request
          modal.classList.remove('is-open');  // Close modal on successful login
      }
  });
});
