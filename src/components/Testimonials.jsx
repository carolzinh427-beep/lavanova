import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="relative bg-bg py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <p className="text-dim text-sm tracking-wide2 uppercase mb-4">Depoimentos</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-xl text-balance">
            A percepção de quem já passou por aqui.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-t border-line pt-8">
              <blockquote className="text-text font-light leading-relaxed text-lg">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-dim">
                {t.name} — {t.vehicle}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
