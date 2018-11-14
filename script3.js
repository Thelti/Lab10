function addNum(){
  var numOne = document.getElementById("num1").value;
  var numTwo = document.getElementById("num2").value;
  var total = Number(numOne) + Number(numTwo);
  document.getElementById("output").innerHTML = total;
}
