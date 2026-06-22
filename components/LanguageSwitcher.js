import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({ className = "" }) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center rounded-full border border-white/20 overflow-hidden ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
          locale === "en"
            ? "bg-pixly-accent text-pixly-primary"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ar")}
        className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
          locale === "ar"
            ? "bg-pixly-accent text-pixly-primary"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
        aria-pressed={locale === "ar"}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
