import { useContext, useEffect, useState } from 'react';
import { TRANSLATIONS } from '../constants/translations';
import { getSettings, saveSettings } from '../utils/storage';
import { LanguageContext } from './LanguageContextObject';

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadLanguage = async () => {
            const settings = await getSettings();
            setLanguage(settings.language || 'en');
            setIsReady(true);
        };
        loadLanguage();
    }, []);

    const changeLanguage = async (newLang) => {
        setLanguage(newLang);
        const settings = await getSettings();
        await saveSettings({ ...settings, language: newLang });
    };

    const t = (key, params = {}) => {
        let text = TRANSLATIONS[language][key] || key;
        Object.keys(params).forEach(param => {
            text = text.replace(`{{${param}}}`, params[param]);
        });
        return text;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, isReady }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    return context;
};
