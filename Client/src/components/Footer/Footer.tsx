import * as React from 'react';
import './Footer.css';

interface FooterProps {
  // Si tu componente recibe props, define su tipo aquí
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className='footer'>

      <div className='footer-inner'>
      <div >
        <p>Seguinos en nuestras redes</p>
      </div>
      
      <div>
      <p>
        Descargá la App
      </p>
      </div>

     <span>Todos los derechos reservados</span>
     
     </div>
    </div>
  );
};

export default Footer;