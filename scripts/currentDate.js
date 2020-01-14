var currentDate = new Date();
console.log(currentDate);

var currentYear = currentDate.getFullYear();
console.log(currentYear);

var lastModified = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = lastModified;
