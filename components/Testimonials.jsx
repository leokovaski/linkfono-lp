// components/Testimonials.jsx
import React, { useState, useEffect, useRef } from 'react';

const testimonialData = [
  {
    text: "Depois de 12 anos com fichas físicas, migrar para o digital parecia um caos. O LinkFono não só facilitou, como melhorou minha organização. Levo 80% menos tempo para registrar sessões! É como ter uma secretária especialista em fono.",
    author: "Fga. Dra. Carolina Kovaski",
    role: "CRFa 2-20427"
  },
  {
    text: "O que mais me surpreendeu foi a personalização do prontuário e gerar o plano terapêutico com IA em segundos. É realmente inovador. Indico para todos que querem crescer sem burocracia.",
    author: "Fga. Fernanda Lima",
    role: "Fonoaudióloga clínica e coordenadora de equipe"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayIntervalRef = useRef(null);
  
  // Tempo entre slides (em milissegundos)
  const autoplayDelay = 4000;

  // Verificar se a tela é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar no carregamento inicial
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navegar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  // Configurar autoplay para rotação dos slides
  useEffect(() => {
    if (isMobile) {
      // Limpar qualquer intervalo existente
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      
      // Iniciar novo intervalo
      autoplayIntervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
      
      // Pausar autoplay quando a página estiver em segundo plano
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearInterval(autoplayIntervalRef.current);
        } else {
          autoplayIntervalRef.current = setInterval(nextSlide, autoplayDelay);
        }
      };
      
      document.addEventListener("visibilitychange", handleVisibilityChange);
      
      // Cleanup
      return () => {
        clearInterval(autoplayIntervalRef.current);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }
  }, [isMobile]);

  // Pausar autoplay quando o usuário toca no carrossel
  const pauseAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  // Reiniciar autoplay quando o usuário terminar interação
  const resumeAutoplay = () => {
    if (isMobile) {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      autoplayIntervalRef.current = setInterval(nextSlide, autoplayDelay);
    }
  };

  // Configura o tratamento de toque para swipe
  const handleTouchStart = (e) => {
    pauseAutoplay();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    // Detectar direção do swipe e alterar slide
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe para a esquerda - próximo slide
      nextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swipe para a direita - slide anterior
      setCurrentSlide((prev) => 
        prev === 0 ? testimonialData.length - 1 : prev - 1
      );
    }
    
    // Reiniciar autoplay
    resumeAutoplay();
  };

  // Renderiza o carrossel para mobile ou grid para desktop
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Quem Usa, Transforma sua Prática</h2>
        
        {isMobile ? (
          // Versão Carrossel para Mobile
          <div 
            className="testimonial-carousel"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonial-carousel-inner" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialData.map((testimonial, index) => (
                <div className="testimonial-slide" key={index}>
                  <div className="testimonial-card">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">{testimonial.author}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {testimonialData.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => {
                    pauseAutoplay();
                    setCurrentSlide(index);
                    resumeAutoplay();
                  }}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          // Versão Grid para Desktop
          <div className="testimonial-grid">
            {testimonialData.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;