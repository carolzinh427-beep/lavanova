import { useRef, useState, useCallback } from "react";
import { beforeAfter } from "../data/content";

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = () => (dragging.current = true);
  const onMouseUp = () => (dragging.current = false);
  const onMouseMove = (e) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const onTouchMove = (e) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section id="resultados" className="relative bg-bg py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center">
        <p className="text-dim text-sm tracking-wide2 uppercase mb-4">Resultados</p>
        <h2 className="font-display text-3xl md:text-5xl text-balance">
          A diferença está nos detalhes.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={containerRef}
          className="relative w-full h-[60vh] select-none border border-line overflow-hidden cursor-ew-resize"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          <img
            src={beforeAfter.after}
            alt="Veículo após o detalhamento, com acabamento impecável"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={beforeAfter.before}
              alt="Veículo antes do detalhamento, com sujeira aparente"
              className="absolute inset-0 h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth || "100%" }}
              draggable={false}
            />
          </div>

          <div
            className="absolute top-0 bottom-0 w-px bg-accent"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 border border-accent bg-bg flex items-center justify-center">
              <span className="text-accent text-xs">↔</span>
            </div>
          </div>

          <span className="absolute top-4 left-4 text-xs tracking-wide2 uppercase text-dim">
            Antes
          </span>
          <span className="absolute top-4 right-4 text-xs tracking-wide2 uppercase text-dim">
            Depois
          </span>
        </div>

        <p className="text-dim text-sm text-center mt-6 font-light">
          Arraste para comparar
        </p>
      </div>
    </section>
  );
}
