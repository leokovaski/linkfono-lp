// index.jsx - Ponto de entrada da aplicação
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Importar Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importar Google Fonts - Inter
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);