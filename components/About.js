import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-pixly-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pixly-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Logo showcase */}
          <div className="w-full lg:w-2/5">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-pixly-accent/20 via-transparent to-pixly-primary/10 rounded-full blur-2xl" />
              <div className="relative rounded-4xl p-8 md:p-10 bg-gradient-to-br from-pixly-surface via-white to-pixly-surface border border-pixly-accent/20 shadow-card-hover">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-pixly-accent/40 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pixly-accent/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pixly-accent/40 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-pixly-accent/40 rounded-br-lg" />
                <Image
                  src="/pixlylogo.png"
                  alt="Pixly"
                  width={320}
                  height={320}
                  className="w-full h-auto mx-auto drop-shadow-xl hover:scale-[1.02] transition-transform duration-500 ease-premium"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-pixly-primary text-pixly-accent text-xs font-bold tracking-wide shadow-lg whitespace-nowrap border border-pixly-accent/30">
                بكسلي | Pixly
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <span className="section-label">{t.about.label}</span>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-subtitle !max-w-none">{t.about.description}</p>
            <Link href="/#contact" passHref>
              <a className="btn-outline mt-8">{t.about.cta}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
