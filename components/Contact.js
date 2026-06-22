import React, { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const serviceOptionKeys = [
  "creativeDesign",
  "socialMedia",
  "contentCreation",
  "advertising",
  "reporting",
  "brandIdentity",
  "other",
];

const Contact = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1200);
  };

  const whatsappUrl = `https://wa.me/962790830635?text=${encodeURIComponent(
    t.contact.whatsappMessage
  )}`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-base text-center py-16">
                <div className="w-16 h-16 rounded-full bg-pixly-accent/20 flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-pixly-accent text-2xl" />
                </div>
                <p className="text-lg font-semibold text-pixly-primary">
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pixly-text-primary mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pixly-text-primary mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-pixly-text-primary mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-pixly-text-primary mb-2">
                      {t.contact.form.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">{t.contact.form.servicePlaceholder}</option>
                      {serviceOptionKeys.map((key) => (
                        <option key={key} value={key}>
                          {t.contact.services[key]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pixly-text-primary mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {sending ? t.contact.form.sending : t.contact.form.submit}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <div className="font-semibold text-pixly-primary">
                  {t.contact.whatsapp}
                </div>
                <div className="text-sm text-pixly-muted">
                  {t.contact.info.phone}
                </div>
              </div>
            </a>

            <div className="card-base space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pixly-primary/5 flex items-center justify-center">
                  <FaEnvelope className="text-pixly-primary" />
                </div>
                <div>
                  <div className="text-sm text-pixly-muted">Email</div>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="font-medium text-pixly-primary hover:text-pixly-accent transition-colors"
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pixly-primary/5 flex items-center justify-center">
                  <FaPhone className="text-pixly-primary" />
                </div>
                <div>
                  <div className="text-sm text-pixly-muted">Phone</div>
                  <a
                    href={`tel:${t.contact.info.phone.replace(/\s/g, "")}`}
                    className="font-medium text-pixly-primary hover:text-pixly-accent transition-colors"
                  >
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pixly-primary/5 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-pixly-primary" />
                </div>
                <div>
                  <div className="text-sm text-pixly-muted">Location</div>
                  <div className="font-medium text-pixly-primary">
                    {t.contact.info.location}
                  </div>
                </div>
              </div>
            </div>

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
                  className="w-11 h-11 rounded-xl bg-pixly-primary/5 flex items-center justify-center text-pixly-primary hover:bg-pixly-accent hover:text-pixly-primary-dark transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
