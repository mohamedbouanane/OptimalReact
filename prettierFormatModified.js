import { execSync } from 'child_process';

try {
  // Récupère les fichiers modifiés qui sont ajoutés ou modifiés dans Git
  const files = execSync('git diff --name-only').toString().trim();

  // Vérifie s'il y a des fichiers à formater
  if (!files) {
    console.log('Aucun fichier modifié à formater.');
    process.exit(0);
  }

  // Formate les fichiers avec Prettier
  execSync(`prettier --write ${files}`, { stdio: 'inherit' });
  console.log('Fichiers formatés avec Prettier.');
} catch (error) {
  console.error('Erreur lors du formatage des fichiers :', error.message);
  process.exit(1);
}
