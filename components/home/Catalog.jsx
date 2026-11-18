import ProductCard from "@/components/home/ProductCard";
import { products } from "@/lib/products";
import { Stethoscope } from "lucide-react";

export default function Catalog() {
  return (
    <section id="planos" className="scroll-mt-24 border-y border-border bg-muted/40 py-16 sm:py-20">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Catálogo de planos</p>
            <h2 className="display balance mt-3 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)]">
              Cinco formulações para os cinco problemas reais do trabalhador brasileiro.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3">
            <Stethoscope className="h-4 w-4 text-primary" />
            <p className="max-w-[210px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-muted-foreground">
              Prescrição fictícia · sem necessidade de receita real
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}

          <div className="flex flex-col justify-between rounded-3xl border border-dashed border-primary/30 bg-white p-7">
            <div>
              <p className="eyebrow">Sob medida</p>
              <h3 className="display mt-3 text-2xl leading-tight">Monte seu próprio plano</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                Escolha o motivo, a quantidade de dias e o nível de insatisfação com o trabalho. O
                simulador monta o laudo e sugere a formulação ideal para o seu caso.
              </p>
            </div>
            <a
              href="#simulador"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-primary/30 px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Abrir simulador
            </a>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Preços fictícios em reais · nenhuma cobrança é realizada em nenhum momento
        </p>
      </div>
    </section>
  );
}