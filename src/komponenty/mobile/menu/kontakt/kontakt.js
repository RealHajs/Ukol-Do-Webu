import React from 'react';
import "./kontakt.css";
import Menu from "../menu";

import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Kontakt() {
  return (
    <div id="kontakt" className='social-specialist-mobile-kontakt-pozadi-1'>

        <br></br>
        <Menu className="social-specialist-mobile-kontakt-ikona-1" />

        <img alt='logo' className="social-specialist-img-logo-1 animate__animated animate__fadeInLeft" src="./img/logo.png"></img>


      <h3 className="social-specialist-main-homepage-text-6-kontakt animate__animated animate__fadeInLeft">Kontaktní informace</h3>
      <h3 className="social-specialist-main-homepage-text-10 animate__animated animate__fadeInLeft">Garantujeme odpovědí do 24 hodin</h3>


      <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.9575712924434!2d14.42957839291382!3d50.08708124004748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9494533bc073%3A0xf0cccde69f030a55!2zSHliZXJuc2vDoSAxMDEyLzMwLCAxMTAgMDAgTm92w6kgTcSbc3Rv!5e0!3m2!1scs!2scz!4v1716807456373!5m2!1scs!2scz" className="social-specialist-main-homepage-mapa animate__animated animate__fadeInLeft" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3 className="social-specialist-main-homepage-text-11 animate__animated animate__fadeInLeft">Hybernská 1012/30, Nové Město (Praha 1), 110 00 Praha</h3>


      <FaInstagram className="social-specialist-mobile-instagram2 animate__animated animate__fadeInLeft" />
      <FaTiktok className="social-specialist-mobile-tiktok2 animate__animated animate__fadeInLeft" />
      <FaFacebook className="social-specialist-mobile-tiktok2 animate__animated animate__fadeInLeft" />


      <h3 className="social-specialist-main-homepage-text-12 animate__animated animate__fadeInLeft"><b>Telefon :</b> 721 020 161 </h3>
      <h3 className="social-specialist-main-homepage-text-13 animate__animated animate__fadeInLeft"><b>E-mail :</b> <u>matyashiess@seznam.cz</u></h3>

      <br></br>

      <h3 className="social-specialist-main-homepage-text-14 animate__animated animate__fadeInLeft">©2023-2024 - Webmajstr s.r.o. , Chráněno autorskými právy</h3>



    </div>
  );
}

export default Kontakt;
