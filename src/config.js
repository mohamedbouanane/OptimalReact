let envConfig;

switch (process.env.REACT_APP_ENV) {
  case 'local':
    envConfig = require('../config/env.local').default;
    break;
  case 'dev':
    envConfig = require('../config/env.dev').default;
    break;
  case 'recette':
    envConfig = require('../config/env.recette').default;
    break;
  case 'pprod':
    envConfig = require('../config/env.pprod').default;
    break;
  case 'prod':
    envConfig = require('../config/env.prod').default;
    break;
  default:
    throw new Error('Unknown environment');
}

export default envConfig;
