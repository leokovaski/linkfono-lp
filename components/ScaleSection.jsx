// components/ScaleSection.jsx
import React from 'react';

const scaleOptions = [
  {
    icon: 'fa-solid fa-user-doctor',
    title: 'Profissional Individual',
    description: 'Tenha todo o controle da sua prática na palma da mão: agenda, prontuários, WhatsApp e cobranças em um só lugar.'
  },
  {
    icon: 'fa-solid fa-users-between-lines',
    title: 'Clínicas com Múltiplos Profissionais',
    description: 'Gerencie sua equipe, compartilhe pacientes, controle acessos e centralize dados financeiros com facilidade.'
  },
  {
    icon: 'fa-solid fa-building-user',
    title: 'Redes com Múltiplas Unidades',
    description: 'Organize diferentes unidades, consolide relatórios e mantenha a consistência do atendimento em todos os seus espaços.'
  }
];

const ScaleSection = () => {
  return (
    <section className="scale-section">
      <div className="container">
        <h2 className="gradient-text">De Profissionais Individuais a Grandes Clínicas</h2>
        <p className="scale-description">
          O LinkFono cresce com você. Seja um fonoaudiólogo autônomo transformando sua 
          agenda caótica em uma rotina produtiva, ou uma clínica com múltiplos profissionais 
          gerenciando diversas unidades — nossa plataforma se adapta perfeitamente às suas 
          necessidades.
        </p>
        
        <div className="scale-options">
          {scaleOptions.map((option, index) => (
            <div className="scale-option" key={index}>
              <i className={`${option.icon} scale-icon`}></i>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;