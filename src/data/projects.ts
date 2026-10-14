export type ProjectArtKind = 'build' | 'net' | 'gym'

export interface Project {
  id: string
  category: string
  description: string
  /** Ilustração vetorial usada enquanto não houver imagem. */
  art: ProjectArtKind
  /** Imagem real do projeto (importada de src/assets/images/projects). */
  image?: string
  /** Link do projeto. Se vazio, o card abre o WhatsApp. */
  url?: string
  /** Projeto conceitual/demonstrativo. */
  isDemo: boolean
}

export const projects: Project[] = [
  { id: 'construcao', category: 'Construção', description: 'Site institucional', art: 'build', isDemo: true },
  { id: 'internet', category: 'Internet', description: 'Provedor de internet', art: 'net', isDemo: true },
  { id: 'academia', category: 'Academia', description: 'Site institucional', art: 'gym', isDemo: true },
]
