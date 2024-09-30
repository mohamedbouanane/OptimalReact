# Optimal project template (React JS + Vite)

Ce projet est un prototype d'application React moderne avec une architecture clean et plusieurs outils intégrés pour améliorer la qualité du code et les performances. Il inclut la navigation, les appels API, le styling, le linting et l'analyse de code via SonarQube.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (v22.5.1 ou plus)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- [nvm](https://github.com/coreybutler/nvm-windows/releases) (pour controler les versions npm)

## Installation

1. Clonez le dépôt :

```
git clone https://github.com/mohamedbouanane/OptimalReact.git
```

```
cd OptimalReact
```

1. Installez les dépendances du projet :

```
npm install
```

## Architecture du Projet

Voici une vue d'ensemble de l'architecture du projet :

```

my-react-app/
│
├── build               # ?
│   ├──
│
├── config  
│   ├── env.js          # Variables d'environnement complexes commune pour tous les environnements 
│   ├── env.*.js        # Variables d'environnement complexes par environnement
│   └── index.js        # Charge et Merge les variables d'environnement simples (.env) et complexes (env.*.js)
│
├── public/             # Fichiers statiques
│   ├── index.html      # Fichier HTML principal
│   ├── favicon.ico     # Icône de l'application
│   └── assets/         # Dossier pour les ressources statiques
│
├── src/
│   ├── assets/         # Fichiers statiques spécifiques, (Images, polices, styles, etc.)
│   ├── components/     # Composants réutilisables
│   │   └── common/
│   │
│   ├── pages/          # Pages de l'application
│   │   └── common/  
│   │
│   ├── services/       # Gestion des appels API
│   │   └── common/
│   │
│   ├── hooks/          # Hooks personnalisés
│   │   └── common/
│   │
│   ├── context/        # Contexte React pour le state global
│   │   └── common/
│   │
│   ├── utils/          # Fonctions utilitaires
│   │   └── common/
│   │
│   ├── styles/         # Fichiers CSS ou SASS globaux
│   ├── i18n.js         # Configuration de l'internationalisation
│   ├── App.js          # Composant principal de l'application
│   └── main.jsx        # Point d'entrée du projet
│
├── .env                # Variables d'environnement globales simples commune  pour tous les environnements
├── .env.*              # Variables d'environnement globales simples par environnement
├── .prettierignore     # Fichiers à ignorer par Prettier
├── .prettierrc.yaml    # Configuration de formatage Prettier
├── prettierFormatModified.js   # Script pour formater les Fichiers modifiés via Prettier
├── lintFixModified.js  # Script pour analyser et corriger le code des Fichiers modifiés via Lint
├── .gitignore          # Fichiers à ignorer par Git
├── CONTRIBUTION RULES.md       # Comporte les règles de contribution au projet
├── package.json        # Dépendances et scripts npm
├── package-lock.json   # Verrouille les versions exactes des dépendances
├── sonar-project.properties    # Configuration SonarQube/Cloud
└── vite.config.js      # Configuration Vite
```

## Scripts NPM

Ce projet utilise **Vite** pour gérer le développement et le build.

Les commandes suivantes démarrent l'application dans l'environnement spécifié :

- **Environnement Local   `fichier -> .env.localdev`**

  - Démarrer en mode développement :

    ```
    npm start
    ```
  - Générer le build pour le déploiement :

    ```
    npm run build
    ```
- **Environnement Développement   `fichier -> .env.dev`**

  - Démarrer en mode développement :

    ```
    npm run start:dev
    ```
  - Générer le build pour le déploiement :

    ```
    npm run build:dev
    ```
- **Environnement Recette   `fichier -> .env.recette`**

  - Démarrer en mode développement :

    ```
    npm run start:recette
    ```
  - Générer le build pour le déploiement :

    ```
    npm run build:recette
    ```
- **Environnement Pré-production   `fichier .env.pprod`**

  - Démarrer en mode développement :

    ```
    npm run start:pprod
    ```
  - Générer le build pour le déploiement :

    ```
    npm run build:pprod
    ```
- **Environnement Production   `fichier -> .env.prod`**

  - Démarrer en mode développement :

    ```
    npm run start:prod
    ```
  - Générer le build pour le déploiement :

    ```
    npm run build:prod
    ```

**Autres Commandes :**

- Prévisualiser la build en local :

  ```
  npm run serve
  ```
- Lancer ESLint pour vérifier le code :

  ```
  npm run lint
  ```
- Exécuter les tests avec Jest :

  ```
  npm run test`
  ```

## Packages Inclus

### Dépendances principales

* **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
* **ReactDOM** : Utilisé pour rendre les composants dans le DOM du navigateur.
* **React Router DOM** : Gestion des routes et navigation.
* **Axios** : Bibliothèque pour les appels API HTTP.
* **Styled Components** : Gestion des styles en CSS-in-JS.
* **i18n** : Gestion de l'internationalisation.

### Dépendances de développement

* **ESLint** : Outil de linting pour s'assurer que le code suit de bonnes pratiques (avec la config airbnb).
* **Prettier** : Formateur de code pour assurer la cohérence du style.
* **Jest** : Framework de tests pour JavaScript.
* **SonarScanner** : Outil pour analyser la qualité du code avec SonarQube ou SonarCloud.

## Linting et Formatage

Le projet utilise **ESLint** pour le linting des fichier `.js` et `.jsx` et **Prettier** pour le formattage automatique du code. Vous pouvez lancer ces outils avec les commandes suivantes :

* **Formater le code et corriger automatiquement les erreurs triviales (comme les problèmes de formatage) sur l'ensemble du projet**

  ```
  npm run fix
  ```
* **Formater le code et corriger automatiquement les erreurs triviales que dans les fichiers modifiés dans la branche courante**

  ```
  npm run fix:modified

  ```
* **Commandes individuelles**

  `npm run lint` : Lancer ESLint pour une analyse globale

  `npm run lint:fix` : Pour corriger automatiquement les erreurs triviales sur l'ensemble du projet

  `npm run lint:fix:modified` : Pour corriger automatiquement les erreurs triviales **que dans les fichiers modifiés**

  `npm run format` : Lancer Prettier pour formater le code

  `npm run format:modified` : Lancer Prettier pour formater **que les fichiers modifiés dans la branche courante**


## Gestion des Variables d'Environnement

Ce projet React utilise **Vite** pour gérer plusieurs environnements (local, dev, recette, pprod, prod) à travers des fichiers `.env` et des fichiers `env.*.js`.

**Structure des Environnements**

* **`.env`** : Définit les variables globales pour tous les environnements. Les variables doivent commencer par `VITE_` (ex : `VITE_API_BASE_URL`).
* **`env.*.js`** : Contient la configuration spécifique à chaque environnement (ex : `env.local.js`, `env.prod.js`).
* **`env.js`** : Regroupe les variables communes (ex : nom de l'application).

Le fichier `config/index.js` charge automatiquement la bonne configuration selon l'environnement actif (via `import.meta.env.MODE`).

**Exemple d'utilisation dans le projet :**

```
import loadConfig from './config';

async function MyComponent() {
  const config = await loadConfig();
  console.log(API Base URL: ${config.apiBaseUrl});
}
```

## Tests

Le projet inclut des tests avec **Jest** et  **React Testing Library** . Vous pouvez exécuter les tests avec la commande :

```bash
npm run test
```

Pour générer un rapport de couverture de code :

```bash
npm run test:coverage
```

## Analyse de Code avec SonarQube / SonarCloud

Le projet est configuré pour fonctionner avec **SonarQube** ou **SonarCloud** pour assurer la qualité du code.

### Étapes pour exécuter une analyse Sonar :

1. Assurez-vous d'avoir un serveur **SonarQube** en cours d'exécution, ou configurez votre projet sur  **SonarCloud** .
2. Configurez le fichier `sonar-project.properties` avec vos informations.
3. Exécutez l'analyse :

```
npx sonar-scanner
```

Les résultats de l'analyse seront disponibles sur votre serveur **SonarQube** ou sur votre tableau de bord  **SonarCloud** .

## Variables d'environnement

Les fichiers env.[env].js contiennent les variables spécifiques à chaque environnement.
Le fichier env.js regroupe les variables communes (comme le nom de l'application, la version, etc.) utilisées dans tous les environnements.

## Contribution

Les contributions sont les bienvenues ! Ouvrez une **issue** ou un **pull request** pour toute suggestion ou amélioration.

## TODO liste

Pour suivre l'avancement des objectifs du projet, veuillez voir le fichier [TODO](./TODO.md).

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](/LICENSE) pour plus de détails.
