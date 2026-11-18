import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Image } from "@/components/ui/image";
import LegalNotice from "@/components/LegalNotice";
import { products, getProduct, brl } from "@/lib/products";
import { Check, Lock, ShieldCheck, ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/_site/checkout")({
  validateSearch: (search) => ({
    plano: typeof search?.plano === "string" ? search.plano : products[0].slug,
  }),
  head: () => ({
    meta: [
      { title: "Finalizar pedido fictício — Atestado Express" },
      {
        name: "description",
        content:
          "Tela de finalização simulada da Atestado Express. Nenhum pagamento é processado: tudo aqui é ficção.",
      },
    ],
  }),
  component: CheckoutPage,
});

const PAGAMENTOS = [
  "Pix emocional (fictício)",
  "Cartão corporativo bloqueado",
  "Faturamento para o RH",
];

function CheckoutPage() {
  const { plano } = Route.useSearch();
  const product = getProduct(plano) ?? products[0];

  const [form, setForm] = useState({ nome: "", email: "", cargo: "", chefe: "" });
  const [pagamento, setPagamento] = useState(PAGAMENTOS[0]);
  const [erros, setErros] = useState({});
  const [pedido, setPedido] = useState(null);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErros((prev) => ({ ...prev, [key]: "" }));
  };

  const finalizar = () => {
    const next = {};
    if (form.nome.trim().length < 3) next.nome = "Informe um nome (pode ser fictício, mas precisa existir).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Precisamos de um e-mail válido para não enviar nada.";
    if (!form.chefe.trim()) next.chefe = "Diga o nome do seu chefe. É parte da terapia.";
    if (Object.keys(next).length > 0) {
      setErros(next);
      return;
    }
    setPedido({
      protocolo: `AE-${Math.floor(100000 + Math.random() * 899999)}`,
      nome: form.nome.trim(),
      email: form.email.trim(),
      cargo: form.cargo.trim(),
      chefe: form.chefe.trim(),
      pagamento,
      plano: product,
    });
  };

  if (pedido) {
    return (
      <section className="shell max-w-3xl py-14 sm:py-20">
        <div className="panel overflow-hidden">
          <div className="flex flex-col items-center border-b border-border bg-mist/60 px-6 py-10 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-6 w-6" />
            </span>
            <h1 className="display mt-5 text-[clamp(1.8rem,4vw,2.6rem)]">Pedido fictício confirmado</h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Obrigado, {pedido.nome.split(" ")[0]}. Seu laudo imaginário está sendo preparado pela
              nossa equipe que não existe.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Protocolo {pedido.protocolo}
            </p>
          </div>

          <div className="divide-y divide-border">
            {[
              ["Plano contratado", pedido.plano.nome],
              ["Valor fictício", brl(pedido.plano.preco)],
              ["Forma de pagamento", pedido.pagamento],
              ["Cobrança realizada", "Nenhuma. Absolutamente nenhuma."],
              ["Prazo de entrega", "Imediato, no campo da imaginação"],
              ["Chefe notificado", `${pedido.chefe} — não foi, e nunca será`],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-6 px-6 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {label}
                </span>
                <span className="max-w-[60%] text-right text-sm font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border px-6 py-6">
            <LegalNotice />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                hash="planos"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Voltar aos planos
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setPedido(null);
                  setForm({ nome: "", email: "", cargo: "", chefe: "" });
                }}
                className="rounded-full border border-border px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                Fazer outro pedido
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="shell py-10 sm:py-14">
      <Link
        to="/"
        hash="planos"
        className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Voltar para os planos
      </Link>

      <div className="mt-6 flex flex-col gap-2">
        <p className="eyebrow">Checkout simulado</p>
        <h1 className="display text-[clamp(1.9rem,4vw,2.8rem)]">Finalize seu pedido fictício</h1>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Ambiente 100% demonstrativo: nenhum pagamento será processado, nenhum cartão será
          solicitado e nenhum documento será emitido.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <aside className="space-y-4">
          <div className="panel overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden bg-mist">
              <Image
                src={product.imagem}
                alt={`Imagem do ${product.nome}`}
                className="h-full w-full"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-primary backdrop-blur">
                Item da prescrição
              </span>
            </div>
            <div className="p-5">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-primary">
                {product.tagline}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-foreground">{product.nome}</h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {product.descricao}
              </p>

              <ul className="mt-4 space-y-2 border-t border-dashed border-border pt-4">
                {product.itens.map((item) => (
                  <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{brl(product.preco)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Taxa de urgência fictícia</span>
                  <span>{brl(0)}</span>
                </div>
                <div className="flex items-baseline justify-between border-t border-border pt-2 text-foreground">
                  <span className="font-medium">Total fictício</span>
                  <span className="font-display text-2xl leading-none">{brl(product.preco)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  Assinatura do responsável
                </p>
                <svg viewBox="0 0 220 60" className="mt-2 h-12 w-40 text-primary" aria-hidden>
                  <path
                    d="M6 44c14-2 12-30 22-30s6 34 18 34 8-26 20-26 6 26 18 26 12-22 22-22 8 18 18 18 12-10 22-14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
                  Dr. Placebo · CRM fictício 000.000
                </p>
              </div>
              <BadgeCheck className="h-8 w-8 shrink-0 text-primary/40" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
              <Lock className="h-3 w-3 text-primary" /> Ambiente simulado
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-primary" /> Dados não enviados
            </span>
          </div>
        </aside>

        <div className="panel p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
              Seus dados fictícios
            </h2>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
              etapa 1 de 2
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <Field label="Nome completo" error={erros.nome}>
              <input
                value={form.nome}
                onChange={set("nome")}
                placeholder="Como no crachá, mas com mais dignidade"
                className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </Field>

            <Field label="E-mail" error={erros.email}>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="voce@empresa.com.br"
                className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
              />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Cargo (opcional)">
                <input
                  value={form.cargo}
                  onChange={set("cargo")}
                  placeholder="Analista Sênior de Pendências"
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </Field>
              <Field label="Nome do chefe" error={erros.chefe}>
                <input
                  value={form.chefe}
                  onChange={set("chefe")}
                  placeholder="Ricardo"
                  className="w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </Field>
            </div>

            <div>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
                Forma de pagamento
              </p>
              <div className="mt-2.5 space-y-2">
                {PAGAMENTOS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPagamento(p)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                      pagamento === p
                        ? "border-primary bg-mist/60 text-foreground"
                        : "border-border bg-white text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                        pagamento === p ? "border-primary" : "border-muted-foreground/40"
                      }`}
                    >
                      {pagamento === p && <span className="h-2 w-2 rounded-full bg-primary" />}
                    </span>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
                Trocar de plano
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    to="/checkout"
                    search={{ plano: p.slug }}
                    className={`rounded-full border px-3 py-1.5 text-[11.5px] transition-colors ${
                      p.slug === product.slug
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {p.nome.replace("Plano ", "")}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={finalizar}
              className="mt-2 w-full rounded-full bg-primary px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Finalizar pedido fictício
            </button>

            <p className="text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-muted-foreground">
              Ao clicar, você concorda com termos que não existem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-2.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}