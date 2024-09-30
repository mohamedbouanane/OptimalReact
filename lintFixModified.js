import { execSync } from 'child_process';

try {
  // Récupérer les fichiers JavaScript et JSX modifiés
  const files = execSync('git diff --name-only')
    .toString()
    .split('\n')
    .filter((file) => file.endsWith('.js') || file.endsWith('.jsx')); // Inclure .jsx

  // Si des fichiers sont trouvés, exécuter ESLint sur eux
  if (files.length > 0) {
    execSync(`eslint --fix ${files.join(' ')}`, { stdio: 'inherit' });
  } else {
    console.log('Aucun fichier JavaScript ou JSX modifié à vérifier.');
  }
} catch (error) {
  console.error("Erreur lors de l'exécution de ESLint:", error.message);
}
