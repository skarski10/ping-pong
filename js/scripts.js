//Busibness logic
// var results = [];
// function count (userNumber) {
//   var numberInput = userNumber;
//   var userNumberArray = [];
//   var numberToString = numberInput.toString();
//   for (n = 1; n <= userNumber; n++) {
//     for (i = 0; i < n; i += 1) {
//     userNumberArray.push(+numberToString.charAt(i));
//     var sum = userNumberArray.reduce(function(a, b) {
//       return a + b;
//     });
//       if (sum % 3 != 0) {
//         results.push(n);
//       } else if (sum % 3 == 0) {
//         results.push('Ping')
//       }
//       console.log(results);
//     }
//   }
// }


function count (userNumber) {
  var results = [];
  for (i = 1; i <= userNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      results.push('Ping-Pong');
    } else  if (i % 3 && i % 5) {
      results.push(i);
    } else if (i % 3 == 0) {
      results.push('Ping');
    } else if (i % 5 == 0) {
      results.push('Pong');
    }
  }
  display(results);
  console.log(results);
}

function display (number) {
  for (n = 0; n < number.length; n++){
    $('#users-results').append('<li>' + number[n] + '</li>');
  }
}


//User logic
$(document).ready(function() {
  $('form').submit(function(event) {
    $('#users-results').empty();
    event.preventDefault();
    var userInput = $('#input-number').val();
    var countUserNumber = count(userInput);
  });
});
