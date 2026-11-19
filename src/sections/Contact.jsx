import SectionHeading from '../components/SectionHeading.jsx'
import { firm } from '../data/firm.js'

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(firm.mapQuery)}&output=embed`
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firm.mapQuery)}`

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact__heading">
          <SectionHeading eyebrow="Estamos à disposição" title={<>Vamos conversar sobre<br /><em>o que importa para você.</em></>}>
            Entre em contato com o escritório ou venha nos visitar em Salvador.
          </SectionHeading>
          <a className="button button--brown" href={`https://wa.me/${firm.phoneLink.replace('+', '')}`} target="_blank" rel="noreferrer">Fale com nossa equipe <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact__grid">
          <div className="contact__details" data-reveal="left">
            <div className="contact-item">
              <span className="contact-item__label">Telefone do escritório</span>
              <a className="contact-item__value" href={`tel:${firm.phoneLink}`}>{firm.phone}</a>
              <a className="contact-item__action" href={`https://wa.me/${firm.phoneLink.replace('+', '')}`} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-item">
              <span className="contact-item__label">Endereço</span>
              <address className="contact-item__value">{firm.address}</address>
              <a className="contact-item__action" href={directionsUrl} target="_blank" rel="noreferrer">Como chegar <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-item contact-item--last">
              <span className="contact-item__label">E-mail dos sócios</span>
              {firm.partners.map((partner) => <a className="contact-item__email" href={`mailto:${partner.email}`} key={partner.email}>{partner.email}</a>)}
            </div>
          </div>
          <div className="map-card" data-reveal="right">
            <iframe title="Localização do escritório Zech & Fonseca em Salvador" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div className="map-card__label"><span className="map-card__pin" aria-hidden="true">⌖</span><span><strong>Zech & Fonseca</strong><small>Salvador Shopping · Torre Nova Iorque</small></span><a href={directionsUrl} target="_blank" rel="noreferrer" aria-label="Abrir localização no Google Maps">↗</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}
