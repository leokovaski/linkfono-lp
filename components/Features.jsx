// components/Features.jsx
import React from 'react';

const featureData = [
  {
    icon: 'fa-solid fa-calendar-days',
    title: 'Agenda Inteligente',
    description: 'Agendamentos recorrentes, visualização flexível e controle de presença. Gerencie sua equipe com simplicidade em qualquer dispositivo.'
  },
  {
    icon: 'fa-solid fa-clipboard-check',
    title: 'Prontuário Eletrônico com IA',
    description: 'Registros detalhados, upload de arquivos e criação de PEIs otimizada com inteligência artificial. Economize horas de trabalho manual.'
  },
  {
    icon: 'fa-solid fa-user-group',
    title: 'Gestão Completa de Pacientes',
    description: 'Cadastro detalhado, vínculo de responsáveis e compartilhamento seguro entre terapeutas. Tenha o histórico completo sempre à mão.'
  },
  {
    icon: 'fa-solid fa-sack-dollar',
    title: 'Financeiro Descomplicado',
    description: 'Controle de cobranças por sessão ou pacote, com envio automático via WhatsApp. Mantenha suas finanças organizadas sem esforço.'
  },
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp Integrado',
    description: 'Envio automático de confirmações, lembretes e cobranças diretamente pelo WhatsApp. Reduza faltas e fortaleça relacionamentos.'
  },
  {
    icon: 'fa-solid fa-file-invoice',
    title: 'Emissão de Notas Fiscais',
    description: 'Emita NFS-e diretamente pela plataforma, integrada a mais de 1000 municípios. Chega de sofrer com burocracia fiscal.'
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Organização Inteligente para Fonoaudiólogos Modernos</h2>
        <p className="subheading">
          Ferramentas que transformarão sua prática clínica, concentrando-se no que 
          realmente importa: seus pacientes.
        </p>
        
        <div className="feature-grid">
          {featureData.map((feature, index) => (
            <div className="feature-item" key={index}>
              <i className={`${feature.icon} feature-icon`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;