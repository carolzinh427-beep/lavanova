import { useEffect, useState } from "react";
import { company, whatsappMessage } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Processo", href: "#processo" },
    { label: "Serviços", href: "#servicos" },
    { label: "Resultados", href: "#resultados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-wide2 uppercase">
          {company.name}
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm text-dim">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${company.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-sm border border-line px-5 py-2.5 hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
