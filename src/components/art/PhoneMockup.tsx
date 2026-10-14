export function PhoneMockup() {
  return (
    <svg viewBox="0 0 180 370" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ph-sky" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a0e14" />
          <stop offset=".55" stopColor="#3b2418" />
          <stop offset="1" stopColor="#b9561f" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="176" height="366" rx="30" fill="#0c0f14" stroke="#4a505c" strokeWidth="3" />
      <rect x="10" y="10" width="160" height="350" rx="23" fill="url(#ph-sky)" />
      <rect x="62" y="16" width="56" height="12" rx="6" fill="#000" />
      <g fill="#06080b" opacity=".9">
        <rect x="100" y="150" width="22" height="120" />
        <rect x="130" y="120" width="18" height="150" />
        <path d="M70 270V170l12-40 12 40v100z" />
      </g>
      <g fill="#fff" fontFamily="Caveat,cursive" fontSize="22" fontWeight="600">
        <text x="24" y="90">Construindo</text>
        <text x="24" y="112">o seu futuro</text>
        <text x="24" y="134">com qualidade</text>
      </g>
      <rect x="24" y="150" width="54" height="16" rx="4" fill="#FF641F" />
      <rect x="10" y="290" width="160" height="70" fill="#080b10" />
      <rect x="22" y="302" width="100" height="6" rx="3" fill="#2a303a" />
      <rect x="22" y="316" width="70" height="6" rx="3" fill="#2a303a" />
    </svg>
  )
}
