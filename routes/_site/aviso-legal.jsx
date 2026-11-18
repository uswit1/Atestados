import { createFileRoute, Link } from "@tanstack/react-router";
import LegalNotice from "@/components/LegalNotice";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/_site/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal — Atestado Express" },
      {
        name: "description",
        content:
          "Este site é uma obra de ficção e humor. Não comercializamos, emitimos ou validamos atestados médicos.",
      },
    ],
  }),
  component: LegalPage,
});

const efeitos = [
  "súbita vontade de não abrir o Slack",
  "alegria leve ao ver o e-mail do chefe sem responder",
  "sensação de que a segunda-feira passou mais rápido",
  "desejo compulsivo de comprar outro plano fictício",
  "leve tendência a dizer “estava no médico” em qualquer contexto",
];

export default function LegalPage() {
  return (
    <section className="shell max-w-4xl py-12 sm:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Voltar ao início
      </Link>

      <div className="mt-6">
        <p className="eyebrow">Transparência ficcional</p>
        <h1 className="display mt-3 text-[clamp(2rem,4.5vw,3rem)]">
          Aviso legal, escrito por gente honesta
        </h1>
      </div>

      <div className="mt-8">
        <LegalNotice variant="full" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
              Efeitos colaterais
            </p>
          </div>
          <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
            {efeitos.map((e) => (
              <li key={e} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-white p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
            O que este site não faz
          </p>
          <ul className="mt-4 space-y-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              Não emite, valida ou vende atestados médicos.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              Não processa pagamentos nem coleta dados de cartão.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              Não envia nenhum dado para empresas, hospitais ou para o seu chefe.
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              Não substitui avaliação médica de verdade. Nunca.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-primary px-7 py-8 text-primary-foreground">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
          Se o cansaço for real
        </p>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/90">
          Exaustão, ansiedade e burnout são coisas sérias. Se você está passando por isso, procure um
          profissional de saúde de verdade — e, se puder, uma conversa honesta com quem lidera a sua
          equipe. A gente faz piada, mas não faz vista grossa.
        </p>
      </div>
    </section>
  );
}