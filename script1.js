var start = new Date().getTime();

function stopTime(){
  var stop = new Date().getTime() - start;
  alert("You have been on this page for: " + stop / 1000+ " seconds.")
}
