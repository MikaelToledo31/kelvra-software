import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { navItems } from '../../config/site'
import { WhatsAppButton } from '../common/WhatsAppButton'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      id="mobile-menu"
      className={open ? 'drawer open' : 'drawer'}
      aria-hidden={!open}
      role="dialog"
      aria-label="Menu de navegação"
    >
      <button ref={closeRef} className="x" onClick={onClose} aria-label="Fechar menu">
        <X className="ic" />
      </button>
      {navItems.map((item) => (
        <a key={item.id} className="l" href={`#${item.id}`} onClick={onClose}>
          {item.label}
        </a>
      ))}
      <WhatsAppButton fullWidth>Fale conosco</WhatsAppButton>
    </div>
  )
}
