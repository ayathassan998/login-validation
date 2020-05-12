var userName = document.getElementById('username');
var userPw = document.getElementById('password');

var user_message = document.getElementById('user_error');
var pass_message = document.getElementById('pass_error');

var pass = /^(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s)/;

document.addEventListener("DOMContentLoaded", function () {
    localStorage.setItem("user", 'Ayat');
    localStorage.setItem("pass", 'Ayat@123');

    document.getElementById("UserText").innerHTML = localStorage.getItem("user");
});

function validate() {

    var storedName = localStorage.getItem("user");
    var storedPw = localStorage.getItem("pass");

    if (userName.value.trim() == "") {
        userName.style.border = "1px solid red";
        user_message.style.display = "block";
        return false;
    } else if (userPw.value.trim() == "") {
        userPw.style.border = "1px solid red";
        pass_message.style.display = "block";
        return false;
    } else if (userName.value.trim() != "" || userPw.value.trim() != "") {
        if (userPw.value.trim().length < 6 || pass.test(userPw.value) == false) {
            userPw.style.border = "1px solid red";
            pass_message.innerHTML = "Password between 0 and 6 characters; must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, without whitespace.";
            pass_message.style.display = "block";
            return false;
        } else if (userName.value != storedName) {
            userName.style.border = "1px solid red";
            user_message.innerHTML = "user name not valid.";
            user_message.style.display = "block";
            return false;
        } else if (userPw.value != storedPw) {
            userPw.style.border = "1px solid red";
            pass_message.innerHTML = "password not valid.";
            pass_message.style.display = "block";
            return false;
        }
    }

}

userName.addEventListener('textInput', function () {
    if (userName.value.trim() != "") {
        userName.style.border = "1px solid #3ab4c3";
        user_message.style.display = "none";
        return true;
    }
});

userPw.addEventListener('textInput', function () {
    if (userPw.value.trim() != "") {
        userPw.style.border = "1px solid #3ab4c3";
        pass_message.style.display = "none";
        return true;
    }
});