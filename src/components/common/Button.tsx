import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  compact?: boolean
  fullWidth?: boolean
  /** Ícone à esquerda do texto. */
  icon?: ReactNode
  /** Exibe a seta animada à direita. */
  arrow?: boolean
  href?: string
  external?: boolean
  disabled?: boolean
  title?: string
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  compact,
  fullWidth,
  icon,
  arrow,
  href,
  external,
  disabled,
  title,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'btn',
    variant === 'primary' ? 'btn-or' : 'btn-ol',
    compact && 'btn-compact',
    fullWidth && 'btn-full',
    className,
  )
  const content = (
    <>
      {icon}
      {children}
      {arrow && <ArrowRight className="ic arr" aria-hidden="true" />}
    </>
  )

  if (href && !disabled) {
    return (
      <a
        className={classes}
        href={href}
        title={title}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      title={title}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
