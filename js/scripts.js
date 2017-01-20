//Busibness logic
function count (userNumber) {
  var results = [];
  var userNumber = 10; //for testing
  for (i = 1; i <= userNumber; i++) {
      results.push(i);
      console.log(results);
  }
}




//User logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('#input-number').val());
    var countUserNumber = count(userInput);
  });
});
