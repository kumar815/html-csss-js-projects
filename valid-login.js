//validation codde for inputs
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('pass_error');

email.addEvenrListener('textInput', email_Verify);
password.addEvenrListener('textInput', password_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid sliver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 5) {
        pass.style.border = "1px solid sliver";
        pass_error.style.display = "none";
        return true;
    }
}