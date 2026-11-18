import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Stethoscope, ArrowRight, RotateCcw, ShieldCheck } from "lucide-react";

const MOTIVOS = [
  "Ressaca de fim de semana",
  "Reunião que poderia ser um e-mail",
  "Enxaqueca seletiva",
  "Planilha que travou (e eu também)",
  "Crise existencial das 14h",
  "Compromisso esportivo irrelevante",
];

const nivelTexto = (n) =>
  n < 30
    ? "aceitável (suspeito)"
    : n < 65
      ? "moderado, mas com potencial"
      : n < 85
        ? "avançado com sinais de planilha"
        : "nível planilha fechando o trimestre";

const observacao = (n) => {
  if (n < 30) return "Paciente tecnicamente apto ao trabalho. Infelizmente, a lei não permite o contrário.";
  if (n < 65) return "Recomenda-se um dia de repouso e uma conversa séria com o espelho.";
  if (n < 85) return "Recomenda-se afastamento imediato das reuniões que poderiam ser e-mails.";
  return "Recomenda-se repouso absoluto, terapia e uma revisão honesta do currículo.";
};

export default function Simulator() {
  const [motivo, setMotivo] = useState(MOTIVOS[0]);
  const [dias, setDias] = useState(2);
  const [nivel, setNivel] = useState(72);
  const [chefe, setChefe] = useState("");
  const [erro, setErro] = useState("");
  const [laudo, setLaudo] = useState(null);

  const emitir = () => {
    if (!chefe.trim()) {
      setErro("Precisamos do nome fictício do seu chefe para emitir o laudo.");
      return;
    }
    setErro("");
    setLaudo({
      protocolo: `AE-${Math.floor(100000 + Math.random() * 899999)}`,
      motivo,
      dias,
      nivel,
      chefe: chefe.trim(),
    });
  };

  const reiniciar = () => setLaudo(null);

  return (
    <section id="simulador" className="scroll-mt-24 py-16 sm:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="eyebrow">Simulador de atendimento</p>
          <h2 className="display balance mt-3 text-[clamp(1.9rem,3.6vw,2.9rem)]">
            Quatro campos. Uma dignidade levemente restaurada.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Nosso sistema de triagem analisa o seu caso com a mesma precisão de um formulário do RH e
            devolve um laudo personalizado, com carimbo e protocolo. Nenhum dado é enviado a ninguém,
            porque ninguém existe.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { k: "1", t: "Escolha o motivo da ausência" },
              { k: "2", t: "Defina quantos dias de descanso você merece" },
              { k: "3", t: "Confesse o nível de insatisfação" },
              { k: "4", t: "Nomeie o chefe que não vai saber" },
            ].map((step) => (
              <div key={step.k} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint font-mono text-[10px] font-bold text-primary">
                  {step.k}
                </span>
                <p className="text-sm leading-relaxed text-foreground">{step.t}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 rounded-2xl border border-border bg-muted/60 px-4 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted-foreground">
              Laudo gerado no seu navegador · sem valor legal, com valor emocional
            </p>
          </div>
        </div>

        <div className="panel p-6 sm:p-8">
          {!laudo ? (
            <div className="space-y-7">
              <div>
                <label className="eyebrow">Motivo da ausência</label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {MOTIVOS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMotivo(m)}
                      className={`rounded-full border px-3.5 py-2 text-[12.5px] transition-all ${
                        motivo === m
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label className="eyebrow">Dias de descanso desejados</label>
                  <span className="font-mono text-xs text-foreground">
                    {dias} {dias === 1 ? "dia" : "dias"}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDias(d)}
                      className={`rounded-xl border py-3 font-mono text-sm transition-all ${
                        dias === d
                          ? "border-primary bg-mint text-primary"
                          : "border-border bg-white text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label className="eyebrow">Insatisfação com o trabalho</label>
                  <span className="font-mono text-xs text-foreground">{nivel}%</span>
                </div>
                <Slider
                  value={[nivel]}
                  onValueChange={(v) => setNivel(v[0])}
                  max={100}
                  step={1}
                  className="mt-4"
                />
                <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/80">
                  <span>Tranquilo</span>
                  <span>Peço demissão amanhã</span>
                </div>
              </div>

              <div>
                <label htmlFor="chefe" className="eyebrow">
                  Nome fictício do chefe
                </label>
                <input
                  id="chefe"
                  value={chefe}
                  onChange={(e) => {
                    setChefe(e.target.value);
                    setErro("");
                  }}
                  placeholder="Ex.: Ricardo (o que responde só “ok”)"
                  className="mt-3 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
                {erro && <p className="mt-2 text-xs text-destructive">{erro}</p>}
              </div>

              <button
                type="button"
                onClick={emitir}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Stethoscope className="h-4 w-4" />
                Emitir laudo fictício
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">Atendimento concluído</p>
                <button
                  type="button"
                  onClick={reiniciar}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground hover:text-primary"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Novo laudo
                </button>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-2xl border border-dashed border-primary/30 bg-mist/70 p-6">
                <div className="flex items-start justify-between gap-4 border-b border-dashed border-primary/25 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      Atestado Express · Laudo confidencial
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                      Protocolo {laudo.protocolo} · emitido agora
                    </p>
                  </div>
                  <div className="hidden shrink-0 rotate-[-8deg] rounded border-2 border-primary/50 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary sm:block">
                    Aprovado
                  </div>
                </div>

                <p className="mt-4 font-mono text-[12.5px] leading-relaxed text-foreground">
                  Paciente identificado como “colaborador exemplar” apresenta quadro de{" "}
                  <strong>{laudo.motivo.toLowerCase()}</strong> com necessidade de{" "}
                  <strong>
                    {laudo.dias} {laudo.dias === 1 ? "dia" : "dias"}
                  </strong>{" "}
                  de afastamento. Nível de insatisfação laboral: {laudo.nivel}% (
                  {nivelTexto(laudo.nivel)}).
                </p>
                <p className="mt-3 font-mono text-[12.5px] leading-relaxed text-foreground">
                  Fica suspenso todo contato profissional com{" "}
                  <strong>{laudo.chefe}</strong> durante o período, incluindo mensagens com apenas
                  “ok” e convites de reunião para “alinhar”.
                </p>

                <p className="mt-4 border-t border-dashed border-primary/25 pt-3 text-[13px] italic leading-relaxed text-primary">
                  {observacao(laudo.nivel)}
                </p>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-xl italic text-foreground">Dr. Placebo</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                      CRM fictício 000.000 · assinatura digitalmente ilegível
                    </p>
                  </div>
                  <ShieldCheck className="h-6 w-6 shrink-0 text-primary/60" />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  to="/"
                  hash="planos"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Ver planos compatíveis
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={reiniciar}
                  className="rounded-full border border-border px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  Recalcular
                </button>
              </div>

              <p className="mt-4 text-center font-mono text-[9.5px] uppercase tracking-[0.1em] text-muted-foreground">
                Laudo fictício · sem validade médica, trabalhista ou emocional duradoura
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}