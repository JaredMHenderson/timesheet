
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
  let ref = 


$('#submitEmployee').on('click'(function(event) {
    event.preventDefault();

    var name = $("#nameInput").val().trim();
    var role = $("#roleInput").val().trim();
    var date = $("#dateInput").val().trim();
    var rate = $("#rateInput").val().trim();

    var employee = {
      name: name,
      role: role,
      startDate: date,
      rate: rate
    };

    database.ref().push(employee);

    console.log(employee.name); 
    console.log(employee.role); 
    console.log(employee.date); 
    console.log(employee.rate); 

    alert("Employee Successfully Added");


  });