import SectionHeading from '../components/SectionHeading.jsx'
import PracticeIcon from '../components/PracticeIcon.jsx'
import { practiceAreas } from '../data/firm.js'

export default function PracticeAreas() {
  return (
    <section className="practice section" id="atuacao">
      <div className="container">
        <div className="practice__intro">
          <SectionHeading eyebrow="Como podemos ajudar" title={<>Atuação jurídica <em>abrangente.</em></>}>
            Soluções jurídicas para as diferentes relações que movem empresas, condomínios e pessoas.
          </SectionHeading>
          <p className="practice__note">Consultivo <span>·</span> Contencioso</p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-card" key={area.number} data-reveal="up" style={{ '--reveal-delay': `${Number(area.number) * 90}ms` }}>
              <div className="practice-card__top"><PracticeIcon name={area.icon} /><span>{area.number}</span></div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <a href="#contato" aria-label={`Fale conosco sobre ${area.title}`} className="practice-card__link">Saiba mais <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <div className="practice__footer"><span className="practice__rule" /><p>Estratégia jurídica alinhada à realidade de cada cliente.</p><span className="practice__rule" /></div>
      </div>
    </section>
  )
}
