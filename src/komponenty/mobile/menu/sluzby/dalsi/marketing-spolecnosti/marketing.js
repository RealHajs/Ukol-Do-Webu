import React from 'react';
import Menu from "./menu";

import "./marketing.css";

import "animate.css";
import { FaCaretRight } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";

import { Link } from 'react-router-dom';


function Sluzby() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />

        {/* <img className="social-specialist-img-logo-1 animate__animated animate__fadeInLeft" src="./img/logo.png"></img> */}
       

      <Link to="/sluzby"> 
        <IoChevronBack className='social-specialist-krok-zpatky-mobile-ikona'></IoChevronBack>
      </Link>

      
      
      <br></br><br></br><br></br>

<h3 className="social-specialist-main-sluzby-text-6 animate__animated animate__fadeInLeft">Strategické plánování</h3>

<div className="social-specialist-podtrzeni-2-sluzby animate__animated animate__fadeInLeft"></div>

<p className="social-specialist-main-sluzby-text-3 animate__animated animate__fadeInLeft">Strategické plánování marketingu vám zajistí cílené kampaně, které maximalizují váš dosah a zisky.</p>




<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    


      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>
      <br></br>

    </div>
  );
}

export default Sluzby;
