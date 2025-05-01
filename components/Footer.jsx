// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} LinkFono. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;