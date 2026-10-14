import { benefits } from '../../data/benefits'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function Benefits() {
  return (
    <section className="sec" id="por-que" aria-labelledby="por-que-title">
      <Container className="why-g">
        <Reveal className="why-side">
          <SectionHeading
            id="por-que-title"
            title={
              <>
                Por que ter um <span className="or">site</span>?
              </>
            }
            description="Mais do que uma vitrine, seu site é uma ferramenta de vendas, credibilidade e crescimento para o seu negócio."
          />
          <Button variant="outline" href="#contato" arrow>
            Entenda a importância
          </Button>
        </Reveal>
        <Reveal className="bn">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="bc" key={title}>
              <span className="ring">
                <Icon className="ic" aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
