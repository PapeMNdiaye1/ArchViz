import './Style/Style.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { React, useEffect, useState, Fragment } from 'react';


import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import Gallery from './Pages/Galerie';
import Traveaux from './Pages/Traveaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Createur from './Pages/Createur';




function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');

  const changeTab = (newTab) => {
    console.log(newTab);
  }

  const GetImage = (theimage, title, date) => {
    // console.log(theimage, title, date);
    console.log('#App');
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
  }




  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <Routes>
            <Route path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route path="/Traveaux" element={<Traveaux />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Createur" element={<Createur />} />
            <Route path="/Gallery"
              element={<Gallery
                TheImageToGallery={TheImage}
                TheTitleToGallery={TheTitle}
                TheDateToGallery={TheDate}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
