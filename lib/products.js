import { Coffee, PartyPopper, Brain, BatteryLow, Siren } from "lucide-react";

/**
 * Catálogo 100% fictício. Nenhum item é vendido, emitido ou validado.
 */
export const products = [
  {
    slug: "segunda-feira",
    nome: "Plano Segunda-feira",
    tagline: "Recuperação de fim de semana",
    descricao:
      "Porque 48 horas de descanso não são suficientes para o que a semana anterior fez com a sua lombar e com a sua alma.",
    preco: 49.9,
    precoAntigo: 79.9,
    dose: "1 dose matinal",
    icon: Coffee,
    imagem: "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/1cd5e7b89_generated_f00b51ab.png",
    itens: [
      "Cobertura para o café da manhã que você não vai tomar",
      "Refil opcional na sexta-feira, sem burocracia",
      "Contraindicado para quem gosta do chefe",
    ],
  },
  {
    slug: "sextou",
    nome: "Plano Sextou",
    tagline: "Antecipação estratégica do descanso",
    descricao:
      "Comece o fim de semana 48 horas antes e chegue na segunda já descansado do descanso, pronto para reclamar de novo.",
    preco: 59.9,
    precoAntigo: null,
    dose: "1 dose vespertina",
    icon: PartyPopper,
    imagem: "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/466fbd8df_generated_b3083f4b.png",
    itens: [
      "Sexta liberada a partir das 11h (fuso horário da sua casa)",
      "Desculpa pronta para o grupo do trabalho, revisada por dois advogados",
      "Bônus de cortesia: um “estava no médico”",
    ],
  },
  {
    slug: "enxaqueca-premium",
    nome: "Plano Enxaqueca Premium",
    tagline: "Dores seletivas",
    descricao:
      "Uma dor de cabeça que aparece pontualmente às 8h02 e desaparece ao meio-dia. Seletividade de gente grande.",
    preco: 89.9,
    precoAntigo: 129.9,
    dose: "1 crise sob medida",
    icon: Brain,
    imagem: "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/dfa651c66_generated_a03a80b7.png",
    itens: [
      "Dor personalizada com o nome do projeto atual",
      "Intolerância a reuniões com mais de seis participantes",
      "Cobertura para luz forte, ruído e e-mail do diretor",
    ],
    badge: "Mais prescrito",
  },
  {
    slug: "burnout-corporativo",
    nome: "Plano Burnout Corporativo",
    tagline: "Quando o Excel vence você",
    descricao:
      "Para quando a planilha diz #REF! e você também. Inclui afastamento simbólico e terapia de grupo com o estagiário.",
    preco: 149.9,
    precoAntigo: 189.9,
    dose: "2 a 5 dias úteis",
    icon: BatteryLow,
    imagem: "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/25a60500c_generated_4c958c4e.png",
    itens: [
      "Afastamento até a planilha fechar (ou até o próximo trimestre)",
      "Sessão de descompressão com o café ruim da copa",
      "Cobertura total para ligações do RH fora do horário",
    ],
    badge: "Campeão de vendas",
  },
  {
    slug: "emergencia-rh",
    nome: "Plano Emergência do RH",
    tagline: "Situações extremas",
    descricao:
      "Avaliação de desempenho, dinâmica de grupo, fusão da empresa. Para emergências que exigem máxima autoridade médica fictícia.",
    preco: 249.9,
    precoAntigo: null,
    dose: "Resposta imediata",
    icon: Siren,
    imagem: "https://media.base44.com/images/public/6aea6e47d19012ffc179fcd4/06288cc93_generated_dcba645b.png",
    itens: [
      "Resposta em até quatro minutos, como bombeiro de condomínio",
      "Relatório com carimbo, assinatura ilegível e tudo",
      "Acompanhamento pós-reunião de segunda com o seu gestor",
    ],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const brl = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);