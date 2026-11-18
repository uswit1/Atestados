import { cn } from "@/lib/utils";

/**
 * Marca: calendário clínico com cruz médica no centro.
 */
export default function Logo({ className, markOnly = false, tone = "dark" }) {
  const ink = tone === "light" ? "#FFFFFF" : "#0f4c4f";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="Atestado Express"
      >
        <rect x="3" y="6" width="42" height="38" rx="12" fill="hsl(181 100% 25%)" />
        <rect x="3" y="6" width="42" height="11" rx="5.5" fill="#FFFFFF" fillOpacity="0.16" />
        <rect x="11" y="15.5" width="26" height="21" rx="4.5" fill="#FFFFFF" />
        <rect x="15.5" y="21" width="5.5" height="12" rx="1.6" fill={ink} />
        <rect x="22" y="21" width="10.5" height="4.2" rx="1.6" fill="#B7E9DE" />
        <rect x="16" y="3" width="3.6" height="7" rx="1.8" fill="hsl(181 100% 25%)" />
        <rect x="28.4" y="3" width="3.6" height="7" rx="1.8" fill="hsl(181 100% 25%)" />
        <path
          d="M27.8 25.4h-3v3h-3v-3h-3v-3h3v-3h3v3h3z"
          fill="hsl(181 100% 25%)"
          transform="translate(4.6 0)"
        />
      </svg>
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-[15px] font-extrabold uppercase tracking-[0.14em]",
              tone === "light" ? "text-white" : "text-foreground"
            )}
          >
            Atestado
            <span className="text-primary"> Express</span>
          </span>
          <span
            className={cn(
              "mt-1 font-mono text-[9px] uppercase tracking-[0.18em]",
              tone === "light" ? "text-white/60" : "text-muted-foreground"
            )}
          >
            Sua saúde, nossa prioridade (ou não)
          </span>
        </span>
      )}
    </div>
  );
}