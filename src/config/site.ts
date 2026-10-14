/**
 * Configuração central do site. Edite apenas este arquivo para alterar
 * contatos, textos institucionais e navegação.
 */
export const siteConfig = {
  name: 'KELVRA',
  tagline: 'Sites que impulsionam negócios.',
  description:
    'Criamos sites modernos, rápidos e estratégicos para empresas que desejam fortalecer sua presença digital e conquistar novas oportunidades.',

  /** Nome do proprietário. Se vazio, é exibido um texto genérico. */
  developerName: '',
  /** Texto exibido no modal "Conheça mais sobre mim". */
  developerBio: '',
  /** URL (ou caminho importado) da foto do proprietário. Se vazio, exibe um espaço reservado. */
  developerPhoto: '',

  /** Somente dígitos, com código do país e DDD. Ex.: 55 + DDD + número. Vazio = pendente. */
  whatsappNumber: '',
  /** URL completa do perfil. Vazio = ícone do Instagram oculto. */
  instagramUrl: '',
  /** URL pública do site (documentação/SEO futuro). */
  siteUrl: '',

  messages: {
    default:
      'Olá! Conheci a KELVRA pelo site e gostaria de solicitar um orçamento para desenvolver um site para minha empresa.',
    projects: 'Olá! Vi a KELVRA pelo site e gostaria de conhecer outros projetos do portfólio.',
  },
} as const

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'por-que', label: 'Por que ter um site?' },
] as const

export const sectionIds = navItems.map((item) => item.id)
