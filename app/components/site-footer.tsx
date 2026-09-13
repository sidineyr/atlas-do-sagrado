import { Code2, ContactRound, Newspaper } from "lucide-react";
import Link from "next/link";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className={compact ? "footer compact-footer" : "footer"}>
      <div>
        <strong>Atlas do Sagrado</strong>
        <p>Idealizado por Sidiney Rodrigues · Criado com ChatGPT.</p>
      </div>
      <nav className="footer-links" aria-label="Autoria e créditos">
        <a href="https://github.com/sidineyr" target="_blank" rel="noreferrer"><Code2 aria-hidden="true" size={16} />GitHub</a>
        <a href="https://www.linkedin.com/in/sidineyrodrigues" target="_blank" rel="noreferrer"><ContactRound aria-hidden="true" size={16} />LinkedIn</a>
        <a href="https://sidineyr.substack.com" target="_blank" rel="noreferrer"><Newspaper aria-hidden="true" size={16} />Substack</a>
        <Link href="/creditos">Créditos e fontes</Link>
      </nav>
    
      <p style={{ width: '100%', marginTop: '0.65rem', fontSize: '0.75rem', lineHeight: 1.5, opacity: 0.72 }}>
        Este projeto nasceu do desejo de ensinar e cuidar. Se ele tocou você,{' '}
        <a href="https://pequenoprincipe.org.br/doadores/apoie-o-pequeno-principe/" target="_blank" rel="noopener noreferrer">
          considere doar diretamente ao Hospital Pequeno Príncipe
        </a>. Iniciativa voluntária, independente e sem intermediação financeira.
      </p>
</footer>
  );
}
