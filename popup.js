$(document).ready(function() {
    var id = Math.floor((Math.random() * 50) + 1);
    $.ajax({url: "https://sethquotesapi.herokuapp.com/quotes/" + id}).then(function(data) {
       $('.quote').text('"' + data.text + '"');
    });
});
