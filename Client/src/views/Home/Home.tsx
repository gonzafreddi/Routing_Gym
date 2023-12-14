import * as React from 'react';
import "./Home.css";

interface HomeProps {
  // Si tu componente recibe props, define su tipo aquí
}

const Home: React.FC<HomeProps> = () => {
  return (

<div className='home'>
<p> Acá iría el calendar</p>
</div>
  );
};

export default Home;

