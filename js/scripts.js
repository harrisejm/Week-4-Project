$(document).ready(function() {
var Orders = function(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
}

var order1 = new Orders("Eddie", "12 inches", "Cheese");




document.getElementById("test").innerHTML = order1.toppings;


});
