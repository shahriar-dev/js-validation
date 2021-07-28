<?php
require "./Controllers/Validation/registration-form-validation.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="registration-form-with-validation">
    <title>Registration Form</title>
</head>

<body>

    <body>
        <h1>Registration form</h1>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" onsubmit="return isValid()">
            <fieldset>
                <legend>Basic Information</legend>

                <div>
                    <label for="input_firstname">First Name:</label>
                    <input type="text" class="form__input" id="input_firstname" placeholder="First Name" name="firstName" value="<?php echo $FirstName; ?>">
                    <span><label for="input_firstNameError" id="input_firstnameError" style="color: red;"><?php echo $FirstNameError ?></label></span>
                </div>

                <div>
                    <label for="input_lastname">Last Name:</label>
                    <input type="text" class="form__input" id="input_lastname" placeholder="Last Name" name="lastName">
                    <span><label for="input_lastNameError" id="input_lastnameError" style="color: red;"><?php echo $LastNameError ?></label></span>
                </div>

                <p>
                    <label for="gender_option">Gender</label>
                    <input type="radio" class="form__input" id="gender_male" name="gender" value="Male">Male</input>
                    <input type="radio" class="form__input" id="gender_female" name="gender" value="Female">Female</input>
                    <span><label for="input_genderError" id="input_genderError" style="color: red;"><?php echo $GenderError ?></label></span>
                </p>

                <p>
                    <label for="input_dob">Date of Birth:</label>
                    <input type="date" class="form__input" id="input_dob" name="dob">
                    <span><label for="input_dobError" id="input_dobError" style="color: red;"><?php echo $DoBError ?></label></span>
                </p>

                <p>
                    <label for="select_religion">Religion</label>
                    <select name="religion" class="form__input" id="select_religion" value="">
                        <option disabled selected value="default">--Choose a Option--</option>
                        <option name="religion" <?php if (isset($_POST['religion']) && $_POST['religion'] == "muslim") echo "selected"; ?> value="Muslim">Muslim</option>
                        <option name="religion" <?php if (isset($_POST['religion']) && $_POST['religion'] == "hindu") echo "selected"; ?> value="Hindu">Hindu</option>
                        <option name="religion" <?php if (isset($_POST['religion']) && $_POST['religion'] == "christian") echo "selected"; ?> value="Christian">Christian</option>
                    </select>
                    <span><label for="select_religionError" id="input_religionError" style="color: red;"><?php echo $ReligionError ?></label></span>
                </p>
            </fieldset>

            <fieldset>
                <legend>Contact Information</legend>

                <p>
                    <span><label for="input_presentAddress">Present Address:</label></span>
                    <br>
                    <span>
                        <textarea name="presentAddress" class="form__input" id="input_presentAddress" cols="50" rows="5" placeholder="Enter Present Address Here"></textarea>
                    </span>
                </p>

                <p>
                    <span><label for="input_permanentAddress">Permanent Address</label></span>
                    <br>
                    <span><textarea name="permanentAddress" class="form__input" id="input_permanentAddress" cols="50" rows="5" placeholder="Enter Permanent Address Here"></textarea></span>
                </p>

                <p>
                    <label for="input_phonenumber">Phone:</label>
                    <input id="input_phonenumber" class="form__input" type="tel" placeholder="(+88) 0xxxxxxxxxx" name="phoneNumber">
                </p>

                <p>
                    <label for="input_email">Email:</label>
                    <input type="email" class="form__input" id="input_email" placeholder="something@gmail.com" name="email">
                    <span><label for="input_emailerror" id="input_emailError" style="color: red"><?php echo $EmailError; ?></label></span>
                </p>

                <p>
                    <label for="input_personalWebsite">Personal Website Link:</label>
                    <input class="form__input" id="input_personalWebsite" type="url" placeholder="http://somesite.com" name="url">
                </p>
            </fieldset>

            <fieldset>
                <legend>Account Information</legend>

                <p>
                    <span><label for="input_username">Username:</label></span>
                    <span><input type="text" class="form__input" id="input_username" placeholder="Usernamme" name="username"></span>
                    <span><label for="input_usernameerror" id="input_usernameError" style="color: red"><?php echo $UsernameError; ?></label></span>
                </p>

                <p>
                    <span><label for="input_password">Password:</label></span>
                    <span><input type="password" class="form__input" id="input_password" placeholder="Password" name="password"></span>
                    <span><label for="input_passworderror" id="input_passwordError" style="color: red"><?php echo $PasswordError; ?></label></span>
                </p>

            </fieldset>

            <p>
                <input type="submit" name="submit"> &nbsp;&nbsp;
                <input type="reset" value="Clear Form">
            </p>
        </form>
        <div>
            Already Have an Account? <a style="border: 0px; background:transparent; font-size: 50px; text-align:center; font-family:cambria" href="login-form.php">Click Here!</a>
        </div>

        <span><label for="successful_input" style="color: <?php echo $MessageColor; ?>"><b><?php echo $Message ?></b></label></span>
        <script src="./Controllers/js/js-validation-registration.js"></script>
    </body>

</html>