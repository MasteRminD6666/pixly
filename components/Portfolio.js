import React, { useState } from "react";
import { FaExternalLinkAlt, FaFacebookF, FaRobot } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const projectData = [
  { key: "luxe", filter: "facebook", gradient: "from-[#1877F2] to-blue-900" },
  { key: "cafe", filter: "facebook", gradient: "from-amber-500 to-orange-700" },
  { key: "tech", filter: "ai", gradient: "from-pixly-primary to-teal-800" },
  { key: "wellness", filter: "ads", gradient: "from-rose-400 to-pink-700" },
  { key: "ecommerce", filter: "ads", gradient: "from-violet-500 to-purple-800" },
  { key: "restaurant", filter: "ai", gradient: "from-pixly-accent/80 to-amber-700" },
];

const filterKeys = ["all", "facebook", "ai", "ads"];

const filterIcons = {
  facebook: FaFacebookF,
  ai: FaRobot,
};

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projectData
      : projectData.filter((p) => p.filter === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="section-label">{t.portfolio.label}</span>
          <h2 className="section-title">{t.portfolio.title}</h2>
          <p className="section-subtitle mx-auto">{t.portfolio.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterKeys.map((key) => {
            const Icon = filterIcons[key];
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`filter-btn flex items-center gap-2 ${
                  activeFilter === key ? "filter-btn-active" : "filter-btn-inactive"
                }`}
              >
                {Icon && <Icon size={12} />}
                {t.portfolio.filters[key]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const info = t.portfolio.projects[project.key];
            return (
              <article
                key={project.key}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                <div className="absolute inset-0 bg-pixly-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.filter === "facebook" ? (
                    <FaFacebookF className="text-6xl text-white/15" />
                  ) : project.filter === "ai" ? (
                    <FaRobot className="text-6xl text-white/15" />
                  ) : (
                    <span className="text-6xl font-bold text-white/10 select-none">
                      {info.title.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="portfolio-overlay">
                  <span className="text-pixly-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {info.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {info.title}
                  </h3>
                  <button className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-pixly-accent transition-colors">
                    {t.portfolio.viewProject}
                    <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
