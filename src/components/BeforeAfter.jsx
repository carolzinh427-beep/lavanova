import { useRef, useState, useEffect, useCallback } from "react";
import { beforeAfter } from "../data/content";

export default function BeforeAfter() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="resultados" className="relative bg-bg py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center">
        <p className="text-dim text-sm tracking-wide2 uppercase mb-4">Resultados</p>
        <h2 className="font-display text-3xl md:text-5xl text-balance">
          A diferença real em cada detalhe.
        </h2>
        <p className="text-dim text-base max-w-xl mx-auto mt-4 font-light">
          Compare o estado da pintura antes e depois do nosso tratamento de correção e vitrificação cerâmica.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div
          ref={containerRef}
          className="relative w-full aspect-video select-none border border-line overflow-hidden cursor-ew-resize rounded-sm shadow-2xl"
          onPointerDown={handlePointerDown}
        >
          {/* CAMADA DEPOIS (LIMPO / ESPELHADO) - Fica no fundo ocupando 100% */}
          <img
            src={beforeAfter.after}
            alt="Veículo após o detalhamento e vitrificação cerâmica, acabamento impecável e espelhado"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* CAMADA ANTES (SUJO / OPACO) - Fica sobreposta e cortada pelo clipPath exato */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
            }}
          >
            <img
              src={beforeAfter.before}
              alt="Veículo antes do detalhamento, coberto de poeira e lama na lataria e roda"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* LINHA DIVISÓRIA COM CONTROLE CENTRAL */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-accent z-20 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full border-2 border-accent bg-bg/95 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-150 hover:scale-110">
              <span className="text-accent text-xs font-bold tracking-widest">↔</span>
            </div>
          </div>

          {/* BADGES INFORMATIVOS */}
          <div className="absolute top-4 left-4 z-20 bg-bg/85 backdrop-blur-md border border-line px-3.5 py-1.5 text-xs uppercase tracking-wide2 text-dim flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600/80"></span>
            <span>Antes: Pintura suja & opaca</span>
          </div>
          <div className="absolute top-4 right-4 z-20 bg-bg/85 backdrop-blur-md border border-line px-3.5 py-1.5 text-xs uppercase tracking-wide2 text-accent flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span>Depois: Vitrificação & brilho espelho</span>
          </div>
        </div>

        <p className="text-dim text-sm text-center mt-6 font-light flex items-center justify-center gap-2">
          <span>←</span>
          <span>Arraste a linha para comparar a transformação da lataria e rodas</span>
          <span>→</span>
        </p>
      </div>
    </section>
  );
}
