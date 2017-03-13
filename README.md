#Conditions :
- Forkez ce repositorie et travaillez sur ce fork en pushant vos solutions directement dessus votre fork, ne clonez ou ne téléchargez pas car il ne sera pas possible de pushé directement sur le dépot de Simplon Narbonne, vous n'avez pas les droits, sur votre fork oui  

Clonez ensuite le fork que vous venez de faire et add, commit et push vos modifications  
Mettre vos solutions dans un fichier solutions.md à la racine de votre dépot  

#REVISION JS:
Reprenez le cours JS d'OpenClass et normalement le premier exo ne devrait pas trop vous poser de probleme :  
Voir les commentaires dans le fichier app.js  
https://github.com/Simplon-Narbonne/exoJS  


#Nouveaux cours :  
- Les requetes HTTP lisez ceci :  
http://www.blog-nouvelles-technologies.fr/5844/quest-ce-que-le-protocole-http-analyse-et-explications/   

Les requetes que nous faisons en général(mise à part les formulaires) se font donc GET par défaut(possibilité d'envoyer des données dans l'URL quand même, exemple: http://libre-shop.com/?fond=produit&id_produit=52&id_rubrique=27 , les valeurs de fond, id_produit et id_rubrique peuvent être récupérées facilement dans le code de la page )  

On utilise le verbe http POST pour envoyer des données avec un formulaire par exemple , elles seront contenu et transmise à l'intérieur des entetes HTTP, donc invisible pour l'internaute, mais bien visible dans les outils pour développeu.r.se

- AJAX en utilisant Jquery( .ajax(), .getJson()...) ( vous pouvez aussi le faire en JS natif XMLHttpRequest...)  
AJAX est l'acronyme : d'**A**synchronous **J**avaScript **A**nd **X**ML  

Lire uniquement cette page, la suivante est trop compliqué pour vous:  
https://openclassrooms.com/courses/dynamisez-vos-sites-web-avec-javascript/l-ajax-qu-est-ce-que-c-est  

Article pas mal fait du tout:  
https://www.alsacreations.com/article/lire/1161-json-ajax-jquery-jsonp-getjson.html  
En english : https://www.sitepoint.com/ajaxjquery-getjson-simple-example/  

Exercice AJAX :  
  - En utilisant la fonction ajax() de jquery, chargez le contenu du fichier contenu.html dans la div resultatAjax


- JSON ( format de données ):  
**J**ava**S**cript **O**bject **N**otation  
Un document JSON ne comprend que deux types d'éléments structurels :  
    - Des ensembles de paires nom : valeur
    - Des listes ordonnées de valeurs.  

Regarder sur wikipedia la différence entre les JSON et 2 autres formats utilisés aussi dans des web services XML( SOAP) ou YAML plutot utilisé pour des fichiers de configuration  
https://fr.wikipedia.org/wiki/JavaScript_Object_Notation

Utilisez le fichier data/school.json et faites un script JS dans un fichier assets/js/list.js qui affiche dans l'index.html chaque pseudo ainsi que dans la console  

- API en REST (JSON) :
Les API permettent via des méthodes disponibles publiquement ou privée mais alors via une authenfication(TOKEN, clef API...) de récupérer ou ajouter des données depuis un site(souvent ne nous appartenant pas) via de simples requetes, on parle de verbe HTTP ( GET->récupérer, POST->envoyer, UPDATE->mettre à jour une donnée existante, DELETE->effacer une donnée...)  

Exemple d'API:  
Slack :  
https://api.slack.com/methods  

Github :  
https://developer.github.com/v3/  
https://api.github.com/users/Boyquotes  
ou  
pour voir les depots :  
https://api.github.com/users/Boyquotes/repos  
En ligne de commande  
curl https://api.github.com/users/Boyquotes  

Meetup.com, Twitter, Facebook  
