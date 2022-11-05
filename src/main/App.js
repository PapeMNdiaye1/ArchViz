import './Style/Style.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";


import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import Gallery from './Pages/Galerie';
import Traveaux from './Pages/Traveaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Createur from './Pages/Createur';




function App() {
  const changeTab = (newTab) => {
    console.log(newTab);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/Traveaux" element={<Traveaux />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Createur" element={<Createur />} />
            <Route path="/Gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
