import { firm } from '../data/firm.js'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video className="hero__video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
        <source src="/videos/law-office-interior.mp4" type="video/mp4" />
      </video>
      <div className="hero__wash" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light"><span className="eyebrow__line" />Advocacia em Salvador · Bahia</span>
          <h1>Direito com estratégia.<br /><em>Relações com confiança.</em></h1>
          <p>Assessoria jurídica consultiva e contenciosa para empresas, condomínios e pessoas.</p>
          <div className="hero__actions">
            <a className="button button--cream" href={`https://wa.me/${firm.phoneLink.replace('+', '')}`} target="_blank" rel="noreferrer">Converse com o escritório <span aria-hidden="true">↗</span></a>
            <a className="text-link text-link--light" href="#escritorio">Conheça o escritório</a>
          </div>
        </div>
        <div className="hero__seal" aria-hidden="true"><span>ZF</span><i>Salvador<br />Bahia</i></div>
        <a className="hero__scroll" href="#escritorio"><span className="hero__scroll-line" />Role para descobrir</a>
      </div>
    </section>
  )
}
