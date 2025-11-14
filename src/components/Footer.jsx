import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DIOGO BORDIN</h3>
            <p>Fotógrafo & Modelo</p>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <p>contato@dbordin.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Diogo Bordin. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#privacy">Política de Privacidade</a>
            <span>•</span>
            <a href="#terms">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
