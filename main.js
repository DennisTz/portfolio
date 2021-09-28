function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    var d = new Date();
    localStorage.d = d;
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Visited " + localStorage.clickcount + " time(s)." + "Date:" + localStorage.d;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}