import { Clock, EyeOff, SlidersHorizontal, MousePointerClick } from "lucide-react";

const items = [
  {
    icon: Clock,
    titulo: "Atendimento 24h",
    texto: "Inclusive durante o expediente, que é justamente quando a necessidade aperta.",
  },
  {
    icon: EyeOff,
    titulo: "Sigilo absoluto",
    texto: "Nem o chefe precisa saber. Especialmente o chefe, na verdade.",
  },
  {
    icon: SlidersHorizontal,
    titulo: "Planos personalizados",
    texto: "Escolha quantos dias, qual desculpa e o nível exato de cansaço a ser declarado.",
  },
  {
    icon: MousePointerClick,
    titulo: "Aprovação fictícia",
    texto: "Em poucos cliques, com carimbo, protocolo e toda a burocracia que você merece.",
  },
];

const stats = [
  { valor: "12.480", label: "atestados fictícios emitidos" },
  { valor: "98%", label: "de aprovação imaginária" },
  { valor: "4,9", label: "no Reclame Aqui que não existe" },
  { valor: "0", label: "dias de férias utilizados" },
];

export default function Advantages() {
  return (
    <section className="shell py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Por que a Atestado Express</p>
          <h2 className="display balance mt-3 max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)]">
            A estrutura de um hospital. A agilidade de um grupo de família.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Cada detalhe da nossa operação foi desenhado para parecer extremamente sério — e é
          exatamente isso que torna tudo tão confortável.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.titulo}
            className="group relative rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-32px_rgba(16,64,72,0.35)]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
              0{i + 1}
            </span>
            <div className="mt-5 grid h-11 w-11 place-items-center rounded-2xl bg-mint/70 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-[15px] font-semibold leading-snug text-foreground">
              {item.titulo}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{item.texto}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-6 py-7 text-center">
            <p className="font-display text-4xl leading-none text-primary">{s.valor}</p>
            <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}