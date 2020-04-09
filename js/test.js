$(document).ready(function() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore/index_lite.ws?player=The+Orange",
        crossDomain: true,
        dataType:"jsonp"
    }).done(function(data) {
        alert(data);
    })
});