$(document).ready(function() {

  var test = "";
  var priceTotal = 0;
  var pricePizza = 0;

  var Orders = function(name, size, toppings) {
    this.name = name;
    this.size = size;
    this.toppings = [];
  }

  Orders.prototype.calc = function(){
    if (this.size === "Small") {
      priceTotal += 9.99;
      pricePizza = 9.99;
    } else if (this.size === "Medium") {
      priceTotal += 13.99;
      pricePizza = 13.99;
    } else if (this.size === "Large") {
      priceTotal += 17.99;
      pricePizza = 17.99;
    } else if (this.size === "Giant") {
      priceTotal += 49.99;
      pricePizza = 49.99;
    }
    pricePizza += this.toppings.length * 2;
    priceTotal += this.toppings.length * 2;
  }

  Orders.prototype.displayOrder = function(){
    return "<strong>" + "$" + pricePizza.toFixed(2) + " : " + this.size + "</strong>" + " pizza with " + this.toppings;
  }

  $("#formOne").submit(function(event) {
    event.preventDefault();
/////Values
   var name = $("input#name").val();
   var size = $("input:radio[name=size]:checked").val();
//////
  var order1 = new Orders(name, size);

  $("input:checkbox[name=toppings]:checked").each(function(){
   order1.toppings.push(" " + $(this).val());
  });
  if (order1.toppings.length === 0){
    order1.toppings[0] = " Cheese";
  }

  order1.calc();

document.getElementById("test1").innerHTML = order1.name;
document.getElementById("test2").innerHTML = "Total: $" + priceTotal.toFixed(2);
//document.getElementById("test2").innerHTML = order1.size;
$("ul#orderInfo").append("<li><span class='pizzaInfo'>" + order1.displayOrder() + "</span></li>");

//document.getElementById("test3").innerHTML = order1.toppings;

//$("input#name").val("");


  });

});
