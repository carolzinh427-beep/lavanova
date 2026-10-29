import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { heroImage, company, whatsappMessage } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const sheenRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 1.25, filter: "brightness(0.55) saturate(0.85)" },
        { scale: 1, filter: "brightness(1) saturate(1)", ease: "power2.out" },
        0
      );

      tl.fromTo(
        overlayRef.current,
        { opacity: 0.75 },
        { opacity: 0.25, ease: "power2.out" },
        0
      );

      tl.fromTo(
        sheenRef.current,
        { xPercent: -130, opacity: 0.5 },
        { xPercent: 130, opacity: 0, ease: "power1.inOut" },
        0.1
      );

      tl.to(
        [titleRef.current, subRef.current, ctaRef.current],
        { y: -60, opacity: 0, ease: "power1.in" },
        0.35
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Veículo premium em estúdio escuro, destacado por iluminação precisa"
      />

      <div ref={overlayRef} className="absolute inset-0 bg-bg" style={{ opacity: 0.75 }} />

      <div
        ref={sheenRef}
        className="absolute inset-y-0 w-1/3 bg-text/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <p className="text-dim text-sm tracking-wide2 uppercase mb-6">{company.name}</p>

        <h1
          ref={titleRef}
          className="font-display text-text text-5xl md:text-7xl max-w-2xl leading-[1.05] text-balance"
        >
          Precisão em cada detalhe.
        </h1>

        <p ref={subRef} className="text-dim text-base md:text-lg max-w-md mt-6 font-light">
          Estética automotiva de alto padrão para quem exige mais do seu veículo.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4 mt-10">
          <a
            href={`https://wa.me/${company.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-bg px-7 py-3.5 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            Agendar atendimento
          </a>
          <a
            href="#servicos"
            className="border border-line text-text px-7 py-3.5 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Conhecer serviços
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="w-px h-10 bg-line" aria-hidden="true" />
        <span className="text-dim text-[11px] tracking-wide2 uppercase">Role</span>
      </div>
    </section>
  );
}
