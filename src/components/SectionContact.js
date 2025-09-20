import React from 'react';
import './css/Section.css';

const SectionContact = () => {
  return (
    <section className="sectionContact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-badge">Vamos conversar</span>
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Pronto para transformar suas ideias em realidade digital
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>seu.email@exemplo.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/seuperfil</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🐱</div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <p>github.com/seuusuario</p>
                </div>
              </div>
            </div>
            
            <div className="social-carousel-container">
              <h3>Redes Sociais</h3>
              {/* Espaço reservado para carrossel de redes sociais */}
              <div className="social-carousel">
                <div className="social-item">
                  <div className="social-icon">📱</div>
                  <span>Instagram</span>
                </div>
                <div className="social-item">
                  <div className="social-icon">🐦</div>
                  <span>Twitter</span>
                </div>
                <div className="social-item">
                  <div className="social-icon">📺</div>
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="contact-form">
              <h3>Envie uma Mensagem</h3>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Seu nome" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Seu email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Assunto" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Sua mensagem" className="form-textarea" rows="5"></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Enviar Mensagem
                  <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
