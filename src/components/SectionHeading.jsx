export default function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow" data-reveal="up"><span className="eyebrow__line" />{eyebrow}</span>
      <h2 data-reveal="up" style={{ '--reveal-delay': '90ms' }}>{title}</h2>
      {children && <p data-reveal="up" style={{ '--reveal-delay': '170ms' }}>{children}</p>}
    </div>
  )
}
