// App.jsx - Componente principal
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import UniqueFeature from './components/UniqueFeature';
import ScaleSection from './components/ScaleSection';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Benefits />
      <UniqueFeature 
        title="Simplifique sua Emissão de Notas Fiscais"
        description="Chega de perder tempo com burocracia fiscal. Com o LinkFono, você emite Notas Fiscais de Serviço Eletrônicas (NFS-e) diretamente pela plataforma, com integração automática a mais de 1000 prefeituras em todo o Brasil. Mantenha suas obrigações em dia com apenas alguns cliques e dedique mais tempo aos seus pacientes."
        icon="fa-file-invoice-dollar"
        imageAlt="Demonstração da emissão de NFS-e"
        imageSrc="/nfse-conectado.png"
        reverse={false}
      />
      <UniqueFeature 
        title="Organização Total com Espaços de Trabalho"
        description="Atende em múltiplos locais ou faz parte de diferentes equipes? Os Espaços de Trabalho do LinkFono permitem separar completamente agendas, pacientes e dados financeiros de cada contexto. Alterne entre seus ambientes com segurança e mantenha tudo organizado, seja você um profissional autônomo ou parte de uma clínica multidisciplinar."
        icon="fa-layer-group"
        imageSrc="/workspaces.png"
        imageAlt="Demonstração dos Espaços de Trabalho"
        reverse={true}
      />
      <ScaleSection />
      <Testimonials />
      <LeadForm />
      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;