var database = firebase.database();

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