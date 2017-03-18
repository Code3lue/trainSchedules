
	//initialize firebase database

  var config = {
    apiKey: "AIzaSyDHucQgULSo3VTfBE-8S7QppzMLfLjfpvQ",
    authDomain: "train-schedule-42276.firebaseapp.com",
    databaseURL: "https://train-schedule-42276.firebaseio.com",
    storageBucket: "train-schedule-42276.appspot.com",
    messagingSenderId: "107834600721"
  };

  firebase.initializeApp(config);	
	


var database = firebase.database();


$("#add-train-btn").on("click", function() {
	event.preventDefault();

// variables for user input
var trainName = $("#train-name").val().trim();
var destination = $("#destination").val().trim();
var firstTrainTime = moment($("#first-train-time").val().trim(), "HH:mm").format("X");
var frequency = $("#frequency").val().trim();

  var train = {
    name: trainName,
    destination: destination,
    first: firstTrainTime,
    frequency: frequency
  };

database.ref().push(train);


console.log(train.name);
console.log(train.destination);
console.log(train.first);
console.log(train.frequency);

//alert(train added);

$("#train-name").val(" ");
$("#destination").val(" ");
$("#first-train-time").val(" ");
$("#frequency").val(" ");


return false;

});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	 console.log(childSnapshot.val());
  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var firstTrainTime = childSnapshot.val().first;
  var frequency = childSnapshot.val().frequency;


  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);

  var firstTrainTimePretty = moment.unix(firstTrainTime).format("HH:mm");
}