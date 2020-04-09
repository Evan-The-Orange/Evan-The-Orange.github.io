$(document).ready(function() {
    $.ajax({
        url: "https://secure.runescape.com/m=hiscore/index_lite.ws?player=The+Orange"
    }).done(function(data) {
        alert(data);
    })
});