import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { FaStar } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const testimonialKeys = ["sarah", "ahmed", "fatima", "omar"];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-pixly-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">{t.testimonials.label}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle mx-auto">{t.testimonials.subtitle}</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="testimonials-swiper"
        >
          {testimonialKeys.map((key) => {
            const item = t.testimonials.items[key];
            return (
              <SwiperSlide key={key}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-pixly-accent text-sm" />
                    ))}
                  </div>
                  <blockquote className="text-pixly-text-secondary leading-relaxed flex-grow mb-6 pt-8">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4 pt-4 border-t border-pixly-surface-dark">
                    <div className="w-12 h-12 rounded-full bg-pixly-primary flex items-center justify-center text-white font-bold text-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-pixly-primary">
                        {item.name}
                      </div>
                      <div className="text-sm text-pixly-muted">{item.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
