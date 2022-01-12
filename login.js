const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    email.value="";
    password.value="";
    alert("You have logged in")
})