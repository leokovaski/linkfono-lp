// components/LeadForm.jsx
import React, { useState, useEffect } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    fbclid: '',
    gclid: '',
    referrer: '',
    user_agent: '',
    ip_address: ''
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [error, setError] = useState('');
  
  // Captura parâmetros UTM e identificadores de rastreio quando o componente é montado
  useEffect(() => {
    // Captura parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      fbclid: urlParams.get('fbclid') || '',
      gclid: urlParams.get('gclid') || ''
    };
    
    // Captura referrer, user agent
    const referrer = document.referrer || '';
    const user_agent = navigator.userAgent || '';
    
    // Obtém IP do usuário via API externa (será capturado de forma assíncrona)
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setFormData(prevData => ({
          ...prevData,
          ip_address: data.ip || ''
        }));
      })
      .catch(error => {
        console.error('Erro ao obter IP:', error);
      });
    
    // Atualiza o estado do formulário com os dados capturados
    setFormData(prevData => ({
      ...prevData,
      ...utmParams,
      referrer,
      user_agent
    }));
  }, []);

  // Aplica máscara ao WhatsApp
  const applyWhatsAppMask = (value) => {
    // Obtém apenas os números
    let rawValue = value.replace(/\D/g, '');
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    if (rawValue.length > 11) {
      rawValue = rawValue.slice(0, 11);
    }
    
    // Formata o número como (xx) xxxxx-xxxx
    let formattedValue = '';
    
    if (rawValue.length <= 2) {
      // Até 2 dígitos: (xx
      formattedValue = rawValue.length > 0 ? '(' + rawValue : '';
    } else if (rawValue.length <= 7) {
      // De 3 a 7 dígitos: (xx) xxxxx
      formattedValue = '(' + rawValue.substring(0, 2) + ') ' + rawValue.substring(2);
    } else {
      // 8 ou mais dígitos: (xx) xxxxx-xxxx
      formattedValue = '(' + rawValue.substring(0, 2) + ') ' + 
                      rawValue.substring(2, 7) + '-' + 
                      rawValue.substring(7);
    }
    
    return formattedValue;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      setFormData({
        ...formData,
        [name]: applyWhatsAppMask(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Limpa qualquer erro existente
    
    // Prepara o payload de envio com todos os dados do formulário
    const payload = { ...formData };
    
    // Aqui você pode implementar a lógica de envio para o webhook
    fetch('https://webhook.linkfono.com.br/webhook/f45a5348-5b4b-44bd-8ef7-108aa7b3955c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => {
      if (response.ok) {
        setShowSuccessDialog(true); // Mostra o diálogo de sucesso
        // Limpa apenas os campos visíveis do formulário
        // mantendo os parâmetros UTM e outros dados capturados
        setFormData(prevData => ({
          ...prevData,
          name: '',
          email: '',
          whatsapp: ''
        }));
      } else {
        setError('Houve um erro ao enviar seus dados. Por favor, tente novamente.');
      }
    })
    .catch(error => {
      setError('Erro ao conectar com o servidor. Por favor, tente novamente mais tarde.');
      console.error('Erro:', error);
    });
  };
  
  const closeSuccessDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <section id="lead-form" className="lead-form">
      <div className="container">
        <h2>Seja um dos Primeiros a Transformar sua Prática</h2>
        <p>
          O LinkFono está em fase final de testes. Inscreva-se agora para garantir 
          acesso antecipado e transformar a gestão da sua clínica antes de todos.
        </p>
        
        <form id="early-access-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Seu Nome Completo" 
            required 
            value={formData.name}
            onChange={handleInputChange}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Seu Melhor Email" 
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input 
            type="tel" 
            name="whatsapp" 
            placeholder="Seu WhatsApp com DDD" 
            required
            value={formData.whatsapp}
            onChange={handleInputChange}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="cta-button">
            Quero Transformar Minha Prática Agora!
          </button>
        </form>
        
        <p className="privacy-notice">
          Respeitamos sua privacidade. Seus dados estão seguros e não serão compartilhados.
        </p>
      </div>
      
      {/* Diálogo de sucesso */}
      {showSuccessDialog && (
        <div className="success-dialog-overlay">
          <div className="success-dialog">
            <h3>Cadastro Realizado com Sucesso!</h3>
            <p>Em breve entraremos em contato com você.</p>
            <button onClick={closeSuccessDialog} className="close-button">Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadForm;