// REVISIONS
// Declarez une variable nommée "boucler" contenant true
//
//
// Declarez un tableau members contenant Aida67, lapie002, anneserrano, Jennysmille, nunkabuk, RCosson, kaonb-ax, FerEmilie, crazychouwi, KiluaZoldyc, patatobeur, Sam11360, elo062, hermeline, Biciclet,
//
// SI la variable boucler vaut true ALORS

  // Bouclez sur le tableau que vous avez déclaré ci-dessus
  // Mettre un switch pour qu'au moment où la boucle se trouve sur votre pseudo cela ajoute "Affiche " devant votre pseudo dans la console et sur l'écran et par defaut seulement le pseudo pour les autres

// FIN REVISIONS
//
// COURS AJAX
// Faire une requete en ajax pour charger de façon asynchrone le html du fichier contenu.html

// solution de l'exo avec ajax
/*
$("#check").click(function(){

    $.ajax({
       url :'contenu.html',
       type : 'GET',
       dataType : 'html',
       success : function(data){
                 $('#resultatAjax').html(data);
                 //alert('fait.');

       },
       error : function(data, statut, erreur){
                 //$("p").prepend("Erreur impossible de loader le contenu.");
       }
    });
});
*/


// autre solution
/*
$("#check").click(function(){

  var data = "";

  function recupMonHTML(data){
    $('#resultatAjax').html(data);
  };


    $.ajax({
       url :'contenu.html',
       type : 'GET',
       dataType : 'html',
       data: ""
    })

    .done(function(donnes){
        $('#resultatAjax').html(donnes);
    });

    //.done(recupMonHTML(data));
});
*/

//solution de jordan
// autre solution
 function recupMonHTML(data){
   $('#resultatAjax').html(data);
 };

$("#check").click(function(){
    $.ajax({
       url :'contenu.html',
       type : 'GET',
       dataType : 'html',
       success : function(data){
          recupMonHtml(data);
       }
    })
});

//solution de l'exo avec jquery
/*
$(function(){
   $('#check').on('click', function(){
     $('#resultatAjax').load('contenu.html');
   });
 });
*/

 //solution de l'exo avec du js natif
 /*
 function loadDoc() {

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {

       document.getElementById("resultatAjax").innerHTML =
       this.responseText;

   };
   xhttp.open("GET", "contenu.html", true);
   xhttp.send();
 }
*/
// COURS AJAX vers des API
  // AJAX Jquery .ajax() ou .getJSON()
  // Faites une requete vers l'API REST de Github pour récupérer les informations de votre compte et afficher le nombre de repositories que vous avez valeur de public_repos
// FIN COURS AJAX

$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidata').html('<div id="loader"><img src="./assets/css/loader.gif" alt="loading..."></div>');

    var username = $('#ghusername').val();
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';

    requestJSON(requri, function(json) {
      if(json.message == "Not Found" || username == '') {
        $('#ghapidata').html("<h2>No User Info Found</h2>");
      }

      else {
        // else we have a user and we display their info
        var fullname   = json.name;
        var username   = json.login;
        var aviurl     = json.avatar_url;
        var profileurl = json.html_url;
        var location   = json.location;
        var followersnum = json.followers;
        var followingnum = json.following;
        var reposnum     = json.public_repos;

        if(fullname == undefined) { fullname = username; }

        var outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos Public: '+reposnum+'</p></div>';
        outhtml = outhtml + '<div class="repolist clearfix">';

        var repositories;
        $.getJSON(repouri, function(json){
          repositories = json;
          outputPageContent();
        });

        // decommenter pour acceder à plus d'information sur l'utilisateur :
        function outputPageContent() {
          if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
          else {
            outhtml = outhtml + '<!-- <p><strong>Repos List:</strong></p> <ul>';
            $.each(repositories, function(index) {
              outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
            });
            outhtml = outhtml + '</ul> --></div>';
          }
          $('#ghapidata').html(outhtml);
        } // end outputPageContent()
      } // end else statement
    }); // end requestJSON Ajax call
  }); // end click event handler

  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
