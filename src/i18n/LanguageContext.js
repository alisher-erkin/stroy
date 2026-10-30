import { createContext, useContext, useEffect, useState } from 'react';
import translations from './translations';

const STORAGE_KEY = 'tastroy-lang';
const LANGUAGES = ['ru', 'uz'];

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch (e) {
    // localStorage недоступен (приватный режим и т.п.) — используем русский
  }
  return 'ru';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // не удалось сохранить выбор — не критично
    }
  }, [lang, t]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
