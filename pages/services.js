import React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="hero-gradient text-white pt-28 pb-16">
        <div className="container text-center">
          <span className="section-label">{t.services.label}</span>
          <h1 className="text-4xl md:text-5xl font-bold">{t.services.title}</h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
};

export default ServicesPage;
