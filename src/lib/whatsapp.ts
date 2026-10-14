import { siteConfig } from '../config/site'

export type WhatsAppMessageKey = keyof typeof siteConfig.messages

export function getWhatsAppNumber(): string {
  return siteConfig.whatsappNumber.replace(/\D/g, '')
}

export function isWhatsAppConfigured(): boolean {
  return getWhatsAppNumber().length >= 10
}

/** Retorna o link wa.me com a mensagem codificada, ou null se o número não estiver configurado. */
export function buildWhatsAppLink(key: WhatsAppMessageKey = 'default'): string | null {
  if (!isWhatsAppConfigured()) return null
  const text = encodeURIComponent(siteConfig.messages[key])
  return `https://wa.me/${getWhatsAppNumber()}?text=${text}`
}
