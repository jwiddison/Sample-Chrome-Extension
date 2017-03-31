document.addEventListener('DOMContentLoaded', function() {
  var x = $.getJSON('https://sethquotesapi.herokuapp.com/quotes/2');
  alert(x)
});
