import i18n from 'i18next';
import YAMLBackend from 'i18next-yaml-backend'; // Assurez-vous que ce package est installé
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(YAMLBackend) // Utilise le backend YAML
  .use(LanguageDetector) // Détecte automatiquement la langue de l'utilisateur
  .use(initReactI18next) // Passe i18next à react-i18next
  .init({
    fallbackLng: 'en-US',
    debug: true,
    interpolation: {
      escapeValue: false, // i18next gère la sécurité par défaut
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.yaml', // Chemin pour charger les fichiers de traduction
    },
  });

export default i18n;