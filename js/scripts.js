$(document).ready(function() {

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

  $("button.delivery").click(function() {
    $(".nameC").show();
    $(".address").show();
    $(".pizzaOrder").show();
    $(".orderButton1").show();
    $(".takeOut").hide();
    $(".delivery").hide();
    $(".intro").hide();

  });
  $("button.takeOut").click(function() {
    $(".nameC").show();
    $(".pizzaOrder").show();
    $(".orderButton1").show();
    $(".takeOut").hide();
    $(".delivery").hide();
    $(".intro").hide();
  });

  $("button.checkOut").click(function() {
    $(".orderConfirm").show();
    $(".row").hide();
  });


  $("#formOne").submit(function(event) {
    event.preventDefault();
    /////Values
    var name = $("input#name").val();
    var street = $("input.street").val();
    var city = $("input.city").val();
    var state = $("input.state").val();
    var zip = $("input.zip").val();
    var size = $("input:radio[name=size]:checked").val();

    var order1 = new Orders(name, size);

    $("input:checkbox[name=toppings]:checked").each(function(){
      order1.toppings.push(" " + $(this).val());
    });
    if (order1.toppings.length === 0){
      order1.toppings[0] = " Cheese";
    }

    order1.calc();

    var tax = (priceTotal / 100) * 10.4;

    document.getElementById("outPutName").innerHTML = order1.name;
    document.getElementById("outPutName2").innerHTML = order1.name;
    document.getElementById("outPutAddress").innerHTML = street + "</br>" + city + " " + state + " " + zip;
    document.getElementById("outPutAddress2").innerHTML = street + "</br>" + city + " " + state + " " + zip;
    document.getElementById("outPutTotalPrice").innerHTML = "Total: $" + priceTotal.toFixed(2);
    document.getElementById("outPutTotalPrice2").innerHTML = "Price: $" + priceTotal.toFixed(2);
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2);
    document.getElementById("finalPrice").innerHTML = "Total: $" + (priceTotal + tax).toFixed(2);
    $("ul#orderInfo").append("<li><span class='pizzaInfo'>" + order1.displayOrder() + "</span></li>");
    $("ul#orderInfo2").append("<li><span class='pizzaInfo'>" + order1.displayOrder() + "</span></li>");

    $(".orderCheckOut").show();
  });


});
