import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#facebook-pages", label: t.nav.facebookPages },
    { href: "/#ai-marketing", label: t.nav.aiMarketing },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-pixly-primary-dark text-white">
      {/* CTA Banner */}
      <div className="container py-16 md:py-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pixly-accent/90 to-pixly-accent-light/80" />
          <div className="absolute inset-0 bg-pixly-primary/20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-pixly-primary mb-2">
                {t.footer.ctaTitle}
              </h3>
              <p className="text-pixly-primary/80">{t.footer.ctaSubtitle}</p>
            </div>
            <Link href="/#contact" passHref>
              <a className="inline-flex items-center px-8 py-3.5 bg-pixly-primary text-white font-semibold rounded-full hover:bg-pixly-primary-dark transition-all duration-300 hover:shadow-lg active:scale-[0.98] whitespace-nowrap">
                {t.footer.ctaButton}
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Brand showcase */}
      <div className="border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 flyer-dots opacity-30 pointer-events-none" />
        <div className="container relative z-10 py-14 md:py-16 flex flex-col items-center text-center">
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-pixly-accent/25 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative p-2 rounded-full ring-2 ring-pixly-accent/30 ring-offset-4 ring-offset-pixly-primary-dark">
              <Image
                src="/pixly_transprent.png"
                alt="Pixly"
                width={160}
                height={160}
                className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <p className="text-lg md:text-xl font-bold text-pixly-accent mb-2">
            {t.footer.tagline}
          </p>
          <p className="text-sm text-white/50 max-w-md leading-relaxed">
            {t.footer.description}
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-white/10">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" passHref>
                <a className="flex items-center gap-3 mb-4 group">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-pixly-accent/20 group-hover:ring-pixly-accent/50 transition-all">
                    <Image src="/logo.png" alt="Pixly" layout="fill" objectFit="cover" />
                  </div>
                  <span className="text-xl font-bold">pixly</span>
                </a>
              </Link>
              <p className="text-sm text-white/50 leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-pixly-accent mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} passHref>
                      <a className="text-sm text-white/60 hover:text-pixly-accent transition-colors duration-300">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-pixly-accent mb-4">
                {t.footer.contact}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-pixly-accent transition-colors"
                  >
                    <FaEnvelope size={14} />
                    {t.contact.info.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${t.contact.info.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-pixly-accent transition-colors"
                  >
                    <FaPhone size={14} />
                    {t.contact.info.phone}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-pixly-accent mb-4">
                {t.footer.followUs}
              </h4>
              <div className="flex gap-3">
                {[
                  { Icon: FaInstagram, href: "https://www.instagram.com/pixlypixel?igsh=MXE1bDYwdW1ua3BpMg==" },
                  { Icon: FaLinkedinIn, href: "https://linkedin.com" },
                  { Icon: FaTwitter, href: "https://twitter.com" },
                  { Icon: FaTiktok, href: "https://tiktok.com" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-pixly-accent hover:text-pixly-primary transition-all duration-300"
                    aria-label="Social link"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            &copy; {year} Pixly. {t.footer.rights}
          </span>
          <span className="text-pixly-accent/60">بكسلي | Pixly</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
