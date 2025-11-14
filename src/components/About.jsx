import './About.css';
import profileImage from '../assets/images/IMG_4903.JPG';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">SOBRE MIM</h2>
          <div className="about-text">
            <p>
              Sou Diogo, fotógrafo e modelo com experiência em moda, publicidade e projetos audiovisuais.
              Trabalho há mais de 15 anos no mercado criativo e já atuei em diferentes países, o que ajudou
              a ampliar meu olhar e a maneira como construo imagens.
            </p>
            <p>
              A fotografia faz parte do meu dia a dia tanto em trabalhos comerciais quanto em projetos pessoais.
              Tenho formação e prática em várias etapas da produção — da criação à pós — o que me permite trabalhar
              de forma completa e consistente.
            </p>
            <p>
              No meu trabalho, priorizo clareza, estética e naturalidade. Gosto de imagens que comunicam sem excessos
              e que refletem a essência do momento ou da pessoa fotografada.
            </p>
            <p>
              Se quiser desenvolver um projeto comigo, estou disponível para criar algo direto, bem executado e
              alinhado com o que você precisa.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <img src={profileImage} alt="Diogo Bordin" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
