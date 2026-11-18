import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import Catalog from "@/components/home/Catalog";
import Simulator from "@/components/home/Simulator";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Atestado Express — Sua saúde, nossa prioridade (ou não)" },
      {
        name: "description",
        content:
          "Planos fictícios de folga estratégica, simulador de laudo e atendimento 24h (inclusive durante o expediente). Uma sátira corporativa.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <Catalog />
      <Simulator />
      <Testimonials />
      <FinalCta />
    </>
  );
}