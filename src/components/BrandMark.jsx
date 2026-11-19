export default function BrandMark({ className = '' }) {
  return (
    <a className={`brand ${className}`} href="#inicio" aria-label="Zech & Fonseca, página inicial">
      <img className="brand__seal" src="/images/zech-fonseca-monogram.png" alt="" />
      <img className="brand__wordmark" src="/images/zech-fonseca-wordmark.png" alt="" />
    </a>
  )
}
