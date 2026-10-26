##MILAD Maram - 4GL

### Questions
1. Pourquoi ne devons-nous pas exécuter à nouveau :npm install express?
    -si on exécute cette commande une deuxième fois, npm vérifie les dépendances et peut réutiliser l’installation existante, il n’est donc pas nécessaire de la répéter si Express est déja installé

2. Dans quel fichier la dépendance Zod apparaît-elle ?
    - la dépendance Zod apparaît dans le fichier package.json dans la section dependencies

3. Que se passe-t-il dans les deux cas ? (13.Test le schéma)
    - la méthode safeParse() vérifie si les données respectent le schéma Zod. Elle retourne success: true dans le 1er cas puisque les données sont valides et success: false dans le 2ème cas car elles sont invalides

4. Pourquoi le contrôleur n'est-il pas exécuté lorsque la validation échoue ?
    - parce que le middleware de validation Zod intercepte la requête avant qu'elle n'atteigne le contrôleur

5. Pourquoi est-il préférable de vérifier id avant d'appeler le service ?
    - afin de s'assurer que l'identifiant fourni est valide cela permet d'éviter les appels inutiles au service, de prévenir les erreurs et de renvoyer une réponse HTTP 400 Bad Request si l'identifiant est invalide

6. Pourquoi avons-nous utilisé : .optional()?
    - Le optional() signifie que le paramètre n'est pas obligatoire.

### Exercice 1 — Tester toutes les validations
- Donneur valide: POST /api/donneurs avec nom: "Khelifi", prenom: "Yassine", groupeSanguin: "A+"	201 Created	Donneur créé avec succès
- Nom trop court: POST /api/donneurs avec nom: "A"	400 Bad Request	Rejeté si le schéma impose un nom d'au moins 2 caractères.
- Groupe sanguin invalide:	POST /api/donneurs avec groupeSanguin: "XYZ"	400 Bad Request	Le groupe sanguin ne figure pas parmi les valeurs autorisées.
- Donneur sans prénom:	POST /api/donneurs sans le champ prenom	400 Bad Request	Le champ obligatoire prenom est absent.
- Identifiant invalide:	GET /api/donneurs/abc	400 Bad Request	L'identifiant abc n'est pas valide si un identifiant numérique est attendu.
- Groupe sanguin invalide dans la requête: GET /api/donneurs?groupeSanguin=XYZ	400 Bad Request	XYZ ne correspond à aucun groupe sanguin autorisé par le schéma de requête.