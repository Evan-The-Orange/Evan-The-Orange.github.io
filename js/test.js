$(document).ready(function() {
    let loadPosts = function () {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                console.log(response);  
            } 
        }
        xhr.open("GET", " https://cors-escape.herokuapp.com/https://secure.runescape.com/m=hiscore/index_lite.ws?player=The+Orange");
        xhr.setRequestHeader("Accept", 'application/json');
        xhr.send();
      }
});