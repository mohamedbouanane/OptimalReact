import i18n from 'i18next';

class TranslationService {
  
  static async loadTranslations(language) {
    try {
      if (i18n.language !== language) {
        await i18n.changeLanguage(language);
      }
    } catch (error) {
      console.error(`Erreur lors du chargement des traductions pour ${language}:`, error);
    }
  }

  // Cette méthode lit une section particulière (par ex. "messages" ou "errors") depuis un fichier de traduction (namespace)
  static async getSection(namespace, section, key, params = {}, language = i18n.language) {
    try {
      await TranslationService.loadTranslations(language);
      
      // Récupère la traduction pour la clé spécifiée
      const translation = i18n.t(`${namespace}:${section}.${key}`, params);
      
      return translation;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la section ${section} avec la clé ${key} dans ${namespace}:`, error);
      return '';
    }
  }

  // Méthode pour récupérer un message spécifique du fichier
  static async getMessage(namespace, key, params = {}, language = i18n.language) {
    return await TranslationService.getSection(namespace, 'messages', key, params, language);
  }

  // Méthode pour récupérer une erreur spécifique du fichier
  static async getError(namespace, key, params = {}, language = i18n.language) {
    return await TranslationService.getSection(namespace, 'errors', key, params, language);
  }
}

export default TranslationService;