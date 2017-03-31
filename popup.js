$(document).ready(function() {
    var id = Math.floor((Math.random() * 100) + 1);
    $.ajax({
        url: "https://sethquotesapi.herokuapp.com/quotes/" + id
    }).then(function(data) {
       $('.quote').html('"' + data.text + '"');
    });
});
