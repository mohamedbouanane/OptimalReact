import { validateConfig } from './validateConfig';

async function loadConfig() {
  const env = import.meta.env.MODE; // 'localdev', 'dev', 'recette', 'pprod', 'prod'
  let config;

  switch (env) {
    case 'localdev':
      config = (await import('./env.localdev.js')).default;
      break;
    case 'dev':
      config = (await import('./env.dev.js')).default;
      break;
    case 'recette':
      config = (await import('./env.recette.js')).default;
      break;
    case 'pprod':
      config = (await import('./env.pprod.js')).default;
      break;
    case 'prod':
      config = (await import('./env.prod.js')).default;
      break;
    default:
      throw new Error(`Unknown environment: ${env}`);
  }

  // Merge with .env variables
  const mergedConfig = {
    ...config,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || config.apiBaseUrl,
    logLevel: import.meta.env.VITE_LOG_LEVEL || config.logLevel,
    featureFlag: import.meta.env.VITE_FEATURE_FLAG !== 'false' ? config.featureFlag : false,
  };

  validateConfig(mergedConfig);

  return mergedConfig;
}

export default loadConfig;
