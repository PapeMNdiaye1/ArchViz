import './Style/Style.css';
import { React, useState } from 'react';
import { Routes, BrowserRouter, Route, } from "react-router-dom";

import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Gallery from './Pages/Galerie';
import Traveaux from './Pages/Traveaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';

import Interior1 from './Pages/Projects/Interior_Design';
import SmallHouse1 from './Pages/Projects/Small_House_1';
import Hangar1 from './Pages/Projects/Hangar_1';
import Touba from './Pages/Projects/Touba';
import Pharmacie1 from './Pages/Projects/Pharmacie_1';
import Pharmacie2 from './Pages/Projects/Pharmacie_2';
import Pharmacie3 from './Pages/Projects/Pharmacie_3';
import Immeuble1 from './Pages/Projects/Immeuble_1';
import MSAD from './Pages/Projects/MSAD';
import Villa from './Pages/Projects/Villa_A';
import VillaB from './Pages/Projects/Villa_B';

function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');


  const changeTab = (newTab, link) => {
    console.log(newTab, link);
  }

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <div className='hover_loader_container'>
            <div className='hover_loader'>
              <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          <Routes>
            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Traveaux" element={<Traveaux />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Galerie" element={<Gallery
              TheImageToGallery={TheImage}
              TheTitleToGallery={TheTitle}
              TheDateToGallery={TheDate}
              TheLinkToGallery={TheLink}
            />} />
            {/* !############################################## */}
            <Route exact path="/Interior1" element={<Interior1 />} />
            <Route exact path="/SmallHouse1" element={<SmallHouse1 />} />
            <Route exact path="/Hangar1" element={<Hangar1 />} />
            <Route exact path="/Touba" element={<Touba />} />
            <Route exact path="/Pharmacie1" element={<Pharmacie1 />} />
            <Route exact path="/Pharmacie2" element={<Pharmacie2 />} />
            <Route exact path="/Pharmacie3" element={<Pharmacie3 />} />
            <Route exact path="/Immeuble1" element={<Immeuble1 />} />
            <Route exact path="/MSAD" element={<MSAD />} />
            <Route exact path="/Villa" element={<Villa />} />
            <Route exact path="/VillaB" element={<VillaB />} />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
