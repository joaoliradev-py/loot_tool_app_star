// Tabela de drops e probabilidades do RPG STAR
export const DROP_RATES = [
  { rank: 'Comum', label: 'Pedra Comum', min: 1, max: 50, color: 'stone', badge: 'bg-stone-500 text-white' },
  { rank: 'D', label: 'Rank D', min: 51, max: 71, color: 'amber', badge: 'bg-amber-700 text-amber-100' },
  { rank: 'C', label: 'Rank C', min: 72, max: 84, color: 'emerald', badge: 'bg-emerald-600 text-white' },
  { rank: 'B', label: 'Rank B', min: 85, max: 92, color: 'sky', badge: 'bg-sky-600 text-white' },
  { rank: 'A', label: 'Rank A', min: 93, max: 97, color: 'purple', badge: 'bg-purple-600 text-white' },
  { rank: 'S', label: 'Rank S', min: 98, max: 100, color: 'yellow', badge: 'bg-yellow-500 text-stone-900 font-extrabold' },
];

export const ITEMS = {
  Comum: [
    {
      id: 'pedra_comum',
      nome: 'Pedra Comum',
      detalhe: 'Lascas de Pedra',
      rank: 'Comum',
      rankLabel: 'Comum',
      imagem: 'assets/pedra_comum.jpeg',
      borderClass: 'border-stone-400',
      glowClass: 'shadow-stone-500/20',
      bgGlow: 'from-stone-600/10'
    }
  ],
  D: [
    {
      id: 'metal_bruto',
      nome: 'Metal Bruto',
      detalhe: 'Rank D',
      rank: 'D',
      rankLabel: 'Rank D',
      imagem: 'assets/metal.jpeg',
      borderClass: 'border-amber-700',
      glowClass: 'shadow-amber-700/30',
      bgGlow: 'from-amber-600/20'
    },
    {
      id: 'cobre_bruto',
      nome: 'Cobre Bruto',
      detalhe: 'Rank D',
      rank: 'D',
      rankLabel: 'Rank D',
      imagem: 'assets/cobre.jpeg',
      borderClass: 'border-amber-700',
      glowClass: 'shadow-amber-700/30',
      bgGlow: 'from-amber-600/20'
    }
  ],
  C: [
    {
      id: 'cristal_comum',
      nome: 'Cristal Comum',
      detalhe: 'Rank C',
      rank: 'C',
      rankLabel: 'Rank C',
      imagem: 'assets/cristal_comum.jpeg',
      borderClass: 'border-emerald-500',
      glowClass: 'shadow-emerald-500/30',
      bgGlow: 'from-emerald-500/20'
    },
    {
      id: 'polvora',
      nome: 'Pólvora',
      detalhe: 'Rank C',
      rank: 'C',
      rankLabel: 'Rank C',
      imagem: 'assets/polvora.jpeg',
      borderClass: 'border-emerald-500',
      glowClass: 'shadow-emerald-500/30',
      bgGlow: 'from-emerald-500/20'
    },
    {
      id: 'grafite',
      nome: 'Grafite',
      detalhe: 'Rank C',
      rank: 'C',
      rankLabel: 'Rank C',
      imagem: 'assets/grafite.jpeg',
      borderClass: 'border-emerald-500',
      glowClass: 'shadow-emerald-500/30',
      bgGlow: 'from-emerald-500/20'
    }
  ],
  B: [
    {
      id: 'cristal_sugador',
      nome: 'Cristal Sugador de Chakra',
      detalhe: 'Rank B',
      rank: 'B',
      rankLabel: 'Rank B',
      imagem: 'assets/cristal_sugador_de_chakra.jpeg',
      borderClass: 'border-sky-500',
      glowClass: 'shadow-sky-500/40',
      bgGlow: 'from-sky-500/25'
    },
    {
      id: 'silex',
      nome: 'Sílex',
      detalhe: 'Rank B',
      rank: 'B',
      rankLabel: 'Rank B',
      imagem: 'assets/silex.jpeg',
      borderClass: 'border-sky-500',
      glowClass: 'shadow-sky-500/40',
      bgGlow: 'from-sky-500/25'
    }
  ],
  A: [
    {
      id: 'ouro_bruto',
      nome: 'Ouro Bruto',
      detalhe: 'Rank A',
      rank: 'A',
      rankLabel: 'Rank A',
      imagem: 'assets/ouro.jpeg',
      borderClass: 'border-purple-500',
      glowClass: 'shadow-purple-500/50',
      bgGlow: 'from-purple-500/30'
    }
  ],
  S: [
    {
      id: 'aco_chakra',
      nome: 'Aço Especial Condutor de Chakra',
      detalhe: 'Rank S',
      rank: 'S',
      rankLabel: 'Rank S',
      imagem: 'assets/aco_condutor_de_chakra.webp',
      borderClass: 'border-yellow-400',
      glowClass: 'shadow-yellow-400/60 ring-2 ring-yellow-400/50',
      bgGlow: 'from-yellow-400/30'
    }
  ]
};

// Função para sortear 1 item baseado no d100
export function rolarD100() {
  const roll = Math.floor(Math.random() * 100) + 1; // 1 a 100
  let rankSorteado = 'Comum';

  for (const faixa of DROP_RATES) {
    if (roll >= faixa.min && roll <= faixa.max) {
      rankSorteado = faixa.rank;
      break;
    }
  }

  const pool = ITEMS[rankSorteado];
  const itemEscolhido = pool[Math.floor(Math.random() * pool.length)];

  return {
    ...itemEscolhido,
    roll,
    uuid: Math.random().toString(36).substring(2, 9),
    revelado: false
  };
}

// Função para sortear os 9 itens
export function sortear9Loots() {
  const loots = [];
  for (let i = 0; i < 9; i++) {
    loots.push(rolarD100());
  }
  return loots;
}
