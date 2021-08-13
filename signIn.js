var email = document.getElementById('email');
var password = document.getElementById('password');
var signIn = document.getElementById('signIn');
var signInGoogle = document.getElementById('signInWithGoogle');
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

signInGoogle.addEventListener("click", function(){
    var provider = new firebase.auth.GoogleAuthProvider();
})