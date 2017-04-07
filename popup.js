$(document).ready(function() {
    $.ajax({url: "https://sethquotesapi.herokuapp.com/random_quote"}).then(function(data) {
       $('#quote').text('"' + data.text + '"');
       $('#name').text(data.first_name);
       $('#image').attr("src", data.url);
    });
});
