
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

// 2. Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // grabs user info 
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();


var newEmployee = [{
  name:name,
  role:role,
  startDate:,
  monthsWorked:"",
  monthlyRate:"",
  total:""
}];

  database.ref().push((newEmployee);

  })