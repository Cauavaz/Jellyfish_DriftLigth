import React from 'react';
import './css/Section.css';

const SectionAbout = () => {
  return (
    <section className="sectionAbout">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <span className="section-badge">Quem sou eu</span>
              <h2 className="section-title">Sobre Mim</h2>
              <p className="section-subtitle">
                Desenvolvedor apaixonado por criar experiências digitais únicas
              </p>
            </div>
            
            <div className="about-description">
              <p>
                Sou um desenvolvedor com experiência em tecnologias modernas, 
                sempre buscando inovação e excelência em cada projeto.
              </p>
              <p>
                Minha jornada começou com curiosidade e evoluiu para uma paixão 
                por resolver problemas complexos através do código.
              </p>
            </div>
            
            <div className="skills-preview">
              <h3>Principais Habilidades</h3>
              <div className="skills-carousel-container">
                {/* Espaço reservado para carrossel de habilidades */}
                <div className="skills-carousel">
                  <div className="skill-item">
                    <div className="skill-icon">⚛️</div>
                    <span>React</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">🟢</div>
                    <span>Node.js</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">🎨</div>
                    <span>UI/UX</span>
                  </div>
                  <div className="skill-item">
                    <div className="skill-icon">📱</div>
                    <span>Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-placeholder">
                {/* Espaço para foto ou animação */}
                <div className="profile-avatar">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projetos Concluídos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
