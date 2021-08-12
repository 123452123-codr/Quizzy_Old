var database = firebase.database();
var firebaseConfig = {
    apiKey: "AIzaSyDodiBUiarLEaXPnz47v1xGWDb4NchBpCc",
    authDomain: "quizzy-cbc2e.firebaseapp.com",
    databaseURL: "https://quizzy-cbc2e-default-rtdb.firebaseio.com",
    projectId: "quizzy-cbc2e",
    storageBucket: "quizzy-cbc2e.appspot.com",
    messagingSenderId: "410760209039",
    appId: "1:410760209039:web:df311a618510cc892a06fa",
    measurementId: "G-GPFKDWBS4Z"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


window.onload = function(){
    database.ref('Answers').on("value", function(snapshot){
        var a1 = snapshot.val().q1;
        var a2 = snapshot.val().q2;
        var a3 = snapshot.val().q3;
        var a4 = snapshot.val().q4;
        var a5 = snapshot.val().q5;
        var a6 = snapshot.val().q6;
        var a7 = snapshot.val().q7;
        var a8 = snapshot.val().q8;
        var a9 = snapshot.val().q9;
        var a10 = snapshot.val().q10;
    });
    var select1 = document.getElementById()
};