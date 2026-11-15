// Tabela de drops e probabilidades do RPG STAR
export const DROP_RATES = [
  { rank: 'Comum', label: 'Pedra Comum', chance: 51.75, min: 1, max: 5175, badge: 'bg-stone-500 text-white' },
  { rank: 'D', label: 'Rank D', chance: 21.00, min: 5176, max: 7275, badge: 'bg-amber-700 text-amber-100' },
  { rank: 'C', label: 'Rank C', chance: 13.00, min: 7276, max: 8575, badge: 'bg-emerald-600 text-white' },
  { rank: 'B', label: 'Rank B', chance: 8.00, min: 8576, max: 9375, badge: 'bg-sky-600 text-white' },
  { rank: 'A', label: 'Rank A', chance: 5.00, min: 9376, max: 9875, badge: 'bg-purple-600 text-white' },
  { rank: 'S', label: 'Rank S', chance: 1.00, min: 9876, max: 9975, badge: 'bg-yellow-500 text-stone-900 font-extrabold' },
  { rank: 'S+', label: 'Rank S+', chance: 0.25, min: 9976, max: 10000, badge: 'bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 text-stone-950 font-black' }
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
      glowClass: 'shadow-stone-500/20'
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
      glowClass: 'shadow-amber-700/30'
    },
    {
      id: 'cobre_bruto',
      nome: 'Cobre Bruto',
      detalhe: 'Rank D',
      rank: 'D',
      rankLabel: 'Rank D',
      imagem: 'assets/cobre.jpeg',
      borderClass: 'border-amber-700',
      glowClass: 'shadow-amber-700/30'
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
      glowClass: 'shadow-emerald-500/30'
    },
    {
      id: 'polvora',
      nome: 'Pólvora',
      detalhe: 'Rank C',
      rank: 'C',
      rankLabel: 'Rank C',
      imagem: 'assets/polvora.jpeg',
      borderClass: 'border-emerald-500',
      glowClass: 'shadow-emerald-500/30'
    },
    {
      id: 'grafite',
      nome: 'Grafite',
      detalhe: 'Rank C',
      rank: 'C',
      rankLabel: 'Rank C',
      imagem: 'assets/grafite.jpeg',
      borderClass: 'border-emerald-500',
      glowClass: 'shadow-emerald-500/30'
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
      glowClass: 'shadow-sky-500/40'
    },
    {
      id: 'silex',
      nome: 'Sílex',
      detalhe: 'Rank B',
      rank: 'B',
      rankLabel: 'Rank B',
      imagem: 'assets/silex.jpeg',
      borderClass: 'border-sky-500',
      glowClass: 'shadow-sky-500/40'
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
      glowClass: 'shadow-purple-500/50'
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
      glowClass: 'shadow-yellow-400/60 ring-2 ring-yellow-400/50'
    }
  ],
  'S+': [
    {
      id: 'titanio',
      nome: 'Titânio',
      detalhe: 'Rank S+',
      rank: 'S+',
      rankLabel: 'Rank S+',
      imagem: 'assets/titanio.jpg',
      borderClass: 'border-amber-300',
      glowClass: 'shadow-amber-400/80 ring-4 ring-amber-400/60'
    }
  ]
};

// Sorteio de precisão decimal (1 a 10.000) mapeado para d100
export function rolarD100() {
  const rollSeed = Math.floor(Math.random() * 10000) + 1; // 1 a 10000
  let rankSorteado = 'Comum';

  for (const faixa of DROP_RATES) {
    if (rollSeed >= faixa.min && rollSeed <= faixa.max) {
      rankSorteado = faixa.rank;
      break;
    }
  }

  const pool = ITEMS[rankSorteado];
  const itemEscolhido = pool[Math.floor(Math.random() * pool.length)];

  // Formata a rolagem para exibição amigável do d100 (ex: 99.85 ou número inteiro se redondo)
  const rollValor = (rollSeed / 100).toFixed(2);

  return {
    ...itemEscolhido,
    roll: rollValor.endsWith('.00') ? parseInt(rollValor, 10) : rollValor,
    uuid: Math.random().toString(36).substring(2, 9),
    revelado: false
  };
}

// Sorteia os 10 itens (10-pull estilo gacha)
export function sortear10Loots() {
  const loots = [];
  for (let i = 0; i < 10; i++) {
    loots.push(rolarD100());
  }
  return loots;
}

// Alias para compatibilidade
export const sortear9Loots = sortear10Loots;
