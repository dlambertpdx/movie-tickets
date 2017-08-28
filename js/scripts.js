// business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

function Price(ticket) {
  var cost = 0;
  if(ticket.movie.includes("Shining") || ticket.movie.includes("Blade") || ticket.movie.includes("Ugly") || ticket.movie.includes("Goonies")) {
    cost += 10;
  } else {
    cost += 8;
  }
  if(ticket.time.includes("PM")){
    cost += 2;
  } else {
    cost -= 1;
  }
  if(ticket.age.includes("Senior")) {
    cost -= 3;
  }
  return cost;
}

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var movie = $("#movies").val();
    var time = $("#time").val();
    var age = $("#age").val();

    var ticket = new Ticket(movie, time, age);
    var price = Price(ticket);
    console.log(ticket);
    console.log(Price(ticket))
    $("#output").show();
    $("form").hide();
    $("#cost").append("Your ticket for " + movie + " at " + time + " will be $" + price + ". Enjoy the show!");
  });
});
