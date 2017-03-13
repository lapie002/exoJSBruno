// school
$(function(){
  $('#schoolsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidataschool').html('<div id="loader"><img src="./assets/css/loader.gif" alt="loading..."></div>');

            var i, j, x = "";

            $.getJSON("./data/school.json", function(myObj){
            /*
            var myObj = {"school":
              [
                {
                  "name": "Simplon ERN Narbonne",
                  "items": [
                    {"id": "1", "firstName": "XXXXX"},
                    {"id": "2", "firstName": "YYYYY"},
                    {"id": "3", "firstName": "ZZZZZ"},
                    {"id": "4", "firstName": "AAAAA"}
                  ]
                },
                {
                  "name": "Simplon ERN Auch",
                  "items": [
                    {"id": "1", "firstName": "UUUUU"},
                    {"id": "2", "firstName": "IIIII"},
                    {"id": "3", "firstName": "EEEEE"},
                    {"id": "4", "firstName": "OOOOO"}
                  ]
                }
              ]
            }
*/
            for(i in myObj.school) {
                x += "<h1>" + myObj.school[i].name + "</h1>";
                for(j in myObj.school[i].items) {
                    x += myObj.school[i].items[j].id + " : ";
                    x += myObj.school[i].items[j].firstName + "<br>";
                }
            }

            document.getElementById("ghapidataschool").innerHTML = x;




    function requestJSON(url, callback) {
      $.ajax({
        url: url,
        complete: function(xhr) {
          callback.call(null, xhr.responseJSON);
        }
      });
    }

    //fermeture du getJSON
    });
  });
});
