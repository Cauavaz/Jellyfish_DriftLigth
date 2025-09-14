// src/header.js
export default function Header() {
  return (
    <div className="content">
      <div className="content1">  
        
      <div className="hero">
          <div className="alinhamento-video">
             <video autoPlay muted loop playsInline className="video" id="video">
              <source src="/video/jellyfish_minus.webm" type="video/webm" />
            </video> 
          </div>
      </div>
      </div>
      <div className="content2">Aqui vai o conteúdo da página abaixo do menu/header.</div>
    </div>
  );
}