import './Style/Style.css';
import { React, useEffect, useState, Fragment } from 'react';
// import ReactDOM from "react-dom/client";
import { Routes, BrowserRouter, Route, } from "react-router-dom";


import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Gallery from './Pages/Galerie';
import Traveaux from './Pages/Traveaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Createur from './Pages/Createur';

import Interior1 from './Pages/Projects/Interior_Design';
import SmallHouse1 from './Pages/Projects/Small_House_1';

function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');


  const changeTab = (newTab, link) => {
    console.log(newTab, link);
  }

  const GetImage = (theimage, title, date, link) => {
    console.log('#App');
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
          <Routes>
            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Traveaux" element={<Traveaux />} />
            <Route exact path="/Service" element={<Service />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Createur" element={<Createur />} />
            <Route exact path="/Gallery"
              element={<Gallery
                TheImageToGallery={TheImage}
                TheTitleToGallery={TheTitle}
                TheDateToGallery={TheDate}
                TheLinkToGallery={TheLink}
              />} />
            <Route exact path="/Interior1" element={<Interior1 />} />
            <Route exact path="/SmallHouse1" element={<SmallHouse1 />} />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
