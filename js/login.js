//----------- login---------------
var login = document.querySelector("#loginId");
login.addEventListener("click", function () {
var loginData = {
    Emailin: document.getElementById("emailinId").value,
    Passin: document.getElementById("passinId").value,
};

console.log(loginData);
store = JSON.parse(localStorage.getItem("store"))
for (var i = 0; i < store.length; i++) {
if(loginData.Emailin==store[i].Email && loginData.Passin==store[i].Pass ) {
        localStorage.setItem("correctUser",JSON.stringify(store[i]))
        window.location.href="/welcome.html"
    }
}
});
