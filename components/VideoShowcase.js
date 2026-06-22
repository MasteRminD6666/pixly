import React, { useRef, useEffect } from "react";
import { FaCrown, FaBullseye, FaChartLine } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const featureIcons = {
  first: FaCrown,
  strategy: FaBullseye,
  growth: FaChartLine,
};

const featureKeys = ["first", "strategy", "growth"];

const VideoShowcase = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden flyer-gradient text-white">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none flyer-dots" />
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-15 pointer-events-none flyer-dots" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-pixly-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <div className="order-1 lg:order-none">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-pixly-accent via-pixly-accent-light to-pixly-accent rounded-3xl opacity-80 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-pixly-accent to-pixly-accent-dark shadow-glow">
                <div className="relative rounded-[1.35rem] overflow-hidden bg-pixly-primary-dark aspect-video">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    className="w-full h-full object-cover"
                    aria-label={t.video.ariaLabel}
                  >
                    <source src="/Pixly.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pixly-primary-dark/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-pixly-accent text-pixly-primary-dark text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                {t.video.badge}
              </div>
            </div>
          </div>

          {/* About content from flyer */}
          <div>
            <span className="section-label !text-pixly-accent">{t.video.label}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {t.video.title}
            </h2>

            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-pixly-accent/60 bg-pixly-accent/10 text-pixly-accent text-sm font-semibold mb-6">
              {t.video.highlight}
            </div>

            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8">
              {t.video.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {featureKeys.map((key) => {
                const Icon = featureIcons[key];
                const feature = t.video.features[key];
                return (
                  <div
                    key={key}
                    className="text-center p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-pixly-accent/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-pixly-accent flex items-center justify-center bg-pixly-accent/10 shadow-glow">
                      <Icon className="text-pixly-accent text-lg" />
                    </div>
                    <h3 className="text-sm font-bold text-pixly-accent mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative px-6 py-5 border border-pixly-accent/30 rounded-xl bg-white/5">
              <span className="absolute top-2 left-3 text-pixly-accent text-2xl font-serif leading-none">&ldquo;</span>
              <span className="absolute bottom-2 right-3 text-pixly-accent text-2xl font-serif leading-none">&rdquo;</span>
              <p className="text-sm md:text-base text-white/80 leading-relaxed text-center italic px-4">
                {t.video.mission}
              </p>
            </div>
          </div>
        </div>

        {/* Slogan banner */}
        <div className="mt-14 md:mt-20 flex justify-center">
          <div className="inline-flex items-center px-8 py-4 md:px-12 md:py-5 rounded-2xl border-2 border-pixly-accent/50 bg-pixly-accent/10 backdrop-blur-sm">
            <p className="text-lg md:text-xl font-bold text-center gradient-text">
              {t.video.slogan}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
