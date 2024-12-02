import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kontakt from './komponenty/mobile/menu/kontakt/kontakt';
import Reference from './komponenty/mobile/menu/reference/reference';
import Onas from './komponenty/mobile/menu/onas/onas';
import Sluzby from './komponenty/mobile/menu/sluzby/sluzby'; 
import Homepage from './komponenty/mobile/homepage';
import Marketing from "./komponenty/mobile/menu/sluzby/dalsi/marketing-spolecnosti/marketing";
import TvorbaWeb from "./komponenty/mobile/menu/sluzby/dalsi/marketing-spolecnosti/tvorba-web";
import SocialniSluzby from "./komponenty/mobile/menu/sluzby/dalsi/marketing-spolecnosti/socialni-sluzby.js";
import Design from "./komponenty/mobile/menu/sluzby/dalsi/marketing-spolecnosti/design.js";




// import Kontakt from './komponenty/desktop/menu/kontakt/kontakt';
// import Reference from './komponenty/desktop/menu/reference/reference';
// import Onas from './komponenty/desktop/menu/onas/onas';
// import Sluzby from './komponenty/desktop/menu/sluzby/sluzby'; 
import DesktopHomepage from './komponenty/desktop/homepage';
// import Marketing from "./komponenty/desktop/menu/sluzby/dalsi/marketing-spolecnosti/marketing";
// import TvorbaWeb from "./komponenty/desktop/menu/sluzby/dalsi/marketing-spolecnosti/tvorba-web";
// import SocialniSluzby from "./komponenty/desktop/menu/sluzby/dalsi/marketing-spolecnosti/socialni-sluzby.js";
// import Design from "./komponenty/desktop/menu/sluzby/dalsi/marketing-spolecnosti/design.js";




function App() {
  return (
    <div>

      {/* zobrazování */}

            {/* DESKTOP */}
            <DesktopHomepage />

            {/* MOBILE */}










    <Router>
      <Routes>

        {/* mobile routes */}
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/sluzby" element={<Sluzby />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/tvorba-web" element={<TvorbaWeb />} />
        <Route path="/socialni-sluzby" element={<SocialniSluzby />} />
        <Route path="/design" element={<Design />} />



        

   
      </Routes>
    </Router>

    </div>
  );
}

export default App;