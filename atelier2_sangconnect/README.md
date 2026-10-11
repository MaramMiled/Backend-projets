##MILAD Maram - 4GL

### Questions

1. Est-il facile de retrouver la fonction responsable de la recherche d’un centre ?
   - si le fichier contient plusieurs de fonctions et de routes, il devient difficile de retrouver rapidement getCentreById()

2. Que se passe-t-il si plusieurs fichiers ont besoin de getCentreById() ?
    - risque de copier la même fonction dans plusieurs fichiers peut crée de la répétition et rend les modifications plus difficiles

3. Pourquoi serait-il intéressant de placer cette fonction dans un fichier séparé ?
    - pour centraliser la fonction et pouvoir la réutiliser facilement dans plusieurs fichiers grâce à l'importation

4. Quel pourrait être le rôle d’un module ?
    - permet de regrouper des fonctions ou des éléments liés dans un fichier

### Questions

1. Pourquoi les accolades sont-elles utilisées lors de l’import ?
    - permettent d’importer un élément précis parmi ceux qui sont exportés par le module

2. Peut-on exporter plusieurs fonctions depuis un même fichier ?
    - oui.

3. Quel est l’intérêt de regrouper plusieurs fonctions liées dans un module ?
    - permet de mieux organiser le code et de réutiliser facilement les fonctions


### Questions
1. Pourquoi "Fin" apparaît-il avant "Opération terminée" ?
    - Parce que setTimeout() est asynchrone js programme l'opération pour plus tard et continue immédiatement avec console.log("Fin")

2. Le programme est-il bloqué pendant les deux secondes ?
    - Non le programme continue à exécuter les autres instructions pendant ces deux secondes

3. Que représente l’opération programmée avec setTimeout() ?
    - asynchrone, sera exécutée après le délai indiqué

4. Pourquoi ce comportement est-il intéressant pour un serveur ?
    - un serveur peut continuer à traiter d'autres requêtes pendant qu'une opération prend du temps

### Questions
1. Que contient la Promise au début ?
    - Promise est dans l'état pending

2. Que fait resolve() ?
    - resolve() indique que l'opération s'est terminée avec succès et fournit le résultat

3. Que fait reject() ?
    - reject() indique que l'opération a échoué et fournit généralement une erreur

3. Que se passe-t-il après une seconde ?
    - resolve("Centre récupéré") est exécuté donc la Promise passe de pending en fulfilled

4. Pourquoi utilise-t-on .then() ?
    - permet de récupérer le résultat lorsque la Promise est terminée


### Questions
1. Pourquoi utilise-t-on reject() ?
    - pour indiquer que l'opération a échoué

2. Quel est le rôle de .catch() ?
    - permet de récupérer et gérer l'erreur produite par une Promise rejetée

3. Quelle différence existe-t-il entre une valeur retournée et une erreur ?
    - une valeur retournée signifie que l'opération a réussi et une erreur signifie que l'opération a échoué

4. Pourquoi la gestion des erreurs est-elle importante dans une API backend ?
    - parce qu'une API peut rencontrer beaucoup de problèmes comme base de données indisponible ou données incorrectes ..


### Questions
1. Que signifie le mot-clé async ?
    - async indique que la fonction est asynchrone

2. Que signifie await ?
    - await c'est pour attendre le résultat de la Promise avant de continuer cette fonction

3. Pourquoi await ne bloque-t-il pas tout le serveur pendant l’attente ?
    - await suspend seulement l'exécution de la fonction pas tout le serveur

4. Que se passe-t-il si la Promise est rejetée ?
    - await provoque une erreur


### Questions
1. Quel est le rôle de try ?
    - contient le code qu'on veut exécuter et surveiller pour détecter une éventuelle erreur

2. Quel est le rôle de catch ?
    - permet de récupérer et traiter l'erreur qui s'est produite dans le try

3. Quelle variable contient l’erreur ?
    - c'est la variable error dans catch (error)

4. Pourquoi ne doit-on pas laisser les erreurs asynchrones sans traitement ?
    - parce qu'une erreur non gérée peut provoquer un comportement inattendu 


### Questions
1. Où sont maintenant stockées les données ?
    - les données sont stockées dans le tableau centres dans le fichier centre.repostory.js

2. Pourquoi ce fichier est-il appelé repository ?
    - car le repository est responsable de l'accès aux données

3. Le repository connaît-il HTTP ?
    - non lee repository ne s'occupe pas des requêtes HTTP juste s'occupe des données


4. Le repository connaît-il req et res ?
    - req et res appartiennent à la partie HTTP / serveur / contrôleur

5. Pourquoi cette séparation est-elle intéressante ?
    - permet de séparer les responsabilités.


### Questions
1. Quel est le rôle du service ?
    - contient la logique métier de l'application

2. Pourquoi le service utilise-t-il le repository ?
    - parceque le repository est responsable de l'accès aux données

3. Pourquoi le service ne manipule-t-il pas directement res ?
    - le service ne doit pas savoir comment la réponse sera envoyée au client il doit simplement retourner une donnée ou signaler une erreur

4. Où doit être placée une règle métier ?
    - est une règle qui concerne le fonctionnement de l'application donc elle appartient au service

5. Pourquoi séparer le service du repository ?
    - pour séparer les responsabilités et rendre le code plus facile à modifier et maintenir


### Questions
1. Quel est le rôle du contrôleur ?
    - fait le lien entre HTTP et le service

2. Pourquoi le contrôleur connaît-il HTTP ?
    - qu'il travaille directement avec res et req et avec sendJson(res, 200, ...) donc responsable de la réponse HTTP

3. Pourquoi appelle-t-il le service ?
    - car le service contient la logique métier

4. Pourquoi le service ne doit-il pas appeler sendJson() ?
    - parce que sendJson() concerne HTTP et le service ne doit pas dépendre de HTTP

5. Où est gérée l’erreur « Centre introuvable » ?
    - elle est créée dans le service et puis récupérer dans le controleur


### Questions
1. Quel est le rôle de handleCentreRoutes() ?
    - sert à reconnaître et traiter les routes liées aux centres

2. Pourquoi cette fonction retourne-t-elle true ou false ?
    - rrue c'est la route a été reconnue et traitée et false c'est aucune route correspondante

3. Que représente match[1] ?
    - premier parametre extrait par l'expression reguliere

4. Pourquoi utilise-t-on Number() ?
    - pour convertir "5" (string) en 5 (number)

5. Pourquoi la route /api/centres/1 doit-elle être distinguée de /api/centres ?
    - elles correspondent à deux opérations différentes api/centres/1 récupérer le centre dont l'id est 1 et /api/centres/ pour récupérer tous les centres

### Questions
1. Quelle couche reçoit la requête HTTP en premier ?
    - Le serveur et les routes reçoivent la requête HTTP en premier

2. Quelle couche contient les données ?
    - le Repository 

3. Quelle couche contient la logique métier ?
    - le service

4. Quelle couche produit la réponse HTTP ?
    - le controlleur

5. Peut-on remplacer les données fictives par une base de données sans modifier les routes ?
    - oui

### Question
1. Pourquoi la vérification : if (!city || city.trim() === "") doit-elle se trouver dans le service plutôt que dans le repository ?
    - c'est parce que city est une règle métier pas une règle d'accès aux données

### Questions
1. Quelle couche génère l’erreur ?
    - Le Repository, car l'erreur est créée dans findAll()

2. Quelle couche la récupère ?
    - controller dans le bloc catch de listCentres()

3. Quel code HTTP doit être retourné ?
    - 500 Internal Server Error car il s'agit d'une erreur interne du serveur

4. Pourquoi ne faut-il pas retourner le message technique complet d’une erreur interne au client dans une véritable application ?
    - c'est car un message technique peut révéler des informations sensibles sur le serveur


### Question 1
1. Quelle différence existe entre : function getCentre() {} et : async function getCentre() {}
    - fonction normale peut retourner directement une valeur et une foction async retourne toujours une Promise

### Question 2
2. Quelle différence existe entre : const result = await operation(); et : operation().then(result => {});
    - les deux permettent de récupérer le résultat d'une Promise, .then() utilise une fonction callback et await permet d'écrire le code de manière plus simple et plus lisible

### Question 3
3. Quels sont les trois états principaux d’une Promise ?
    - pending fulfilled et rejected

### Question 4
4. Quel est le rôle de try/catch avec async/await ?
    - permet de gérer les erreurs lorsqu'une Promise est rejetée

### Question 5
5. Pourquoi faut-il éviter de mettre toute la logique dans server.js ?
    - le fichier deviendrait très long et difficile à comprendre

### Question 6
6. Quelle est la responsabilité du repository ?
    - accéder aux données

### Question 7
7. Quelle est la responsabilité du service ?
    -gérer la logique métier

### Question 8
8. Quelle est la responsabilité du controller ?
    -gérer la communication HTTP

### Question 9
9. Pourquoi cette architecture facilite-t-elle les tests ?
    - Parce que chaque couche est séparée et sans devoir tester toute l'application en même temps

### Question 10
10. Quelle partie de l’architecture pourrait être remplacée lorsqu’une vraie base PostgreSQL sera introduite ?
    - le repository

