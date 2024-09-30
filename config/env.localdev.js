import { commonConfig } from './env';

const config = {
  ...commonConfig, // Fusionner les variables communes
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  logLevel: 'debug',
  featureFlag: false,
  customSetting: () => 'Value for local environment'
};

export default config;
