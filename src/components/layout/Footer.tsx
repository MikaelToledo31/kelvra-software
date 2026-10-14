import { navItems, siteConfig } from '../../config/site'
import { Container } from '../common/Container'
import { InstagramIcon } from '../common/Icons'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer>
      <Container className="ft">
        <div className="lf">
          <Logo />
          <span className="tg">{siteConfig.tagline}</span>
        </div>
        <nav aria-label="Rodapé">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="r">
          <WhatsAppButton compact withIcon={false}>
            Fale conosco
          </WhatsAppButton>
          {siteConfig.instagramUrl && (
            <a
              className="ig"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da KELVRA"
            >
              <InstagramIcon className="ic ic-lg" />
            </a>
          )}
        </div>
      </Container>
    </footer>
  )
}
