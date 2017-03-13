var boucler = true

var members = ['Aida67','lapie002','anneserrano','Jennysmille','nunkabuk','RCosson','kaonb-ax','FerEmilie','crazychouwi', 'KiluaZoldyc','patatobeur','Sam11360','elo062','hermeline','Biciclet'];
document.getElementById("check").addEventListener("click",function(){

  if(boucler){
    for (var i = 0; i < members.length; i++) {
      switch(members[i]) {
          case "anneserrano":
              var newdiv = document.createElement("div");
              var divcheck = document.getElementById("check");

              newdiv.innerHTML = "<p> Affiche "+ members[i] + "</p>"
              divcheck.appendChild(newdiv);

              console.log("affiche"+" "+ members[i]);
              break;

          default:

          var newdiv = document.createElement("div");
          var divcheck = document.getElementById("check");

          newdiv.innerHTML = "<p>" + members[i] + "</p>"
          divcheck.appendChild(newdiv);


              console.log(members[i]);
    }
    }
  }



});
