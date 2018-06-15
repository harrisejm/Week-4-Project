$(document).ready(function() {

  var test = "";
  var price = 0;

  var Orders = function(name, size, toppings) {
    this.name = name;
    this.size = size;
    this.toppings = [];
  }

  Orders.prototype.calc = function(){
    if (this.size === "small") {
      price += 9.99;
    } else if (this.size === "medium") {
      price += 13.99;
    } else if (this.size === "large") {
      price += 17.99;
    } else if (this.size === "giant") {
      price += 49.99;
    }

    price += this.toppings.length * 2;


  }

  $("#formOne").submit(function(event) {
    event.preventDefault();
/////Values
   var name = $("input#name").val();
   var size = $("input:radio[name=size]:checked").val();
//////
  var order1 = new Orders(name, size);

  $("input:checkbox[name=toppings]:checked").each(function(){
   order1.toppings.push($(this).val());
  });




   order1.calc();

document.getElementById("test1").innerHTML = order1.name;
document.getElementById("test2").innerHTML = order1.size;
document.getElementById("test3").innerHTML = order1.toppings;
document.getElementById("test4").innerHTML = "$" + price.toFixed(2);
//$("input#name").val("");



  });

});
