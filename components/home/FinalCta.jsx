import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="shell py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-primary px-7 py-12 text-primary-foreground sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0) 68%)" }}
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
              <CalendarCheck className="h-3.5 w-3.5" />
              Próxima segunda-feira já tem dono
            </span>
            <h2 className="display balance mt-5 text-[clamp(1.9rem,4vw,3.1rem)]">
              Sua saúde não pode esperar. Sua reunião das 8h, talvez.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
              Escolha um plano fictício, receba um laudo fictício e volte ao trabalho sentindo que
              algo mudou — provavelmente nada.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/"
              hash="planos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary transition-all hover:bg-white/90"
            >
              Consultar planos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/checkout"
              search={{ plano: "segunda-feira" }}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
            >
              Simular pedido
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}