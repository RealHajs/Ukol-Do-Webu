import React from 'react';
import "./sluzby.css";
import Menu from "../menu";

import "animate.css";
import { Link } from 'react-router-dom';

import { IoChevronBack } from "react-icons/io5";



function Sluzby() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />

        {/* <img className="social-specialist-img-logo-1 animate__animated animate__fadeInLeft" src="./img/logo.png"></img> */}

        <Link to="/"> 
        <IoChevronBack className='social-specialist-krok-zpatky-mobile-ikona'></IoChevronBack>
      </Link>


      <br></br><br></br>

      <Link to="/marketing" className='social-specialist-sluzby-3'> 

            <h1 className='social-specialist-sluzby-1 animate__animated animate__fadeInLeft'>Marketing společnosti</h1>
            <h3 className='social-specialist-sluzby-second-1 animate__animated animate__fadeInLeft'>Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</h3>
            <button className='social-specialist-sluzby-button-1 animate__animated animate__fadeInLeft'>Více informací</button>

      </Link>

      <Link to="/tvorba-web" className='social-specialist-sluzby-3'> 
            <h1 className='social-specialist-sluzby-1 animate__animated animate__fadeInLeft'>Webové stránky</h1>
            <h3 className='social-specialist-sluzby-second-1 animate__animated animate__fadeInLeft'>Moderní a funkční webové stránky, které zaujmou návštěvníky a zvýší konverze. </h3>
            <button className='social-specialist-sluzby-button-2 animate__animated animate__fadeInLeft'>Více informací</button>
      </Link>

      <Link to="/socialni-sluzby" className='social-specialist-sluzby-3'> 
            <h1 className='social-specialist-sluzby-1 animate__animated animate__fadeInLeft'>Správa sociálních sítí</h1>
            <h3 className='social-specialist-sluzby-second-1 animate__animated animate__fadeInLeft'>Efektivní správa sociálních sítí vám přinese větší dosah, aktivní zapojení sledujících a zvýšení prodeje.</h3>
            <button className='social-specialist-sluzby-button-1 animate__animated animate__fadeInLeft'>Více informací</button>
      </Link>

      <Link to="/design" className='social-specialist-sluzby-3'> 
            <h1 className='social-specialist-sluzby-1 animate__animated animate__fadeInLeft'>Design</h1>
            <h3 className='social-specialist-sluzby-second-1 animate__animated animate__fadeInLeft'>Profesionální design dodá vašim projektům estetický šmrnc, posílí vaši značku a zaujme vaše publikum na první pohled.</h3>
            <button className='social-specialist-sluzby-button-2 animate__animated animate__fadeInLeft'>Více informací</button>
      </Link>













      <h3 className="social-specialist-main-sluzby-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>
     

    </div>
  );
}

export default Sluzby;
