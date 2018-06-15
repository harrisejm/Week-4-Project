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
   var street = $("input.street").val();
   var city = $("input.city").val();
   var state = $("input.state").val();
    var zip = $("input.zip").val();


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
document.getElementById("outPutName").innerHTML = order1.name;
document.getElementById("outPutName11").innerHTML = order1.name;

document.getElementById("outPutAddress").innerHTML = street + "</br>" + city + " " + state + ", " + zip;
document.getElementById("outPutAddress11").innerHTML = street + "</br>" + city + " " + state + ", " + zip;

document.getElementById("outPutTotalPrice").innerHTML = "Total: $" + priceTotal.toFixed(2);
$("ul#orderInfo").append("<li><span class='pizzaInfo'>" + order1.displayOrder() + "</span></li>");

document.getElementById("outPutTotalPrice11").innerHTML = "Total: $" + priceTotal.toFixed(2);



  });

  $("button.delivery").click(function() {
     $(".address").show();
     $(".pizzaOrder").show();
     $(".orderButton1").show();
      $(".orderButton2").show();
     $(".takeOut").hide();
     $(".delivery").hide();

    });

    $("button.takeOut").click(function() {
      $(".pizzaOrder").show();
      $(".orderButton1").show();
      $(".orderButton2").show();
       $(".takeOut").hide();
       $(".delivery").hide();
      });



});
