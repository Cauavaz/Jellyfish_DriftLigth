import React from 'react';
import './css/Section.css';

const SectionProjects = () => {
  return (
    <section className="sectionProjects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Portfólio</span>
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            Explore uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-content">
              <h3>Projeto em Destaque</h3>
              <p>Descrição do projeto principal com tecnologias utilizadas</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
            </div>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-header">
              <h3>Outros Projetos</h3>
              <div className="carousel-controls">
                <button className="carousel-btn prev">‹</button>
                <button className="carousel-btn next">›</button>
              </div>
            </div>
            <div className="carousel-placeholder">
              {/* Espaço reservado para o carrossel */}
              <div className="carousel-item">
                <div className="project-thumb">
                  <h4>Projeto 1</h4>
                  <p>Breve descrição</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="project-thumb">
                  <h4>Projeto 2</h4>
                  <p>Breve descrição</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="project-thumb">
                  <h4>Projeto 3</h4>
                  <p>Breve descrição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
