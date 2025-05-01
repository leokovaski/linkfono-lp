// components/Hero.jsx
import React from 'react';

const Hero = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('lead-form').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>LinkFono</h1>
        <h1>Revolucione sua Prática Fonoaudiológica com IA</h1>
        <p className="subheading">
          A primeira plataforma completa para fonoaudiólogos que integra gestão, prontuário 
          eletrônico com IA e integração via WhatsApp. Tudo que você precisa em um só lugar.
        </p>
        <a href="#lead-form" className="cta-button" onClick={scrollToForm}>
          Garanta Acesso Antecipado
        </a>
        <div className="hero-image">
          <picture>
            <source media="(max-width: 768px)" srcSet="/image-master-mobile.png" />
            <source media="(min-width: 769px)" srcSet="/image-master.png" />
            <img src="/image-master.png" alt="Interface intuitiva do LinkFono" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;