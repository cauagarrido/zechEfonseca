import SectionHeading from '../components/SectionHeading.jsx'
import { firm } from '../data/firm.js'

function PartnerCard({ partner, index }) {
  return (
    <article className={`partner-card partner-card--${index + 1}`} data-reveal={index === 0 ? 'left' : 'right'} style={{ '--reveal-delay': `${index * 140}ms` }}>
      <div className="partner-card__portrait" aria-hidden="true">
        <span className="partner-card__orbit partner-card__orbit--one" />
        <span className="partner-card__orbit partner-card__orbit--two" />
        <span className="partner-card__initials">{partner.initials}</span>
        <span className="partner-card__caption">Z<span>&</span>F</span>
      </div>
      <div className="partner-card__body">
        <span className="eyebrow"><span className="eyebrow__line" />{partner.role}</span>
        <h3>{partner.name}</h3>
        <p>{partner.bio}</p>
        <div className="partner-card__contacts">
          <a href={`tel:${partner.phoneLink}`}><span aria-hidden="true">☎</span>{partner.phone}</a>
          <a href={`mailto:${partner.email}`}><span aria-hidden="true">✉</span>{partner.email}</a>
        </div>
      </div>
    </article>
  )
}

export default function Partners() {
  return (
    <section className="partners section" id="socios">
      <div className="container">
        <div className="partners__heading">
          <SectionHeading eyebrow="Quem está ao seu lado" title={<>Relações de confiança,<br /><em>construídas de perto.</em></>}>
            Os sócios acompanham cada caso com proximidade, estratégia e atenção aos objetivos do cliente.
          </SectionHeading>
          <span className="partners__seal" aria-hidden="true" data-reveal="right">Z<span>&</span>F</span>
        </div>
        <div className="partner-grid">
          {firm.partners.map((partner, index) => <PartnerCard partner={partner} index={index} key={partner.name} />)}
        </div>
      </div>
    </section>
  )
}
