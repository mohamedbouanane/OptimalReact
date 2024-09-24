# Optima Template (React + Vite)

Ce projet est un prototype d'application React moderne avec une architecture clean et plusieurs outils intégrés pour améliorer la qualité du code et les performances. Il inclut la navigation, les appels API, le styling, le linting et l'analyse de code via SonarQube.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (v22.5.1 ou plus)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/mohamedbouanane/OptimalReact.git
cd OptimalReact
```

2. Installez les dépendances du projet :

```bash
npm install
```

## Architecture du Projet

Voici une vue d'ensemble de l'architecture du projet :

> my-react-app/
> │
> ├── public/                  # Fichiers statiques
> ├── src/
> │   ├── assets/             # Fichiers statiques spécifiques (images, styles)
> │   ├── components/   # Composants réutilisables
> │   ├── pages/             # Pages de l'application
> │   ├── services/         # Gestion des appels API
> │   ├── hooks/             # Hooks personnalisés
> │   ├── utils/                # Fonctions utilitaires
> │   ├── styles/             # Fichiers CSS globaux
> │   ├── App.js             # Composant principal de l'application
> │   └── main.js            # Point d'entrée du projet
> ├── .gitignore              # Fichiers à ignorer par Git
> ├── package.json        # Dépendances et scripts npm
> ├── sonar-project.properties    # Configuration SonarQube/Cloud
> └── vite.config.js        # Configuration Vite

## Scripts NPM

Voici les scripts disponibles pour ce projet :

* `npm run dev` : Lancer le serveur en mode développement avec Vite.
* `npm run build` : Construire le projet pour la production.
* `npm run serve` : Prévisualiser la build en local.
* `npm run lint` : Lancer ESLint pour vérifier le code.
* `npm run test` : Exécuter les tests avec Jest.

## Packages Inclus

### Dépendances principales :

* **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
* **ReactDOM** : Utilisé pour rendre les composants dans le DOM du navigateur.
* **React Router DOM** : Gestion des routes et navigation.
* **Axios** : Bibliothèque pour les appels API HTTP.
* **Styled Components** : Gestion des styles en CSS-in-JS.

### Dépendances de développement :

* **ESLint** : Outil de linting pour s'assurer que le code suit de bonnes pratiques.
* **Prettier** : Formateur de code pour assurer la cohérence du style.
* **Jest** : Framework de tests pour JavaScript.
* **SonarScanner** : Outil pour analyser la qualité du code avec SonarQube ou SonarCloud.

## Linting et Formatage

Le projet utilise **ESLint** pour le linting et **Prettier** pour le formattage automatique du code. Vous pouvez lancer ces outils avec les commandes suivantes :

* Lancer ESLint :

  ```
  npm run lint
  ```
* Lancer Prettier pour formater le code :

  ```
  npm run prettier --write .
  ```

## Tests

Le projet inclut des tests avec **Jest** et  **React Testing Library** . Vous pouvez exécuter les tests avec la commande :

```bash
npm run test
```

Pour générer un rapport de couverture de code :

```bash
npm run test -- --coverage
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

## Contribution

Les contributions sont les bienvenues ! Ouvrez une **issue** ou un **pull request** pour toute suggestion ou amélioration.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE]() pour plus de détails.
