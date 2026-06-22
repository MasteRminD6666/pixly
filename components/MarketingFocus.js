import React from "react";
import {
  FaFacebookF,
  FaRobot,
  FaChartLine,
  FaMagic,
  FaBullseye,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const MarketingFocus = () => {
  const { t } = useLanguage();

  const facebookFeatures = ["setup", "content", "engagement", "ads"];
  const aiFeatures = ["targeting", "copy", "scheduling", "insights"];

  return (
    <section className="section-padding bg-white">
      <div className="container space-y-20">
        {/* Facebook Pages */}
        <div id="facebook-pages" className="scroll-mt-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="section-label flex items-center gap-2">
                <FaFacebookF size={14} />
                {t.marketingFocus.facebook.label}
              </span>
              <h2 className="section-title">{t.marketingFocus.facebook.title}</h2>
              <p className="section-subtitle !max-w-none">
                {t.marketingFocus.facebook.subtitle}
              </p>
              <ul className="mt-8 space-y-4">
                {facebookFeatures.map((key) => {
                  const item = t.marketingFocus.facebook.features[key];
                  return (
                    <li key={key} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center shrink-0">
                        <FaBullseye className="text-[#1877F2]" size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixly-primary">{item.title}</h3>
                        <p className="text-sm text-pixly-text-secondary mt-0.5">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1877F2] to-pixly-primary p-8 md:p-10 text-white shadow-card-hover">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                <FaFacebookF className="text-5xl mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-3">{t.marketingFocus.facebook.cardTitle}</h3>
                <p className="text-white/75 leading-relaxed mb-6">{t.marketingFocus.facebook.cardText}</p>
                <div className="grid grid-cols-2 gap-4">
                  {t.marketingFocus.facebook.stats.map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-pixly-accent">{stat.value}</div>
                      <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Marketing */}
        <div id="ai-marketing" className="scroll-mt-28">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <span className="section-label flex items-center gap-2">
                <FaRobot size={14} />
                {t.marketingFocus.ai.label}
              </span>
              <h2 className="section-title">{t.marketingFocus.ai.title}</h2>
              <p className="section-subtitle !max-w-none">
                {t.marketingFocus.ai.subtitle}
              </p>
              <ul className="mt-8 space-y-4">
                {aiFeatures.map((key) => {
                  const item = t.marketingFocus.ai.features[key];
                  return (
                    <li key={key} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-pixly-accent/15 flex items-center justify-center shrink-0">
                        <FaMagic className="text-pixly-accent" size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixly-primary">{item.title}</h3>
                        <p className="text-sm text-pixly-text-secondary mt-0.5">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden hero-gradient p-8 md:p-10 text-white shadow-card-hover border border-pixly-accent/20">
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-pixly-accent/20 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-6">
                  <FaRobot className="text-4xl text-pixly-accent" />
                  <span className="px-3 py-1 rounded-full bg-pixly-accent/20 text-pixly-accent text-xs font-bold uppercase tracking-wider">
                    AI Powered
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.marketingFocus.ai.cardTitle}</h3>
                <p className="text-white/75 leading-relaxed mb-6">{t.marketingFocus.ai.cardText}</p>
                <div className="space-y-3">
                  {t.marketingFocus.ai.tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                      <FaChartLine className="text-pixly-accent shrink-0" />
                      <span className="text-sm text-white/80">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFocus;
