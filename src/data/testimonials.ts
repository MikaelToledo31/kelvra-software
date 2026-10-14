export interface Testimonial {
  id: string
  text: string
  name: string
  company: string
  /** Conteúdo de exemplo. Defina como false apenas para depoimentos reais e autorizados. */
  isDemo: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'ex-1',
    text: 'Depoimento de exemplo: aqui entra o texto real de um cliente satisfeito com o site entregue.',
    name: 'Nome do cliente',
    company: 'Empresa (exemplo)',
    isDemo: true,
  },
  {
    id: 'ex-2',
    text: 'Segundo depoimento de exemplo. Substitua este conteúdo quando houver avaliações reais autorizadas.',
    name: 'Nome do cliente',
    company: 'Empresa (exemplo)',
    isDemo: true,
  },
]
