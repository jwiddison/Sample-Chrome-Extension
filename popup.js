$(document).ready(function() {
    $.ajax({
        url: "https://sethquotesapi.herokuapp.com/quotes/2"
    }).then(function(data) {
       $('.quote').html('"' + data.text + '"');
    });

});
