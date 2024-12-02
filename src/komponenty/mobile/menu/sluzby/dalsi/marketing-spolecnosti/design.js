import React from 'react';
import Menu from "./menu";

import "./design.css";

import "animate.css";
import { IoChevronBack } from "react-icons/io5";

import { Link } from 'react-router-dom';


function Design() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />
       

      <Link to="/sluzby"> 
        <IoChevronBack className='social-specialist-krok-zpatky-mobile-ikona'></IoChevronBack>
      </Link>



    <br></br><br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">Vizualizace<br></br>webových stránek</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>

{/*  */}

    <br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">2D grafika</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>


{/*  */}

    <br></br><br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">3D grafika a vizualizace</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>



    <br></br>
      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>
      <br></br>

    </div>
  );
}

export default Design;
