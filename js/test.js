$(document).ready(function() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://secure.runescape.com/m=hiscore/index_lite.ws?player=iSky",
        headers: {
            "Origin": "runescape.com"
        }
    }).done(function(res) {
        console.log(res);
    });
});