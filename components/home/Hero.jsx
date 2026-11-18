import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import LiveCounter from "@/components/home/LiveCounter";
import { ArrowRight, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/fa7d8c213_generated_86a2a6cc.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 12% 8%, #D1F2EB 0%, rgba(209,242,235,0) 62%), radial-gradient(50% 50% at 92% 0%, #E8F4FD 0%, rgba(232,244,253,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,64,72,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,64,72,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="shell grid items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Telemedicina de folga desde 2019
          </span>

          <h1 className="display balance mt-6 text-[clamp(2.6rem,6.2vw,4.5rem)] text-foreground">
            Precisando de uma <em className="italic text-primary">folguinha estratégica</em>?
          </h1>

          <p className="pretty mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Na Atestado Express, entendemos que às vezes o corpo pede descanso... e a segunda-feira
            também.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/"
              hash="planos"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_18px_36px_-18px_rgba(0,123,127,0.7)]"
            >
              Consultar planos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/"
              hash="simulador"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Testar o simulador
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted-foreground">
            <LiveCounter />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Sigilo absoluto
            </span>
            <span className="inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4 text-primary" />
              2.400 médicos fictícios
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="panel relative overflow-hidden p-2.5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-mint">
              <Image
                src={HERO_IMAGE}
                alt="Calendário clínico com cruz médica flutuando sobre uma superfície clara"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-8 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(16,64,72,0.45)] backdrop-blur sm:-left-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              Status do pedido
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Aprovado ficticiamente
            </p>
          </div>

          <div className="absolute -bottom-5 right-2 rounded-2xl border border-border bg-white/95 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(16,64,72,0.45)] backdrop-blur sm:right-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              A partir de
            </p>
            <p className="mt-0.5 font-display text-2xl leading-none text-foreground">
              R$ 49<span className="text-base">,90</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}