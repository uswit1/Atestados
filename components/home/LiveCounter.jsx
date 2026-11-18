import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BASE = 4829;

export default function LiveCounter({ className }) {
  const [value, setValue] = useState(BASE);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + (Math.random() > 0.55 ? 2 : 1));
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-3 py-1.5 font-mono uppercase tracking-[0.1em] text-muted-foreground",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
      </span>
      <span className="tabular-nums text-foreground">{value.toLocaleString("pt-BR")}</span>
      manhãs salvas
    </span>
  );
}