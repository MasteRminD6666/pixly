import Link from "next/link";
import React from "react";
import {
  FaPalette,
  FaHashtag,
  FaPenFancy,
  FaBullhorn,
  FaChartBar,
  FaAward,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const serviceIcons = {
  creativeDesign: FaPalette,
  socialMedia: FaHashtag,
  contentCreation: FaPenFancy,
  advertising: FaBullhorn,
  reporting: FaChartBar,
  brandIdentity: FaAward,
};

const serviceKeys = [
  "creativeDesign",
  "socialMedia",
  "contentCreation",
  "advertising",
  "reporting",
  "brandIdentity",
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-pixly-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">{t.services.label}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const service = t.services.items[key];
            return (
              <div
                key={key}
                className="card-base group cursor-default text-center sm:text-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto sm:mx-0 rounded-full border-2 border-pixly-accent flex items-center justify-center mb-5 bg-pixly-accent/10 group-hover:bg-pixly-accent/20 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="text-xl text-pixly-accent" />
                </div>
                <h3 className="text-lg font-bold text-pixly-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-pixly-text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/#contact" passHref>
            <a className="btn-outline">{t.services.cta}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
