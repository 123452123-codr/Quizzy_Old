var email = document.getElementById('email');
var password = document.getElementById('password');
var signUp = document.getElementById('signUp');
var alreadyauser = document.getElementById('alreadyauser');

signUp.addEventListener("click", function(){
    var auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        window.open("signIn.html","_self");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
    });
});

alreadyauser.addEventListener("click", function(){
    window.open("signIn.html","_self");
});