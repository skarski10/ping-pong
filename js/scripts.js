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

var results = [];

function count (userNumber) {
  for (i = 1; i <= userNumber; i++) {
    if (i % 3 && i % 5) {
      results.push(i);
    } else if (i % 3 == 0) {
      results.push('Ping');
    }
  }
}



//User logic
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.output').hide();
    var userInput = parseInt($('#input-number').val());
    var countUserNumber = count(userInput);
    $('#output-results').text(results);
    $('.output').show();
  });
});
