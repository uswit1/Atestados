import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const text = encodeURIComponent(
    "Olá! Vim pelo site da Atestado Express e quero entender os planos fictícios de folga."
  );

  return (
    <a
      href={`https://wa.me/?text=${text}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar no WhatsApp (demonstrativo)"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03] sm:bottom-8 sm:right-8 sm:py-3 sm:pl-3 sm:pr-4"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 sm:h-8 sm:w-8">
        <MessageCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-[12px] font-semibold">Fale conosco</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/80">
          WhatsApp demonstrativo
        </span>
      </span>
    </a>
  );
}