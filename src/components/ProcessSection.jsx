import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { processSteps } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const steps = sectionRef.current.querySelectorAll("[data-step]");

      steps.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      if (!reduced) {
        steps.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 80%" },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={sectionRef} className="relative bg-bg py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <p className="text-dim text-sm tracking-wide2 uppercase mb-4">O processo</p>
        <h2 className="font-display text-3xl md:text-5xl max-w-xl text-balance">
          Cada etapa tem um propósito.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">
        <div className="hidden md:block sticky top-24 h-[60vh]">
          {processSteps.map((step, i) => (
            <img
              key={step.number}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 border border-line pointer-events-none" />
        </div>

        <div className="flex flex-col gap-28 md:gap-40">
          {processSteps.map((step, i) => (
            <div key={step.number} data-step className="opacity-100">
              <span className="font-display text-dim text-6xl md:text-7xl block mb-6">
                {step.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{step.title}</h3>
              <p className="text-dim max-w-sm leading-relaxed font-light">{step.text}</p>

              <img
                src={step.image}
                alt={step.title}
                className="md:hidden mt-8 w-full h-64 object-cover border border-line"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
