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
      price += 10;
    } else if (this.size === "medium") {
      price += 14;
    } else if (this.size === "large") {
      price += 17;
    } else if (this.size === "giant") {
      price += 30;
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

document.getElementById("test").innerHTML = price;



  });

});
