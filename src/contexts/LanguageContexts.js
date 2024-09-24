import { createContext, useContext, useState } from 'react';


export const useLanguageContext = () => {
  const [language, setLanguage] = useState();
  return { language, setLanguage };
}


const languageCode = localStorage.getItem('i18nextLng')?? 'en'

export const LanguageContext = createContext(languageCode);


export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

