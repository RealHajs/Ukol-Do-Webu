import React from 'react';
import Menu from "./menu";

import "./tvorba-web.css";

import "animate.css";
import { IoChevronBack } from "react-icons/io5";

import { Link } from 'react-router-dom';


function TvorbaWeb() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />
       

      <Link to="/sluzby"> 
        <IoChevronBack className='social-specialist-krok-zpatky-mobile-ikona'></IoChevronBack>
      </Link>




      {/* <img className="social-specialist-sluzby-img-1 animate__animated animate__fadeInLeft" src="./img/tvorba-web.jpg"></img> */}

    <br></br><br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">Tvorba webových stránek na míru</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>

{/*  */}

    <br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">Správa webových stránek</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>


{/*  */}

    <br></br><br></br><br></br>

        <h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">SEO a propagace</h3>

        <div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

        <p className="social-specialist-main-sluzby-text-2 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>


    

{/*  */}


    


      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>
      <br></br>

    </div>
  );
}

export default TvorbaWeb;
