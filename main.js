const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');
const passwordMatchingMessage = document.getElementById('passwordMatch');

let password;

passwordInput.addEventListener("input", function(){

    password = passwordInput.value;
    console.log(password);

});

confirmPasswordInput.addEventListener("input", function(){

    if (confirmPasswordInput.value != password) {
        passwordMatchingMessage.style.visibility = 'visible';
        console.log("greska");
    }

    if (confirmPasswordInput.value == password) {
        passwordMatchingMessage.style.visibility = 'hidden';
        console.log("tocno");
    }
});