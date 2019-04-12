// ============================================ VARIABLES ============================================
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjukCdn6Ro8dFF-VS4JL6cc1v5dsZHMgI",
    authDomain: "rock-paper-scissors-d6140.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-d6140.firebaseio.com",
    projectId: "rock-paper-scissors-d6140",
    storageBucket: "rock-paper-scissors-d6140.appspot.com",
    messagingSenderId: "349371307013"
};
firebase.initializeApp(config);

// Reference database
var database = firebase.database();

// Train loggin variables.
var trainName, trainDestination, trainFrequency, trainNext, trainMinutes, trainTime;
var trainCount = 0; // track number of trains for table row creation.



// ============================================ FUNCTIONS ============================================
// Function  ###### .
function createTrain() {
    trainName = $("#inputName").val();
    trainDestination = $("#inputDestination").val();
    trainFrequency = $("#inputFrequency").val();
    trainTime = $("#inputTime").val();
    

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        frequency: trainFrequency,
        next: "HH:mm --",
        away: "##"
    }

    database.ref().push(newTrain);

    $("#inputName").val("");
    $("#inputDestination").val("");
    $("#inputFrequency").val("");
    $("#inputTime").val("");
}

// ====================== End of Function ======================

// ============================================ MAIN PROCESS ============================================
$("#submitButton").on("click", function () {

    if ($("#inputName").val() === "" || $("#inputDestination").val() === "" || $("#inputTime").val() === "" || $("#inputFrequency").val() === "") {
        console.log("Something is missing");
    }
    else {
        console.log("Everything is filled in");
        createTrain();

    }
});

database.ref().on("child_added", function (snapshot){

    var sv = snapshot.val();

    $('#trainTable tr:last').after('<tr><td>' + sv.name + '</td><td>' + sv.destination + '</td><td>' + sv.frequency + '</td><td>' + sv.next + '</td><td>' + sv.away + '</td></tr>');
    

});

