import { useState } from "react";
import { ShieldAlert, X } from "lucide-react";

/**
 * Botão de pânico: abre uma planilha falsa para disfarçar a visita.
 */
export default function BossMode() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group fixed bottom-24 right-5 z-50 flex items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground shadow-lg backdrop-blur transition-all hover:border-primary/50 hover:text-primary sm:bottom-28 sm:right-8"
        aria-label="Ativar modo chefe"
      >
        <ShieldAlert className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline">Modo chefe</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white">
          <div className="flex items-center gap-3 border-b border-[#d0d7de] bg-[#217346] px-4 py-2 text-white">
            <span className="font-mono text-xs">Planilha_Resultados_Q4_FINAL_v3_REVISADA.xlsx</span>
            <span className="ml-auto hidden text-[11px] opacity-80 sm:inline">
              Somente leitura · Salvo por: gestor.senior@empresa.com.br
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-3 grid h-7 w-7 place-items-center rounded hover:bg-white/20"
              aria-label="Voltar ao site"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b border-[#d0d7de] bg-[#f3f2f1] px-4 py-1.5 font-mono text-[11px] text-[#444]">
            Arquivo · Página inicial · Inserir · Layout · Fórmulas · Dados · Revisão · Exibir
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full border-collapse font-mono text-[11px] text-[#333]">
              <thead>
                <tr>
                  <th className="w-9 border border-[#d0d7de] bg-[#f3f2f1] px-1 py-1 text-[#666]"></th>
                  {["A", "B", "C", "D", "E", "F"].map((c) => (
                    <th key={c} className="border border-[#d0d7de] bg-[#f3f2f1] px-2 py-1 font-normal text-[#666]">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#d0d7de] bg-[#f3f2f1] px-1 text-center text-[#666]">1</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Regional</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Q1</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Q2</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Q3</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Meta</td>
                  <td className="border border-[#d0d7de] px-2 py-1 font-bold">Status</td>
                </tr>
                {[
                  ["Sudeste", "1.284", "1.310", "1.198", "1.200", "No prazo"],
                  ["Sul", "842", "801", "877", "800", "No prazo"],
                  ["Nordeste", "612", "598", "544", "600", "Atenção"],
                  ["Centro-Oeste", "301", "287", "299", "300", "No prazo"],
                  ["Norte", "118", "104", "#REF!", "100", "Revisar"],
                  ["Consolidado", "3.157", "3.100", "2.918", "3.000", "Ajustar"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="border border-[#d0d7de] bg-[#f3f2f1] px-1 text-center text-[#666]">{i + 2}</td>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`border border-[#d0d7de] px-2 py-1 ${
                          cell === "#REF!" ? "bg-[#ffe5e5] text-[#c0392b]" : ""
                        } ${j === 0 ? "font-semibold" : "text-right"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                  <tr key={`empty-${i}`}>
                    <td className="border border-[#d0d7de] bg-[#f3f2f1] px-1 text-center text-[#666]">{i + 8}</td>
                    {Array.from({ length: 6 }).map((__, j) => (
                      <td key={j} className="h-6 border border-[#d0d7de]" />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-[#d0d7de] bg-[#f3f2f1] px-4 py-1.5 font-mono text-[11px] text-[#555]">
            <span>Pronto · 12 planilhas vinculadas · Nenhum erro detectado (mentira)</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded border border-[#d0d7de] bg-white px-2 py-0.5 text-[11px]"
            >
              Fechar disfarce
            </button>
          </div>
        </div>
      )}
    </>
  );
}