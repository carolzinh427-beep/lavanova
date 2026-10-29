import { benefits } from "../data/content";

export default function BenefitsSection() {
  return (
    <section className="relative bg-bgAlt py-28 md:py-40 border-y border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <p className="text-dim text-sm tracking-wide2 uppercase mb-4">Diferenciais</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-xl text-balance">
            O que sustenta nosso padrão.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {benefits.map((item, i) => (
            <div key={item} className="border-t border-line pt-6">
              <span className="text-dim text-xs tracking-wide2 uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-text font-light leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
