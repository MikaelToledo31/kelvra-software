import type { ReactNode } from 'react'
import { buildWhatsAppLink, type WhatsAppMessageKey } from '../../lib/whatsapp'
import { Button } from './Button'
import { WhatsAppIcon } from './Icons'

interface WhatsAppButtonProps {
  children: ReactNode
  message?: WhatsAppMessageKey
  variant?: 'primary' | 'outline'
  compact?: boolean
  fullWidth?: boolean
  withIcon?: boolean
  arrow?: boolean
}

/** Botão de contato. Sem número configurado, fica desabilitado e indica a pendência. */
export function WhatsAppButton({
  children,
  message = 'default',
  withIcon = true,
  ...rest
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message)
  return (
    <Button
      {...rest}
      href={href ?? undefined}
      external
      disabled={!href}
      title={href ? undefined : 'WhatsApp pendente de configuração (src/config/site.ts)'}
      icon={withIcon ? <WhatsAppIcon /> : undefined}
    >
      {children}
    </Button>
  )
}
