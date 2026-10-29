import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { services, company, whatsappMessage } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll("[data-service]");
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 3) * 0.05,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicos" className="relative bg-bg py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <p className="text-dim text-sm tracking-wide2 uppercase mb-4">Serviços</p>
        <h2 className="font-display text-3xl md:text-5xl max-w-xl text-balance">
          Um padrão para cada necessidade do veículo.
        </h2>
      </div>

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line"
      >
        {services.map((service) => (
          <article
            key={service.name}
            data-service
            className="group relative bg-bg p-8 flex flex-col justify-between min-h-[22rem] overflow-hidden"
          >
            <img
              src={service.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-15 transition-opacity duration-500"
            />

            <div className="relative z-10">
              <h3 className="font-display text-xl mb-3">{service.name}</h3>
              <p className="text-dim text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-8 pt-6 border-t border-line">
              <span className="text-dim text-xs tracking-wide uppercase">
                {service.duration}
              </span>
              <a
                href={`https://wa.me/${company.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text hover:text-accent transition-colors duration-300"
              >
                Agendar →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
