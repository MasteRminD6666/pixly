import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaRobot,
  FaHome,
  FaBriefcase,
  FaChartLine,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t, isRTL } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Chevron = isRTL ? FaChevronLeft : FaChevronRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const navLinks = [
    { href: "/", label: t.nav.home, icon: FaHome },
    { href: "/#facebook-pages", label: t.nav.facebookPages, icon: FaFacebookF },
    { href: "/#ai-marketing", label: t.nav.aiMarketing, icon: FaRobot },
    { href: "/#services", label: t.nav.services, icon: FaBriefcase },
    { href: "/#portfolio", label: t.nav.results, icon: FaChartLine },
    { href: "/#contact", label: t.nav.contact, icon: FaEnvelope },
  ];

  const closeMenu = () => setNavOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500 ease-premium ${
          scrolled || navOpen ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container flex items-center justify-between py-3 md:py-4">
          {/* Brand */}
          <Link href="/" passHref>
            <a className="flex items-center gap-2.5 sm:gap-3 group" onClick={closeMenu}>
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-pixly-accent/30 group-hover:ring-pixly-accent transition-all duration-300 shrink-0">
                <img
                  src="/logo.png"
                  alt="Pixly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                  pixly
                </span>
                <span className="hidden sm:block text-[10px] sm:text-xs text-pixly-accent/90 font-medium mt-0.5 max-w-[140px] sm:max-w-none truncate">
                  {t.nav.tagline}
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} passHref>
                  <a className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/80 hover:text-pixly-accent transition-colors duration-300 rounded-lg hover:bg-white/5 whitespace-nowrap">
                    <link.icon size={13} className="opacity-70" />
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden xl:flex items-center gap-3">
            <span className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pixly-accent/15 border border-pixly-accent/25 text-pixly-accent text-xs font-semibold">
              <FaRobot size={11} />
              {t.nav.aiBadge}
            </span>
            <LanguageSwitcher />
            <Link href="/#contact" passHref>
              <a className="btn-primary text-sm !py-2.5 !px-5 whitespace-nowrap">
                {t.nav.cta}
              </a>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex xl:hidden items-center gap-2">
            <LanguageSwitcher className="scale-90 sm:scale-100 origin-right" />
            <button
              type="button"
              className={`relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
                navOpen
                  ? "bg-pixly-accent text-pixly-primary border-pixly-accent shadow-glow"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/15"
              }`}
              onClick={() => setNavOpen(!navOpen)}
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
            >
              {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        className={`xl:hidden fixed inset-0 z-[55] bg-pixly-primary-dark/70 backdrop-blur-sm transition-opacity duration-300 ${
          navOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside
        className={`xl:hidden fixed top-0 bottom-0 z-[58] w-[min(88vw,340px)] flex flex-col bg-gradient-to-b from-pixly-primary-dark via-pixly-primary to-pixly-primary-dark border-white/10 shadow-2xl transition-transform duration-300 ease-premium ${
          isRTL
            ? "left-0 border-r rounded-r-3xl"
            : "right-0 border-l rounded-l-3xl"
        } ${
          navOpen
            ? "translate-x-0"
            : isRTL
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
        aria-hidden={!navOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-pixly-accent/40 shrink-0">
              <img src="/logo.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-white leading-none">pixly</p>
              <p className="text-[11px] text-pixly-accent/90 mt-1 truncate">{t.nav.tagline}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors shrink-0"
            aria-label="Close menu"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* AI badge */}
        <div className="px-5 pt-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pixly-accent/15 border border-pixly-accent/30 text-pixly-accent text-xs font-semibold">
            <FaRobot size={12} />
            {t.nav.aiBadge}
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ animationDelay: navOpen ? `${i * 50}ms` : "0ms" }}
                className={navOpen ? "animate-fade-in-up" : ""}
              >
                <Link href={link.href} passHref>
                  <a
                    onClick={closeMenu}
                    className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-pixly-accent/30 transition-all duration-300"
                  >
                    <span className="w-9 h-9 rounded-xl bg-pixly-accent/15 flex items-center justify-center text-pixly-accent group-hover:bg-pixly-accent/25 transition-colors shrink-0">
                      <link.icon size={15} />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-white/90 group-hover:text-white">
                      {link.label}
                    </span>
                    <Chevron
                      size={12}
                      className="text-white/30 group-hover:text-pixly-accent transition-colors shrink-0"
                    />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="p-5 pt-2 border-t border-white/10 space-y-3 bg-black/10">
          <Link href="/#contact" passHref>
            <a
              onClick={closeMenu}
              className="btn-primary w-full justify-center text-sm !py-3.5"
            >
              {t.nav.cta}
            </a>
          </Link>
          <p className="text-center text-[10px] text-white/40 tracking-wide">
            بكسلي | Pixly
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
