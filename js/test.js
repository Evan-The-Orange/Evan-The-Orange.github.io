$(document).ready(function() {
    
});

function getStats() {
    var rsn = $("#rsn").val();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore/index_lite.ws?player=" + rsn,
        headers: {
            //"Origin": "runescape.com"
        }
    }).done(function(res) {
        console.log(res);
    });
}