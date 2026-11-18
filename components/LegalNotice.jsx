import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export const LEGAL_TEXT =
  "Este site é uma obra de ficção e humor. Não comercializamos, emitimos ou validamos atestados médicos. Todos os produtos, preços e serviços são fictícios.";

export default function LegalNotice({ className, variant = "bar" }) {
  if (variant === "bar") {
    return (
      <div
        className={cn(
          "flex items-start gap-2.5 rounded-xl border border-border bg-muted/60 px-4 py-3 text-[12.5px] leading-relaxed text-muted-foreground",
          className
        )}
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
        <p>{LEGAL_TEXT}</p>
      </div>
    );
  }

  return (
    <div className={cn("rounded-3xl border border-border bg-white p-7 sm:p-10", className)}>
      <p className="eyebrow">Aviso legal</p>
      <p className="mt-4 font-display text-2xl leading-snug text-foreground sm:text-3xl">
        “{LEGAL_TEXT}”
      </p>
      <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          A Atestado Express é uma peça de sátira corporativa. Não existe empresa, CRM, conselho
          médico, plano de saúde ou equipe de plantão por trás deste endereço. Nenhum pagamento é
          processado, nenhum dado é enviado a hospitais e nenhum documento tem qualquer valor legal.
        </p>
        <p>
          Se você precisa realmente se ausentar do trabalho por motivo de saúde, procure um médico de
          verdade. Eles são bem mais simpáticos do que a nossa página de vendas sugere.
        </p>
      </div>
    </div>
  );
}