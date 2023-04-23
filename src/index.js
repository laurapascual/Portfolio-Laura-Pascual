import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>
);
