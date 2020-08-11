function validateFirstname() {
    var unInput = document.getElementById("firname");
    var errorDiv = document.getElementById("firstnameError");
    try {
        if (unInput.value === "") {
            throw "First name must be filled";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileFirstname = unInput.value;
        document.getElementById("profileFirstname").innerHTML = profileFirstname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("firstnameSection").style.display = "block";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateLastname() {
    var unInput = document.getElementById("lastname");
    var errorDiv = document.getElementById("lastnameError");
    try {
        if (unInput.value === "") {
            throw "Last name must be filled";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileLastname = unInput.value;
        document.getElementById("profileLastname").innerHTML = profileLastname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("lastnameSection").style.display = "block";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}


function validateAddress()
{
            var unInput = document.getElementById("addrinput");
            var errorDiv = document.getElementById("addressError");
            try {
                if (unInput.value.length < 1) {
                    throw "Address must be filled";
                }
                unInput.style.background = "";
                errorDiv.style.display = "none";
                errorDiv.innerHTML = "";
                profileAddress = unInput.value;
                document.getElementById("profileAddress").innerHTML = profileAddress;
                document.getElementById("profile").style.display = "block";
                document.getElementById("addressSection").style.display = "block";
            } catch (msg) {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = msg;
                unInput.style.background = "rgb(255,233,233)";
            }


}

function validateCity()
{
            var unInput = document.getElementById("cityinput");
            var errorDiv = document.getElementById("cityError");
            try {
                if (unInput.value.length < 1) {
                    throw "City must be filled";
                }
                unInput.style.background = "";
                errorDiv.style.display = "none";
                errorDiv.innerHTML = "";
                profileCity = unInput.value;
                document.getElementById("profileCity").innerHTML = profileCity;
                document.getElementById("profile").style.display = "block";
                document.getElementById("citySection").style.display = "block";
            } catch (msg) {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = msg;
                unInput.style.background = "rgb(255,233,233)";
            }
}

function validatePostalCode() {
            var regEx = /[A-Z][0-9][A-Z] [0-9][A-Z][0-9]/;
            var postalCodeInput = document.getElementById("postalcodeinput");
            var errorDiv = document.getElementById("postalcodeError");
            try {
                if (regEx.test(postalCodeInput.value) === false) {
                    throw "Postal Code must be match A0A A0A";
                }
                postalCodeInput.style.background = "";
                errorDiv.style.display = "none";
                errorDiv.innerHTML = "";
                profilePostalCode = postalCodeInput.value;
                document.getElementById("profilePostalCode").innerHTML = profilePostalCode;
                document.getElementById("profile").style.display = "block";
                document.getElementById("postalcodeSection").style.display = "block";
            } catch (msg) {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = msg;
                postalCodeInput.style.background = "rgb(255, 233, 233)";
            }
}
function validateProvince() {
    var unInput = document.getElementById("provinput");
    var errorDiv = document.getElementById("provinceError");
    try {
        if (unInput.value !== "QC" && unInput.value !== "ON" && unInput.value !=="MN" && unInput.value!== "SK" && unInput.value !== "AB" && unInput.value !=="BC") {
            throw "Province is one of QC, ON, MN, SK, AB, BC";
        }
        
            unInput.style.background = "";
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            profileProvince = unInput.value;
            document.getElementById("profileProvince").innerHTML = profileProvince;
            document.getElementById("profile").style.display = "block";
            document.getElementById("provinceSection").style.display = "block";
        
       
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}

function validateAge() {
    var unInput = document.getElementById("ageinput");
    var errorDiv = document.getElementById("ageError");
    try {
        if (unInput.value <18) {
            throw "Age must be at least 18 years old";
        }
        unInput.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAge = unInput.value;
        document.getElementById("profileAge").innerHTML = profileAge;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ageSection").style.display = "block";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        unInput.style.background = "rgb(255,233,233)";
    }
}
function validateEmail() {
    var emailInput = document.getElementById("emailbox");
    var errorDiv = document.getElementById("emailError");
    try {
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "please provide a valid email address";

        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        emailInput.value = emailInput.value.toLowerCase();
        profileemail = emailInput.value;
        document.getElementById("profileEmail").innerHTML = profileemail;
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";

    }
    catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}
function validatePassword() {
    var pw1Input = document.getElementById("pw1");
    var pw2Input = document.getElementById("pw2");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (pw1Input.value.localeCompare(pw2Input.value) !== 0)
        {
            throw "Passwords must match";
        } 
        else if (/.{6,}/.test(pw1Input.value) === false)
        {
            throw "Password must be at least 6 characters";
        }
        else if (/[A-Z]/.test(pw1Input.value) === false)
        {
        throw "Password must contain at least one uppercase letter";
        }
        else if (/[*!@#$%^&(){}:;<>,.? ~_ +-=|]/.test(pw1Input.value) === false)
        {
            throw "Password must contain at least one special letters";
        }
        else if (/\d/.test(pw1Input.value) === false)
        {
        throw "Password must contain at least one number";
        }

        pw1Input.style.background = "";
        pw2Input.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilepassword = pw1Input.value;
    }
    catch (msg)
    {
        errorDiv.style = "block";
        errorDiv.innerHTML = msg;
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

function setUpPages() {
    validateFirstname();
    validateLastname();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateProvince();
    validateAge();
    validatePassword();
    validateEmail();
  

}

function resetFunction()
{
    document.getElementById("firname").innerHTML = "";
    document.getElementById("lastname").innerHTML = "";
    document.getElementById("addrinput").innerHTML = "";
    document.getElementById("cityinput").innerHTML = "";
    document.getElementById("postalcodeinput").innerHTML = "";
    document.getElementById("provinput").innerHTML = "";
    document.getElementById("ageinput").innerHTML = "";
    document.getElementById("emailbox").innerHTML = "";
    document.getElementById("pw1").innerHTML = "";
    document.getElementById("pw2").innerHTML = "";
    document.getElementById("profileFirstname").innerHTML = "";
    document.getElementById("profileLastname").innerHTML = "";
    document.getElementById("profileAddress").innerHTML = "";
    document.getElementById("profileCity").innerHTML = "";
    document.getElementById("profilePostalCode").innerHTML = "";
    document.getElementById("profileProvince").innerHTML = "";
    document.getElementById("profileAge").innerHTML = "";
    document.getElementById("profileEmail").innerHTML = "";
}

if (window.addEventListener)
{
    window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", setUpPages);
}

    
