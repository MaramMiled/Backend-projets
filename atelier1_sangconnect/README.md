##MILAD Maram - 4GL

### Questions
Quel est le rôle du champ name ?
	nom du projet 

Quel est le rôle du champ version ?
	version actuelle de projet

À quoi sert la section scripts ?
	éfinir des commandes qu’on peut exécuter avec npm
	
Pourquoi le fichier package.json est-il important dans un projet backend ?
	contient les informations et configurations principales du projet

Quelle différence existe-t-il entre le code de l’application et la configuration du projet ?
	code c’est le logique et les fonctionnalités et configuration c’est comment le projet est organisé et exécuté

Pourquoi utilise-t-on "type": "module" ?
	pour indiquer que le projet utilise module ES

Quelle syntaxe permet d’importer un module ES ?
	import express from "express"; 

Quelle syntaxe permet d’exporter une fonction ?
	export function getUsers() { }
export default getUsers;
function getUsers() {
}
export { getUsers };

Pourquoi les extensions .js sont-elles précisées dans les imports locaux ?
	Cela permet à Node.js d'identifier précisément le fichier à charger. 

Quel est le rôle d’un éditeur de code ?
	ecrire organiser et modifier le code source

Quelle différence existe-t-il entre un éditeur et un environnement d’exécution ?	
	editeur c’est pour ecrire et modifier le code
	environnement d’exécution c’est pour exécuter le code

Pourquoi est-il utile de travailler dans un dossier de projet ouvert dans VS Code ?
	permet d’avoir tous les fichiers du projet au même endroit et de naviguer facilement entre eux 

Quel est l’intérêt d’un outil de formatage automatique ?
	mettre automatiquement le code en forme de manière cohérente 

Quelle différence existe-t-il entre const et let ?
	Les deux permettent de déclarer des variables, mais :
let permet de modifier la valeur après sa déclaration.
const ne permet pas de réaffecter une nouvelle valeur à la variable.

Que signifie l’utilisation des accents graves dans une chaîne de caractères ?
	Les accents graves `` permettent de créer une template string 

Quel est le rôle de l’interpolation ${...} ?
	L'interpolation permet d'insérer la valeur d'une variable ou d'une expression directement dans une template string. 

Pourquoi est-il préférable de déclarer une constante pour une valeur qui ne change pas ?
	empêche la réaffectation accidentelle de la valeur 

Quel est le rôle de http.createServer() ?
	créer un serveur http qui peut recevoir et traiter les requetes
	
À quel moment la fonction (req, res) => { ... } est-elle exécutée ?
	a chaque fois le serveur reçoit une requete http d’un client

Quelle est la différence entre req et res ?
	req=request=requete envoyée par le client au serveur
	res=response=la réponse que le serveur va envoyer au client

Quel est le rôle de res.writeHead() ?
permet de définir le statut http et les entetes de la reponse	

Quel est le rôle de res.end() ?
	permet de terminer la réponse http et indiquer au client que le serveur a fini d’envoyer les données

Que se passe-t-il si le port 3000 est déjà utilisé ?
	le serveur ne pourra pas démarrer sur ce port(erreur)

Comment arrêter le serveur depuis le terminal ?
	ctrl+c

Quelle propriété permet de connaître la méthode HTTP ?
	req.method

Quelle propriété permet de connaître l’URL demandée ?
	req.url

Que renvoie req.method lorsque vous ouvrez une page dans un navigateur ?
	get

Que renvoie req.url lorsque vous consultez /api/health ?
	/api/health

Pourquoi utilise-t-on return après chaque réponse ?
	pour arreter l’exécution de la fonction aprés avoir envoyé la réponse

Pourquoi la réponse 404 doit-elle être placée après les routes connues ?
	404=aucune route correspondante n’a été trouvée

Que se passe-t-il lorsqu’une URL n’est pas définie ?
	le serveur renvoie une réponsee http 404 (not found)

Une URL identique peut-elle être utilisée avec plusieurs méthodes HTTP ?
	un meme url peut avoir un comportement différent selon la méthode http

Quelle instruction transforme un objet JavaScript en chaîne JSON ?
	JSON.stringify() 

Quel est le rôle de Content-Type ?
	indique au client le type de données contenues dans la réponse.

Pourquoi est-il intéressant de regrouper ces instructions dans une fonction ?
	réutilisation du meme code pour plusieurs reponses json

Quels paramètres la fonction devrait-elle recevoir ?
	res et data, res=envoyer la réponse au client, data=objet js qui doit etre transformé en json

Pourquoi faut-il utiliser return après l’appel à sendJson() ?
	pour arreter l’exécution de la fonction aprés avoir envoyé la réponse

Que se passe-t-il si plusieurs réponses sont envoyées pour une même requête ?
	une requête http ne doit recevoir qu’une seule réponse, si le serveur essaie d’envoyer une 2eme reponse apres res.end() nodejs peut générer une erreur

Quel code de statut est utilisé pour une réponse réussie ?
	200

Comment retourner une réponse avec le code 404 ?
	res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8"
  });
  res.end("Route non trouvée");

Quel code est renvoyé par /api/health ?
	renvoie le code 200 car la requete a été traitée avec succès

Quel code est renvoyé par une route inexistante ?
	404 (not found)

Pourquoi ne faut-il pas retourner 200 lorsqu’une route n’existe pas ?
	200 indique que la requete a réussi 

Quelle différence existe-t-il entre le code HTTP et le contenu JSON ?
	code http=indique le résultat général de requête au niveau du protocole http
	contenu json=contient les informations supplémentaires destinées au client

Quel objet Node.js permet d’accéder aux informations du processus ?
	process

Quelle propriété permet d’obtenir la version de Node.js ?
process.version	

Pourquoi la version de l’application est-elle distincte de celle de Node.js ?
La version de l'application (1.0.0) indique l'évolution de SangConnect.
process.version indique la version de Node.js utilisée pour exécuter l'application.

Quelles autres informations pourraient être retournées ?
process.platform // système d'exploitation 
process.arch // architecture du processeur 
process.pid // identifiant du processus 
process.uptime() // durée d'exécution du processus 

Quelle propriété permet de connaître la méthode HTTP ?
	req.method

Quelle propriété permet de connaître l’URL ?
req.url	

Quelle différence existe-t-il entre GET et POST ?
	get sert a récupérer les données
	post sert a envoyer les données au serveur

Pourquoi une route doit-elle tenir compte de la méthode ?
parce qu’une meme url peut avoir des actions différentes	

Une même URL peut-elle être associée à plusieurs méthodes ?
	oui une meme url peut etre utilisée avec plusieurs méthodes

Toutes les réponses possèdent-elles un Content-Type ?
	non mais il est recommandé de préciser le content-type

Les codes HTTP sont-ils cohérents ?
	oui il doivent correspondre au resultat de la requete

Que se passe-t-il si le serveur est arrêté ?
	le client ne peut plus communiquer avec le serveur

Pourquoi tester une route existante et une route inexistante ?
	pour verifier que le serveur gère correctement les deux situations 200 et 404 

Quel est l’intérêt de l’option -i ?
	permet d’afficher les entetes http de la reponse avec son contenu
	
Pourquoi utilise-t-on une route de santé ?
	permet de verifier rapidement si le serveur fonctionne et peut repondre aux requetes

Pourquoi cette route doit-elle rester rapide ?
	Parce qu'elle peut être appelée très fréquemment par des outils de surveillance, des plateformes de déploiement ou des systèmes d'orchestration. Elle doit donc répondre rapidement sans effectuer de traitements lourds. 

Quelle différence existe-t-il entre une vérification de disponibilité et une vérification complète ?
Vérification de disponibilité=vérifie simplement que l'application fonctionne et répond.
Vérification complète=vérifie également que les services nécessaires à l'application sont disponibles

Quelles vérifications supplémentaires seraient possibles dans une application réelle ?
la connexion à la base de données ;
la disponibilité d'une API externe ;
l'état d'un service de stockage ;
la disponibilité d'un service de messagerie ;
l'espace disque disponible ;
certaines ressources nécessaires au fonctionnement de l'application.

Quel est le rôle de server.js ?
	c’est le point d’entrée du serveur, permet de démarrer le serveur http

Que se passe-t-il si l’application possède 30 routes ?
	le fichier devient trés long et difficile à lire

Pourquoi de nombreuses conditions if compliquent-elles la maintenance ?
un grand nombre de if rend le code plus long et mois lisible et plus difficile à modifier	

Comment pourrait-on séparer les routes dans plusieurs fichiers ?
	On peut créer des fichiers ou dossiers dédiés aux différentes fonctionnalités, puis importer les routes dans server.js. cela permet de répartir les responsabilités au lieu de tout mettre dans un seul fichier.

Quelles responsabilités pourraient être confiées à des fichiers distincts ?
	On peut organiser le projet par responsabilités :
server.js=démarrage du serveur
routes/=définition des routes
controllers/=traitement des requêtes
services/=logique métier
models/=gestion des données
utils/=fonctions utilitaires
config/=configuration



