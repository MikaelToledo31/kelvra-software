import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { buildWhatsAppLink } from '../../lib/whatsapp'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { ProjectArt } from '../art/ProjectArt'

export function Projects() {
  const fallbackHref = buildWhatsAppLink('projects')

  return (
    <section className="sec" id="projetos" aria-labelledby="projetos-title">
      <Container className="proj-g">
        <Reveal className="proj-side">
          <SectionHeading
            id="projetos-title"
            tag="01"
            title="Projetos"
            description="Cada site é um novo desafio, e é com esse cuidado que entregamos resultados reais para nossos clientes."
          />
          <WhatsAppButton variant="outline" message="projects" withIcon={false} arrow>
            Ver todos os projetos
          </WhatsAppButton>
        </Reveal>

        <Reveal className="cards">
          {projects.map((project) => {
            const href = project.url || fallbackHref
            const content = (
              <>
                {project.isDemo && <span className="demo">Demonstração</span>}
                {project.image ? (
                  <img
                    className="art"
                    src={project.image}
                    alt={`${project.category} — ${project.description}`}
                    loading="lazy"
                    width={300}
                    height={410}
                  />
                ) : (
                  <ProjectArt kind={project.art} />
                )}
                <div className="cap">
                  <h3>{project.category}</h3>
                  <small>{project.description}</small>
                  <span className="go">
                    Ver projeto <ArrowRight className="ic ic-sm" aria-hidden="true" />
                  </span>
                </div>
              </>
            )
            return href ? (
              <a
                key={project.id}
                className="pc"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto: ${project.category}, ${project.description}`}
              >
                {content}
              </a>
            ) : (
              <div key={project.id} className="pc" role="group" aria-label={project.category}>
                {content}
              </div>
            )
          })}
        </Reveal>
      </Container>
    </section>
  )
}
