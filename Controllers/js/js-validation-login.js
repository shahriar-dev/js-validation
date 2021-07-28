const username = document.getElementById('input_username');
const password = document.getElementById('input_password');
const usernameError = document.getElementById('input_usernameError');
const passwordError = document.getElementById('input_passwordError');

function isValid() {  
    var inputUsername = checkInputsUsername();   
    var inputPassword = checkInputsPassword();

    if(inputUsername && inputPassword) {
        return true;
    } return false;
} 

function checkInputsUsername() {
    const usernameValue = username.value;
    
    if(usernameValue === "") {
        usernameError.innerHTML = 'Username must be filled!';
        return false;
    } else {
        if(validateUsername(usernameValue)) {
            usernameError.innerHTML = '';
            return true;
        } else {
            usernameError.innerHTML = 'length must be > 4 and can contain only lowercase letter!';
            return false;
        }
    }
}

function checkInputsPassword() {
    const passwordValue = password.value;

    if(passwordValue === '') {
        passwordError.innerHTML = 'Password field cannot be empty!';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateUsername(uname) {
    var regex = /^[a-z0-9 ]{2,30}$/;
    return regex.test(uname);
}

