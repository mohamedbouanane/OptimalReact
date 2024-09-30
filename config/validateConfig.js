
export function validateConfig(config) {

  const requiredFields = ['apiBaseUrl', 'logLevel'];
    
  requiredFields.forEach((field) => {
    if (!config[field]) {
      throw new Error(`Configuration error: ${field} is required.`);
    }
  });

  // Ajoute d'autres validations selon les besoins
}
