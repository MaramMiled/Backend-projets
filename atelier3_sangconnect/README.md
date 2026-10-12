##MILAD Maram - 4GL

### Questions

1. Quelle version de Node.js utilisez-vous ?
    - v22.22.1
2. Quelle version de npm utilisez-vous ?
    - 9.2.0
3. Quelle est la différence entre Node.js et npm ?
    - Node.js est un environnement d’exécution qui permet d’exécuter du JavaScript en dehors du navigateur et npm est un gestionnaire de paquets qui permet d’installer et de gérer les bibliothèques et les dépendances d’un projet JavaScript.

### Questions
1. Quelle nouvelle section apparaît ?
    - La section "dependencies" apparaît dans le fichier package.json
2. Quelle dépendance contient Express ?
    - Express apparaît dans la section "dependencies" avec sa version
3. Pourquoi Express est-il enregistré dans dependencies ?
    - Parce qu’Express est une bibliothèque nécessaire au fonctionnement de l’application, elle doit être installée pour que le projet puisse s’exécuter correctement.

### Questions
1. Quelle différence observez-vous entre : res.send(...) et : res.json(...)
    - res.send(...) : permet d’envoyer une réponse au client sous différentes formes : texte, HTML, objet, buffer, etc.
    res.json(...) : permet d’envoyer une réponse au format JSON

### Questions
1. Que contient : req.params.id dans chacun des deux cas ?
    - Pour curl http://localhost:3000/api/donneurs/1, req.params.id contient "1" et pour curl http://localhost:3000/api/donneurs/25, req.params.id contient "25"

### Questions
1. Quel est maintenant le type de : id
    - number

### Questions
1. Quelle est la différence entre : req.params et : req.query
    - req.params : identifier une ressource, par exemple un donneur par son ID. 
    - req.query : filtrer ou préciser une recherche, par exemple les donneurs d'une ville.

### Questions
1. À quoi sert req.body ?
    - permet de récupérer les données envoyées par le client dans le corps de la requête HTTP
2. Pourquoi avons-nous ajouté express.json() ?
    - permet à Express de lire et de convertir les données JSON reçues en un objet JavaScript accessible via req.body
3. Pourquoi retournons-nous le code 201 plutôt que 200 ?
    - Le code 201 Created indique qu’une nouvelle ressource a été créée avec succès. Le code 200 OK indique simplement que la requête a réussi.

### Questions
1. Comment organiseriez-vous les fichiers ?
    - routes,controllers et services
2. Quelle fonction doit se trouver dans le service ?
    - contient la logique métier et l'accès aux données
3. Quelle fonction doit se trouver dans le contrôleur ?
    - reçoit la requête, appelle le service et renvoie la réponse HTTP
4. Où doit être définie la route ?
    - définit les URL et les méthodes HTTP

### Questions
1. Dans quelle partie de l'architecture doit être placée la logique de filtrage ?
    - doit être placée dans le service, car elle correspond à une opération sur les données. Le contrôleur récupère le paramètre groupeSanguin depuis req.query, appelle le service et renvoie le résultat. La route associe l'URL à ce contrôleur. Cette séparation rend le code plus lisible, réutilisable et facile à maintenir.

### Questions
1. Pourquoi cette méthode de validation risque-t-elle de devenir difficile à maintenir lorsque l'application grandit ?
    - car la validation est écrite manuellement et peut être répétée dans plusieurs contrôleurs

### Questions
1. Pourquoi est-il préférable de séparer :Routes, Controllers, Services plutôt que de placer toute la logique dans server.js ?
    - pour respecter le principe de séparation des responsabilités.
    - Routes : définissent les URL et les méthodes HTTP.
    - Controllers : gèrent les requêtes et les réponses HTTP.
    - Services : contiennent la logique métier et la gestion des données.

