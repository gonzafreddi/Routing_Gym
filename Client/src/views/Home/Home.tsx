import * as React from 'react';
import "./Home.css";
import MyCalendar from '../../components/Calendar/Calendar';
import Users from '../../components/UserList/Users/Users';

interface HomeProps {
  // Si tu componente recibe props, define su tipo aquí
}

const Home: React.FC<HomeProps> = () => {
  return (

    <div className='home'>

      <div className='client-list'>
    <p> Acá iría la lista de clientes</p>
    <Users/>
      </div>

      <div className='calendar'>

    <MyCalendar/>
      </div>



    </div>
  );
};

export default Home;

