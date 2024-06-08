// script.js

function redirectToArea(event) {
    event.preventDefault(); // Prevent form submission
    // Add your form validation or authentication logic here if needed
    window.location.href = "area.html"; // Redirect to area.html
}

const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});
