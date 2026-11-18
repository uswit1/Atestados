import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { brl } from "@/lib/products";
import { Check, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  const Icon = product.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_56px_-34px_rgba(16,64,72,0.4)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.imagem}
          alt={`Composição clínica do ${product.nome}`}
          className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/90 text-primary backdrop-blur">
            <Icon className="h-4 w-4" />
          </span>
          {product.badge && (
            <span className="rounded-full bg-foreground px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-primary">
          {product.tagline}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">{product.nome}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{product.descricao}</p>

        <ul className="mt-4 space-y-2 border-t border-dashed border-border pt-4">
          {product.itens.map((item) => (
            <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-muted-foreground">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {product.dose}
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-[26px] leading-none text-foreground">
                  {brl(product.preco)}
                </span>
                {product.precoAntigo && (
                  <span className="text-xs text-muted-foreground/70 line-through">
                    {brl(product.precoAntigo)}
                  </span>
                )}
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/70">
              por dose
            </span>
          </div>

          <Link
            to="/checkout"
            search={{ plano: product.slug }}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90 group-hover:shadow-[0_16px_32px_-18px_rgba(0,123,127,0.8)]"
          >
            Adquirir
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}