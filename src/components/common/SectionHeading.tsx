import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  title: ReactNode
  description?: string
  tag?: string
}

export function SectionHeading({ id, title, description, tag }: SectionHeadingProps) {
  return (
    <>
      {tag && <span className="tag">{tag}</span>}
      <h2 id={id}>{title}</h2>
      {description && <p className="sub">{description}</p>}
    </>
  )
}
