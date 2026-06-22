import Link from "next/link";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const Arrow = isRTL ? FaArrowLeft : FaArrowRight;

  const stats = [
    { value: "200+", label: t.hero.stats.pages },
    { value: "3.5x", label: t.hero.stats.engagement },
    { value: "500+", label: t.hero.stats.campaigns },
    { value: "4.8x", label: t.hero.stats.roi },
  ];

  return (
    <section className="relative hero-gradient text-white overflow-hidden min-h-screen flex items-center">
      {/* Decorative orbs */}
      <div className={`absolute top-20 w-72 h-72 bg-pixly-accent/10 rounded-full blur-3xl animate-float pointer-events-none ${isRTL ? "left-10" : "right-10"}`} />
      <div className={`absolute bottom-20 w-96 h-96 bg-pixly-primary-light/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none ${isRTL ? "right-10" : "left-10"}`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

      <div className="container relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-pixly-accent text-sm font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-pixly-accent animate-pulse" />
            {t.hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/#contact" passHref>
              <a className="btn-primary group">
                {t.hero.ctaPrimary}
                <Arrow className={`transition-transform duration-300 ${isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} size={14} />
              </a>
            </Link>
            <Link href="/#portfolio" passHref>
              <a className="btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-pixly-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
