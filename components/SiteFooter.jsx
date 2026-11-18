import { Link } from "@tanstack/react-router";
import Logo from "@/components/Logo";
import LegalNotice from "@/components/LegalNotice";
import { products } from "@/lib/products";
import { Instagram, Linkedin, Youtube, MapPin } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram fictício", href: "https://www.instagram.com/" },
  { icon: Linkedin, label: "LinkedIn fictício", href: "https://www.linkedin.com/" },
  { icon: Youtube, label: "YouTube fictício", href: "https://www.youtube.com/" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Telemedicina de folga desde 2019. Atendemos com a seriedade de um conselho médico e a
              agilidade de um grupo de WhatsApp da família.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Planos</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/checkout"
                    search={{ plano: p.slug }}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Institucional</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" hash="simulador" className="transition-colors hover:text-primary">
                  Simulador de atendimento
                </Link>
              </li>
              <li>
                <Link to="/" hash="depoimentos" className="transition-colors hover:text-primary">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-primary">
                  Sobre esta ficção
                </Link>
              </li>
              <li>
                <a href="https://www.gov.br/" target="_blank" rel="noreferrer noopener" className="transition-colors hover:text-primary">
                  Trabalhe conosco (de verdade)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-primary">
                  Aviso legal completo
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-primary">
                  Termos de uso imaginários
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="transition-colors hover:text-primary">
                  Política de privacidade que não existe
                </Link>
              </li>
              <li className="flex items-start gap-2 pt-2 text-xs leading-relaxed">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                Av. Paulista, 1000 — 14º andar imaginário, São Paulo/SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <LegalNotice />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atestado Express S/A (fictícia). CNPJ 00.000.000/0001-00.</p>
          <p className="font-mono uppercase tracking-[0.12em]">
            CRM-SP 000.000 · Responsável técnico: Dr. Placebo
          </p>
        </div>
      </div>
    </footer>
  );
}