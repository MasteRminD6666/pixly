import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../locales/en";
import ar from "../locales/ar";

const translations = { en, ar };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pixly-locale");
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    localStorage.setItem("pixly-locale", locale);
  }, [locale, mounted]);

  const setLocale = useCallback((lang) => {
    if (lang === "en" || lang === "ar") {
      setLocaleState(lang);
    }
  }, []);

  const t = translations[locale];
  const isRTL = locale === "ar";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
