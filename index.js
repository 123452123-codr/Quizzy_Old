var email = document.getElementById('email');
var password = document.getElementById('password');
var signUp = document.getElementById('signUp');
var alreadyauser = document.getElementById('alreadyauser');

signUp.addEventListener("click", function(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        const text = {RealEmail : email.value, RealPassword : password.value};
        const save = JSON.stringify(text);
        localStorage.setItem("Info", save);
        window.open("signIn.html","_self");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
    });
});