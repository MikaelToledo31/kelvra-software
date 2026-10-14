import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'

const pad = (n: number) => String(n).padStart(2, '0')

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index]
  const go = (delta: number) => setIndex((i) => (i + delta + total) % total)

  if (!current) return null

  return (
    <section className="sec tst" id="depoimentos" aria-labelledby="depoimentos-title">
      <Container className="t-g">
        <Reveal className="t-side">
          <SectionHeading
            id="depoimentos-title"
            title={
              <>
                O que nossos
                <br />
                <span className="or">clientes dizem</span>
              </>
            }
            description="A confiança dos nossos clientes é o que nos motiva a ir mais longe."
          />
          <WhatsAppButton variant="outline" withIcon={false} arrow>
            Ver mais depoimentos
          </WhatsAppButton>
        </Reveal>

        <Reveal className="t-row">
          <div className="tc" aria-live="polite">
            <span className="pos">
              {pad(index + 1)}/{pad(total)}
            </span>
            <Quote className="ic q" aria-hidden="true" />
            <blockquote key={current.id}>{current.text}</blockquote>
            <div className="who">
              <span className="av" aria-hidden="true">
                {current.name.trim().charAt(0).toUpperCase()}
              </span>
              <div>
                <b>{current.name}</b>
                <span>{current.company}</span>
              </div>
            </div>
          </div>
          {total > 1 && (
            <div className="ctrl">
              <button type="button" onClick={() => go(-1)} aria-label="Depoimento anterior">
                <ChevronLeft className="ic" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Próximo depoimento">
                <ChevronRight className="ic" />
              </button>
            </div>
          )}
        </Reveal>

        <div className="art-side" aria-hidden="true">
          <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" fill="none">
            <path d="M-20 200C60 120 140 220 320 60" stroke="rgba(255,160,90,.7)" strokeWidth="1.4" />
            <path d="M-20 170C80 90 160 190 320 30" stroke="rgba(255,120,50,.5)" strokeWidth="1" />
            <path d="M-20 230C100 160 180 240 320 100" stroke="rgba(255,200,150,.35)" strokeWidth="1" />
          </svg>
        </div>
      </Container>
    </section>
  )
}
