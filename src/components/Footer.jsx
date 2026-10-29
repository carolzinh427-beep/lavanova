import { company } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-dim text-xs tracking-wide">
          © 2026 {company.name}. Todos os direitos reservados.
        </p>
        <p className="text-dim text-xs tracking-wide">
          Estética automotiva de alto padrão.
        </p>
      </div>
    </footer>
  );
}
