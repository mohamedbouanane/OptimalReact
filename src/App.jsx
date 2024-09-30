import { useState } from 'react';
import reactLogo from './assets/react.svg';
import loadConfig from '../config';
import viteLogo from '/vite.svg';
import './App.css';
import TranslationService from './services/translation/TranslationService';

// Test lectures des paramètres config
async function TestCallConfig() {
  const config = await loadConfig();
  console.log(`App Name: ${config.appName}`);
  console.log(`API Base URL: ${config.apiBaseUrl}`);
  console.log(`Log Level: ${config.logLevel}`);
  console.log(`Custom Setting: ${config.customSetting}`);
}

// test lecture des traductions
async function TestCallTranslation() {
  try {
    await TranslationService.loadTranslations('fr-FR');

    const message = await TranslationService.getMessage('authentication', 'auth.login.success');
    console.log('Messages:', message);

    const error = await TranslationService.getError('authentication', 'auth.unknown');
    console.log('Erreurs:', error);

  } catch (error) {
    console.error('Erreur dans l\'application:', error);
  }
}

function App() {
  const [count, setCount] = useState(0);

  // test
  TestCallConfig();
  TestCallTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
