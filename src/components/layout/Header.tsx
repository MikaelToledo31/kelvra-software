import { useCallback, useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { navItems, sectionIds } from '../../config/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/utils'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={cn('top', scrolled && 'sc')}>
        <div className="wrap nav">
          <Logo />
          <nav className="menu" aria-label="Principal">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'on' : undefined}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <WhatsAppButton compact>Fale conosco</WhatsAppButton>
          </div>
          <button
            className="burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="ic" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
