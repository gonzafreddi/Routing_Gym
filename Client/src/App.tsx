import * as React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import './App.css';
import Routine from './views/Home/Routine';

function App(): React.ReactElement {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/Landing' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/routine' element={<Routine/>}/>
      </Routes>
      
      {location.pathname !== '/Landing' && <Footer />}
    </div>
  );
}

export default App;
