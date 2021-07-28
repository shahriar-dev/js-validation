const firstname = document.getElementById('input_firstname');
const lastname = document.getElementById('input_lastname');
const genderMale = document.getElementById('gender_male');
const genderFemale = document.getElementById('gender_female');
const dob = document.getElementById('input_dob');
const religion = document.getElementById('select_religion');
const email = document.getElementById('input_email');
const username = document.getElementById('input_username');
const password = document.getElementById('input_password');
const inputs = document.querySelectorAll('form__input');
const firstnameError = document.getElementById('input_firstnameError');
const lastnameError = document.getElementById('input_lastnameError');
const usernameError = document.getElementById('input_usernameError');
const passwordError = document.getElementById('input_passwordError');
const emailError = document.getElementById('input_emailError');
const dobError = document.getElementById('input_dobError');
const genderError = document.getElementById('input_genderError');
const religionError = document.getElementById('input_religionError');


function isValid() {
    //return checkInputsname();
    var inputName = checkInputsname();
    
    var inputUsername = checkInputsUsername();
    
    var inputPassword = checkInputsPassword();
    
    var inputEmail = checkInputsEmail();
    
    var inputDob = checkInputsDob();
    
    var inputReligion = checkInputsReligion();
    
    var inputGender = checkInputsGender();

    if(inputName && inputUsername && inputPassword && inputEmail && inputDob && inputReligion && inputGender) {
        return true;
    } return false;
} 

function checkInputsname() {
    var valid = true;
    var flag = true;
    var count = 0;
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    if(firstnameValue != '') {
        if(validateName(firstname)) {
            firstnameError.innerHTML = '';
            count += 1;
        } else {
            firstnameError.innerHTML = 'Firstname can contain nothing but only uppercase and lowercase letter!';
            flag = false;
        }  
    } else {
        firstnameError.innerHTML = 'Firstname Field cannot be blank!';
        flag = false;
    }

    if(lastnameValue != '') {
        if(validateName(lastname)) {
            lastnameError.innerHTML = '';
            count += 1;
        } else {
            lastnameError.innerHTML = 'Lastname can contain nothing but only uppercase and lowercase letter!'
            flag = false;
        }
    } else {
        lastnameError.innerHTML = 'Last Name cannot be blank!';
        flag = false;
    }

    if(!flag) {
        return false;
    }
    if(count === 2) {
        return true;
    } return false;
}

function checkInputsUsername() {
    const usernameValue = username.value;
    
    if(usernameValue === "") {
        usernameError.innerHTML = 'Username must be filled!';
        return false;
    } else {
        if(validateUsername(username)) {
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
        if(validatePassword(passwordValue)) {
            passwordError.innerHTML = '';
            return true;
        } else {
            passwordError.innerHTML = 'Password must contain a lowercase, a uppercase and a number!';
            return false;
        }
    }
}

function checkInputsEmail() {
    const emailValue = email.value;
    
    if(emailValue === '') {       
        emailError.innerHTML = 'Email field need to be filled up!'
        return false;
    } else {
        if(validateEmail(emailValue)) {
            emailError.innerHTML = '';
            return true;
        } else {
            emailError.innerHTML = 'Invalid format!';
            return false;
        }
    }
}

function checkInputsDob() {
    const dobValue = dob.value;
    if(dobValue === '') {
        dobError.innerHTML = 'Date of Birth field cannot be empty!';
        return false;
    } else {
        dobError.innerHTML = '';
        return true;
    }
}

function checkInputsGender() {

    if(!genderMale.checked && !genderFemale.checked) {
        genderError.innerHTML = 'Gender needs to be selected!';
        return false;
    }else {
        genderError.innerHTML = '';
        return true;
    }
}
function checkInputsReligion() {
    

    if(religion.options[religion.selectedIndex].value == 'default') {
        religionError.innerHTML = 'Religion needs to be selected!';
        return false;
    } else {
        religionError.innerHTML = '';
        return true;
    }
}
function validateName(name) {
    var regex = /^[a-zA-Z ]*$/;
    return regex.test(name.value);
}

function validateUsername(uname) {
    var regex = /^[a-z0-9 ]{2,30}$/;
    return regex.test(username.value);
}

function validatePassword(pass) {
    var regex =  /^(?=.*\d)(?=.*[a-z])(?=.)[a-zA-Z0-9]{4,}$/;
    return regex.test(pass);
}

function validateEmail(em) {   
    var regex = /^([a-zA-Z0-9.]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
    return regex.test(em);
}
