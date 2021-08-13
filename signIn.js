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
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
    .getRedirectResult()
    .then((result) => {
        if (result.credential) {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            window.open("quiz.html","_self");
        }
        // The signed-in user info.
        var user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage);
        console.log(errorCode);
    });
});