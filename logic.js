
var config = {
  apiKey: "AIzaSyAULNCGhM8MPwaZr01FED7PUyAQUIc5ZXo",
  authDomain: "employee-19c37.firebaseapp.com",
  databaseURL: "https://employee-19c37.firebaseio.com",
  projectId: "employee-19c37",
  storageBucket: "",
  messagingSenderId: "40647403593"
  };
  firebase.initializeApp(config);

  let database = firebase.database();


var employee = [{
  name:name,
  role:role,
  startDate:,
  monthsWorked:"",
  monthlyRate:"",
  total:""
}];

  database.ref().on("value", function(snapchat){
    if (snapchat.child(""))


$('#submitEmployee').on('click'(function(event) {
    event.preventDefault();

    var name = $("#nameInput").val().trim();
    var role = $("#roleInput").val().trim();
    var date = $("#dateInput").val().trim();
    var rate = $("#rateInput").val().trim();



    });
//change test
});

