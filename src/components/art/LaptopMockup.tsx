/** Ilustração vetorial do notebook. Substitua por um mockup fotográfico quando disponível. */
export function LaptopMockup() {
  return (
    <svg viewBox="0 0 700 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="lp-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1410" />
          <stop offset="1" stopColor="#0b1118" />
        </linearGradient>
        <linearGradient id="lp-sky" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a0e14" />
          <stop offset=".55" stopColor="#3b2418" />
          <stop offset="1" stopColor="#b9561f" />
        </linearGradient>
        <linearGradient id="lp-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2f38" />
          <stop offset="1" stopColor="#0d1015" />
        </linearGradient>
      </defs>
      <rect x="70" y="12" width="560" height="350" rx="20" fill="#14181f" stroke="#3a404b" strokeWidth="2" />
      <rect x="84" y="26" width="532" height="322" rx="8" fill="url(#lp-screen)" />
      <rect x="84" y="26" width="532" height="26" fill="#0a0d12" />
      <text x="104" y="44" fill="#fff" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="12">
        SITE<tspan fill="#FF641F">EXEMPLO</tspan>
      </text>
      <g fill="#9aa0aa" fontFamily="Manrope,sans-serif" fontSize="8">
        <text x="300" y="43">Início</text>
        <text x="340" y="43">Projetos</text>
        <text x="390" y="43">Sobre</text>
        <text x="430" y="43">Contato</text>
      </g>
      <rect x="540" y="32" width="64" height="14" rx="4" fill="#FF641F" />
      <rect x="84" y="52" width="532" height="296" fill="url(#lp-sky)" />
      <g fill="#06080b" opacity=".92">
        <rect x="430" y="150" width="40" height="198" />
        <rect x="480" y="110" width="30" height="238" />
        <rect x="520" y="180" width="60" height="168" />
        <path d="M400 348V190l20-60 20 60v158z" />
        <path d="M360 130h200M380 130v-40" stroke="#06080b" strokeWidth="5" />
      </g>
      <path d="M440 348c4-60 30-96 70-96s66 36 70 96z" fill="#0b0e13" />
      <circle cx="512" cy="238" r="26" fill="#1d2430" />
      <path d="M486 232c4-24 48-24 52 0z" fill="#e8e8e8" />
      <g fill="#fff" fontFamily="Caveat,cursive" fontSize="30" fontWeight="600">
        <text x="118" y="150">Construindo</text>
        <text x="118" y="182">o seu futuro</text>
        <text x="118" y="214">com qualidade</text>
      </g>
      <rect x="118" y="240" width="76" height="20" rx="5" fill="#FF641F" />
      <rect x="204" y="240" width="62" height="20" rx="5" fill="none" stroke="#666" />
      <rect x="118" y="290" width="140" height="58" rx="6" fill="#f2f2f2" opacity=".9" />
      <rect x="270" y="296" width="100" height="52" rx="6" fill="#f2f2f2" opacity=".75" />
      <path d="M30 372h640l-34 36H64z" fill="url(#lp-base)" />
      <rect x="30" y="366" width="640" height="10" rx="5" fill="#3a404b" />
      <rect x="300" y="368" width="100" height="5" rx="3" fill="#0a0c10" />
      <ellipse cx="350" cy="420" rx="300" ry="10" fill="#000" opacity=".5" />
    </svg>
  )
}
