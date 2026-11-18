import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    texto:
      "Consegui faltar numa segunda e ainda fui promovido. Tomei a vaga do colega que foi à reunião no meu lugar.",
    nome: "Bruno L.",
    cargo: "Analista Pleno (agora Sênior)",
  },
  {
    texto:
      "Meu chefe nem percebeu a ausência. Descobri depois que ele também comprou o plano, com desconto.",
    nome: "Camila R.",
    cargo: "Designer de Produto",
  },
  {
    texto:
      "Uso desde 2024. Nunca mais vi uma segunda-feira de perto e minha taxa de “ok” no chat caiu 94%.",
    nome: "Rodrigo M.",
    cargo: "Coordenador de Nada em Específico",
  },
  {
    texto:
      "A assinatura digital é tão ilegível quanto a do médico real do meu plano de saúde. Autenticidade impecável.",
    nome: "Fernanda S.",
    cargo: "Recursos Humanos",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 border-y border-border bg-muted/40 py-16 sm:py-20">
      <div className="shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Depoimentos fictícios</p>
            <h2 className="display balance mt-3 max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)]">
              Histórias de quem sobreviveu a uma segunda-feira.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
              4,9 de 5 · 1.204 avaliações inventadas
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-shadow hover:shadow-[0_24px_48px_-34px_rgba(16,64,72,0.3)]"
            >
              <Quote className="h-6 w-6 text-primary/25" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-mint font-mono text-[11px] font-bold text-primary">
                  {d.nome.slice(0, 1)}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">{d.nome}</p>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted-foreground">
                    {d.cargo}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Todas as pessoas acima são personagens. Nenhum Bruno foi promovido.
        </p>
      </div>
    </section>
  );
}