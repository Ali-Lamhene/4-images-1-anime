import { createContext } from 'react';

// Default value for SSR and edge cases
const defaultContext = {
    language: 'en',
    changeLanguage: async () => { },
    t: (key) => key,
    isReady: false
};

export const LanguageContext = createContext(defaultContext);
