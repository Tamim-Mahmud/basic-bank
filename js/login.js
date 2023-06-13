document.getElementById('login-button').addEventListener('click', function () {
    const userTypedEmail = document.getElementById('email-field').value;
    const userTypedPassword = document.getElementById('password-field').value;

    if (userTypedEmail == 'tamim@gmail.com' && userTypedPassword == 'admin') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid Email or Password');
    }


});
document.getElementById('password-field').addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        document.getElementById("login-button").click();
    }
});

