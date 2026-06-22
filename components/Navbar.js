import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaRobot } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "/", label: t.nav.home, icon: null },
    { href: "/#facebook-pages", label: t.nav.facebookPages, icon: FaFacebookF },
    { href: "/#ai-marketing", label: t.nav.aiMarketing, icon: FaRobot },
    { href: "/#services", label: t.nav.services, icon: null },
    { href: "/#portfolio", label: t.nav.results, icon: null },
    { href: "/#contact", label: t.nav.contact, icon: null },
  ];

  const closeMenu = () => setNavOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || navOpen ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Brand */}
        <Link href="/" passHref>
          <a className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-pixly-accent/30 group-hover:ring-pixly-accent transition-all duration-300 shrink-0">
              <img
                src="/logo.png"
                alt="Pixly"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                pixly
              </span>
              <span className="block text-[10px] md:text-xs text-pixly-accent/90 font-medium mt-0.5">
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
                  {link.icon && <link.icon size={13} className="opacity-70" />}
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

        {/* Mobile toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            className="p-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
          >
            {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden fixed inset-0 top-0 bg-pixly-primary/98 backdrop-blur-xl transition-all duration-500 ease-premium ${
          navOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-1 px-6">
          <p className="text-pixly-accent text-sm font-semibold mb-4 flex items-center gap-2">
            <FaRobot size={14} />
            {t.nav.tagline}
          </p>
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href} passHref>
              <a
                onClick={closeMenu}
                className="flex items-center gap-3 text-xl font-semibold text-white/90 hover:text-pixly-accent transition-all duration-300 py-3"
              >
                {link.icon && <link.icon size={18} className="text-pixly-accent/70" />}
                {link.label}
              </a>
            </Link>
          ))}
          <Link href="/#contact" passHref>
            <a onClick={closeMenu} className="btn-primary mt-6 text-lg">
              {t.nav.cta}
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
