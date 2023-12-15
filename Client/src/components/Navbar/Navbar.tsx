import * as React from 'react';
import './Navbar.css';
import User from "../../assets/circulo-persona.png";

interface NavbarProps {
  // Si tu componente recibe props, define su tipo aquí
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="mainContainer">
      <div className="logoContainer">


        <span className='menuIcon'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
            </svg>
        </span>


        <p>Routing Gym</p>
      </div>
      
      <div className='resto'>
     
            <p>
                Mario Gomez
            </p>

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>


            <div className='user'>
                    <img className="userImg" src={User} alt="user image" />

                    <span className='arrowDown'></span>

                    <div className='dropdownContent'>
                        Cerrar sesión
                    </div>
            </div>
    </div>
     
    </nav>
  );
};

export default Navbar;