import { firm } from '../data/firm.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <div className="site-footer__identity"><p>{firm.name}</p><p>{firm.tagline}</p></div>
        <nav aria-label="Navegação do rodapé"><a href="#escritorio">O escritório</a><a href="#atuacao">Atuação</a><a href="#socios">Sócios</a><a href="#contato">Contato</a></nav>
        <a className="site-footer__top" href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
      </div>
      <div className="container site-footer__bottom"><span>© {new Date().getFullYear()} Zech & Fonseca Advogados Associados</span><span>Salvador · Bahia</span></div>
    </footer>
  )
}
