import { Clock, Eye, ShieldCheck, Trophy, type LucideIcon } from 'lucide-react'

export interface Benefit {
  title: string
  description: string
  icon: LucideIcon
}

export const benefits: Benefit[] = [
  { title: 'Mais visibilidade', description: 'Seja encontrado por mais clientes.', icon: Eye },
  { title: 'Credibilidade', description: 'Transmita profissionalismo e confiança.', icon: ShieldCheck },
  { title: 'Vendas 24/7', description: 'Seu negócio funcionando o tempo todo.', icon: Clock },
  { title: 'Diferencial', description: 'Fique à frente da concorrência.', icon: Trophy },
]
