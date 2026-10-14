import type { ProjectArtKind } from '../../data/projects'

/** Pontos pseudoaleatórios determinísticos para a ilustração do globo. */
const globeDots = (() => {
  const dots: Array<{ x: number; y: number }> = []
  let seed = 7
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  for (let i = 0; i < 70; i++) {
    const angle = next() * Math.PI * 2
    const radius = Math.sqrt(next()) * 105
    dots.push({ x: 150 + Math.cos(angle) * radius, y: 170 + Math.sin(angle) * radius })
  }
  return dots
})()

const svgProps = {
  className: 'art',
  viewBox: '0 0 300 410',
  preserveAspectRatio: 'xMidYMid slice',
  'aria-hidden': true,
} as const

/** Ilustrações temporárias dos cards. Substitua por fotografias em src/assets/images/projects. */
export function ProjectArt({ kind }: { kind: ProjectArtKind }) {
  if (kind === 'build') {
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id="art-build" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8a3d" />
            <stop offset=".6" stopColor="#8a3a14" />
            <stop offset="1" stopColor="#1a0e08" />
          </linearGradient>
        </defs>
        <rect width="300" height="410" fill="url(#art-build)" />
        <g stroke="#140a05" strokeWidth="5" fill="none" opacity=".9">
          <path d="M60 410V120M120 410V90M60 120h160M60 180h140M60 240h140M60 300h140M200 410V150" />
          <path d="M60 120l60 60M120 180l-60 60M60 240l60 60M120 300l-60 60M20 100h250M230 100V50l-70 50" />
        </g>
        <g fill="#140a05">
          <rect x="190" y="230" width="70" height="180" />
          <circle cx="160" cy="230" r="16" />
          <path d="M140 250h40v70h-40z" />
        </g>
      </svg>
    )
  }

  if (kind === 'net') {
    return (
      <svg {...svgProps}>
        <defs>
          <radialGradient id="art-net" cx=".4" cy=".35" r=".9">
            <stop offset="0" stopColor="#2a8cff" />
            <stop offset=".5" stopColor="#0b3b8a" />
            <stop offset="1" stopColor="#050a1a" />
          </radialGradient>
        </defs>
        <rect width="300" height="410" fill="url(#art-net)" />
        <g fill="#8cc8ff" opacity=".85">
          {globeDots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="1.6" />
          ))}
        </g>
        <g stroke="#7cc0ff" strokeWidth=".7" opacity=".6" fill="none">
          <circle cx="150" cy="170" r="110" />
          <ellipse cx="150" cy="170" rx="110" ry="40" />
          <ellipse cx="150" cy="170" rx="45" ry="110" />
          <path d="M60 120L130 150 200 100 240 190 170 230 90 210z" />
        </g>
        <g fill="#fff">
          <circle cx="60" cy="120" r="3" />
          <circle cx="130" cy="150" r="3" />
          <circle cx="200" cy="100" r="3" />
          <circle cx="240" cy="190" r="3" />
          <circle cx="170" cy="230" r="3" />
          <circle cx="90" cy="210" r="3" />
        </g>
      </svg>
    )
  }

  return (
    <svg {...svgProps}>
      <defs>
        <radialGradient id="art-gym" cx=".7" cy=".2" r=".9">
          <stop offset="0" stopColor="#4a4f58" />
          <stop offset=".6" stopColor="#14171c" />
          <stop offset="1" stopColor="#07090c" />
        </radialGradient>
      </defs>
      <rect width="300" height="410" fill="url(#art-gym)" />
      <g fill="#0a0c0f" stroke="#555b66" strokeWidth="1.2">
        <rect x="30" y="170" width="18" height="90" rx="4" />
        <rect x="52" y="150" width="16" height="130" rx="4" />
        <rect x="68" y="205" width="170" height="10" />
        <rect x="238" y="150" width="16" height="130" rx="4" />
        <rect x="256" y="170" width="18" height="90" rx="4" />
      </g>
      <path d="M80 410c10-90 60-130 110-130s60 60 70 130z" fill="#0b0d11" stroke="#555b66" />
      <circle cx="170" cy="250" r="30" fill="#0b0d11" stroke="#555b66" />
    </svg>
  )
}
