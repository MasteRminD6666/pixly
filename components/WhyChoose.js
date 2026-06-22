import React from "react";
import { FaFacebookF, FaRobot, FaGlobe, FaChartLine } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const featureIcons = {
  facebook: FaFacebookF,
  ai: FaRobot,
  bilingual: FaGlobe,
  results: FaChartLine,
};

const featureKeys = ["facebook", "ai", "bilingual", "results"];
const statKeys = ["pages", "engagement", "campaigns", "roi"];

const WhyChoose = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">{t.whyChoose.label}</span>
          <h2 className="section-title !text-white">{t.whyChoose.title}</h2>
          <p className="section-subtitle mx-auto !text-white/70">
            {t.whyChoose.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {statKeys.map((key) => {
            const stat = t.whyChoose.stats[key];
            return (
              <div
                key={key}
                className="text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-pixly-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key) => {
            const Icon = featureIcons[key];
            const feature = t.whyChoose.features[key];
            return (
              <div
                key={key}
                className="p-6 rounded-2xl border border-white/10 hover:border-pixly-accent/30 hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-pixly-accent/20 flex items-center justify-center mb-4">
                  <Icon className="text-pixly-accent text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
