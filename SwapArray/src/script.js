const thearray = ["Hello", "This", "is", "Array"];

let variable;
variable = thearray[3];
thearray[3] = thearray[1];
thearray[1]=variable;

document.getElementById("hello").innerHTML = thearray;