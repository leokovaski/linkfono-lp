// components/Benefits.jsx
import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>O Futuro Chegou: IA e WhatsApp na Rotina Clínica</h2>
        
        <div className="benefit-item">
          <div className="benefit-content">
            <h3>PEIs Inteligentes com IA em Segundos, Não em Horas</h3>
            <p>
              Cansado de gastar horas elaborando Planos Educacionais Individualizados? 
              Nossa <strong>IA exclusiva</strong> analisa os dados do paciente, como relatorios de avaliação, e sugere planos estruturados, 
              permitindo que você personalize e <strong>finalize em uma fração do tempo</strong>. Foque no 
              que realmente importa: a evolução dos seus pacientes.
            </p>
          </div>
          <div className="benefit-image">
            <img src="/pei.png" alt="Demonstração da IA gerando um PEI" />
          </div>
        </div>
        
        <div className="benefit-item reverse">
          <div className="benefit-content">
            <h3>Comunicação que Conecta e Reduz Faltas</h3>
            <p>
              Fortaleça o relacionamento com seus pacientes e <strong>reduza faltas em até 60%</strong> 
              com lembretes automáticos via WhatsApp. Envie cobranças de forma prática, profissional e <strong>automatizada</strong>. Tudo sem sair da plataforma.
            </p>
          </div>
          <div className="benefit-image">
          <img src="/whatsapp-integrado.png" alt="Seu WhatsApp Integrado ao LinkFono" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;