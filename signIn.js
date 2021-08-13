var email = document.getElementById('email');
var password = document.getElementById('password');
var signIn = document.getElementById('signIn');
var back1 = document.getElementById('back1');

signIn.addEventListener("click", function(){
    var auth = firebase.auth();
    auth.signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        window.open("quiz.html","_self");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
    });
});

back1.addEventListener("click", function(){
    window.open("index.html","_self");
});