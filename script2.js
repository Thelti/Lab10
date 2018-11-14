var number = prompt("What is your age?");
var birth = new Date().getFullYear();
document.getElementById("year").innerHTML =birth - number;
