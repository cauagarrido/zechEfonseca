import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  return (
    <section className="about section" id="escritorio">
      <div className="container about__grid">
        <div className="about__visual" data-reveal="image">
          <div className="about__visual-frame">
            <img className="about__only-logo" src="/images/zech-fonseca-monogram.png" alt="Monograma ZF do escritório Zech & Fonseca" />
          </div>
        </div>
        <div className="about__copy" data-reveal="right">
          <SectionHeading eyebrow="O escritório" title={<>Segurança jurídica para seguir em frente.</>}>
            O Zech & Fonseca Advogados Associados atua nas frentes consultiva e contenciosa, com foco em empresas e condomínios.
          </SectionHeading>
          <p className="about__text">Transitamos pelo direito público e privado para antecipar riscos, orientar decisões e acompanhar nossos clientes no dia a dia e em disputas judiciais.</p>
          <p className="about__text">Com atendimento próximo e atuação estratégica, buscamos reduzir incertezas e proteger aquilo que nossos clientes constroem.</p>
          <div className="about__signature"><span className="about__signature-mark">ZF</span><span>Atuação consultiva<br />e contenciosa</span></div>
        </div>
      </div>
    </section>
  )
}
