import { useState } from 'react'
import BrandMark from './BrandMark.jsx'

const links = [
  ['O escritório', '#escritorio'],
  ['Atuação', '#atuacao'],
  ['Sócios', '#socios'],
  ['Contato', '#contato'],
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="main-nav__cta" href="#contato" onClick={closeMenu}>Fale conosco</a>
        </nav>
      </div>
    </header>
  )
}
