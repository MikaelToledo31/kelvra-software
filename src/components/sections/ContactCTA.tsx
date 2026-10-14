import { ChevronLeft } from 'lucide-react'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { isWhatsAppConfigured } from '../../lib/whatsapp'

export function ContactCTA() {
  return (
    <section className="cta" id="contato" aria-labelledby="contato-title">
      <Container className="cta-g">
        <Reveal>
          <h2 id="contato-title">
            Vamos criar algo
            <br />
            <span className="or">incrível juntos?</span>
          </h2>
          <p className="d">
            Seu projeto é único, e a gente também. Fale agora pelo WhatsApp e receba um orçamento
            personalizado.
          </p>
        </Reveal>

        <Reveal className="cta-mid">
          <WhatsAppButton arrow>Falar no WhatsApp</WhatsAppButton>
          <p className="note">
            {isWhatsAppConfigured()
              ? 'Respondemos em horário comercial.'
              : 'Contato por WhatsApp pendente de configuração.'}
          </p>
        </Reveal>

        <Reveal className="wa-phone" >
          <div role="img" aria-label="Exemplo ilustrativo de conversa no WhatsApp" className="wa-inner">
            <div className="wa-top">
              <ChevronLeft className="ic" aria-hidden="true" />
              <span className="av">K</span>
              <div>
                <b>Kelvra</b>
                <br />
                <span className="wa-sub">exemplo ilustrativo</span>
              </div>
            </div>
            <div className="wa-body">
              <div className="msg me">Olá! Gostaria de um site para minha empresa.</div>
              <div className="msg">Olá! Conte um pouco sobre o seu negócio e o que você espera do site.</div>
            </div>
            <div className="dm">Conversa demonstrativa</div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
