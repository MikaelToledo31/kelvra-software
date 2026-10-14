import { useRef } from 'react'
import { ArrowRight, BriefcaseBusiness, Heart, Target, Users, type LucideIcon } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'

const differentials: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: BriefcaseBusiness, title: 'Experiência', text: 'em desenvolvimento web' },
  { icon: Target, title: 'Foco', text: 'em resultados reais' },
  { icon: Users, title: 'Atendimento', text: 'próximo e humanizado' },
  { icon: Heart, title: 'Paixão', text: 'por tecnologia e inovação' },
]

export function About() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const name = siteConfig.developerName || 'Nome do Desenvolvedor'
  const bio =
    siteConfig.developerBio || 'Adicione a apresentação completa do proprietário em src/config/site.ts.'

  return (
    <section className="sec about" id="sobre" aria-labelledby="sobre-title">
      <Container className="about-g">
        <Reveal className="photo">
          <div className="frame" />
          <p className="quote-h">
            Disciplina
            <br />é o que
            <br />
            transforma
            <br />
            planos em
            <br />
            resultados.
          </p>
          <div className="ph">
            {siteConfig.developerPhoto ? (
              <img
                src={siteConfig.developerPhoto}
                alt={`Foto de ${name}`}
                width={520}
                height={680}
                loading="lazy"
              />
            ) : (
              <svg viewBox="0 0 260 340" width="78%" role="img" aria-label="Espaço reservado para a foto do proprietário">
                <defs>
                  <linearGradient id="about-ph" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1c232d" />
                    <stop offset="1" stopColor="#10151c" />
                  </linearGradient>
                </defs>
                <path d="M20 340c0-70 40-100 110-100s110 30 110 100z" fill="url(#about-ph)" stroke="rgba(255,100,31,.4)" />
                <circle cx="130" cy="130" r="62" fill="url(#about-ph)" stroke="rgba(255,100,31,.4)" />
                <text x="130" y="320" textAnchor="middle" fill="#a8adb7" fontFamily="Manrope,sans-serif" fontSize="11">
                  Foto do proprietário
                </text>
              </svg>
            )}
          </div>
        </Reveal>

        <Reveal>
          <span className="tag tag-or">SOBRE O PROPRIETÁRIO</span>
          <h2 id="sobre-title">
            Olá, eu sou o
            <br />
            <span className="or">{name}</span>.
          </h2>
          <p>
            Sou desenvolvedor e trabalho na criação de experiências digitais que conectam empresas e
            pessoas.
          </p>
          <p>
            Acredito que um bom site vai além de uma apresentação visual: ele precisa transmitir
            confiança, comunicar valor e ajudar empresas a conquistarem novas oportunidades.
          </p>
          <p>
            Meu objetivo é transformar ideias em soluções digitais modernas, funcionais e alinhadas
            aos objetivos de cada negócio.
          </p>
          <button type="button" className="btn btn-ol" onClick={() => dialogRef.current?.showModal()}>
            Conheça mais sobre mim
            <ArrowRight className="ic arr" aria-hidden="true" />
          </button>
        </Reveal>

        <Reveal className="diffs">
          {differentials.map(({ icon: Icon, title, text }) => (
            <div className="df" key={title}>
              <span className="ring">
                <Icon className="ic" aria-hidden="true" />
              </span>
              <div>
                <b>{title}</b>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>

      <dialog
        ref={dialogRef}
        aria-labelledby="sobre-dialog-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <h3 id="sobre-dialog-title">
          Sobre <span className="or">{name}</span>
        </h3>
        <p>{bio}</p>
        <button type="button" className="btn btn-ol" onClick={() => dialogRef.current?.close()}>
          Fechar
        </button>
      </dialog>
    </section>
  )
}
