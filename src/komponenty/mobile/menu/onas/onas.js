import React from 'react';
import "./onas.css";
import Menu from "../menu";

import "animate.css";
import { IoChevronBack } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


import { Link } from 'react-router-dom';


function Onas() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />

      <Link to="/sluzby"> 
        <IoChevronBack className='social-specialist-krok-zpatky-mobile-ikona'></IoChevronBack>
      </Link>

<div className='social-specialist-onas-minus-1'></div>

<h3 className="social-specialist-main-homepage-text-6 animate__animated animate__fadeInLeft">Seznamte se s naším týmem profesionálů</h3>

<div className="social-specialist-podtrzeni-1 animate__animated animate__fadeInLeft"></div>
<div className="social-specialist-podtrzeni-2 animate__animated animate__fadeInLeft"></div>



<img title='Matej Houzvicka' alt='Matej Houzvicka' className="social-specialist-img-matthew animate__animated animate__fadeInLeft" src="./img/matthew.jpg"></img>

<h3 className="social-specialist-main-homepage-text-7 animate__animated animate__fadeInLeft">Marketing a sociální sítě</h3>

<h3 className="social-specialist-main-homepage-text-8 animate__animated animate__fadeInLeft">Matěj Houžvička</h3>

<a alt='Matej Houzvicka'  target="blank">
<FaInstagram className="social-specialist-mobile-instagram animate__animated animate__fadeInLeft" />
</a>
<FaTiktok className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />
<FaFacebook className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />

<a title='email'  target="blank">
<h3 className="social-specialist-main-homepage-text-9 animate__animated animate__fadeInLeft"></h3>
</a>


<img title='Matyas Hiess' alt='Matyas Hiess' className="social-specialist-img-hajs animate__animated animate__fadeInLeft" src="./img/hajs.jpg"></img>

<h3 className="social-specialist-main-homepage-text-7 animate__animated animate__fadeInLeft">Web development</h3>

<h3 className="social-specialist-main-homepage-text-8 animate__animated animate__fadeInLeft">Matyáš Hiess</h3>

<a alt="Matyas Hiess" href="https://www.instagram.com/hajscze" target="blank">
<FaInstagram className="social-specialist-mobile-instagram animate__animated animate__fadeInLeft" />
</a>

<FaTiktok className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />
<FaFacebook className="social-specialist-mobile-tiktok animate__animated animate__fadeInLeft" />

<a title='email' alt="cestamarketingem@gmail.com" href="mailto:cestamarketingem@gmail.com" target="blank">
<h3 className="social-specialist-main-homepage-text-9 animate__animated animate__fadeInLeft">matyashiess@seznam.cz</h3>
</a>




      <br></br>

      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>

      <br></br><br></br><br></br>

    </div>
  );
}

export default Onas;
