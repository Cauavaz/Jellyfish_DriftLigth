// PASSO 1: Importar as ferramentas necessárias.
// useEffect e useRef são do React, para controlar quando a animação roda e para 'apontar' para o elemento.
// gsap e ScrollTrigger são da biblioteca de animação.
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/Section.css';

// É importante registrar o plugin ScrollTrigger para que o GSAP saiba como usá-lo.
gsap.registerPlugin(ScrollTrigger);

const SectionProjects = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const panels = track.querySelectorAll('.project-panel');

    // Calcula a distância total para mover todos os painéis
    const totalWidth = (panels.length - 1) * 100; // 100vw por painel

    // Cria a timeline com ScrollTrigger usando a técnica avançada
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true, // fixa o container durante a animação
        start: 'top top', // quando o topo do container atinge o topo da viewport
        end: `+=${totalWidth * 10}`, // end baseado na quantidade de painéis
        scrub: 1, // smooth scrubbing, leva 1 segundo para "alcançar" a scrollbar
        snap: {
          snapTo: 'labels', // encaixa no label mais próximo da timeline
          duration: { min: 0.2, max: 3 }, // duração mínima e máxima do snap
          delay: 0.2, // espera 0.2s após o último scroll antes de fazer o snap
          ease: 'power1.inOut' // easing do snap
        }
      }
    });

    // Adiciona animações e labels à timeline
    tl.addLabel('start')
      .to(track, { x: '0vw', duration: 1 }) // painel 1 (posição inicial)
      .addLabel('panel1')
      .to(track, { x: '-100vw', duration: 1 }) // move para painel 2
      .addLabel('panel2')
      .to(track, { x: '-200vw', duration: 1 }) // move para painel 3
      .addLabel('panel3')
      .to(track, { x: '-300vw', duration: 1 }) // move para painel 4
      .addLabel('end');

    // Função de limpeza
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="sectionProjects" ref={containerRef}>
      {/* O trilho que se moverá horizontalmente */}
      <div className="projects-track" ref={trackRef}>
        
        {/* Cada painel é uma tela cheia */}
        <div className="project-panel panel-1">
          <div className="project-content">
             <div className="div-trast1">
              <span className='span-trast1'>Support </span>
              <span className='span-trast2'>animals</span>
            </div>
          </div>
          <div className="div-trast2">
             <span className='span-trast2'>Support</span>
             <span className='span-trast2'>animals</span>
            </div>
          <div className="project-content2">
            <div className="div-tras1">
              <span >   CRITICALDANGER É TRAZIDO A VOCÊ POR ALGUÉM
              EM PARCERIA COM ILUSTRADORES E ARTISTAS QUE ACREDITAM NA CAUSA, 100% DOS LUCROS DA CRITICALDANGER SERÃO DOADOS DIRETAMENTE PARA NOSSAS INSTITUIÇÕES DE CARIDADE ESCOLHIDAS. TODAS AS INSTITUIÇÕES DE CARIDADE QUE APO. </span>
            </div>
            <div className="div-tras">2 mil<span className="span-tras">+</span>
            </div>
          </div>
        </div>
  
        <div className="project-panel panel-2">
          <h1>Projeto Dois</h1>
          <p>Segundo projeto com design inovador</p>
        </div>
  
        <div className="project-panel panel-3">
          <h1>Projeto Três</h1>
          <p>Terceiro projeto com funcionalidades avançadas</p>
        </div>
  
        <div className="project-panel panel-4">
          <h1>Projeto Quatro</h1>
          <p>Quarto projeto com performance otimizada</p>
        </div>
  
      </div>
    </section>
  );
  
};

export default SectionProjects;
