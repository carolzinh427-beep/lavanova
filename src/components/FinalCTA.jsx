import { company, whatsappMessage } from "../data/content";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative bg-bgAlt border-t border-line py-28 md:py-40"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-balance mb-6">
          Seu veículo merece um padrão superior de cuidado.
        </h2>

        <a
          href={`https://wa.me/${company.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-accent text-bg px-10 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
        >
          Agendar pelo WhatsApp
        </a>

        <div className="grid sm:grid-cols-3 gap-8 mt-20 text-left">
          <div className="border-t border-line pt-6">
            <p className="text-dim text-xs tracking-wide2 uppercase mb-2">Telefone</p>
            <p className="font-light">{company.phoneDisplay}</p>
          </div>
          <div className="border-t border-line pt-6">
            <p className="text-dim text-xs tracking-wide2 uppercase mb-2">Endereço</p>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light hover:text-accent transition-colors duration-300"
            >
              {company.address}
            </a>
          </div>
          <div className="border-t border-line pt-6">
            <p className="text-dim text-xs tracking-wide2 uppercase mb-2">Horário</p>
            <p className="font-light">{company.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
