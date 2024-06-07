// var userInputs = document.querySelectorAll("input");

// document.querySelectorAll("button").addEventListener("click", function(){
//   console.log("hiiiiiiiii");
//   console.log(userInput);
// });
// function test() {
//   console.log(userInput);
// for (var i = 0; i < userInputs.length; i++) {
//     console.log(userInputs[i].value)
// }
//   for (var input of userInputs) {
//     console.log(input.value);
//   }
// }
var Name, Email, Pass;
var userRecords = [];
var signUp = document.querySelector("#signUPId");
signUp.addEventListener("click", function () {
  // get user data from form
  var userData = {
    Name: document.getElementById("nameId").value,
    Email: document.getElementById("emailId").value,
    Pass: document.getElementById("passId").value,
  };

  // check if user email is in localstorage, if email exists, error and exit
  var store = JSON.parse(localStorage.getItem("store")) ?? [];
  //   if (store == null) {
  //     store = [];
  //   }

  for (var i = 0; i < store.length; i++) {
    if (userData.Email == store[i].Email) {
      alert("Email already exists");
      return;
    }
  }
  store.push(userData);
  localStorage.setItem("store", JSON.stringify(store));
  window.location.href = "/login.html";

  // else add user object to local storage and redirect to login page
});

