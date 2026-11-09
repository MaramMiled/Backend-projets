##MILAD Maram - 4GL

### Questions
1. Quel est le rôle du service MySQL ?
    - permet de stocker, organiser et gérer durablement les données dans une base de données.
2. Sur quel port MySQL écoute-t-il généralement ?
    - écoute généralement sur le port 3306
3. Pourquoi Node.js ne peut-il pas simplement stocker durablement les données dans ses variables JavaScript ?
    - Les variables JavaScript sont stockées en mémoire vive (RAM). Elles sont perdues lorsque le programme s’arrête ou redémarre. Une base de données comme MySQL permet de conserver les données durablement.

### Question
1. Pourquoi est-il préférable que l'application utilise un utilisateur MySQL dédié plutôt que root ?
    - pour des raisons de sécurité et de principe du moindre privilège. Cet utilisateur possède uniquement les permissions nécessaires à l’application, contrairement à root qui dispose de privilèges très élevés. Cela limite les dégâts en cas d’erreur ou de piratage.

### Question
1. Quel est l'intérêt d'une migration ?
    - permet de suivre et d'appliquer les modifications de la structure d'une base de données tout en conservant un historique des changements.

### Question