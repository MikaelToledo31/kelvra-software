import { ArrowUpRight, MessageSquare } from 'lucide-react'
import { Container } from '../common/Container'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { LaptopMockup } from '../art/LaptopMockup'
import { PhoneMockup } from '../art/PhoneMockup'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <svg
        className="curve"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        fill="none"
      >
        <path d="M520 560C520 380 640 300 800 330" stroke="rgba(255,100,31,.45)" strokeWidth="1" />
        <path d="M900 800C1100 640 1300 600 1440 480" stroke="rgba(255,100,31,.5)" strokeWidth="1.2" />
        <path d="M700 800C1000 700 1250 520 1440 330" stroke="rgba(255,100,31,.22)" strokeWidth="1" />
      </svg>

      <Container className="hero-g">
        <div>
          <p className="eyebrow fade">DESENVOLVIMENTO WEB</p>
          <h1 id="hero-title">
            <span className="hl">
              <span>Ideias que</span>
            </span>
            <span className="hl">
              <span className="or">ganham vida</span>
            </span>
            <span className="hl">
              <span>na internet.</span>
            </span>
          </h1>
          <p className="lead fade">
            Sites rápidos, modernos e estratégicos para o seu negócio crescer. Do planejamento ao
            lançamento, cuidamos de tudo para você.
          </p>
          <div className="cta-row fade">
            <WhatsAppButton arrow>Fale com a gente</WhatsAppButton>
            <a className="link-c" href="#projetos">
              Conheça nossos projetos
              <i>
                <ArrowUpRight className="ic ic-sm" aria-hidden="true" />
              </i>
            </a>
          </div>
        </div>

        <div
          className="stage"
          role="img"
          aria-label="Notebook e smartphone exibindo um site institucional de construção civil (imagem ilustrativa)"
        >
          <div className="glow" />
          <div className="chip">
            <MessageSquare className="ic ic-lg" aria-hidden="true" />
            <span>
              Sites que conectam
              <br />
              negócios a pessoas.
            </span>
          </div>
          <div className="laptop">
            <LaptopMockup />
          </div>
          <div className="phone">
            <PhoneMockup />
          </div>
        </div>
        <div className="scroll" aria-hidden="true">
          SCROLL
        </div>
      </Container>
    </section>
  )
}
