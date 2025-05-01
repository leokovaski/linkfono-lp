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
        <h1 className="logo-title">
          <svg 
            className="logo-svg"
            width="136" 
            height="136" 
            viewBox="0 0 1024 1024" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="linkfonoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c42eff" />
                <stop offset="100%" stopColor="#9925d0" />
              </linearGradient>
            </defs>
            <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
               fill="url(#linkfonoGradient)" stroke="none">
              <path d="M5799 8336 c-2 -2 -29 -6 -59 -9 -277 -28 -627 -180 -939 -408 -74
              -55 -323 -298 -1102 -1077 -654 -655 -1034 -1044 -1089 -1112 -227 -286 -371
              -563 -449 -865 -52 -199 -56 -236 -56 -485 1 -248 13 -349 66 -539 184 -655
              727 -1186 1373 -1341 235 -57 451 -66 692 -31 281 42 537 143 794 314 142 95
              298 237 620 564 378 385 461 457 543 477 31 7 92 -23 697 -343 157 -83 301
              -156 320 -161 50 -14 122 -12 161 4 36 15 89 66 108 103 8 17 11 259 11 895
              0 710 3 875 13 887 30 36 151 238 198 332 60 120 120 276 148 385 52 206 55
              230 56 474 0 227 -3 274 -25 388 -39 206 -128 444 -223 595 -320 512 -873 874
              -1437 942 -104 13 -411 21 -421 11z m336 -796 c115 -15 229 -53 361 -120 257
              -131 417 -285 515 -494 38 -82 86 -266 100 -388 18 -157 -10 -368 -71 -526
              -36 -95 -127 -266 -173 -327 -25 -33 -146 -155 -269 -272 -122 -116 -600 -589
              -1060 -1050 -460 -462 -861 -858 -891 -882 -199 -153 -473 -240 -715 -227
              -139 8 -241 28 -347 69 -555 213 -843 851 -646 1429 16 46 37 101 47 123 35
              76 124 223 186 307 86 116 2009 2050 2126 2137 105 79 178 121 289 164 183 71
              325 86 548 57z"/>
              <path d="M4775 5801 c-103 -37 -167 -86 -225 -173 -98 -148 -104 -297 -17
              -461 57 -108 184 -190 323 -210 80 -12 154 2 252 48 123 57 212 190 237 350
              18 120 -73 312 -184 389 -105 73 -274 98 -386 57z"/>
            </g>
          </svg>
          <span className="logo-text">LinkFono</span>
        </h1>
        <h1>Revolucione sua Prática Fonoaudiológica com IA</h1>
        <p className="subheading">
          A primeira plataforma completa para fonoaudiólogos que integra gestão, prontuário 
          eletrônico com IA e conexão com seu WhatsApp. Tudo que você precisa em um só lugar.
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