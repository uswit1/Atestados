import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Logo from "@/components/Logo";
import LiveCounter from "@/components/home/LiveCounter";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "Planos", hash: "planos" },
  { label: "Simulador", hash: "simulador" },
  { label: "Depoimentos", hash: "depoimentos" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/85 backdrop-blur-xl">
      <div className="shell flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="Atestado Express — página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/aviso-legal"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Aviso legal
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LiveCounter className="text-[11px]" />
          <Link
            to="/"
            hash="planos"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all hover:bg-primary/90"
          >
            Consultar planos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-white md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/aviso-legal"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Aviso legal
            </Link>
            <Link
              to="/"
              hash="planos"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-foreground"
            >
              Consultar planos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}